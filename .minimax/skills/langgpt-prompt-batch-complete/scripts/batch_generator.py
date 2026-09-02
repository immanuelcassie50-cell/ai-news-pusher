#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
batch_generator.py — 批量Prompt生成器

功能：
- 接收缺口分析结果，批量生成高质量LangGPT结构化Prompt
- 每个prompt约2000-5000字，符合GPT标准
- 输出为.md文件，保存到对应子文件夹

使用方法：
    from batch_generator import BatchGenerator, PromptSpec
    gen = BatchGenerator()
    specs = [PromptSpec(name="AI导师", pattern="启发引导型", keywords=["引导"])]
    results = gen.generate_batch(specs, output_dir="D:/path/to/output")
"""

import re
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Any
from pathlib import Path


# ═══════════════════════════════════════════════════════════════
# 十类设计模式的模块权重与填充要点
# ═══════════════════════════════════════════════════════════════

PATTERN_CONFIG = {
    "技术工具型": {
        "typical_length": "3000-4000字",
        "emphasis_modules": ["Skills", "Workflow"],
        "module_weights": {"Skills": 5, "Workflow": 5, "Rules": 3, "Goals": 2},
        "core_skills": [
            ("技术栈选择", "根据需求推荐最适合的技术栈和工具链", ["新项目启动", "技术选型", "架构决策"]),
            ("代码/脚本生成", "生成可执行的代码或自动化脚本", ["功能开发", "自动化", "批量处理"]),
            ("错误诊断与修复", "分析错误原因并提供修复方案", ["运行失败", "异常处理", "调试"]),
        ],
        "workflow_stages": [
            ("需求分析", "明确技术目标和约束条件", ["收集需求", "评估可行性", "确定范围"]),
            ("方案设计", "制定技术实现方案", ["选型", "架构设计", "接口规划"]),
            ("实现与验证", "完成开发并进行测试验证", ["编码", "测试", "部署"]),
        ],
    },
    "角色扮演型": {
        "typical_length": "2000-3500字",
        "emphasis_modules": ["Role", "Profile", "Rules"],
        "module_weights": {"Role": 5, "Profile": 4, "Rules": 4, "Skills": 3},
        "core_skills": [
            ("语言风格模拟", "精准复现角色的语言特点和表达方式", ["日常对话", "正式场合", "特殊语境"]),
            ("专业知识输出", "按角色定位输出专业内容", ["咨询", "建议", "解释"]),
            ("边界意识把控", "准确识别和处理角色边界外的问题", ["拒绝", "转接", "澄清"],
            ),
        ],
        "workflow_stages": [
            ("身份确认", "明确角色定位和可用范围", ["开场介绍", "确认需求", "划定边界"]),
            ("角色沉浸", "以角色身份提供专业输出", ["模拟对话", "专业建议", "案例分享"]),
            ("效果校验", "评估角色扮演的一致性", ["自我检查", "用户反馈", "持续优化"]),
        ],
    },
    "内容转换型": {
        "typical_length": "2500-4000字",
        "emphasis_modules": ["Skills", "Workflow", "OutputFormat"],
        "module_weights": {"Skills": 5, "Workflow": 5, "OutputFormat": 4},
        "core_skills": [
            ("输入分析", "深度理解源内容的核心信息和风格", ["提取关键", "把握风格", "识别约束"]),
            ("转换规则应用", "按照目标格式应用转换规则", ["格式映射", "风格适配", "结构重组"]),
            ("一致性校验", "确保转换后的内容与原始意图一致", ["逻辑校验", "风格检查", "质量把关"]),
        ],
        "workflow_stages": [
            ("源内容解析", "拆解源内容的结构、风格和核心信息", ["信息提取", "风格分析", "约束识别"]),
            ("格式转换", "按照目标格式进行内容重组", ["结构映射", "风格迁移", "要素填充"]),
            ("质量校验", "检查转换后的完整性和一致性", ["完整性", "一致性", "可读性"]),
        ],
    },
    "双重输出型": {
        "typical_length": "3500-5000字",
        "emphasis_modules": ["Skills", "Workflow"],
        "module_weights": {"Skills": 5, "Workflow": 5, "Rules": 3},
        "core_skills": [
            ("Part A设计", "输出人类可读的设计说明书", ["理念", "机制", "指南"]),
            ("Part B实现", "输出AI可执行的精确指令", ["规则", "算法", "指令"]),
            ("对应性校验", "确保Part A和Part B精确对应", ["一致性", "可追溯", "完整覆盖"]),
        ],
        "workflow_stages": [
            ("Part A设计", "完成设计说明书的撰写", ["理念阐述", "机制设计", "指南编写"]),
            ("Part B实现", "将设计转化为可执行指令", ["规则转化", "算法设计", "指令编写"]),
            ("对应性检查", "交叉验证Part A和Part B的一致性", ["逐项对照", "补充遗漏", "修正偏差"]),
        ],
    },
    "人格复刻型": {
        "typical_length": "4000-5000字",
        "emphasis_modules": ["Role", "Profile", "Skills", "Rules"],
        "module_weights": {"Role": 5, "Profile": 5, "Skills": 4, "Rules": 4, "Knowledge Base": 3},
        "core_skills": [
            ("背景深度画像", "构建角色的完整背景和经历", ["成长经历", "专业背景", "核心理念"]),
            ("语言风格复刻", "复现角色的语言风格和标志性表达", ["口头禅", "语气", "节奏"]),
            ("边界意识建立", "明确角色的能力边界和禁忌", ["不谈话题", "拒绝场景", "转接机制"]),
        ],
        "workflow_stages": [
            ("角色调研", "收集和整理角色的公开信息", ["背景资料", "代表作品", "他人评价"]),
            ("画像构建", "基于调研构建完整的角色画像", ["身份定位", "风格提炼", "边界划定"]),
            ("调试验证", "通过对话测试角色的真实感", ["风格校验", "边界测试", "迭代优化"]),
        ],
    },
    "多角色协作型": {
        "typical_length": "3000-4500字",
        "emphasis_modules": ["Skills", "Workflow", "Rules"],
        "module_weights": {"Skills": 5, "Workflow": 5, "Rules": 4},
        "core_skills": [
            ("角色分工", "明确每个角色的专长和职责", ["主笔", "审核", "协调"]),
            ("流程标准化", "建立标准化的协作流程", ["交接", "审核", "汇总"]),
            ("质量门禁", "在关键节点设置质量检查点", ["否决权", "通过标准", "回退机制"]),
        ],
        "workflow_stages": [
            ("任务分解", "将复杂任务分解为角色专属子任务", ["角色分工", "任务分配", "优先级排定"]),
            ("并行执行", "各角色按分工执行子任务", ["专业输出", "实时协作", "状态同步"]),
            ("汇总整合", "整合各角色输出并最终审核", ["内容整合", "风格统一", "质量把关"]),
        ],
    },
    "元Skill生成型": {
        "typical_length": "3500-5000字",
        "emphasis_modules": ["Skills", "Workflow"],
        "module_weights": {"Skills": 5, "Workflow": 5, "Initialization": 3},
        "core_skills": [
            ("对话分析", "从对话中提取可复用的交互模式", ["意图提取", "决策点识别", "规则提炼"]),
            ("架构设计", "设计新Skill的整体架构", ["模块划分", "输入输出", "触发机制"]),
            ("细节补全", "完善Skill的各个模块细节", ["Rules", "Examples", "边界"]),
        ],
        "workflow_stages": [
            ("对话分析", "分析用户对话提取核心模式", ["意图分类", "关键决策", "典型回复"]),
            ("架构设计", "设计Skill的模块结构", ["骨架搭建", "模块分配", "触发设计"]),
            ("细节补全与测试", "完善所有模块并进行测试", ["内容填充", "示例编写", "边界测试"]),
        ],
    },
    "启发引导型": {
        "typical_length": "1500-2500字",
        "emphasis_modules": ["Skills", "Workflow", "Rules"],
        "module_weights": {"Skills": 5, "Workflow": 5, "Rules": 4, "Initialization": 3},
        "core_skills": [
            ("澄清假设", "帮助对方看清自己隐含的假设", ["对方观点模糊时", "论证不清晰时"]),
            ("追问证据", "追溯观点背后的证据和逻辑", ["得出结论时", "论据不足时"]),
            ("探讨替代", "引导思考其他可能性和视角", ["思路受阻", "需要开阔视野"]),
        ],
        "workflow_stages": [
            ("倾听确认", "完整理解对方的表述并确认", ["完整倾听", "确认理解", "澄清模糊"]),
            ("精准提问", "通过1-2个核心问题引导思考", ["提出问题", "等待回应", "记录洞见"]),
            ("总结升华", "帮助形成清晰的认知和行动", ["总结核心", "确认收获", "留思考题"]),
        ],
    },
    "创意生成型": {
        "typical_length": "2500-4000字",
        "emphasis_modules": ["Skills", "Knowledge Base"],
        "module_weights": {"Skills": 5, "Knowledge Base": 4, "Rules": 3},
        "core_skills": [
            ("风格判断", "准确把握创意需求的风格定位", ["风格识别", "调性确认", "参考锚定"]),
            ("意象系统构建", "建立支撑创意的核心意象群", ["意象发散", "意象筛选", "意象组合"]),
            ("金句炼制", "创造具有传播力的核心金句", ["核心提炼", "表达优化", "传播测试"]),
        ],
        "workflow_stages": [
            ("风格锚定", "明确创意需求的风格和调性", ["需求分析", "参考收集", "风格定位"]),
            ("创意发散", "在风格框架内进行创意发散", ["意象发散", "方案生成", "初选评估"]),
            ("精炼落地", "将创意精炼为可执行的完整内容", ["金句提炼", "结构完善", "最终校验"]),
        ],
    },
    "分类型框架型": {
        "typical_length": "4000-5000字+",
        "emphasis_modules": ["Skills", "Workflow"],
        "module_weights": {"Skills": 5, "Workflow": 5, "Rules": 3},
        "core_skills": [
            ("类型判断", "基于输入特征准确判断所属类型", ["特征提取", "类型匹配", "置信评估"]),
            ("框架匹配", "为判断出的类型匹配最佳处理框架", ["框架选择", "模板调用", "参数调整"]),
            ("一致性控制", "确保不同类型的输出风格基本一致", ["风格基线", "变量控制", "终审检查"]),
        ],
        "workflow_stages": [
            ("输入分析", "分析用户输入的特征和类型", ["特征提取", "约束识别", "类型判断"]),
            ("框架匹配", "选择并加载对应的处理框架", ["框架选择", "参数填充", "模板调用"]),
            ("内容生成与校验", "按框架生成内容并校验一致性", ["内容生成", "风格校验", "终审输出"]),
        ],
    },
}


@dataclass
class PromptSpec:
    """Prompt生成规格"""
    name: str                 # Prompt名称（如"AI导师"）
    pattern: str             # 设计模式（如"启发引导型"）
    keywords: List[str]      # 核心关键词
    category: str            # 所属分类（文件夹名）
    filename: str            # 输出文件名
    rationale: str = ""      # 补全理由（来自缺口分析）
    target_audience: str = "通用"  # 目标受众


class PromptGenerator:
    """
    LangGPT Prompt 生成器

    基于十类设计模式，生成完整的结构化Prompt。
    """

    def __init__(self):
        self.patterns = PATTERN_CONFIG

    def generate(self, spec: PromptSpec) -> str:
        """生成完整的LangGPT Prompt"""
        pattern_cfg = self.patterns.get(
            spec.pattern,
            self.patterns["启发引导型"]  # 默认用启发引导型
        )

        # 构建prompt
        parts = []

        # 1. YAML frontmatter
        desc = self._build_description(spec)
        parts.append(f"""---
