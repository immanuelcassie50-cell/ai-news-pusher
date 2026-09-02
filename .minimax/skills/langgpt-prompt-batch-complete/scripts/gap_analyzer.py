#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gap_analyzer.py — 缺口分析与补全建议生成器

功能：
- 基于文件夹名称（分类名）分析该分类下可能缺失的细分场景
- 参考行业/场景分类百科（sector-taxonomy.md）进行智能推断
- 生成补全建议列表（含理由）

使用方法：
    from gap_analyzer import GapAnalyzer
    analyzer = GapAnalyzer()
    suggestions = analyzer.analyze_folder(subfolder_result)
    print(suggestions)

输入：
    SubfolderResult（来自scan_structure.py）

输出：
    List[GapSuggestion]，包含建议的细分场景名称、类型、理由
"""

import re
from dataclasses import dataclass, field
from typing import List, Dict, Optional


@dataclass
class GapSuggestion:
    """缺口补全建议"""
    suggested_name: str          # 建议的细分场景名称
    suggested_filename: str     # 建议的文件名
    rationale: str              # 补全理由
    pattern_type: str           # 推荐的设计模式
    priority: int               # 优先级 1-3（1最高）
    keywords: List[str]         # 核心关键词


# ═══════════════════════════════════════════════════════════════
# 场景词库：按行业/主题分类
# ═══════════════════════════════════════════════════════════════

SCENE_LIBRARIES = {
    # 通用/协作类
    "通用": [
        ("AI杠杆导师", "启发引导型", ["引导", "追问", "不直接给答案"]),
        ("结构化思维顾问", "分类型框架型", ["分类", "框架", "逻辑"]),
        ("创意头脑风暴搭档", "创意生成型", ["创意", "发散", "头脑风暴"]),
        ("内容转换专家", "内容转换型", ["转换", "转化", "格式"]),
        ("多角色协作系统", "多角色协作型", ["团队", "协作", "角色"]),
    ],
    # 商业/职场类
    "商业": [
        ("商业洞察分析师", "技术工具型", ["分析", "洞察", "商业"]),
        ("商业模式画布设计器", "创意生成型", ["画布", "模式", "商业"]),
        ("商务谈判教练", "启发引导型", ["谈判", "策略", "博弈"]),
        ("商业计划书生成器", "技术工具型", ["BP", "计划", "创业"]),
        ("竞品分析专家", "技术工具型", ["竞品", "对比", "SWOT"]),
    ],
    "职场": [
        ("简历优化专家", "内容转换型", ["简历", "求职", "优化"]),
        ("面试模拟教练", "启发引导型", ["面试", "模拟", "准备"]),
        ("职场沟通顾问", "启发引导型", ["沟通", "人际", "职场"]),
        ("PPT大纲生成器", "技术工具型", ["PPT", "演示", "大纲"]),
        ("邮件写作助手", "角色扮演型", ["邮件", "商务", "沟通"]),
    ],
    "销售": [
        ("销售话术生成器", "创意生成型", ["话术", "销售", "转化"]),
        ("客户画像构建师", "分类型框架型", ["画像", "客户", "分群"]),
        ("销售异议处理专家", "启发引导型", ["异议", "处理", "应对"]),
        ("提案设计器", "技术工具型", ["提案", "方案", "呈现"]),
    ],
    # 内容创作类
    "内容": [
        ("爆款标题生成器", "创意生成型", ["标题", "爆款", "吸引"]),
        ("文案风格转换器", "内容转换型", ["文案", "风格", "改写"]),
        ("故事弧光设计师", "创意生成型", ["故事", "弧光", "叙事"]),
        ("金句炼制专家", "创意生成型", ["金句", "文案", "传播"]),
        ("内容矩阵规划师", "分类型框架型", ["矩阵", "选题", "规划"]),
    ],
    "文案": [
        ("品牌slogan生成器", "创意生成型", ["slogan", "品牌", "口号"]),
        ("产品文案写作助手", "创意生成型", ["产品", "文案", "卖点"]),
        ("朋友圈文案生成器", "创意生成型", ["朋友圈", "社媒", "短文案"]),
        ("广告语炼制师", "创意生成型", ["广告", "语", "创意"]),
    ],
    "创作": [
        ("歌词创作搭档", "创意生成型", ["歌词", "歌曲", "创作"]),
        ("诗歌风格生成器", "创意生成型", ["诗歌", "古风", "意象"]),
        ("剧本结构规划师", "分类型框架型", ["剧本", "结构", "三幕"]),
        ("角色设定生成器", "角色扮演型", ["人设", "角色", "设定"]),
        ("世界观构建师", "创意生成型", ["世界观", "设定", "背景"]),
    ],
    "写作": [
        ("长文写作框架", "分类型框架型", ["长文", "框架", "结构"]),
        ("学术写作教练", "角色扮演型", ["学术", "论文", "写作"]),
        ("小说情节生成器", "创意生成型", ["情节", "小说", "故事"]),
        ("写作风格模仿器", "角色扮演型", ["风格", "模仿", "写作"]),
    ],
    # 教育/培训类
    "教育": [
        ("课程设计专家", "技术工具型", ["课程", "教学", "设计"]),
        ("费曼讲解助手", "启发引导型", ["费曼", "讲解", "理解"]),
        ("出题专家", "技术工具型", ["题目", "出题", "练习"]),
        ("学习路径规划师", "分类型框架型", ["学习", "路径", "规划"]),
    ],
    "培训": [
        ("培训师数字分身", "人格复刻型", ["培训师", "分身", "讲师"]),
        ("微课脚本生成器", "技术工具型", ["微课", "脚本", "短课"]),
        ("培训效果评估师", "分类型框架型", ["评估", "效果", "柯氏"]),
        ("案例教学设计师", "创意生成型", ["案例", "教学", "设计"]),
    ],
    # 技术/开发类
    "技术": [
        ("代码审查专家", "角色扮演型", ["代码", "审查", "CR"]),
        ("架构设计顾问", "分类型框架型", ["架构", "设计", "模式"]),
        ("API设计器", "技术工具型", ["API", "接口", "设计"]),
        ("自动化脚本生成器", "技术工具型", ["自动化", "脚本", "效率"]),
    ],
    "开发": [
        ("PRD写作助手", "技术工具型", ["PRD", "需求", "产品"]),
        ("技术方案生成器", "技术工具型", ["方案", "技术", "设计"]),
        ("单元测试设计器", "技术工具型", ["测试", "用例", "TDD"]),
        ("API文档生成器", "技术工具型", ["文档", "API", "接口"]),
    ],
    "前端": [
        ("UI组件设计器", "创意生成型", ["组件", "UI", "前端"]),
        ("动效规范生成器", "技术工具型", ["动效", "动画", "规范"]),
        ("响应式布局框架", "技术工具型", ["响应式", "布局", "适配"]),
    ],
    # 产品/设计类
    "产品": [
        ("产品经理数字分身", "人格复刻型", ["PM", "产品", "经理"]),
        ("用户旅程设计师", "技术工具型", ["旅程", "体验", "地图"]),
        ("需求分析器", "分类型框架型", ["需求", "分析", "优先级"]),
        ("A/B测试设计器", "技术工具型", ["AB", "测试", "实验"]),
    ],
    "设计": [
        ("设计规范生成器", "技术工具型", ["规范", "设计", "组件"]),
        ("用户体验设计师", "分类型框架型", ["UX", "体验", "用户"]),
        ("视觉风格定位器", "启发引导型", ["风格", "视觉", "定位"]),
        ("设计系统构建器", "技术工具型", ["系统", "设计", "组件库"]),
    ],
    # 营销/品牌类
    "营销": [
        ("营销策略规划师", "分类型框架型", ["策略", "营销", "规划"]),
        ("用户增长专家", "技术工具型", ["增长", "AARRR", "获客"]),
        ("活动策划生成器", "创意生成型", ["活动", "策划", "创意"]),
        ("品牌定位顾问", "启发引导型", ["定位", "品牌", "心智"]),
    ],
    "品牌": [
        ("品牌故事生成器", "创意生成型", ["故事", "品牌", "叙事"]),
        ("品牌调性指南生成器", "技术工具型", ["调性", "品牌", "指南"]),
        ("VI文案写作助手", "创意生成型", ["VI", "文案", "品牌"]),
    ],
    "推广": [
        ("SEO优化专家", "技术工具型", ["SEO", "搜索", "优化"]),
        ("投放策略设计器", "技术工具型", ["投放", "广告", "策略"]),
        ("增长黑客实验设计器", "技术工具型", ["增长", "实验", "黑客"]),
    ],
    # 媒体/传播类
    "媒体": [
        ("公众号运营助手", "技术工具型", ["公众号", "运营", "选题"]),
        ("短视频脚本生成器", "技术工具型", ["短视频", "脚本", "抖音"]),
        ("直播话术设计器", "创意生成型", ["直播", "话术", "脚本"]),
        ("社交媒体内容矩阵", "分类型框架型", ["社媒", "矩阵", "内容"]),
    ],
    "传播": [
        ("PR新闻稿写作助手", "角色扮演型", ["PR", "新闻", "公关"]),
        ("危机公关话术生成器", "创意生成型", ["危机", "公关", "话术"]),
        ("媒体关系维护顾问", "启发引导型", ["媒体", "关系", "维护"]),
    ],
    # 心理/成长类
    "心理": [
        ("认知行为教练", "启发引导型", ["CBT", "认知", "情绪"]),
        ("正念冥想引导师", "角色扮演型", ["正念", "冥想", "放松"]),
        ("情绪调节顾问", "启发引导型", ["情绪", "调节", "心理"]),
        ("自我认知探索器", "启发引导型", ["自我", "认知", "探索"]),
    ],
    "成长": [
        ("职业规划顾问", "启发引导型", ["职业", "规划", "发展"]),
        ("目标分解教练", "启发引导型", ["目标", "分解", "行动"]),
        ("习惯养成设计器", "技术工具型", ["习惯", "养成", "设计"]),
        ("个人知识管理系统", "技术工具型", ["知识", "管理", "PKM"]),
    ],
    # 财务/法律类
    "财务": [
        ("财务分析报告生成器", "技术工具型", ["财务", "分析", "报告"]),
        ("预算规划顾问", "分类型框架型", ["预算", "规划", "资源"]),
        ("投资分析框架", "分类型框架型", ["投资", "分析", "估值"]),
    ],
    "法律": [
        ("合同审查助手", "技术工具型", ["合同", "审查", "条款"]),
        ("法律咨询分流器", "启发引导型", ["法律", "咨询", "分流"]),
        ("合规检查清单生成器", "技术工具型", ["合规", "清单", "检查"]),
    ],
    # 娱乐/休闲类
    "娱乐": [
        ("游戏剧情生成器", "创意生成型", ["游戏", "剧情", "叙事"]),
        ("角色扮演剧情设计师", "角色扮演型", ["RPG", "剧情", "角色"]),
        ("桌游规则设计师", "技术工具型", ["桌游", "规则", "游戏"]),
    ],
    "生活": [
        ("旅行规划顾问", "技术工具型", ["旅行", "规划", "攻略"]),
        ("礼物挑选助手", "启发引导型", ["礼物", "选择", "心意"]),
        ("家居收纳规划师", "分类型框架型", ["收纳", "家居", "整理"]),
        ("健身计划生成器", "技术工具型", ["健身", "计划", "训练"]),
    ],
    # 默认兜底库（按关键词匹配）
    "_default": [
        ("专家顾问角色", "角色扮演型", ["专家", "顾问"]),
        ("自动化工具助手", "技术工具型", ["自动", "效率"]),
        ("创意发散搭档", "创意生成型", ["创意", "想法"]),
        ("内容优化专家", "内容转换型", ["优化", "改进"]),
        ("分析诊断框架", "分类型框架型", ["分析", "诊断"]),
        ("引导探索教练", "启发引导型", ["探索", "发现"]),
    ]
}


# ═══════════════════════════════════════════════════════════════
# 同义词映射表（折叠到分类键）
# ═══════════════════════════════════════════════════════════════

SYNONYM_MAP = {
    "工作": "职场",
    "办公": "职场",
    "职业": "职场",
    "销售": "销售",
    "营销": "营销",
    "推广": "推广",
    "文案": "文案",
    "内容": "内容",
    "创作": "创作",
    "写作": "写作",
    "歌词": "创作",
    "歌曲": "创作",
    "培训": "培训",
    "教育": "教育",
    "教学": "教育",
    "讲师": "培训",
    "技术": "技术",
    "开发": "开发",
    "编程": "开发",
    "代码": "开发",
    "前端": "前端",
    "产品": "产品",
    "PM": "产品",
    "设计": "设计",
    "品牌": "品牌",
    "营销": "营销",
    "媒体": "媒体",
    "传播": "传播",
    "PR": "传播",
    "心理": "心理",
    "心理": "心理",
    "成长": "成长",
    "自我": "成长",
    "财务": "财务",
    "金融": "财务",
    "法律": "法律",
    "娱乐": "娱乐",
    "游戏": "娱乐",
    "生活": "生活",
    "通用": "通用",
    "助手": "通用",
    "专家": "通用",
    "顾问": "通用",
}


def _normalize_category(folder_name: str) -> str:
    """将文件夹名标准化为分类键"""
    name = folder_name.strip()

    # 直接匹配
    if name in SCENE_LIBRARIES:
        return name

    # 尝试同义词
    for key, synonyms in SYNONYM_MAP.items():
        if key in name:
            return synonyms

    # 模糊匹配（包含关系）
    for category in SCENE_LIBRARIES.keys():
        if category in name or name in category:
            return category

    return "_default"


def _generate_filename(name: str, existing_filenames: List[str], start_seq: int) -> str:
    """生成智能文件名（含序号）"""
    # 清理名称
    safe_name = re.sub(r'[<>:"/\\|?*]', '', name)
    safe_name = safe_name.strip()

    # 尝试序号
    seq = start_seq
    while True:
        filename = f"{seq:02d}_{safe_name}.md"
        if filename not in existing_filenames:
            return filename
        seq += 1


def _filter_existing(existing_files: List[str], library_items: List) -> List:
    """过滤掉已存在的场景"""
    existing_lower = {f.lower() for f in existing_files}

    filtered = []
    for item in library_items:
        name = item[0]
        name_lower = name.lower()
        # 检查是否已存在（文件名包含该名称的核心词）
        is_dup = any(
            name_lower[:4] in fn.lower() or fn.lower()[:4] in name_lower
            for fn in existing_files
        )
        if not is_dup:
            filtered.append(item)
    return filtered


class GapAnalyzer:
    """
    缺口分析器

    基于文件夹分类，匹配场景词库，生成补全建议。
    """

    def __init__(self):
        self.library = SCENE_LIBRARIES

    def analyze_folder(
        self,
        subfolder_result,
        max_suggestions: int = 10
    ) -> List[GapSuggestion]:
        """
        分析单个子文件夹，生成补全建议

        Args:
            subfolder_result: SubfolderResult对象
            max_suggestions: 最大建议数量（默认10）

        Returns:
            补全建议列表
        """
        folder_name = subfolder_result.name
        existing_files = [f.filename for f in subfolder_result.md_files]

        # 标准化分类
        category = _normalize_category(folder_name)
        library_items = self.library.get(category, self.library["_default"])

        # 过滤已存在的
        candidates = _filter_existing(existing_files, library_items)

        # 计算现有序号最大值
        existing_seqs = []
        for fn in existing_files:
            m = re.match(r'^(\d+)', fn)
            if m:
                existing_seqs.append(int(m.group(1)))
        start_seq = (max(existing_seqs) + 1) if existing_seqs else 1

        # 生成建议
        suggestions = []
        for i, item in enumerate(candidates[:max_suggestions]):
            name, pattern_type, keywords = item
            seq = start_seq + i
            filename = _generate_filename(name, existing_files, seq)

            # 生成理由
            rationale = self._generate_rationale(folder_name, name, pattern_type, len(existing_files))

            priority = self._calculate_priority(folder_name, name, len(existing_files), i)

            suggestions.append(GapSuggestion(
                suggested_name=name,
                suggested_filename=filename,
                rationale=rationale,
                pattern_type=pattern_type,
                priority=priority,
                keywords=keywords
            ))

        # 按优先级排序
        suggestions.sort(key=lambda x: x.priority)

        return suggestions

    def _generate_rationale(self, folder_name: str, suggestion: str, pattern_type: str, existing_count: int) -> str:
        """生成补全理由"""
        if existing_count == 0:
            return (
                f"「{folder_name}」文件夹目前为空，"
                f"「{suggestion}」是该分类的基础场景之一，"
                f"适合作为该类别的核心prompt补充。"
            )
        elif existing_count <= 3:
            return (
                f"「{folder_name}」目前只有{existing_count}个prompt，"
                f"补充「{suggestion}」可以丰富该分类的场景覆盖面，"
                f"采用{pattern_type}实现。"
            )
        else:
            return (
                f"「{suggestion}」是「{folder_name}」分类下的细分场景，"
                f"当前该维度覆盖不足，"
                f"建议通过{pattern_type}补充。"
            )

    def _calculate_priority(self, folder_name: str, suggestion: str, existing_count: int, index: int) -> int:
        """计算优先级"""
        if existing_count == 0:
            return 1  # 空文件夹全部高优

        # 通用场景优先（覆盖面广）
        if index < 2:
            return 1

        # 中间优先级
        if index < 5:
            return 2

        return 3


def format_suggestions_report(suggestions: List[GapSuggestion], folder_name: str) -> str:
    """格式化建议报告"""
    if not suggestions:
        return f"「{folder_name}」分类已较为完善，无需强制补全。"

    lines = []
    lines.append(f"\n📋 「{folder_name}」补全建议（共 {len(suggestions)} 项）：")
    lines.append("-" * 60)

    for i, s in enumerate(suggestions, 1):
        priority_label = {1: "🔴高", 2: "🟡中", 3: "🔵低"}.get(s.priority, "⚪")
        lines.append(f"\n  {i}. {s.suggested_name} {priority_label}")
        lines.append(f"     文件名：{s.suggested_filename}")
        lines.append(f"     类型：{s.pattern_type}")
        lines.append(f"     理由：{s.rationale}")

    return "\n".join(lines)


def main():
    """命令行测试入口"""
    # 模拟SubfolderResult
    from dataclasses import replace

    mock_result = {
        "name": "内容创作",
        "md_files": [],
        "suggested_expansion": 5
    }

    print(f"模拟分析文件夹：{mock_result['name']}")
    print(f"现有文件数：{len(mock_result['md_files'])}")

    # 需要SubfolderResult对象，这里用dataclass结构模拟
    class MockSubfolder:
        name = "内容创作"
        md_files = []

    analyzer = GapAnalyzer()
    suggestions = analyzer.analyze_folder(MockSubfolder())
    print(format_suggestions_report(suggestions, "内容创作"))

    return suggestions


if __name__ == "__main__":
    main()
