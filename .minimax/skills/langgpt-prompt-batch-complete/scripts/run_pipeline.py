#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
run_pipeline.py — 全流程串联脚本

功能：
- 串联 scan_structure → gap_analyzer → batch_generator → validator
- 生成完整的一站式补全报告

使用方法：
    python run_pipeline.py "D:/path/to/input_folder" ["D:/path/to/output_folder"]

输入：
    argv[1]: 用户指定的源文件夹路径（必须）
    argv[2]: 输出文件夹路径（可选，默认与源文件夹同目录/output）

输出：
    1. 扫描报告（控制台）
    2. 缺口分析报告（控制台）
    3. 批量生成结果（文件）
    4. 验证报告（控制台）
"""

import sys
import os
from pathlib import Path
from datetime import datetime

# 将scripts目录加入路径
sys.path.insert(0, str(Path(__file__).parent))

from scan_structure import scan_directory, format_scan_report
from gap_analyzer import GapAnalyzer, format_suggestions_report
from batch_generator import BatchGenerator, PromptSpec
from validator import validate_batch, format_validation_report


def run_full_pipeline(source_dir: str, output_dir: Optional[str] = None) -> Dict:
    """
    运行完整流水线

    Args:
        source_dir: 源文件夹路径
        output_dir: 输出文件夹路径（默认 source_dir/batch_output/）

    Returns:
        完整运行报告
    """
    print("\n" + "=" * 70)
    print("🚀 LangGPT批量补全流水线")
    print(f"⏰ {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 70)

    # Step 0: 路径准备
    source_path = Path(source_dir)
    if not source_path.exists():
        raise FileNotFoundError(f"源文件夹不存在: {source_dir}")

    if output_dir is None:
        output_dir = source_path / "batch_output"
    else:
        output_dir = Path(output_dir)

    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n📂 源文件夹: {source_path}")
    print(f"📁 输出文件夹: {output_dir}")

    # ═══════════════════════════════════════════════════════════════
    # Step 1: 扫描文件夹结构
    # ═══════════════════════════════════════════════════════════════
    print("\n" + "-" * 60)
    print("📋 Step 1/4: 扫描文件夹结构...")
    print("-" * 60)

    scan_result = scan_directory(str(source_path))
    print(format_scan_report(scan_result))

    # ═══════════════════════════════════════════════════════════════
    # Step 2: 缺口分析
    # ═══════════════════════════════════════════════════════════════
    print("\n" + "-" * 60)
    print("🔍 Step 2/4: 缺口分析与补全规划...")
    print("-" * 60)

    analyzer = GapAnalyzer()
    all_suggestions = []
    folder_analysis = {}

    for sf in scan_result.subfolders:
        suggestions = analyzer.analyze_folder(sf)
        folder_analysis[sf.name] = {
            "subfolder": sf,
            "suggestions": suggestions,
            "suggestion_count": len(suggestions),
        }
        all_suggestions.extend(suggestions)
        print(format_suggestions_report(suggestions, sf.name))

    print(f"\n📊 缺口分析汇总：")
    print(f"   待补全总数：{len(all_suggestions)} 个")
    high_priority = sum(1 for s in all_suggestions if s.priority == 1)
    medium_priority = sum(1 for s in all_suggestions if s.priority == 2)
    low_priority = sum(1 for s in all_suggestions if s.priority == 3)
    print(f"   高优先级：{high_priority} | 中优先级：{medium_priority} | 低优先级：{low_priority}")

    # ═══════════════════════════════════════════════════════════════
    # Step 3: 用户确认（或跳过直接生成）
    # ═══════════════════════════════════════════════════════════════
    # 在CLI模式下直接生成，在UI模式下可以询问用户

    # ═══════════════════════════════════════════════════════════════
    # Step 4: 批量生成Prompt
    # ═══════════════════════════════════════════════════════════════
    print("\n" + "-" * 60)
    print("✍️  Step 3/4: 批量生成Prompt...")
    print("-" * 60)

    # 构建PromptSpec
    specs = []
    for suggestion in all_suggestions:
        # 找到对应的文件夹
        for sf_name, analysis in folder_analysis.items():
            sf_suggestions = analysis["suggestions"]
            if suggestion in sf_suggestions:
                specs.append(PromptSpec(
                    name=suggestion.suggested_name,
                    pattern=suggestion.pattern_type,
                    keywords=suggestion.keywords,
                    category=sf_name,
                    filename=suggestion.suggested_filename,
                    rationale=suggestion.rationale,
                ))
                break

    if not specs:
        print("⚠️  没有需要生成的Prompt（所有分类均已完善）")
        return {"status": "skipped", "reason": "no_suggestions"}

    print(f"   准备生成 {len(specs)} 个Prompt...")

    # 执行批量生成
    batch_gen = BatchGenerator()
    generation_results = batch_gen.generate_batch(specs, str(output_dir))

    success_count = sum(1 for r in generation_results if r["success"])
    print(f"\n   ✅ 生成完成：{success_count}/{len(generation_results)} 成功")

    for r in generation_results:
        if r["success"]:
            print(f"     ✓ {r['category']}/{r['filename']} ({r['word_count']}字)")

    # ═══════════════════════════════════════════════════════════════
    # Step 5: 质量验证
    # ═══════════════════════════════════════════════════════════════
    print("\n" + "-" * 60)
    print("🔎 Step 4/4: 质量验证...")
    print("-" * 60)

    generated_files = [
        r["path"] for r in generation_results if r["success"]
    ]

    if generated_files:
        validation_results = validate_batch(generated_files)
        print(format_validation_report(validation_results))

        # 分离成功和失败
        passed = [r for r in validation_results if r.passed]
        failed = [r for r in validation_results if not r.passed]

        if passed:
            print(f"\n   ✅ 通过验证：{len(passed)}/{len(validation_results)}")
        if failed:
            print(f"   ❌ 需要修复：{len(failed)}/{len(validation_results)}")
            for r in failed:
                print(f"     - {r.filename}: {r.errors}个error")
    else:
        print("   ⚠️  没有文件需要验证")

    # ═══════════════════════════════════════════════════════════════
    # 最终报告
    # ═══════════════════════════════════════════════════════════════
    print("\n" + "=" * 70)
    print("📋 流水线执行完毕")
    print("=" * 70)
    print(f"   源文件夹：{source_path}")
    print(f"   输出文件夹：{output_dir}")
    print(f"   生成文件：{success_count} 个")
    if generated_files:
        print(f"   通过验证：{len([r for r in validation_results if r.passed])}/{len(validation_results)} 个")
    print(f"\n   📁 输出目录：{output_dir}")
    print("=" * 70)

    return {
        "status": "completed",
        "source_dir": str(source_path),
        "output_dir": str(output_dir),
        "scan_result": scan_result,
        "generation_results": generation_results,
        "validation_results": validation_results if generated_files else [],
        "timestamp": datetime.now().isoformat(),
    }


# 类型标注
from typing import Optional, Dict


def main():
    """命令行入口"""
    if len(sys.argv) < 2:
        print("用法: python run_pipeline.py <源文件夹路径> [输出文件夹路径]")
        print("示例: python run_pipeline.py D:/my-skills D:/my-skills/output")
        sys.exit(1)

    source_dir = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None

    result = run_full_pipeline(source_dir, output_dir)
    return result


if __name__ == "__main__":
    main()