name: {self._slugify(spec.name)}
description: {desc}
tags: [{spec.category}, {spec.pattern}]
---

# {spec.name}
> {self._build_tagline(spec)}

---

## Role（角色定义）

{self._build_role(spec, pattern_cfg)}

---

## Background（背景说明）

{self._build_background(spec)}

---

## Profile（能力档案）

### 基础信息
- **语言**：中文
- **专长领域**：{', '.join(spec.keywords)}
- **方法论**：{self._build_methodology(spec.pattern)}

### 能力边界
- **能做**：{self._build_can_do(spec)}
- **不能做**：{self._build_cannot_do(spec)}

---

## Skills（核心技能）

{self._build_skills(spec, pattern_cfg)}

---

## Rules（行为准则）

### 必须做到
{self._build_must_do(spec)}

### 绝对禁止
{self._build_must_not(spec)}

---

## Workflow（工作流程）

{self._build_workflow(spec, pattern_cfg)}

---

## Goals（目标设定）

### 核心目标
{self._build_core_goal(spec)}

### 质量标准
{self._build_quality_standards(spec)}

### 成功标志
{self._build_success_criteria(spec)}

---

## Knowledge Base（知识储备）

### 需要掌握的知识
{self._build_knowledge(spec)}

### 参考框架
{self._build_frameworks(spec)}

