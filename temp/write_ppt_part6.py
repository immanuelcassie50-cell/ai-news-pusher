#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append chapter 6, 7, 8 slides"""

output_path = 'D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/generate-100plus.js'

chapter678 = '''
// ============================================
// CHAPTER 6: 内容识别与筛选 (15 slides)
// ============================================
createSectionSlide("06", "内容识别与筛选", "识别真金，过滤噪音");

// 6-1: 内容四象限
{
  const slide = createContentSlide("内容四象限");
  const quadrants = [
    { name: "核心经验", level: "钻石级", desc: "有完整步骤、明确场景、背后逻辑", action: "深挖+详细记录", color: theme.primary },
    { name: "补充方法", level: "黄金级", desc: "有操作性但不完整", action: "追问完善+标记", color: theme.accent },
    { name: "背景信息", level: "白银级", desc: "有助于理解上下文", action: "简记+标记", color: theme.secondary },
    { name: "信息噪音", level: "破铜烂铁", desc: "无萃取价值", action: "直接跳过", color: "999999" }
  ];
  quadrants.forEach((q, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 2.15;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.55, fill: { color: q.color } });
    slide.addText(q.name + "（" + q.level + "）", { x: x, y: y, w: 4.4, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(q.desc, { x: x + 0.2, y: y + 0.7, w: 4.0, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText("-> " + q.action, { x: x + 0.2, y: y + 1.3, w: 4.0, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: q.color, bold: true });
  });
  addPageNum(slide, 58);
}

// 6-2: 七大价值评估标准
{
  const slide = createContentSlide("七大价值评估标准");
  const standards = [
    { name: "可操作性", desc: "是否包含具体的、可操作的做法" },
    { name: "可迁移性", desc: "是否可以在其他类似场景中复用" },
    { name: "可验证性", desc: "是否可以用具体案例或数据验证" },
    { name: "独特性", desc: "是否是专家独创而非常识内容" },
    { name: "系统性", desc: "是碎片化技巧还是系统方法" },
    { name: "时效性", desc: "是短期技巧还是长期规律" },
    { name: "受众匹配度", desc: "是否符合最终受众的需求" }
  ];
  standards.forEach((s, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i % 4;
    const x = 0.5 + col * 4.7;
    const y = 1.0 + row * 1.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 0.95, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText(s.name, { x: x + 0.2, y: y + 0.15, w: 1.5, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(s.desc, { x: x + 0.2, y: y + 0.5, w: 4.0, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 59);
}

// 6-3: 现场判断三秒法则
{
  const slide = createContentSlide("现场判断三秒法则");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.3, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("专家说完后，给自己3秒钟判断：", { x: 0.7, y: 1.2, w: 8.6, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  slide.addText("这是核心经验？补充信息？还是噪音？", { x: 0.7, y: 1.7, w: 8.6, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const decisions = [
    { choice: "继续追问", color: theme.primary, desc: "有价值的核心内容，值得深挖" },
    { choice: "简要记录", color: theme.secondary, desc: "有参考价值但非核心" },
    { choice: "微笑点头", color: "999999", desc: "礼貌性回应，不做记录" }
  ];
  decisions.forEach((d, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 3.1, y: 2.7, w: 2.9, h: 1.8, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 3.1, y: 2.7, w: 2.9, h: 0.6, fill: { color: d.color }, rectRadius: 0.1 });
    slide.addText(d.choice, { x: 0.5 + i * 3.1, y: 2.7, w: 2.9, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(d.desc, { x: 0.6 + i * 3.1, y: 3.45, w: 2.7, h: 0.9, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  addPageNum(slide, 60);
}

// 6-4: 记录原则
{
  const slide = createContentSlide("记录原则");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.8, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText("核心内容：详细记录 | 补充信息：标记要点 | 背景信息：简要记录 | 噪音：忽略", { x: 0.5, y: 1.1, w: 9, h: 0.8, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });
  const principles = [
    ["记原话", "记录专家的原话，不加入自己的解读"],
    ["记情境", "描述具体的场景和条件"],
    ["记步骤", "操作性的步骤要完整记录"],
    ["记原因", "决策背后的逻辑要追出来"],
    ["记案例", "让专家举例，用案例验证"]
  ];
  principles.forEach((p, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 2.1 + row * 1.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 0.95, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText("V " + p[0], { x: x + 0.2, y: y + 0.1, w: 4, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(p[1], { x: x + 0.2, y: y + 0.5, w: 4, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 61);
}

// 6-5: 快速判断练习
{
  const slide = createContentSlide("快速判断练习");
  slide.addText("判断以下内容属于哪个象限？", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const items = [
    { quote: "\"处理投诉第一步是安抚情绪，第二步是了解问题...\"", quadrant: "核心经验" },
    { quote: "\"当时公司刚成立，只有3个人...\"", quadrant: "背景信息" },
    { quote: "\"这个问题嘛，我也没遇到过...\"", quadrant: "信息噪音" },
    { quote: "\"还可以试试看在官网上提交工单...\"", quadrant: "补充方法" }
  ];
  items.forEach((item, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.7 + i * 0.95, w: 9, h: 0.85, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText("专家说：" + item.quote, { x: 0.7, y: 1.75 + i * 0.95, w: 6.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
    slide.addText("判断：" + item.quadrant, { x: 7.3, y: 1.75 + i * 0.95, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  });
  addPageNum(slide, 62);
}

// 6-6: 章节小结
{
  const slide = createContentSlide("章节小结：内容筛选要点");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.0, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("识别真金，过滤噪音", { x: 0.5, y: 1.1, w: 9, h: 1.0, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const points = [
    "内容四象限：核心经验/补充方法/背景信息/信息噪音",
    "七大价值评估标准：可操作性、可迁移性、可验证性...",
    "三秒法则：快速判断，继续追问/简要记录/微笑点头",
    "记录原则：记原话、记情境、记步骤、记原因、记案例"
  ];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.3 + i * 0.8, w: 9, h: 0.7, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText(String(i + 1) + ". " + p, { x: 0.7, y: 2.35 + i * 0.8, w: 8.6, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 63);
}

// ============================================
// CHAPTER 7: 访谈整理与价值输出 (15 slides)
// ============================================
createSectionSlide("07", "访谈整理与价值输出", "四步整理法，五类输出产品");

// 7-1: 四步整理法
{
  const slide = createContentSlide("四步整理法");
  const steps = [
    { num: "1", title: "录音转文字", desc: "完整转录，不删减" },
    { num: "2", title: "内容分类", desc: "按四象限分类" },
    { num: "3", title: "价值筛选", desc: "按七大标准评估" },
    { num: "4", title: "结构化输出", desc: "形成知识产品" }
  ];
  steps.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.1, w: 2.15, h: 3.0, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.OVAL, { x: x + 0.68, y: 1.4, w: 0.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(s.num, { x: x + 0.68, y: 1.4, w: 0.8, h: 0.8, fontSize: 28, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.title, { x: x + 0.1, y: 2.4, w: 1.95, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(s.desc, { x: x + 0.1, y: 2.95, w: 1.95, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
    if (i < 3) {
      slide.addShape(pres.shapes.RECTANGLE, { x: x + 2.15, y: 2.5, w: 0.2, h: 0.04, fill: { color: theme.accent } });
    }
  });
  addPageNum(slide, 65);
}

// 7-2: 录音转文字规范
{
  const slide = createContentSlide("录音转文字规范");
  const specs = [
    ["格式要求", "Word文档，标题包含访谈主题、专家姓名、日期"],
    ["字体字号", "正文宋体小四，1.5倍行距"],
    ["转录原则", "保持原话，标注停顿和沉默，对话加引号"],
    ["角色标注", "【萃取者】：【专家】：的形式标注说话人"],
    ["特殊标注", "笑声、叹气、沉默等用【】标注，如【沉默5秒】"],
    ["质量检查", "转录完成后播放录音对照，确保无误"]
  ];
  specs.forEach((s, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(s[0], { x: x + 0.2, y: y + 0.15, w: 4, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(s[1], { x: x + 0.2, y: y + 0.55, w: 4, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 66);
}

// 7-3: 内容分类标注方法
{
  const slide = createContentSlide("内容分类标注方法");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.9, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText("在转录文档中用不同颜色或符号标注：", { x: 0.7, y: 1.2, w: 8.6, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  const tags = [
    { type: "核心经验", mark: "◆", color: theme.primary, example: "◆【核心】处理客户投诉的第一步是..." },
    { type: "补充方法", mark: "<>", color: theme.accent, example: "<>【补充】这种情况还可以..." },
    { type: "背景信息", mark: "○", color: theme.secondary, example: "○【背景】当时公司刚成立..." },
    { type: "噪音", mark: "X", color: "999999", example: "X【噪音】聊天内容..." }
  ];
  tags.forEach((t, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.2 + i * 0.8, w: 9, h: 0.7, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText(t.mark, { x: 0.7, y: 2.25 + i * 0.8, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: t.color, bold: true });
    slide.addText(t.type, { x: 1.3, y: 2.25 + i * 0.8, w: 1.5, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: t.color, bold: true });
    slide.addText(t.example, { x: 3.0, y: 2.25 + i * 0.8, w: 6.3, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 67);
}

// 7-4: 五类输出产品
{
  const slide = createContentSlide("五类输出产品");
  const outputs = [
    { name: "方法论文章", desc: "系统化呈现专家方法", pages: "5-10页" },
    { name: "案例集", desc: "典型情境和处理方式", pages: "10-20页" },
    { name: "话术指南", desc: "标准话术和应对策略", pages: "3-8页" },
    { name: "检查清单", desc: "操作步骤和注意事项", pages: "1-3页" },
    { name: "培训课件", desc: "可直接用于教学", pages: "20-50页" }
  ];
  outputs.forEach((o, i) => {
    const col = i < 3 ? 0 : 1;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 2.2;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.55, fill: { color: theme.primary } });
    slide.addText(o.name, { x: x, y: y, w: 4.4, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(o.desc, { x: x + 0.2, y: y + 0.7, w: 4.0, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText("参考篇幅：" + o.pages, { x: x + 0.2, y: y + 1.4, w: 4.0, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent });
  });
  addPageNum(slide, 68);
}

// 7-5: 方法论文章结构模板
{
  const slide = createContentSlide("方法论文章结构模板");
  const sections = [
    ["标题", "主题名称 + 「经验萃取」"],
    ["引言", "背景、问题、本文将分享什么"],
    ["核心方法", "方法名称 + 适用场景"],
    ["步骤详解", "操作步骤 + 要点说明"],
    ["案例展示", "典型案例 + 效果数据"],
    ["注意事项", "常见误区 + 关键提醒"],
    ["总结", "核心要点 + 行动建议"]
  ];
  sections.forEach((s, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 0.6, w: 2.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.06 });
    slide.addText(s[0], { x: 0.5, y: 1.1 + i * 0.6, w: 2.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s[1], { x: 3.2, y: 1.15 + i * 0.6, w: 6.3, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 69);
}

// 7-6: 章节小结
{
  const slide = createContentSlide("章节小结：整理输出要点");
  const points = [
    "四步整理法：录音转文字->内容分类->价值筛选->结构化输出",
    "录音转文字要保持原话，标注角色和特殊标记",
    "用四象限法分类：核心经验/补充方法/背景信息/噪音",
    "五类输出产品：方法论文章、案例集、话术指南、检查清单、培训课件"
  ];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 1.0, w: 9, h: 0.9, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.OVAL, { x: 0.65, y: 1.25 + i * 1.0, w: 0.4, h: 0.4, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.65, y: 1.25 + i * 1.0, w: 0.4, h: 0.4, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p, { x: 1.2, y: 1.15 + i * 1.0, w: 8.1, h: 0.7, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 70);
}

// ============================================
// CHAPTER 8: 综合实战与迭代优化 (15 slides)
// ============================================
createSectionSlide("08", "综合实战与迭代优化", "PDCA循环，持续改进");

// 8-1: 五步萃取闭环
{
  const slide = createContentSlide("五步萃取闭环");
  const steps = [
    { name: "定目标", desc: "明确萃取主题" },
    { name: "做访谈", desc: "执行访谈流程" },
    { name: "做整理", desc: "整理访谈内容" },
    { name: "出成果", desc: "输出知识产品" },
    { name: "验效果", desc: "验证成果质量" }
  ];
  steps.forEach((s, i) => {
    const x = 0.5 + i * 1.9;
    slide.addShape(pres.shapes.OVAL, { x: x + 0.45, y: 1.3, w: 0.9, h: 0.9, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: x + 0.45, y: 1.3, w: 0.9, h: 0.9, fontSize: 24, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.name, { x: x, y: 2.4, w: 1.8, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(s.desc, { x: x, y: 2.9, w: 1.8, h: 0.5, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
    if (i < 4) {
      slide.addShape(pres.shapes.RECTANGLE, { x: x + 1.8, y: 1.7, w: 0.1, h: 0.04, fill: { color: theme.accent } });
    }
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.6, w: 9, h: 1.5, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("PDCA改进模型", { x: 0.7, y: 3.8, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const pdca = [
    { letter: "P", name: "Plan", desc: "制定萃取计划" },
    { letter: "D", name: "Do", desc: "执行访谈整理" },
    { letter: "C", name: "Check", desc: "评估萃取效果" },
    { letter: "A", name: "Act", desc: "优化改进升级" }
  ];
  pdca.forEach((p, i) => {
    slide.addShape(pres.shapes.OVAL, { x: 0.7 + i * 2.2, y: 4.3, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(p.letter, { x: 0.7 + i * 2.2, y: 4.3, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p.name + "：" + p.desc, { x: 1.3 + i * 2.2, y: 4.35, w: 1.5, h: 0.4, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 72);
}

// 8-2: 一次完整访谈流程
{
  const slide = createContentSlide("一次完整访谈流程");
  const phases = [
    { phase: "访谈前（1-2天）", tasks: ["明确萃取目标", "研究专家背景", "设计访谈提纲", "确认时间场地"] },
    { phase: "访谈中（1-2小时）", tasks: ["开场建立关系", "背景了解", "核心内容挖掘", "收尾确认"] },
    { phase: "访谈后（1-3天）", tasks: ["录音转文字", "内容分类标注", "价值筛选", "结构化输出"] }
  ];
  phases.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 3.1, y: 1.1, w: 2.9, h: 3.8, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 3.1, y: 1.1, w: 2.9, h: 0.6, fill: { color: theme.primary } });
    slide.addText(p.phase, { x: 0.5 + i * 3.1, y: 1.1, w: 2.9, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    p.tasks.forEach((task, j) => {
      slide.addText("• " + task, { x: 0.6 + i * 3.1, y: 1.9 + j * 0.7, w: 2.7, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    });
  });
  addPageNum(slide, 73);
}

// 8-3: 访谈质量检查清单
{
  const slide = createContentSlide("访谈质量检查清单");
  const checks = [
    ["目标达成", "是否达到访谈前的预期目标？"],
    ["内容完整", "核心经验是否有遗漏？"],
    ["深度足够", "是否挖到了背后的逻辑？"],
    ["案例丰富", "是否有足够的案例支撑？"],
    ["逻辑清晰", "整理输出是否结构化？"],
    ["专家认可", "专家是否确认内容准确？"]
  ];
  checks.forEach((c, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText("[ ] " + c[0], { x: x + 0.2, y: y + 0.15, w: 4, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(c[1], { x: x + 0.2, y: y + 0.65, w: 4, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 74);
}

// 8-4: 常见问题与应对
{
  const slide = createContentSlide("常见问题与应对");
  const problems = [
    { problem: "专家不配合", solutions: ["强调萃取对他本人的价值", "从轻松话题切入建立关系", "请领导或同事协助推动"] },
    { problem: "内容太碎片", solutions: ["引导还原完整流程", "追问步骤之间的关联", "事后自己补充逻辑串联"] },
    { problem: "时间不够用", solutions: ["提前标记优先级", "准备备用问题", "安排二次访谈"] },
    { problem: "专家太谦虚", solutions: ["请举具体例子验证", "追问具体数据和效果", "用假设性提问引导"] }
  ];
  problems.forEach((p, i) => {
    const col = i < 2 ? 0 : 1;
    const row = i % 2;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 2.15;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.5, fill: { color: theme.accent } });
    slide.addText("问题：" + p.problem, { x: x, y: y, w: 4.4, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    p.solutions.forEach((s, j) => {
      slide.addText("• " + s, { x: x + 0.2, y: y + 0.65 + j * 0.45, w: 4.0, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    });
  });
  addPageNum(slide, 75);
}

// 8-5: 萃取能力提升路径
{
  const slide = createContentSlide("萃取能力提升路径");
  const levels = [
    { level: "初级", desc: "能独立完成一次访谈", skills: "掌握基本流程和提问技巧" },
    { level: "中级", desc: "能处理复杂访谈场景", skills: "熟练运用七术，应对突发状况" },
    { level: "高级", desc: "能萃取复杂主题经验", skills: "深度追问，系统整理，输出高质量产品" },
    { level: "专家", desc: "能培训其他人萃取", skills: "传授方法，培养团队，建立萃取体系" }
  ];
  levels.forEach((l, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 1.1, w: 9, h: 1.0, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1 + i * 1.1, w: 1.5, h: 1.0, fill: { color: theme.accent } });
    slide.addText(l.level, { x: 0.5, y: 1.1 + i * 1.1, w: 1.5, h: 1.0, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(l.desc, { x: 2.2, y: 1.15 + i * 1.1, w: 3, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("关键能力：" + l.skills, { x: 2.2, y: 1.6 + i * 1.1, w: 7, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 76);
}

// 8-6: 课程总结
{
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: theme.bg } });
  slide.addText("课程总结", { x: 0.6, y: 0.5, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.light });
  slide.addText("萃取专家经验的四大关键", { x: 0.6, y: 1.0, w: 8.8, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.bg, bold: true });
  const points = [
    { num: "01", title: "明定位", desc: "萃取者是翻译官，不是记录员" },
    { num: "02", title: "做准备", desc: "70%的成功取决于准备" },
    { num: "03", title: "会提问", desc: "追问七术，深挖隐性经验" },
    { num: "04", title: "能判断", desc: "识别真金，过滤噪音" }
  ];
  points.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.6 + col * 4.6;
    const y = 2.0 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.3, h: 1.2, fill: { color: theme.bg, transparency: 10 }, rectRadius: 0.08 });
    slide.addText(p.num, { x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.5, fontSize: 24, fontFace: "Arial", color: theme.accent, bold: true });
    slide.addText(p.title, { x: x + 0.9, y: y + 0.2, w: 3, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: x + 0.9, y: y + 0.7, w: 3.2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.8, w: 8.8, h: 0.04, fill: { color: theme.accent } });
  slide.addText("萃取者的价值，在于识别真正的金矿，而不是在废石堆里浪费时间。", { x: 0.6, y: 4.95, w: 8.8, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.light, italic: true });
  addPageNum(slide, 77);
}

// 8-7: 结束页
{
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.1, fill: { color: theme.bg } });
  slide.addShape(pres.shapes.OVAL, { x: 3.5, y: 1.0, w: 3, h: 3, fill: { color: theme.bg, transparency: 90 } });
  slide.addShape(pres.shapes.OVAL, { x: 4.0, y: 1.5, w: 2, h: 2, fill: { color: theme.accent, transparency: 70 } });
  slide.addText("感谢学习", { x: 0, y: 2.0, w: 10, h: 1.0, fontSize: 48, fontFace: "Microsoft YaHei", color: theme.bg, bold: true, align: "center", valign: "middle" });
  slide.addText("专家经验萃取：访谈技术", { x: 0, y: 3.2, w: 10, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.light, align: "center" });
  slide.addShape(pres.shapes.RECTANGLE, { x: 4, y: 4.0, w: 2, h: 0.06, fill: { color: theme.accent } });
  slide.addText("祝您萃取顺利！", { x: 0, y: 4.3, w: 10, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.light, align: "center" });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.525, w: 10, h: 0.1, fill: { color: theme.bg } });
}

// ============================================
// SAVE
// ============================================
const outputPath = "D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/专家经验萃取_访谈技术_完整版.pptx";
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log("\\n========================================");
    console.log("Presentation created: " + outputPath);
    console.log("Total slides: " + slideNum);
    console.log("========================================");
  })
  .catch(err => {
    console.error("Error:", err);
  });
'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(chapter678)
print(f"Part 6 written: {len(chapter678)} chars")
