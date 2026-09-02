---
name: work-handbook
description: "Use this skill when the user wants to create a professional work handbook for any occupation or industry. Triggers include: requests to write a work manual, career handbook, or professional guide for a specific role (e.g. '写一本培训师工作手册', '帮我写销售工作手册', 'create a handbook for my profession'); requests to generate long-form professional writing in the style of Li Dan's work handbook; requests to produce a 40,000-55,000 character structured guide covering work philosophy, methods, and mindset for any career. Also triggers when user provides their professional background and asks to document their working methodology. Do NOT use for short how-to guides, FAQs, onboarding documents, or general writing tasks unrelated to comprehensive career methodology handbooks."
license: "Personal use — 罗宏伟"
---

# 职业工作手册生成器
作者：罗宏伟 | Version 2.1

为任意职业生成4至5.5万字的专属工作手册，继承李诞工作手册的写作基因与密度标准，不复制其内容，在新职业土壤中全新生长。

## 运行环境说明

本Skill设计运行于 Claude Code，执行模型可为中低成本模型（如 MiniMax 2.7 等）。
分工原则：**脚本处理所有可机械判断的事情，模型只处理需要创造力和判断力的事情。**

脚本（`scripts/` 目录）在本地运行，不消耗模型token：
- `validate.py` — 检查已生成内容的格式合规性，输出违规清单
- `track_progress.py` — 统计章节类型分布、字数进度、违规项

模型负责的任务：公理提炼、章节内容创作、案例生成、金句创作、Q&A写作。
脚本负责的任务：格式检查、类型比例计算、字数统计、禁用词检测。

## 启动前必读（按顺序，不可跳过）

1. `writing-dna.md` — 写作基因系统，所有创作决策的基础
2. `axiom-engine.md` — 公理提炼与四维检验系统
3. `chapter-templates.md` — 三类章节规则

按需读取：
- `quality-checklist.md` — 各阶段输出前自检清单
- `examples/li-dan-text.md` — 李诞原书关键章节+逐段DNA注释，质量锚点
- `examples/example-axioms.md` — 10个职业公理示例对照
- `examples/example-chapters.md` — 完整迁移示例章节
- `examples/example-plans.md` — 完整手册规划示例

**推荐读取顺序**：每次创作前必读前3个，遇到质量疑问先查 `li-dan-text.md`，不确定公理质量查 `example-axioms.md`。

## 五步工作流

**Step 1 · 信息采集**
向用户提出5个问题（问题清单见 writing-dna.md § 信息采集）。允许不完整回答，边聊边补充。

**Step 2 · 公理提炼**
提炼1至2句候选公理，运行四维检验（方法见 axiom-engine.md），输出时附3个推演论点，用户确认后进入下一步。

**Step 3 · 规划输出**
输出完整目录，每章标注类型标签。输出前自行统计：原创新增类章节数 ÷ 总章节数 ≥ 30%，不足则补充后再输出。字数分配合计须在4万至5.5万字区间。用户确认后进入创作。

**Step 4 · 逐章创作**
每次输出1至2章，保存到 `output/` 目录（文件名：`ch01.md`、`ch02.md` 等）。
每章输出后运行：`python scripts/validate.py output/ch0X.md`
有违规则修改，无违规则询问用户继续或调整。
素材不足时继续写作，章末括号标注具体缺失项。

**Step 5 · 收尾与整体验证**
每PART后输出Q&A。全书完成后运行：`python scripts/track_progress.py output/`
确认整体合规后输出"写给同行"结语，合并全书。

## 两类规则

**锁定规则（脚本可检测的，必须通过验证才能提交）**
- 禁止正文bullet list（脚本检测）
- 禁止横线分隔 `---`（脚本检测）
- 禁止"你应该"句式（脚本检测）
- 禁用词句模式（脚本检测，见 writing-dna.md § 禁用词句模式）
- 原创新增类 ≥ 总章节30%（脚本统计）
- 全书字数在4万至5.5万区间（脚本统计）
- 推演案例末尾括号标注（脚本辅助检测）
- 作者署名：罗宏伟

**锁定规则（需模型自检，脚本无法检测的）**
- 一章一论点，标题是结论不是话题
- 每章以具体工作场景开场（禁止抽象定义或背景介绍开场）
- 每章以论点收束（3至5句，闭环，禁止在此处总结要点）
- 活人感三件套：矛盾感、承认做不到、稳定叙事人格（需模型自查）

**开放规则（创作自由区，模型自主判断）**
- 金句的具体措辞：符合四模式逻辑即可，允许探索职业特有新模式
- 章节内部展开节奏：两个锚点（场景开场+论点收束）之间有机调整
- 案例选择：哪个场景最能承载论点，模型自主判断
- 语气密度：匹配职业文化，严肃行业降密度保真诚感
- 原创新增类章节内容：完全自由，只遵守写作基因标准
- 叙事人格：由职业文化和用户气质自然生成
- Q&A问题选择：指向主文留白处，模型自主判断