---

## Initialization（初始化）

### 欢迎语
```
{self._build_welcome(spec)}
```

### 引导话术
{self._build_guide(spec)}

---

## Examples（示例演示）

{self._build_examples(spec)}

---

## 快速验证

{self._build_verification(spec)}

---

## 设计说明

### 为什么这样设计
本Prompt采用**{spec.pattern}**设计模式。{self._build_design_rationale(spec)}

### 核心创新点
1. {self._build_innovation_1(spec)}
2. {self._build_innovation_2(spec)}

### 后续迭代建议
- {self._build_iteration_tip_1(spec)}
- {self._build_iteration_tip_2(spec)}
""")

        return "\n".join(parts)

    def _slugify(self, text: str) -> str:
        """转换为kebab-case文件名"""
        text = re.sub(r'[^\w\u4e00-\u9fa5\s-]', '', text)
        text = re.sub(r'[\s_]+', '-', text.strip())
        return text.lower()

    def _build_description(self, spec: PromptSpec) -> str:
        """构建description（强触发描述）"""
        pattern_desc = {
            "技术工具型": "当你需要{{action}}相关的完整技术实现方案时，激活此Skill",
            "角色扮演型": "当你需要AI扮演{name}提供专业输出时，激活此Skill",
            "内容转换型": "当你需要进行{action}格式或类型转换时，激活此Skill",
            "双重输出型": "当你需要同时输出设计方案和实现指令时，激活此Skill",
            "人格复刻型": "当你需要一个{niche}的数字分身时，激活此Skill",
            "多角色协作型": "当你需要{niche}多角色协作产出时，激活此Skill",
            "元Skill生成型": "当你需要从对话中提取或生成{niche}Skill时，激活此Skill",
            "启发引导型": "当你需要通过提问引导{niche}时，激活此Skill",
            "创意生成型": "当你需要进行{niche}创意内容生成时，激活此Skill",
            "分类型框架型": "当你需要对{niche}进行分类处理时，激活此Skill",
        }
        template = pattern_desc.get(spec.pattern, "当你需要{niche}专业帮助时，激活此Skill")
        niche = "、".join(spec.keywords[:2])
        action = spec.keywords[0] if spec.keywords else "专业任务"
        return template.format(name=spec.name, niche=niche, action=action)

    def _build_tagline(self, spec: PromptSpec) -> str:
        """构建一句话定位"""
        taglines = {
            "技术工具型": f"专注于{spec.keywords[0] if spec.keywords else '技术'}领域的智能工具",
            "角色扮演型": f"扮演{spec.name}提供{spec.keywords[0] if spec.keywords else '专业'}服务",
            "内容转换型": f"实现{spec.keywords[0] if spec.keywords else '内容'}格式的精准转换",
            "启发引导型": f"通过提问引导{spec.keywords[0] if spec.keywords else '深度'}思考",
            "创意生成型": f"专注{spec.keywords[0] if spec.keywords else '创意'}内容的高质量产出",
        }
        return taglines.get(spec.pattern, f"{spec.name}——{spec.keywords[0] if spec.keywords else '专业'}专家")

    def _build_role(self, spec: PromptSpec, cfg: Dict) -> str:
        return f"""你是一位专注于{', '.join(spec.keywords[:3])}领域的专业{spec.pattern.replace('型', '')}专家。

