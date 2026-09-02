#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scan_structure.py — 文件夹结构扫描器

功能：
- 扫描指定目录，递归获取所有子文件夹及其内容摘要
- 读取每个 .md 文件的前 N 行作为摘要
- 生成结构化的扫描报告

使用方法：
    from scan_structure import scan_directory
    result = scan_directory("D:/path/to/skills", max_preview_lines=30)
    print(result)

输入：
    directory_path: 要扫描的目录路径
    max_preview_lines: 每个md文件预览的行数（默认30）

输出：
    ScanResult 对象，包含目录树、文件摘要、统计信息
"""

import os
import re
from dataclasses import dataclass, field, asdict
from typing import List, Dict, Optional
from pathlib import Path


@dataclass
class FilePreview:
    """单个文件的预览信息"""
    filename: str           # 文件名
    path: str              # 相对路径
    size_bytes: int         # 文件大小
    line_count: int         # 总行数
    preview_lines: List[str] # 预览内容（前N行）
    has_yaml_frontmatter: bool  # 是否有YAML frontmatter
    word_count: int         # 字数估算

    # 从frontmatter提取的元数据（如有）
    prompt_name: Optional[str] = None
    description: Optional[str] = None
    pattern_type: Optional[str] = None  # 推测的类型


@dataclass
class SubfolderResult:
    """单个子文件夹的扫描结果"""
    name: str                      # 文件夹名称
    path: str                      # 绝对路径
    relative_path: str             # 相对路径
    md_files: List[FilePreview]    # 该文件夹下所有md文件
    total_prompts: int             # prompt文件数量
    content_summary: str            # 内容摘要（该文件夹整体主题）
    maturity_level: str            # 成熟度：sparse/medium/mature
    suggested_expansion: int        # 建议补全数量（0-10）


@dataclass
class ScanResult:
    """完整扫描结果"""
    root_path: str                      # 根目录
    root_name: str                       # 根目录名
    subfolders: List[SubfolderResult]   # 所有子文件夹
    total_subfolders: int               # 子文件夹总数
    total_md_files: int                 # md文件总数
    scan_summary: str                   # 整体摘要
    timestamp: str                      # 扫描时间


def _count_chinese_chars(text: str) -> int:
    """估算中文字符数（汉字+中文标点）"""
    return len(re.findall(r'[\u4e00-\u9fa5]', text))


def _count_words(text: str) -> int:
    """估算字数（中文字符 + 英文单词）"""
    chinese = _count_chinese_chars(text)
    english = len(re.findall(r'[a-zA-Z]+', text))
    return chinese + english


def _parse_frontmatter(content: str) -> Dict[str, str]:
    """从markdown内容中提取YAML frontmatter"""
    meta = {}
    pattern = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if pattern:
        fm_text = pattern.group(1)
        for line in fm_text.split('\n'):
            line = line.strip()
            if ':' in line:
                key, _, value = line.partition(':')
                meta[key.strip()] = value.strip().strip('"\'')
    return meta


def _infer_pattern_type(content: str, filename: str) -> Optional[str]:
    """从文件名和内容推测prompt类型"""
    fn_lower = filename.lower()

    # 从文件名关键词推断
    if any(k in fn_lower for k in ['role', '角色', '扮演', '人设']):
        return "角色扮演型"
    if any(k in fn_lower for k in ['tech', '工具', '脚本', '自动化']):
        return "技术工具型"
    if any(k in fn_lower for k in ['creative', '创意', '文案', '爆款']):
        return "创意生成型"
    if any(k in fn_lower for k in ['guide', '引导', '启发', '教练']):
        return "启发引导型"
    if any(k in fn_lower for k in ['convert', '转换', '转化', '变成']):
        return "内容转换型"
    if any(k in fn_lower for k in ['skill', '元技能']):
        return "元Skill生成型"

    # 从内容特征推断
    content_lower = content[:2000].lower()
    if 'part a' in content_lower and 'part b' in content_lower:
        return "双重输出型"
    if '数字分身' in content or '克隆' in content or '复刻' in content:
        return "人格复刻型"
    if '协作' in content and '角色' in content:
        return "多角色协作型"
    if '分类' in content and ('框架' in content or '类型' in content):
        return "分类型框架型"

    return None


def _read_file_preview(filepath: str, max_lines: int = 30) -> FilePreview:
    """读取单个文件并生成预览"""
    path = Path(filepath)
    filename = path.name

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            full_content = f.read()
    except Exception:
        return FilePreview(
            filename=filename,
            path=str(filepath),
            size_bytes=0,
            line_count=0,
            preview_lines=[],
            has_yaml_frontmatter=False,
            word_count=0
        )

    lines = full_content.split('\n')
    line_count = len(lines)
    size_bytes = len(full_content.encode('utf-8'))
    preview_lines = lines[:max_lines]

    # 解析frontmatter
    meta = _parse_frontmatter(full_content)
    has_yaml = bool(meta)

    # 推测类型
    pattern_type = _infer_pattern_type(full_content, filename)

    # 字数估算
    word_count = _count_words(full_content)

    return FilePreview(
        filename=filename,
        path=str(filepath),
        size_bytes=size_bytes,
        line_count=line_count,
        preview_lines=preview_lines,
        has_yaml_frontmatter=has_yaml,
        word_count=word_count,
        prompt_name=meta.get('name'),
        description=meta.get('description'),
        pattern_type=pattern_type
    )


def _generate_content_summary(files: List[FilePreview]) -> str:
    """根据文件列表生成内容摘要"""
    if not files:
        return "空文件夹，无有效md文件"

    # 收集所有文件名（去掉序号前缀如 01_、001-）
    names = []
    for f in files:
        name = re.sub(r'^\d+[_-]+', '', f.filename)
        name = re.sub(r'\.md$', '', name)
        names.append(name)

    # 统计类型分布
    types = [f.pattern_type for f in files if f.pattern_type]
    type_summary = f"，包含{len(set(types))}种类型（{', '.join(sorted(set(types)))})" if types else ""

    return f"共{len(files)}个md文件：{', '.join(names[:5])}{'...' if len(names)>5 else ''}{type_summary}"


def _judge_maturity(total_prompts: int) -> str:
    """判断成熟度"""
    if total_prompts == 0:
        return "empty"
    elif total_prompts <= 3:
        return "sparse"
    elif total_prompts <= 8:
        return "medium"
    else:
        return "mature"


def _suggest_expansion(maturity: str, content_summary: str) -> int:
    """建议补全数量"""
    if maturity == "empty":
        return 5  # 空文件夹建议5个
    elif maturity == "sparse":
        return 3  # 稀疏建议3个
    elif maturity == "medium":
        return 2  # 中等建议2个
    else:
        return 0  # 成熟不强制补全


def scan_directory(directory_path: str, max_preview_lines: int = 30) -> ScanResult:
    """
    扫描目录，返回完整结构报告

    Args:
        directory_path: 要扫描的目录
        max_preview_lines: 每个文件预览行数

    Returns:
        ScanResult 对象
    """
    from datetime import datetime

    root = Path(directory_path)
    if not root.exists():
        raise FileNotFoundError(f"目录不存在: {directory_path}")
    if not root.is_dir():
        raise NotADirectoryError(f"不是有效目录: {directory_path}")

    subfolders = []

    # 遍历所有子文件夹（不含root本身）
    for item in sorted(root.iterdir()):
        if not item.is_dir():
            continue
        if item.name.startswith('.') or item.name.startswith('_'):
            continue  # 跳过隐藏/临时文件夹

        # 收集该子文件夹下所有md文件
        md_files = []
        for md_file in sorted(item.glob("*.md")):
            if md_file.name.startswith('.'):
                continue
            preview = _read_file_preview(str(md_file), max_preview_lines)
            md_files.append(preview)

        total_prompts = len(md_files)
        maturity = _judge_maturity(total_prompts)
        content_summary = _generate_content_summary(md_files)
        suggested = _suggest_expansion(maturity, content_summary)

        subfolders.append(SubfolderResult(
            name=item.name,
            path=str(item),
            relative_path=item.name,
            md_files=md_files,
            total_prompts=total_prompts,
            content_summary=content_summary,
            maturity_level=maturity,
            suggested_expansion=suggested
        ))

    total_md = sum(s.total_prompts for s in subfolders)

    # 生成整体摘要
    maturity_counts = {}
    for s in subfolders:
        maturity_counts[s.maturity_level] = maturity_counts.get(s.maturity_level, 0) + 1

    scan_summary = (
        f"共扫描 {len(subfolders)} 个子文件夹，"
        f" {total_md} 个md文件。"
        f" 成熟度分布：{' / '.join(f'{k}({v})' for k,v in maturity_counts.items())}。"
        f" 建议补全总数：{sum(s.suggested_expansion for s in subfolders)} 个。"
    )

    return ScanResult(
        root_path=str(root),
        root_name=root.name,
        subfolders=subfolders,
        total_subfolders=len(subfolders),
        total_md_files=total_md,
        scan_summary=scan_summary,
        timestamp=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    )


def format_scan_report(result: ScanResult) -> str:
    """将扫描结果格式化为可读报告"""
    lines = []
    lines.append("=" * 70)
    lines.append(f"📁 扫描报告：{result.root_name}")
    lines.append(f"⏰ {result.timestamp}")
    lines.append("=" * 70)
    lines.append(f"\n📊 整体统计：")
    lines.append(f"   子文件夹数：{result.total_subfolders}")
    lines.append(f"   md文件总数：{result.total_md_files}")

    lines.append(f"\n📂 逐文件夹详情：")
    lines.append("-" * 70)

    for i, sf in enumerate(result.subfolders, 1):
        maturity_icon = {
            "empty": "⚪", "sparse": "🟡", "medium": "🟢", "mature": "🔵"
        }.get(sf.maturity_level, "⚪")

        lines.append(f"\n  {i}. {sf.name} {maturity_icon} [{sf.maturity_level}]")
        lines.append(f"     内容：{sf.content_summary}")
        lines.append(f"     文件数：{sf.total_prompts} | 建议补全：{sf.suggested_expansion} 个")

        if sf.md_files:
            lines.append(f"     现有文件：")
            for f in sf.md_files[:5]:
                wc_str = f"约{f.word_count}字"
                pt_str = f"[{f.pattern_type}]" if f.pattern_type else ""
                lines.append(f"       - {f.filename} {pt_str} {wc_str}")

        if sf.suggested_expansion > 0:
            lines.append(f"     💡 建议补充方向：待缺口分析后确定")

    lines.append("\n" + "=" * 70)
    lines.append(f"\n📋 摘要：{result.scan_summary}")

    return "\n".join(lines)


def print_scan_report(result: ScanResult) -> None:
    """打印扫描报告到stdout"""
    print(format_scan_report(result))


def main():
    """命令行入口"""
    import sys

    if len(sys.argv) > 1:
        path = sys.argv[1]
    else:
        path = "D:/CC/.minimax/skills/langgpt-prompt-batch-complete/test_data"

    result = scan_directory(path)
    print_scan_report(result)
    return result


if __name__ == "__main__":
    main()
