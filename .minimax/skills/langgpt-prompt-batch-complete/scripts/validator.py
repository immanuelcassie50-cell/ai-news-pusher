#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
validator.py — 质量验证脚本

功能：
- 验证生成的Prompt文件：完整性、一致性、无硬伤
- 多维度检查：模块完整性、占位符、字数、YAML frontmatter
- 生成验证报告

使用方法：
    from validator import PromptValidator, validate_batch
    report = validate_batch(["D:/path/to/file1.md", "D:/path/to/file2.md"])
    print(report)
"""

import re
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Any
from pathlib import Path


@dataclass
class ValidationIssue:
    """单个验证问题"""
    severity: str       # error / warning / info
    category: str       # 模块名或检查类型
    message: str        # 问题描述
    location: str       # 位置（如"Skills模块第5段"）
    suggestion: str      # 修复建议


@dataclass
class ValidationResult:
    """单个文件的验证结果"""
    filepath: str
    filename: str
    passed: bool           # 是否通过（无error级别问题）
    total_issues: int
    errors: int
    warnings: int
    infos: int
    issues: List[ValidationIssue]

    # 统计信息
    total_chars: int
    total_words: int
    module_count: int
    has_yaml_frontmatter: bool
    pattern_type: Optional[str]
    examples_count: int

    # 质量评分
    completeness_score: float   # 完整度 0-100
    quality_score: float       # 可执行度 0-100
    overall_score: float       # 综合分 0-100


REQUIRED_MODULES = [
    "Role", "Background", "Profile", "Skills", "Rules",
    "Workflow", "Goals", "Initialization"
]

MODULE_NAMES_ZH = {
    "Role": "角色定义",
    "Background": "背景说明",
    "Profile": "能力档案",
    "Skills": "核心技能",
    "Rules": "行为准则",
    "Workflow": "工作流程",
    "Goals": "目标设定",
    "Knowledge Base": "知识储备",
    "Initialization": "初始化",
}


class PromptValidator:
    """
    Prompt质量验证器

    多维度检查生成的文件是否符合LangGPT标准。
    """

    def __init__(self):
        self.issues = []

    def validate(self, filepath: str) -> ValidationResult:
        """
        验证单个Prompt文件

        Args:
            filepath: 文件路径

        Returns:
            ValidationResult对象
        """
        path = Path(filepath)
        self.issues = []

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            return self._error_result(filepath, str(e))

        # 执行各项检查
        self._check_yaml_frontmatter(content)
        self._check_module_completeness(content)
        self._check_placeholders(content)
        self._check_vague_language(content)
        self._check_examples(content)
        self._check_consistency(content)
        self._check_skills_structure(content)
        self._check_workflow_structure(content)
        self._check_length(content)

        # 统计信息
        total_chars = len(content)
        total_words = self._count_words(content)
        module_count = len(re.findall(r'^## \w+', content, re.MULTILINE))
        has_yaml = bool(re.match(r'^---', content, re.MULTILINE))
        examples_count = len(re.findall(r'^### 示例', content, re.MULTILINE))

        # 从frontmatter提取pattern type
        pattern_type = self._extract_pattern_type(content)

        # 计算评分
        completeness_score = self._calc_completeness_score()
        quality_score = self._calc_quality_score()
        overall_score = completeness_score * 0.4 + quality_score * 0.6

        errors = sum(1 for i in self.issues if i.severity == "error")
        warnings = sum(1 for i in self.issues if i.severity == "warning")
        infos = sum(1 for i in self.issues if i.severity == "info")

        return ValidationResult(
            filepath=str(filepath),
            filename=path.name,
            passed=errors == 0,
            total_issues=len(self.issues),
            errors=errors,
            warnings=warnings,
            infos=infos,
            issues=self.issues,
            total_chars=total_chars,
            total_words=total_words,
            module_count=module_count,
            has_yaml_frontmatter=has_yaml,
            pattern_type=pattern_type,
            examples_count=examples_count,
            completeness_score=completeness_score,
            quality_score=quality_score,
            overall_score=overall_score,
        )

    def _error_result(self, filepath: str, error: str) -> ValidationResult:
        return ValidationResult(
            filepath=filepath,
            filename=Path(filepath).name,
            passed=False,
            total_issues=1,
            errors=1,
            warnings=0,
            infos=0,
            issues=[ValidationIssue("error", "文件读取", error, "文件", "检查文件是否存在")],
            total_chars=0, total_words=0, module_count=0,
            has_yaml_frontmatter=False, pattern_type=None,
            examples_count=0, completeness_score=0, quality_score=0, overall_score=0
        )

    def _check_yaml_frontmatter(self, content: str) -> None:
        """检查YAML frontmatter"""
        if not re.match(r'^---', content):
            self.issues.append(ValidationIssue(
                "warning", "YAML", "缺少YAML frontmatter",
                "文件开头", "添加以---开头的YAML元数据块"
            ))

    def _check_module_completeness(self, content: str) -> None:
        """检查必需模块是否完整"""
        for module in REQUIRED_MODULES:
            if f"## {module}" not in content:
                # Knowledge Base和Examples是可选的
                if module not in ["Knowledge Base", "Examples", "Commands"]:
                    self.issues.append(ValidationIssue(
                        "error", module, f"缺少必需模块: {module}",
                        "结构", f"添加## {module}模块"
                    ))

    def _check_placeholders(self, content: str) -> None:
        """检查未填充的占位符"""
        # 匹配 [xxx] 形式的占位符
        placeholders = re.findall(r'\[([^\[\]]+)\]', content)

        # 过滤掉合理的情况
        unreasonable = []
        for p in placeholders:
            p = p.strip()
            if p and p not in ["具体内容", "待填充", "示例内容"]:
                # 排除明显是内容描述的占位符
                if not any(k in p for k in ["描述", "内容", "说明", "结果"]):
                    unreasonable.append(p)

        if unreasonable:
            self.issues.append(ValidationIssue(
                "warning", "占位符", f"发现{len(unreasonable)}处未填充占位符: {', '.join(unreasonable[:3])}",
                "全文", "将所有[xxx]形式的占位符替换为实际内容"
            ))

    def _check_vague_language(self, content: str) -> None:
        """检查模糊表述"""
        vague_patterns = [
            (r'可能、?也许、?大概', "使用了模糊词：'可能/也许/大概'"),
            (r'视情况[而]?定', "使用了模糊词：'视情况而定'"),
            (r'差不多的', "使用了模糊词：'差不多'"),
            (r'基本上、大体上', "使用了模糊词：'基本上/大体上'"),
        ]

        for pattern, message in vague_patterns:
            if re.search(pattern, content):
                self.issues.append(ValidationIssue(
                    "warning", "语言", message,
                    "全文", "使用具体明确的表述替代模糊词"
                ))

    def _check_examples(self, content: str) -> None:
        """检查示例模块"""
        example_section = re.search(r'## Examples.*?(?=##|$)', content, re.DOTALL)
        if example_section:
            text = example_section.group()
            # 检查是否为空示例
            if "示例示例" in text or "示例输入" in text and "示例输出" not in text:
                self.issues.append(ValidationIssue(
                    "error", "Examples", "Examples模块为空或内容不完整",
                    "Examples", "补充完整的示例（输入+输出）"
                ))

    def _check_consistency(self, content: str) -> None:
        """检查前后一致性"""
        # 提取name
        name_match = re.search(r'^name:\s*(.+)$', content, re.MULTILINE)
        if name_match:
            name = name_match.group(1).strip()
            # 检查文件名是否与name一致
            # 简单检查：name应该出现在Title中
            if name not in content[:500]:
                self.issues.append(ValidationIssue(
                    "warning", "一致性", f"name与内容不一致",
                    "YAML/标题", "确保YAML name与内容中的标题一致"
                ))

        # 检查Part A和Part B的一致性（双重输出型）
        if '## Part A' in content and '## Part B' in content:
            # 提取Part A中的设计要点
            part_a = re.search(r'## Part A.*?(?=## Part B|$)', content, re.DOTALL)
            part_b = re.search(r'## Part B.*?(?=##|$)', content, re.DOTALL)
            if part_a and part_b:
                # 简单一致性检查
                pass  # 深度一致性需要语义分析

    def _check_skills_structure(self, content: str) -> None:
        """检查Skills模块结构"""
        skills_section = re.search(r'## Skills.*?(?=##|$)', content, re.DOTALL)
        if skills_section:
            text = skills_section.group()
            if "### Skill" not in text and "Skill 1" not in text:
                self.issues.append(ValidationIssue(
                    "error", "Skills", "Skills模块缺少具体技能定义",
                    "Skills", "添加至少2个### Skill子模块"
                ))
            else:
                # 检查每个Skill是否有必要字段
                skill_blocks = re.findall(r'### Skill \d+.*?(?=### Skill|$)', text, re.DOTALL)
                for i, block in enumerate(skill_blocks, 1):
                    if '描述' not in block and 'description' not in block.lower():
                        self.issues.append(ValidationIssue(
                            "warning", "Skills", f"第{i}个Skill缺少描述字段",
                            f"Skills > Skill {i}", "添加Skill描述"
                        ))

    def _check_workflow_structure(self, content: str) -> None:
        """检查Workflow模块结构"""
        wf_section = re.search(r'## Workflow.*?(?=##|$)', content, re.DOTALL)
        if wf_section:
            text = wf_section.group()
            if "### 阶段" not in text and "### Stage" not in text:
                if "阶段一" not in text:
                    self.issues.append(ValidationIssue(
                        "warning", "Workflow", "Workflow缺少阶段定义",
                        "Workflow", "添加至少2个阶段（如：分析 → 执行）"
                    ))

    def _check_length(self, content: str) -> None:
        """检查篇幅长度"""
        chinese_chars = len(re.findall(r'[\u4e00-\u9fa5]', content))
        english_words = len(re.findall(r'[a-zA-Z]+', content))
        total = chinese_chars + english_words

        if total < 1500:
            self.issues.append(ValidationIssue(
                "error", "篇幅", f"篇幅过短（{total}字），低于1500字下限",
                "全文", "补充内容到2000字以上"
            ))
        elif total < 2000:
            self.issues.append(ValidationIssue(
                "warning", "篇幅", f"篇幅偏少（{total}字），建议2000-5000字",
                "全文", "适当补充示例或详细说明"
            ))

    def _extract_pattern_type(self, content: str) -> Optional[str]:
        """从description提取pattern type"""
        desc_match = re.search(r'^description:\s*(.+)$', content, re.MULTILINE)
        if desc_match:
            desc = desc_match.group(1)
            # 从tags提取
            tags_match = re.search(r'tags:\s*\[(.+?)\]', content)
            if tags_match:
                tags = tags_match.group(1)
                for tag in ['技术工具型', '角色扮演型', '内容转换型', '双重输出型',
                            '人格复刻型', '多角色协作型', '元Skill生成型',
                            '启发引导型', '创意生成型', '分类型框架型']:
                    if tag in tags:
                        return tag
        return None

    def _count_words(self, text: str) -> int:
        chinese = len(re.findall(r'[\u4e00-\u9fa5]', text))
        english = len(re.findall(r'[a-zA-Z]+', text))
        return chinese + english

    def _calc_completeness_score(self) -> float:
        """计算完整度评分"""
        score = 100.0
        modules_present = sum(
            1 for i in self.issues
            if i.category in REQUIRED_MODULES and i.severity == "error"
        )
        score -= modules_present * 15
        return max(0, min(100, score))

    def _calc_quality_score(self) -> float:
        """计算可执行度评分"""
        score = 100.0
        error_issues = [i for i in self.issues if i.severity == "error"]
        warning_issues = [i for i in self.issues if i.severity == "warning"]
        score -= len(error_issues) * 10
        score -= len(warning_issues) * 3
        return max(0, min(100, score))


def validate_file(filepath: str) -> ValidationResult:
    """验证单个文件"""
    validator = PromptValidator()
    return validator.validate(filepath)


def validate_batch(filepaths: List[str]) -> List[ValidationResult]:
    """批量验证"""
    return [validate_file(fp) for fp in filepaths]


def format_validation_report(results: List[ValidationResult]) -> str:
    """格式化验证报告"""
    lines = []
    lines.append("=" * 70)
    lines.append("📋 质量验证报告")
    lines.append("=" * 70)

    passed = sum(1 for r in results if r.passed)
    total_errors = sum(r.errors for r in results)
    total_warnings = sum(r.warnings for r in results)
    avg_score = sum(r.overall_score for r in results) / len(results) if results else 0

    lines.append(f"\n📊 整体统计：")
    lines.append(f"   验证文件数：{len(results)}")
    lines.append(f"   通过数（无error）：{passed}/{len(results)}")
    lines.append(f"   总错误数：{total_errors}")
    lines.append(f"   总警告数：{total_warnings}")
    lines.append(f"   平均质量分：{avg_score:.1f}/100")

    lines.append(f"\n📄 逐文件详情：")
    lines.append("-" * 70)

    for i, r in enumerate(results, 1):
        status = "✅" if r.passed else "❌"
        score_color = f"{r.overall_score:.0f}"
        lines.append(f"\n  {i}. {r.filename} {status} [{score_color}分]")
        lines.append(f"     字数：{r.total_words} | 模块：{r.module_count} | 示例：{r.examples_count}")
        if r.pattern_type:
            lines.append(f"     类型：{r.pattern_type}")

        if r.issues:
            for issue in r.issues:
                icon = {"error": "🔴", "warning": "🟡", "info": "🔵"}.get(issue.severity, "⚪")
                lines.append(f"     {icon} [{issue.category}] {issue.message}")

        if r.errors == 0 and r.warnings == 0:
            lines.append(f"     ✅ 无问题，质量合格")

    lines.append("\n" + "=" * 70)
    return "\n".join(lines)


def print_validation_report(results: List[ValidationResult]) -> None:
    print(format_validation_report(results))


def main():
    """命令行入口"""
    import sys

    if len(sys.argv) > 1:
        filepaths = sys.argv[1:]
    else:
        # 默认测试
        filepaths = [
            "D:/CC/.minimax/skills/langgpt-prompt-batch-complete/test_output/成长/01_AI职业规划导师.md",
            "D:/CC/.minimax/skills/langgpt-prompt-batch-complete/test_output/开发/01_代码审查专家.md",
        ]

    results = validate_batch(filepaths)
    print_validation_report(results)
    return results


if __name__ == "__main__":
    main()