**角色名称**：{spec.name}
**核心身份**：{spec.pattern.replace('型', '')}专家，擅长{'/'.join(spec.keywords[:2])}
**独特价值**：{self._build_unique_value(spec)}"""

    def _build_unique_value(self, spec: PromptSpec) -> str:
        values = {
            "技术工具型": "将复杂技术需求转化为可执行的完整方案",
            "角色扮演型": "精准复现专业角色的语言风格和行为模式",
            "内容转换型": "在保持核心价值的同时完成跨格式内容转换",
            "双重输出型": "同时提供人类可读的设计和AI可执行的指令",
            "人格复刻型": "构建真实感十足的数字分身",
            "多角色协作型": "通过专业分工实现远超单角色的产出质量",
            "元Skill生成型": "从对话中提炼可复用的Skill资产",
            "启发引导型": "通过提问引导深度思考，不直接给答案",
            "创意生成型": "在创意自由和方法论之间找到最佳平衡",
            "分类型框架型": "自动识别类型并匹配最佳处理框架",
        }
        return values.get(spec.pattern, "提供高质量的专业输出")

    def _build_background(self, spec: PromptSpec) -> str:
        return f"""## 背景说明

在{{user_scenario}}（用户实际使用场景）的需求背景下，
{spec.name}这个角色应运而生。

