#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append chapter 3 slides"""

output_path = 'D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/generate-100plus.js'

chapter3 = '''
// ============================================
// CHAPTER 3: 访谈前准备 (20 slides)
// ============================================
createSectionSlide("03", "访谈前准备与计划", "成功的访谈，70%取决于准备");

// 3-1: 六维准备概述
{
  const slide = createContentSlide("六维准备检查表");
  const dims = [
    { name: "目标维度", desc: "明确萃取目标和预期成果" },
    { name: "专家维度", desc: "研究专家背景和经验领域" },
    { name: "问题维度", desc: "设计访谈提纲和关键问题" },
    { name: "时间维度", desc: "规划时间分配和节奏" },
    { name: "环境维度", desc: "确认场地、设备、录音" },
    { name: "心态维度", desc: "做好心理准备和状态调整" }
  ];
  dims.forEach((d, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.OVAL, { x: x + 0.2, y: y + 0.35, w: 0.5, h: 0.5, fill: { color: theme.primary } });
    slide.addText(String(i + 1), { x: x + 0.2, y: y + 0.35, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(d.name, { x: x + 0.9, y: y + 0.2, w: 3.3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(d.desc, { x: x + 0.9, y: y + 0.6, w: 3.3, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 18);
}

// 3-2: 目标维度详解
{
  const slide = createContentSlide("目标维度：明确萃取目标");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.2, w: 9, h: 1.5, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("萃取目标三问", { x: 0.7, y: 1.35, w: 8.6, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("1. 你想要萃取什么主题的经验？\\n2. 这些经验解决什么问题？\\n3. 谁是最终受众？", { x: 0.7, y: 1.8, w: 8.6, h: 0.8, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  const examples = [
    { title: "主题明确", example: "客户投诉处理 -> 化解客户投诉的三步法" },
    { title: "问题导向", example: "新员工入职 -> 90天快速融入的实战指南" },
    { title: "受众匹配", example: "销售团队 -> 百万级订单的攻克策略" }
  ];
  examples.forEach((ex, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.9 + i * 0.85, w: 9, h: 0.75, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText(ex.title, { x: 0.7, y: 2.95 + i * 0.85, w: 1.5, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(ex.example, { x: 2.3, y: 2.95 + i * 0.85, w: 7, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 19);
}

// 3-3: 目标设定练习
{
  const slide = createContentSlide("练习：设定萃取目标");
  slide.addText("请为以下场景设定萃取目标", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const scenarios = [
    { scenario: "场景1：资深销售总监", hint: "提示：关注如何与大客户建立长期关系" },
    { scenario: "场景2：技术架构师", hint: "提示：关注如何做技术选型和架构设计" },
    { scenario: "场景3：客服主管", hint: "提示：关注如何处理重大客户投诉" }
  ];
  scenarios.forEach((s, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.7 + i * 1.2, w: 9, h: 1.1, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(s.scenario, { x: 0.7, y: 1.8 + i * 1.2, w: 8.6, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(s.hint, { x: 0.7, y: 2.2 + i * 1.2, w: 8.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
  });
  addPageNum(slide, 20);
}

// 3-4: 专家维度详解
{
  const slide = createContentSlide("专家维度：了解专家背景");
  slide.addText("访谈前必须了解", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const info = [
    ["工作经历", "在哪些公司/岗位工作过"],
    ["核心成就", "最突出的业绩是什么"],
    ["擅长领域", "在哪些方面是专家"],
    ["代表案例", "有哪些经典成功案例"],
    ["性格特点", "健谈还是内敛"],
    ["表达习惯", "习惯用哪些术语"]
  ];
  info.forEach((item, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.7 + row * 1.3;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 2.9, h: 1.1, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(item[0], { x: x + 0.15, y: y + 0.15, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(item[1], { x: x + 0.15, y: y + 0.55, w: 2.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 21);
}

// 3-5: 专家信息收集方法
{
  const slide = createContentSlide("专家信息收集方法");
  const methods = [
    { title: "简历分析", desc: "查看专家简历，了解职业发展轨迹" },
    { title: "业绩查询", desc: "了解其主导的项目和取得的成绩" },
    { title: "访谈同事", desc: "从同事处了解专家的专业领域和特点" },
    { title: "过往资料", desc: "查看专家以前的分享材料或文章" }
  ];
  methods.forEach((m, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 1.05, w: 9, h: 0.9, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addShape(pres.shapes.OVAL, { x: 0.7, y: 1.3 + i * 1.05, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.7, y: 1.3 + i * 1.05, w: 0.5, h: 0.5, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(m.title, { x: 1.4, y: 1.2 + i * 1.05, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(m.desc, { x: 1.4, y: 1.55 + i * 1.05, w: 7.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 22);
}

// 3-6: 问题维度详解
{
  const slide = createContentSlide("问题维度：设计访谈提纲");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.3, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("提纲设计原则", { x: 0.7, y: 1.2, w: 8.6, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("先开放后封闭 | 先整体后细节 | 先过去后未来 | 先结果后过程", { x: 0.7, y: 1.65, w: 8.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("访谈提纲结构", { x: 0.5, y: 2.6, w: 9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const structure = [
    { part: "开场", desc: "建立关系，说明目的" },
    { part: "背景", desc: "了解经历和经验领域" },
    { part: "核心", desc: "深挖关键经验和案例" },
    { part: "收尾", desc: "补充遗漏，确认重点" }
  ];
  structure.forEach((s, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 2.35, y: 3.1, w: 2.15, h: 1.6, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.OVAL, { x: 1.3 + i * 2.35, y: 3.25, w: 0.55, h: 0.55, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 1.3 + i * 2.35, y: 3.25, w: 0.55, h: 0.55, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.part, { x: 0.5 + i * 2.35, y: 3.9, w: 2.15, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(s.desc, { x: 0.5 + i * 2.35, y: 4.3, w: 2.15, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  addPageNum(slide, 23);
}

// 3-7: 问题类型
{
  const slide = createContentSlide("问题类型：封闭 vs 开放");
  const types = [
    { type: "封闭性问题", example: "您每天花多少时间回复客户？", use: "获取具体数据和时间", color: theme.secondary },
    { type: "开放性问题", example: "您是如何维护大客户的？请详细说说。", use: "让专家自由展开，挖掘更多信息", color: theme.primary }
  ];
  types.forEach((t, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 2.0, w: 9, h: 1.8, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1 + i * 2.0, w: 2.5, h: 1.8, fill: { color: t.color } });
    slide.addText(t.type, { x: 0.5, y: 1.1 + i * 2.0, w: 2.5, h: 1.8, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText("示例：" + t.example, { x: 3.2, y: 1.3 + i * 2.0, w: 6.1, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true });
    slide.addText("使用场景：" + t.use, { x: 3.2, y: 2.0 + i * 2.0, w: 6.1, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  addPageNum(slide, 24);
}

// 3-8: 时间分配模型
{
  const slide = createContentSlide("时间分配模型");
  const cols = [
    { title: "预留20%缓冲", items: ["10分钟->12分钟", "20分钟->24分钟", "30分钟->36分钟"] },
    { title: "关键点延长", items: ["专家有独到见解时", "出现典型案例时", "触及核心经验时"] },
    { title: "避免遗漏", items: ["不因赶时间跳过细节", "确保要点充分展开", "记录未完成话题"] }
  ];
  cols.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 3.8, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.OVAL, { x: x + 1.05, y: 1.3, w: 0.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: x + 1.05, y: 1.3, w: 0.8, h: 0.8, fontSize: 24, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(c.title, { x: x + 0.1, y: 2.2, w: 2.7, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    c.items.forEach((item, j) => {
      slide.addText("• " + item, { x: x + 0.2, y: 2.8 + j * 0.6, w: 2.5, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    });
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.45, fill: { color: theme.secondary, transparency: 90 }, line: { color: theme.secondary, width: 1 }, rectRadius: 0.05 });
  slide.addText("提示：灵活调整而非严格限制，在时间内达成访谈目标即可", { x: 0.5, y: 5.0, w: 9, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });
  addPageNum(slide, 25);
}

// 3-9: 环境维度
{
  const slide = createContentSlide("环境维度：场地与设备准备");
  const checklist = [
    ["场地选择", "安静、独立、不被打扰的空间"],
    ["座位安排", "90度角或并排坐，避免对面隔桌"],
    ["录音设备", "提前测试，确保录音清晰"],
    ["笔记工具", "准备专用的访谈记录本"],
    ["提纲打印", "访谈提纲打印或平板展示"],
    ["时间提醒", "准备手表或计时器"]
  ];
  checklist.forEach((item, i) => {
    const col = i < 3 ? 0 : 1;
    const row = i % 3;
    const x = 0.5 + col * 4.7;
    const y = 1.1 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText("V " + item[0], { x: x + 0.2, y: y + 0.2, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(item[1], { x: x + 0.2, y: y + 0.65, w: 4, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 26);
}

// 3-10: 心态维度
{
  const slide = createContentSlide("心态维度：萃取者心理准备");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.0, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("「空杯心态」：不带预设，不给结论，不急于评判", {
    x: 0.5, y: 1.1, w: 9, h: 1.0, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  const mindsets = [
    { title: "好奇", desc: "对专家的经验充满好奇" },
    { title: "尊重", desc: "尊重专家的时间和经验" },
    { title: "耐心", desc: "不急于求成，顺着专家节奏" },
    { title: "敏锐", desc: "捕捉关键细节和情绪变化" }
  ];
  mindsets.forEach((m, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5 + i * 2.35, y: 2.4, w: 2.15, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.OVAL, { x: 1.3 + i * 2.35, y: 2.65, w: 0.55, h: 0.55, fill: { color: theme.accent } });
    slide.addText(m.title, { x: 0.5 + i * 2.35, y: 3.35, w: 2.15, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(m.desc, { x: 0.5 + i * 2.35, y: 3.8, w: 2.15, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
  });
  addPageNum(slide, 27);
}

// 3-11: 准备检查清单
{
  const slide = createContentSlide("访谈前检查清单");
  const checks = [
    ["明确萃取目标", "是", "否"],
    ["了解专家背景", "是", "否"],
    ["设计访谈提纲", "是", "否"],
    ["确认时间安排", "是", "否"],
    ["预约访谈场地", "是", "否"],
    ["测试录音设备", "是", "否"],
    ["准备笔记工具", "是", "否"],
    ["调整好心态", "是", "否"]
  ];
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("检查项", { x: 0.7, y: 1.1, w: 5, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, valign: "middle" });
  slide.addText("准备就绪", { x: 6.5, y: 1.1, w: 1.5, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("未准备", { x: 8.2, y: 1.1, w: 1.1, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  checks.forEach((c, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.8 + i * 0.45, w: 9, h: 0.4, fill: { color: i % 2 === 0 ? theme.light : theme.bg }, rectRadius: 0.05 });
    slide.addText(c[0], { x: 0.7, y: 1.8 + i * 0.45, w: 5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
    slide.addText("[ ]", { x: 6.5, y: 1.8 + i * 0.45, w: 1.5, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center", valign: "middle" });
    slide.addText("[ ]", { x: 8.2, y: 1.8 + i * 0.45, w: 1.1, h: 0.4, fontSize: 14, fontFace: "Arial", color: theme.secondary, align: "center", valign: "middle" });
  });
  addPageNum(slide, 28);
}

// 3-12: 章节小结
{
  const slide = createContentSlide("章节小结：准备的重要性");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.2, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("成功的访谈，70%取决于准备", { x: 0.5, y: 1.1, w: 9, h: 1.2, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const points = [
    "目标维度：明确萃取主题、问题和受众",
    "专家维度：充分了解专家背景和特点",
    "问题维度：设计开放与封闭相结合的问题",
    "时间维度：预留缓冲，灵活调整",
    "环境维度：确保场地安静、设备正常",
    "心态维度：保持空杯心态，不带预设"
  ];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.5 + i * 0.5, w: 9, h: 0.45, fill: { color: theme.light }, rectRadius: 0.05 });
    slide.addText(String(i + 1) + ". " + p, { x: 0.7, y: 2.5 + i * 0.5, w: 8.6, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 29);
}

// 3-13: 案例 - 准备不足的后果
{
  const slide = createContentSlide("案例分析：准备不足的后果");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.5, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("情境", { x: 0.7, y: 1.2, w: 1, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("某萃取者没有充分准备，访谈中才发现专家擅长的领域与预设主题不符，只能临时改变方向。", { x: 0.7, y: 1.6, w: 8.6, h: 0.8, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.8, w: 9, h: 2.3, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("后果与教训", { x: 0.7, y: 3.0, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.light, bold: true });
  const cons = ["浪费了专家的时间", "访谈内容偏离目标", "无法达到预期萃取效果"];
  cons.forEach((c, i) => {
    slide.addText("X " + c, { x: 0.7, y: 3.5 + i * 0.5, w: 8.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  });
  addPageNum(slide, 30);
}

'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(chapter3)
print(f"Part 3 written: {len(chapter3)} chars")
