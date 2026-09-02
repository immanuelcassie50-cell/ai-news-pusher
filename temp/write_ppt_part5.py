#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append chapter 5 slides"""

output_path = 'D:/新课开发/经验萃取/访谈-2/完整课程包/10_授课PPT/generate-100plus.js'

chapter5 = '''
// ============================================
// CHAPTER 5: 现场控制与节奏管理 (15 slides)
// ============================================
createSectionSlide("05", "现场控制与节奏管理", "时间、节奏、话题、情绪");

// 5-1: 时间管理三原则
{
  const slide = createContentSlide("时间管理三原则");
  const principles = [
    { title: "预留20%缓冲", desc: "每个话题预留缓冲时间，避免时间紧张导致的遗漏" },
    { title: "关键点延长", desc: "遇到关键点可适当延长，充分挖掘价值内容" },
    { title: "灵活调整", desc: "避免严格限制，在时间内达成访谈目标即可" }
  ];
  principles.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 1.4, w: 9, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1 + i * 1.4, w: 0.5, h: 1.2, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.5, y: 1.1 + i * 1.4, w: 0.5, h: 1.2, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p.title, { x: 1.2, y: 1.25 + i * 1.4, w: 8, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: 1.2, y: 1.7 + i * 1.4, w: 8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 50);
}

// 5-2: 节奏把控四步骤
{
  const slide = createContentSlide("节奏把控四步骤");
  const steps = [
    { name: "开场暖场", desc: "轻松话题切入，建立信任关系" },
    { name: "主题切入", desc: "逐步深入核心话题" },
    { name: "深度挖掘", desc: "在关键点上充分展开" },
    { name: "收尾确认", desc: "总结要点，确认遗漏" }
  ];
  steps.forEach((s, i) => {
    slide.addShape(pres.shapes.OVAL, { x: 0.5 + i * 2.35, y: 1.5, w: 0.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.5 + i * 2.35, y: 1.5, w: 0.8, h: 0.8, fontSize: 24, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.name, { x: 0.5 + i * 2.35, y: 2.5, w: 2.15, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(s.desc, { x: 0.5 + i * 2.35, y: 3.0, w: 2.15, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
    if (i < 3) {
      slide.addShape(pres.shapes.RECTANGLE, { x: 1.3 + i * 2.35, y: 1.85, w: 1.55, h: 0.04, fill: { color: theme.accent } });
    }
  });
  addPageNum(slide, 51);
}

// 5-3: 话题控制技巧
{
  const slide = createContentSlide("话题控制技巧");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 4.3, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("拉回正题", { x: 0.7, y: 1.2, w: 3.9, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("当话题偏离时：\\n• 温柔打断：\"您提到的这个很有意思，我们回头再聊，现在先说...\"\\n• 顺势引导：将话题与目标关联", { x: 0.7, y: 1.65, w: 3.9, h: 1.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.1, w: 4.3, h: 2.0, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("深度延展", { x: 5.4, y: 1.2, w: 3.9, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("当遇到关键点时：\\n• \"这个很关键，能详细说说吗？\"\\n• \"这个案例能展开讲讲吗？\"\\n• 适当延长此话题", { x: 5.4, y: 1.65, w: 3.9, h: 1.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.3, w: 9, h: 1.8, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("话题转换技巧", { x: 0.7, y: 3.45, w: 8.6, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("好的转场语：\"您提到的X让我想到...\" \"我们接着聊...\" \"关于这点，还有一个关键问题...\"", { x: 0.7, y: 3.9, w: 8.6, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  addPageNum(slide, 52);
}

// 5-4: 情绪管理
{
  const slide = createContentSlide("情绪管理");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.2, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("情绪是访谈中的重要信号", { x: 0.5, y: 1.1, w: 9, h: 1.2, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const emotions = [
    { type: "兴奋", signal: "眼睛发亮，语速加快", response: "顺势深入追问" },
    { type: "沮丧", signal: "叹气，声音低沉", response: "给予空间，择机再问" },
    { type: "防御", signal: "语气变硬，语速变慢", response: "放缓节奏，换个角度" },
    { type: "回避", signal: "眼神飘移，转移话题", response: "温和确认，不强迫" }
  ];
  emotions.forEach((e, i) => {
    const col = i < 2 ? 0 : 1;
    const row = i % 2;
    const x = 0.5 + col * 4.7;
    const y = 2.5 + row * 1.4;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addText(e.type, { x: x + 0.2, y: y + 0.1, w: 1.0, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText("表现：" + e.signal, { x: x + 0.2, y: y + 0.5, w: 4.0, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText("应对：" + e.response, { x: x + 0.2, y: y + 0.8, w: 4.0, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  addPageNum(slide, 53);
}

// 5-5: 访谈现场突发状况处理
{
  const slide = createContentSlide("访谈现场突发状况处理");
  const scenarios = [
    { scenario: "专家突然沉默", solution: "给专家思考时间，可以说\"不着急，您慢慢想\"" },
    { scenario: "话题偏离太远", solution: "温和打断，用转场语拉回正题" },
    { scenario: "时间不够用", solution: "优先保证核心内容，延长时间或安排二次访谈" },
    { scenario: "专家情绪激动", solution: "暂停追问，给予安慰，确认是否继续" }
  ];
  scenarios.forEach((s, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 1.05, w: 9, h: 0.9, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText("状况：" + s.scenario, { x: 0.7, y: 1.15 + i * 1.05, w: 8.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("应对：" + s.solution, { x: 0.7, y: 1.5 + i * 1.05, w: 8.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 54);
}

// 5-6: 关键对话时刻
{
  const slide = createContentSlide("关键对话时刻的把握");
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1, w: 9, h: 1.0, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("识别关键对话时刻，及时深入追问", { x: 0.5, y: 1.1, w: 9, h: 1.0, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const moments = [
    { signal: "专家说\"关键在于...\"", action: "立即停下来，深入追问" },
    { signal: "专家说\"那次例外...\"", action: "追问例外情况，了解边界" },
    { signal: "专家说\"一般来说...\"", action: "追问一般规律和特殊情况" },
    { signal: "专家情绪明显变化", action: "关注情绪信号，深入探索原因" }
  ];
  moments.forEach((m, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.3 + i * 0.8, w: 9, h: 0.7, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addText("信号：" + m.signal, { x: 0.7, y: 2.35 + i * 0.8, w: 4, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText("行动：" + m.action, { x: 5, y: 2.35 + i * 0.8, w: 4.3, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  addPageNum(slide, 55);
}

// 5-7: 章节小结
{
  const slide = createContentSlide("章节小结：现场控制要点");
  const points = [
    "时间管理：预留20%缓冲，灵活调整",
    "节奏把控：暖场->切入->深挖->收尾",
    "话题控制：拉回正题和深度延展相结合",
    "情绪管理：识别情绪信号，及时调整策略",
    "关键时刻：识别关键对话时刻，深入追问"
  ];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.1 + i * 0.85, w: 9, h: 0.75, fill: { color: theme.light }, rectRadius: 0.06 });
    slide.addShape(pres.shapes.OVAL, { x: 0.65, y: 1.2 + i * 0.85, w: 0.4, h: 0.4, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.65, y: 1.2 + i * 0.85, w: 0.4, h: 0.4, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p, { x: 1.2, y: 1.15 + i * 0.85, w: 8.1, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  addPageNum(slide, 56);
}

'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(chapter5)
print(f"Part 5 written: {len(chapter5)} chars")