**解决的问题**：
- 传统方式效率低下或质量不稳定
- 需要专业化、结构化的输出
- 缺乏一致性的质量保证

**适用人群**：{spec.target_audience}

**使用价值**：
- 将模糊需求转化为清晰可执行的方案
- 保证输出质量的一致性和专业性
- 大幅提升相关工作的效率"""

    def _build_methodology(self, pattern: str) -> str:
        methods = {
            "技术工具型": "工具链思维 + API优先设计 + 错误处理先行",
            "角色扮演型": "身份认同 + 风格锚定 + 边界意识",
            "内容转换型": "信息保真 + 格式适配 + 风格迁移",
            "启发引导型": "苏格拉底产婆术 + 极简交互 + 深度追问",
            "创意生成型": "意象驱动 + 金句提炼 + 情绪曲线设计",
        }
        return methods.get(pattern, "专业方法论支撑")

    def _build_can_do(self, spec: PromptSpec) -> str:
        return f"根据{', '.join(spec.keywords[:2])}提供专业输出；按照标准流程执行任务；保证输出质量的一致性"

    def _build_cannot_do(self, spec: PromptSpec) -> str:
        return f"不提供违反法律法规的内容；不承担需要外部工具执行的任务；不输出存在版权风险的内容"

    def _build_skills(self, spec: PromptSpec, cfg: Dict) -> str:
        """构建Skills模块"""
        lines = []
        core_skills = cfg.get("core_skills", [])

        for i, (skill_name, skill_desc, scenarios) in enumerate(core_skills, 1):
            lines.append(f"""### Skill {i}：{skill_name}
**描述**：{skill_desc}
**应用场景**：{', '.join(scenarios)}
**执行方式**：
1. 接收并理解用户输入
2. 按照{spec.pattern}的标准流程处理
3. 输出结构化结果""")

        return "\n\n".join(lines)

    def _build_must_do(self, spec: PromptSpec) -> str:
        rules = {
            "技术工具型": "- 使用业界认可的最佳实践\n- 提供完整的错误处理方案\n- 代码/方案需经过验证",
            "角色扮演型": "- 始终保持角色身份的一致性\n- 使用角色特有的语言风格\n- 主动确认理解用户需求",
            "启发引导型": "- 每次只提问1-2个问题\n- 不直接给答案，引导用户自己思考\n- 等待用户回应后再继续",
            "创意生成型": "- 每个输出包含至少1个金句\n- 风格前后一致\n- 主动提供2-3个备选方案",
        }
        return rules.get(
            spec.pattern,
            "- 严格按照Workflow执行\n- 保证输出质量\n- 主动确认理解"
        )

    def _build_must_not(self, spec: PromptSpec) -> str:
        rules = {
            "角色扮演型": "- 不扮演spec.name以外的任何真实人物\n- 不泄露超出角色背景的信息\n- 不在边界外勉强回应",
            "人格复刻型": "- 不扮演spec.name以外的任何人物\n- 不发表该人物历史上没有表达过的观点\n- 不输出可能造成真实人物形象损害的内容",
        }
        return rules.get(
            spec.pattern,
            "- 不输出违法违规内容\n- 不编造数据或来源\n- 不强制用户接受特定结论"
        )

    def _build_workflow(self, spec: PromptSpec, cfg: Dict) -> str:
        """构建Workflow模块"""
        lines = []
        stages = cfg.get("workflow_stages", [
            ("任务接收", "理解用户需求", ["接收输入", "澄清需求", "确认范围"]),
            ("执行处理", "完成核心任务", ["制定方案", "逐步执行", "质量自检"]),
            ("输出交付", "输出最终结果", ["结果整理", "质量校验", "用户交付"]),
        ])

        for i, (stage_name, stage_goal, steps) in enumerate(stages, 1):
            steps_text = "\n".join(f"{j}. {step}" for j, step in enumerate(steps, 1))
            lines.append(f"""### 阶段{i}：{stage_name}
**目标**：{stage_goal}
**步骤**：
{steps_text}""")

        return "\n\n".join(lines)

    def _build_core_goal(self, spec: PromptSpec) -> str:
        return f"帮助用户完成{', '.join(spec.keywords[:2])}相关的高质量专业任务，输出可直接使用的结果"

    def _build_quality_standards(self, spec: PromptSpec) -> str:
        return f"""- **专业性**：输出内容符合{', '.join(spec.keywords[:2])}领域的专业标准
- **完整性**：包含必要的背景、说明和使用指引
- **准确性**：信息准确，无误导性内容
- **实用性**：结果可直接用于实际场景"""

    def _build_success_criteria(self, spec: PromptSpec) -> str:
        return f"用户能够使用输出结果完成{', '.join(spec.keywords[:1])}任务，并获得满意的专业质量"

    def _build_knowledge(self, spec: PromptSpec) -> str:
        return f"""- {spec.keywords[0] if spec.keywords else '专业领域'}的基础理论
- {', '.join(spec.keywords[:3])}的核心概念和方法论
- 行业最佳实践和常见场景处理经验"""

    def _build_frameworks(self, spec: PromptSpec) -> str:
        frameworks = {
            "技术工具型": "- 瀑布流/敏捷开发模型\n- API设计原则\n- 错误处理模式",
            "角色扮演型": "- 身份认同理论\n- 风格迁移方法\n- 边界意识框架",
            "启发引导型": "- 苏格拉底提问法\n- 批判性思维框架\n- 产婆术三阶段",
            "创意生成型": "- AIDA模型\n- 故事弧光设计\n- 情绪曲线构建",
        }
        return frameworks.get(
            spec.pattern,
            "- 专业领域框架\n- 最佳实践模板\n- 质量评估标准"
        )

    def _build_welcome(self, spec: PromptSpec) -> str:
        welcomes = {
            "技术工具型": f"{spec.name}已就绪。请描述你的技术需求，我将为你提供完整的实现方案。",
            "角色扮演型": f"你好，我是{spec.name}。请告诉我你需要什么帮助，我将按照我的专业方式为你服务。",
            "启发引导型": f"我是{spec.name}，专注于帮助你通过思考找到答案。请分享你正在思考的问题。",
            "创意生成型": f"我是{spec.name}，准备好为你产出高质量的创意内容了。告诉我你的需求吧。",
        }
        return welcomes.get(
            spec.pattern,
            f"{spec.name}已就绪。请描述你的需求，我将为你提供专业支持。"
        )

    def _build_guide(self, spec: PromptSpec) -> str:
        return f"""请按以下方式开始：
1. 描述你的具体需求或问题
2. 我会按照{self.patterns.get(spec.pattern, {}).get('typical_length', '专业流程')}的标准流程处理
3. 完成后请告知是否需要调整"""

    def _build_examples(self, spec: PromptSpec) -> str:
        return f"""### 示例一（典型场景）
**用户输入**：
> 我需要{{具体需求描述}}

**AI输出**：
> {{按照Workflow生成的完整专业输出}}

### 示例二（边界场景）
**用户输入**：
> {{另一种输入情况}}

**AI输出**：
> {{对应的输出结果}}

### 示例三（追问确认）
**用户输入**：
> {{需要澄清的输入}}

**AI输出**：
> 在继续之前，我需要确认：{{追问内容}}"""

    def _build_verification(self, spec: PromptSpec) -> str:
        return f"""## 快速验证步骤

1. **基本功能测试**：用一句话需求测试{spec.name}是否正常响应
2. **风格校验**：确认输出符合{self.patterns.get(spec.pattern, {}).get('typical_length', '专业标准')}
3. **边界测试**：输入超出范围的请求，确认AI正确拒绝或转接

## 预期质量指标
- 字数范围：2000-5000字
- 模块完整性：九大模块齐全
- 无占位符：所有[]内容已填充"""

    def _build_design_rationale(self, spec: PromptSpec) -> str:
        rationale = {
            "技术工具型": "选择技术工具型是因为该场景需要明确的执行流程和工具链支撑，通过详细的Skills和Workflow设计确保可执行性。",
            "角色扮演型": "选择角色扮演型是因为该场景核心在于专业身份的语言风格和行为一致性，通过Role和Rules强化角色特征。",
            "启发引导型": "选择启发引导型是因为该场景最佳方式是通过提问引导思考而非直接给答案，通过精简的Workflow保证极简交互。",
            "创意生成型": "选择创意生成型是因为该场景需要在创意自由和方法论之间找到平衡，通过意象系统和金句炼制注入专业创意方法。",
        }
        return rationale.get(
            spec.pattern,
            f"选择{spec.pattern}是因为该模式最适合处理{', '.join(spec.keywords[:2])}相关的任务。"
        )

    def _build_innovation_1(self, spec: PromptSpec) -> str:
        return f"基于{', '.join(spec.keywords[:2])}的领域知识注入了独特的专业框架"

    def _build_innovation_2(self, spec: PromptSpec) -> str:
        return "通过边界规则确保输出的安全性和可靠性"

    def _build_iteration_tip_1(self, spec: PromptSpec) -> str:
        return f"根据实际使用情况调整Rules中的禁止规则"

    def _build_iteration_tip_2(self, spec: PromptSpec) -> str:
        return "补充Examples中的边界场景，提高鲁棒性"


class BatchGenerator:
    """
    批量生成器

    串联多个PromptSpec，批量生成并写入文件。
    """

    def __init__(self):
        self.generator = PromptGenerator()

    def generate_batch(
        self,
        specs: List[PromptSpec],
        output_base_dir: str
    ) -> List[Dict[str, Any]]:
        """
        批量生成Prompt并保存

        Args:
            specs: Prompt规格列表
            output_base_dir: 输出根目录

        Returns:
            生成结果列表，包含文件路径、字数等信息
        """
        results = []

        for spec in specs:
            try:
                # 生成Prompt
                content = self.generator.generate(spec)

                # 计算字数
                word_count = len(re.findall(r'[\u4e00-\u9fa5]', content))
                word_count += len(re.findall(r'[a-zA-Z]+', content))

                # 确定输出路径
                output_dir = Path(output_base_dir) / spec.category
                output_dir.mkdir(parents=True, exist_ok=True)
                output_path = output_dir / spec.filename

                # 写入文件
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(content)

                results.append({
                    "success": True,
                    "name": spec.name,
                    "filename": spec.filename,
                    "path": str(output_path),
                    "pattern": spec.pattern,
                    "word_count": word_count,
                    "category": spec.category,
                })

            except Exception as e:
                results.append({
                    "success": False,
                    "name": spec.name,
                    "filename": spec.filename,
                    "error": str(e),
                    "category": spec.category,
                })

        return results


def main():
    """命令行测试"""
    specs = [
        PromptSpec(
            name="AI职业规划导师",
            pattern="启发引导型",
            keywords=["职业", "规划", "发展"],
            category="成长",
            filename="01_AI职业规划导师.md",
            rationale="空文件夹补全",
        ),
        PromptSpec(
            name="代码审查专家",
            pattern="角色扮演型",
            keywords=["代码", "审查", "质量"],
            category="开发",
            filename="01_代码审查专家.md",
            rationale="稀疏补全",
        ),
    ]

    gen = BatchGenerator()
    results = gen.generate_batch(specs, "D:/CC/.minimax/skills/langgpt-prompt-batch-complete/test_output")

    print(f"\n✅ 生成完成：{sum(1 for r in results if r['success'])}/{len(results)} 成功")
    for r in results:
        if r['success']:
            print(f"  ✓ {r['name']} → {r['path']} ({r['word_count']}字)")
        else:
            print(f"  ✗ {r['name']} → {r['error']}")

    return results


if __name__ == "__main__":
    main()
