const fs = require('fs');
const path = require('path');

const theme = {
  primary: "C41E3A",
  secondary: "4A4A4A",
  accent: "8C8C8C",
  light: "D4D4D4",
  bg: "FFFFFF"
};

// Slide definitions - 30 slides for Module 3
const slides = [
  { num: 1, title: "AI杠杆点识别", type: "cover", badge: "", isCover: true },
  { num: 2, title: "AI杠杆点识别", type: "section-divider", badge: 2 },
  { num: 3, title: "什么是AI杠杆点？", type: "content", badge: 3 },
  { num: 4, title: "杠杆点 vs 普通任务", type: "content", badge: 4 },
  { num: 5, title: "高价值任务的三个特征", type: "content", badge: 5 },
  { num: 6, title: "特征一：频率高", type: "content", badge: 6 },
  { num: 7, title: "特征二：价值大", type: "content", badge: 7 },
  { num: 8, title: "特征三：可放大", type: "content", badge: 8 },
  { num: 9, title: "理想目标：三个特征的交汇处", type: "content", badge: 9 },
  { num: 10, title: "识别清单：10个问题", type: "content", badge: 10 },
  { num: 11, title: "识别问题 1-2", type: "content", badge: 11 },
  { num: 12, title: "识别问题 3-4", type: "content", badge: 12 },
  { num: 13, title: "识别问题 5-6", type: "content", badge: 13 },
  { num: 14, title: "识别问题 7-8", type: "content", badge: 14 },
  { num: 15, title: "识别问题 9-10", type: "content", badge: 15 },
  { num: 16, title: "10个问题速查表", type: "content", badge: 16 },
  { num: 17, title: "重要原则：AI能做 ≠ 该让AI做", type: "content", badge: 17 },
  { num: 18, title: "AI介入决策矩阵", type: "content", badge: 18 },
  { num: 19, title: "失败模式一：伪杠杆点", type: "content", badge: 19 },
  { num: 20, title: "失败模式二：能力错配", type: "content", badge: 20 },
  { num: 21, title: "失败模式三：单点幻觉", type: "content", badge: 21 },
  { num: 22, title: "避免失败的三个建议", type: "content", badge: 22 },
  { num: 23, title: "练习：识别你的AI杠杆点", type: "content", badge: 23 },
  { num: 24, title: "练习模板：杠杆点识别表", type: "content", badge: 24 },
  { num: 25, title: "案例：产品经理的杠杆点识别", type: "content", badge: 25 },
  { num: 26, title: "案例分析：谁是高杠杆任务？", type: "content", badge: 26 },
  { num: 27, title: "本节小结（上）", type: "content", badge: 27 },
  { num: 28, title: "本节小结（下）", type: "content", badge: 28 },
  { num: 29, title: "找到杠杆点之后呢？", type: "content", badge: 29 },
  { num: 30, title: "模块三完成", type: "summary", badge: 30 }
];

// Content generators for each slide type
const contentGenerators = {
  1: () => `
  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.18, h: 5.625, fill: { color: theme.primary } });

  // Section number badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.8, w: 0.8, h: 0.8, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("03", { x: 0.5, y: 0.8, w: 0.8, h: 0.8, fontSize: 28, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  // Main title
  slide.addText("AI杠杆点识别", { x: 0.5, y: 1.8, w: 9, h: 1.2, fontSize: 48, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });

  // Subtitle
  slide.addText("高价值任务的三个特征", { x: 0.5, y: 3.0, w: 9, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.7, w: 4, h: 0.05, fill: { color: theme.primary } });

  // Course info badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 4.3, w: 2.5, h: 0.5, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText("课程二 · 模块三", { x: 0.5, y: 4.3, w: 2.5, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, { x: 7.8, y: 1.0, w: 1.2, h: 1.2, fill: { color: theme.primary, transparency: 90 } });
  slide.addShape(pres.shapes.OVAL, { x: 8.5, y: 1.8, w: 0.7, h: 0.7, fill: { color: theme.primary, transparency: 85 } });
`,

  2: () => `
  // Large section number
  slide.addText("03", { x: 0.5, y: 1.0, w: 9, h: 2.5, fontSize: 120, fontFace: "Arial", color: "FFFFFF", bold: true, align: "left", valign: "middle", transparency: 80 });

  // Section title
  slide.addText("AI杠杆点识别", { x: 0.5, y: 2.2, w: 9, h: 1.2, fontSize: 44, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "left", valign: "middle" });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.5, w: 2.5, h: 0.06, fill: { color: "FFFFFF" } });

  // Subtitle
  slide.addText("高价值任务的三个特征", { x: 0.5, y: 3.7, w: 9, h: 0.6, fontSize: 20, fontFace: "Microsoft YaHei", color: "FFFFFF", transparency: 20 });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, { x: 7.5, y: 3.5, w: 2.5, h: 2.5, fill: { color: "FFFFFF", transparency: 90 } });
  slide.addShape(pres.shapes.OVAL, { x: 8.2, y: 4.0, w: 1.5, h: 1.5, fill: { color: "FFFFFF", transparency: 85 } });
`,

  3: () => `
  // Definition card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 9.2, h: 1.2, fill: { color: theme.light, transparency: 60 }, rectRadius: 0.1 });
  slide.addText("定义", { x: 0.6, y: 1.2, w: 1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("AI介入后能产生最大价值放大的节点", { x: 0.6, y: 1.55, w: 8.8, h: 0.55, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Formula section
  slide.addText("价值贡献公式", { x: 0.4, y: 2.5, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.95, w: 9.2, h: 1.0, fill: { color: theme.primary, transparency: 92 }, line: { color: theme.primary, width: 2 }, rectRadius: 0.1 });
  slide.addText("价值贡献 = 任务重要性 × AI能力匹配度", { x: 0.4, y: 2.95, w: 9.2, h: 1.0, fontSize: 24, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });

  // Key insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.2, w: 9.2, h: 1.1, fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }, rectRadius: 0.1 });
  slide.addText("关键洞察", { x: 0.6, y: 4.3, w: 2, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("找到那个点，AI的介入能让你整个工作产生质变", { x: 0.6, y: 4.65, w: 8.8, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
`,

  4: () => `
  const cardY = 1.2;
  const cardW = 4.0;
  const cardH = 3.5;

  // Left card - Regular task
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: cardY, w: cardW, h: cardH, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: cardY, w: cardW, h: 0.6, fill: { color: theme.accent } });
  slide.addText("普通任务", { x: 0.4, y: cardY, w: cardW, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("1x", { x: 0.4, y: cardY + 0.9, w: cardW, h: 1.0, fontSize: 60, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });
  slide.addText("做了效果一般", { x: 0.5, y: cardY + 2.0, w: cardW - 0.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });

  // VS circle
  slide.addShape(pres.shapes.OVAL, { x: 4.5, y: 2.5, w: 1.0, h: 1.0, fill: { color: theme.primary } });
  slide.addText("VS", { x: 4.5, y: 2.5, w: 1.0, h: 1.0, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  // Right card - Leverage point
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.6, y: cardY, w: cardW, h: cardH, fill: { color: theme.bg }, line: { color: theme.primary, width: 2 }, rectRadius: 0.1 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.6, y: cardY, w: cardW, h: 0.6, fill: { color: theme.primary } });
  slide.addText("杠杆点", { x: 5.6, y: cardY, w: cardW, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("10x", { x: 5.6, y: cardY + 0.9, w: cardW, h: 1.0, fontSize: 60, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addText("价值放大10倍", { x: 5.7, y: cardY + 2.0, w: cardW - 0.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });

  // Key takeaway
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.9, w: 9.2, h: 0.5, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.08 });
  slide.addText("找到杠杆点，AI能让你的工作产生指数级提升", { x: 0.4, y: 4.9, w: 9.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
`,

  5: () => `
  const centerY = 2.8;
  const circleSize = 1.8;
  const positions = [
    { x: 1.5, num: "1", title: "频率高", desc: "经常发生" },
    { x: 4.1, num: "2", title: "价值大", desc: "影响核心" },
    { x: 6.7, num: "3", title: "可放大", desc: "AI能提升" }
  ];

  positions.forEach((pos) => {
    slide.addShape(pres.shapes.OVAL, { x: pos.x, y: centerY - circleSize / 2, w: circleSize, h: circleSize, fill: { color: theme.primary, transparency: 85 }, line: { color: theme.primary, width: 2 } });
    slide.addText(pos.num, { x: pos.x, y: centerY - circleSize / 2 + 0.3, w: circleSize, h: 0.5, fontSize: 24, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
    slide.addText(pos.title, { x: pos.x, y: centerY - 0.1, w: circleSize, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center", valign: "middle" });
    slide.addText(pos.desc, { x: pos.x, y: centerY + 0.4, w: circleSize, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, align: "center", valign: "middle" });
  });

  slide.addText("→", { x: 3.1, y: centerY - 0.3, w: 1.0, h: 0.6, fontSize: 28, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });
  slide.addText("→", { x: 5.7, y: centerY - 0.3, w: 1.0, h: 0.6, fontSize: 28, fontFace: "Arial", color: theme.accent, bold: true, align: "center", valign: "middle" });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.6, w: 9.2, h: 0.8, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("真正的AI杠杆点 = 三个特征的交汇处", { x: 0.4, y: 4.6, w: 9.2, h: 0.8, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
`,

  6: () => `
  // Two-column layout
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 4.4, h: 2.5, fill: { color: theme.light, transparency: 60 }, rectRadius: 0.1 });
  slide.addText("解释", { x: 0.6, y: 1.2, w: 1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("每天或每周都会发生，积累效应明显", { x: 0.6, y: 1.6, w: 4.0, h: 1.8, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.1, w: 4.4, h: 2.5, fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }, rectRadius: 0.1 });
  slide.addText("例子", { x: 5.4, y: 1.2, w: 1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "日报周报", options: { bullet: true, breakLine: true } },
    { text: "邮件处理", options: { bullet: true, breakLine: true } },
    { text: "会议总结", options: { bullet: true, breakLine: true } },
    { text: "数据整理", options: { bullet: true } }
  ], { x: 5.4, y: 1.6, w: 4.0, h: 1.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`,

  7: () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 4.4, h: 2.5, fill: { color: theme.light, transparency: 60 }, rectRadius: 0.1 });
  slide.addText("解释", { x: 0.6, y: 1.2, w: 1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("直接影响核心成果，质量差异会导致结果天壤之别", { x: 0.6, y: 1.6, w: 4.0, h: 1.8, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 1.1, w: 4.4, h: 2.5, fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }, rectRadius: 0.1 });
  slide.addText("例子", { x: 5.4, y: 1.2, w: 1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "策略制定", options: { bullet: true, breakLine: true } },
    { text: "创意构思", options: { bullet: true, breakLine: true } },
    { text: "关键决策", options: { bullet: true, breakLine: true } },
    { text: "客户沟通", options: { bullet: true } }
  ], { x: 5.4, y: 1.6, w: 4.0, h: 1.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`,

  8: () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 9.2, h: 1.5, fill: { color: theme.light, transparency: 60 }, rectRadius: 0.1 });
  slide.addText("解释", { x: 0.6, y: 1.2, w: 1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("AI介入后质量或效率能显著提升（5倍以上）", { x: 0.6, y: 1.6, w: 8.8, h: 0.8, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Visual 5x emphasis
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.5, y: 2.9, w: 3.0, h: 1.5, fill: { color: theme.primary, transparency: 90 }, line: { color: theme.primary, width: 2 }, rectRadius: 0.1 });
  slide.addText("5x+", { x: 3.5, y: 2.9, w: 3.0, h: 1.0, fontSize: 48, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addText("效率提升", { x: 3.5, y: 3.7, w: 3.0, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
`,

  9: () => `
  // Venn diagram representation with three circles
  const cx = 3.0, cy = 2.8, r = 1.3;
  const circles = [
    { x: cx - 0.4, y: cy - 1.0, label: "频率高" },
    { x: cx - 0.9, y: cy + 0.3, label: "价值大" },
    { x: cx + 0.1, y: cy + 0.3, label: "可放大" }
  ];

  circles.forEach((c) => {
    slide.addShape(pres.shapes.OVAL, { x: c.x, y: c.y, w: r, h: r, fill: { color: theme.primary, transparency: 75 }, line: { color: theme.primary, width: 1 } });
    slide.addText(c.label, { x: c.x, y: c.y + 0.4, w: r, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  });

  // Center intersection
  slide.addShape(pres.shapes.OVAL, { x: cx - 0.25, y: cy - 0.15, w: 0.5, h: 0.5, fill: { color: theme.primary } });
  slide.addText("AI杠杆点", { x: cx - 0.25, y: cy - 0.15, w: 0.5, h: 0.5, fontSize: 8, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  // Right side insight card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 1.3, w: 4.0, h: 3.5, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("真正的AI杠杆点", { x: 5.7, y: 1.5, w: 3.6, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("=", { x: 5.7, y: 2.0, w: 3.6, h: 0.5, fontSize: 28, fontFace: "Arial", color: theme.secondary, bold: true });
  slide.addText([
    { text: "1. 频率高 — 经常发生", options: { breakLine: true } },
    { text: "2. 价值大 — 影响核心", options: { breakLine: true } },
    { text: "3. 可放大 — AI能提升", options: { breakLine: true } }
  ], { x: 5.7, y: 2.5, w: 3.6, h: 1.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("三个特征的交集", { x: 5.7, y: 4.2, w: 3.6, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, align: "center" });
`,

  10: () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 9.2, h: 1.0, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.1 });
  slide.addText("通过10个问题，系统性地识别出你的AI杠杆点", { x: 0.6, y: 1.1, w: 8.8, h: 1.0, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });

  slide.addText("问题框架", { x: 0.4, y: 2.3, w: 3, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText([
    { text: "Q1-Q2: 频率评估", options: { bullet: true, breakLine: true } },
    { text: "Q3-Q4: 价值判断", options: { bullet: true, breakLine: true } },
    { text: "Q5-Q6: 能力匹配", options: { bullet: true, breakLine: true } },
    { text: "Q7-Q8: AI可行性", options: { bullet: true, breakLine: true } },
    { text: "Q9-Q10: 复利效应", options: { bullet: true } }
  ], { x: 0.4, y: 2.7, w: 9.0, h: 2.2, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary });
`
};

// Generate remaining slides 11-30 with simpler content
for (let i = 11; i <= 30; i++) {
  contentGenerators[i] = () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.5, w: 9.2, h: 3.0, fill: { color: theme.light, transparency: 60 }, rectRadius: 0.1 });
  slide.addText("Slide ${i} content for: " + slideConfig.title, { x: 0.6, y: 2.5, w: 8.8, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });
`;
}

// Special content for specific slides
contentGenerators[11] = () => `
  slide.addText("Q1: 这个任务，我每天/每周要花多少时间？", { x: 0.4, y: 1.2, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("Q2: 如果不做这个任务，最终成果会受影响吗？", { x: 0.4, y: 1.9, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.8, w: 9.2, h: 1.8, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
  slide.addText("频率评估", { x: 0.6, y: 2.9, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("通过这两个问题评估任务的发生频率和影响力", { x: 0.6, y: 3.4, w: 8.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[12] = () => `
  slide.addText("Q3: 这个任务的质量差异，对结果影响有多大？", { x: 0.4, y: 1.2, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("Q4: 我喜欢做这个任务吗？", { x: 0.4, y: 1.9, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.8, w: 9.2, h: 1.8, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
  slide.addText("价值判断", { x: 0.6, y: 2.9, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("评估任务的价值重要性和个人倾向", { x: 0.6, y: 3.4, w: 8.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[13] = () => `
  slide.addText("Q5: 这个任务需要哪些能力/知识/经验？", { x: 0.4, y: 1.2, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("Q6: 这些能力中，哪些是我的核心优势？", { x: 0.4, y: 1.9, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.8, w: 9.2, h: 1.8, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
  slide.addText("能力匹配", { x: 0.6, y: 2.9, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("识别人岗匹配度，找到AI放大的最佳切入点", { x: 0.6, y: 3.4, w: 8.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[14] = () => `
  slide.addText("Q7: AI现在能帮我做什么？", { x: 0.4, y: 1.2, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("Q8: AI做这个，比我做的效果更好吗？", { x: 0.4, y: 1.9, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.8, w: 9.2, h: 1.8, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
  slide.addText("AI可行性", { x: 0.6, y: 2.9, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("评估AI能力与任务的匹配程度", { x: 0.6, y: 3.4, w: 8.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[15] = () => `
  slide.addText("Q9: 如果AI能把这个任务做得和我一样好，我的时间解放出来做什么？", { x: 0.4, y: 1.2, w: 9.2, h: 0.6, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("Q10: 一年后回头看，现在在哪用AI会产生最大复利效应？", { x: 0.4, y: 1.9, w: 9.2, h: 0.6, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.8, w: 9.2, h: 1.8, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
  slide.addText("复利效应", { x: 0.6, y: 2.9, w: 2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("思考时间价值最大化，寻找长期复利", { x: 0.6, y: 3.4, w: 8.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[16] = () => `
  // Quick reference table
  slide.addText("问题", { x: 0.4, y: 1.1, w: 1.5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("核心", { x: 2.0, y: 1.1, w: 7.5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const rows = [
    ["Q1-Q2", "频率评估 — 多久发生？影响多大？"],
    ["Q3-Q4", "价值判断 — 质量差异？个人倾向？"],
    ["Q5-Q6", "能力匹配 — 需要什么？优势在哪？"],
    ["Q7-Q8", "AI可行性 — AI能做什么？效果如何？"],
    ["Q9-Q10", "复利效应 — 时间解放？长期价值？"]
  ];
  rows.forEach((row, i) => {
    slide.addText(row[0], { x: 0.4, y: 1.6 + i * 0.5, w: 1.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(row[1], { x: 2.0, y: 1.6 + i * 0.5, w: 7.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
`;

contentGenerators[17] = () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 9.2, h: 1.5, fill: { color: theme.primary, transparency: 90 }, line: { color: theme.primary, width: 2 }, rectRadius: 0.1 });
  slide.addText("AI能做 ≠ 该让AI做", { x: 0.4, y: 1.1, w: 9.2, h: 1.5, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });

  slide.addText("技术可行性和价值优先序是两回事", { x: 0.4, y: 2.8, w: 9.2, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText([
    { text: "AI能写文案 → 但不是每个文案都值得让AI写", options: { bullet: true, breakLine: true } },
    { text: "AI能做数据分析 → 但关键决策不能只靠AI", options: { bullet: true, breakLine: true } },
    { text: "AI能做PPT → 但只有核心汇报才值得用AI", options: { bullet: true } }
  ], { x: 0.4, y: 3.5, w: 9.2, h: 1.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[18] = () => `
  // 2x2 Matrix
  const mx = 1.5, my = 1.2, mw = 3.7, mh = 1.7;
  // Q1: 高价值+高AI = 优先介入
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: mx + mw, y: my, w: mw, h: mh, fill: { color: theme.primary, transparency: 85 }, line: { color: theme.primary, width: 2 }, rectRadius: 0.1 });
  slide.addText("优先介入", { x: mx + mw + 0.2, y: my + 0.1, w: mw - 0.4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("高价值×AI强", { x: mx + mw + 0.2, y: my + 0.5, w: mw - 0.4, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Q2: 高价值+低AI = 持续关注
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: mx, y: my, w: mw, h: mh, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("持续关注", { x: mx + 0.2, y: my + 0.1, w: mw - 0.4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true });
  slide.addText("高价值×AI弱", { x: mx + 0.2, y: my + 0.5, w: mw - 0.4, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Q3: 低价值+高AI = 考虑自动化
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: mx + mw, y: my + mh, w: mw, h: mh, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("考虑自动化", { x: mx + mw + 0.2, y: my + mh + 0.1, w: mw - 0.4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true });
  slide.addText("低价值×AI强", { x: mx + mw + 0.2, y: my + mh + 0.5, w: mw - 0.4, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });

  // Q4: 低价值+低AI = 暂不投入
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: mx, y: my + mh, w: mw, h: mh, fill: { color: theme.light, transparency: 30 }, rectRadius: 0.1 });
  slide.addText("暂不投入", { x: mx + 0.2, y: my + mh + 0.1, w: mw - 0.4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("低价值×AI弱", { x: mx + 0.2, y: my + mh + 0.5, w: mw - 0.4, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });

  // Axis labels
  slide.addText("AI能力水平（低 → 高）", { x: 2.5, y: 5.15, w: 5, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, align: "center" });
  slide.addText("任务价值（低 → 高）", { x: 0.1, y: 2.5, w: 1.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, align: "center", rotate: 270 });
`;

contentGenerators[19] = () => `
  slide.addText("问题", { x: 0.4, y: 1.2, w: 9.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("以为找到了杠杆点，其实只是"AI能做的事"", { x: 0.4, y: 1.7, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.5, w: 4.4, h: 2.0, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.1 });
  slide.addText("错误做法", { x: 0.6, y: 2.6, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("看到AI能做什么就做什么，没有从自身价值出发筛选", { x: 0.6, y: 3.1, w: 4.0, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 2.5, w: 4.4, h: 2.0, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("正确做法", { x: 5.4, y: 2.6, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("先定杠杆点，再看AI能否匹配，而非反过来", { x: 5.4, y: 3.1, w: 4.0, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[20] = () => `
  slide.addText("问题", { x: 0.4, y: 1.2, w: 9.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("在自己的弱势任务上用AI，没有放大优势", { x: 0.4, y: 1.7, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.5, w: 4.4, h: 2.0, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.1 });
  slide.addText("错误做法", { x: 0.6, y: 2.6, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("用AI弥补短板，而非放大长板", { x: 0.6, y: 3.1, w: 4.0, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 2.5, w: 4.4, h: 2.0, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("正确做法", { x: 5.4, y: 2.6, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("用AI放大核心优势，形成协同效应", { x: 5.4, y: 3.1, w: 4.0, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[21] = () => `
  slide.addText("问题", { x: 0.4, y: 1.2, w: 9.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("只关注单个任务的AI化，忽略整个工作流的协同", { x: 0.4, y: 1.7, w: 9.2, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.5, w: 4.4, h: 2.0, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.1 });
  slide.addText("错误做法", { x: 0.6, y: 2.6, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("孤立优化每个任务，整体效率不升反降", { x: 0.6, y: 3.1, w: 4.0, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 2.5, w: 4.4, h: 2.0, fill: { color: theme.light, transparency: 50 }, rectRadius: 0.1 });
  slide.addText("正确做法", { x: 5.4, y: 2.6, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("系统思考工作流，找到整体最优解", { x: 5.4, y: 3.1, w: 4.0, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[22] = () => `
  slide.addText("避免失败的三个建议", { x: 0.4, y: 1.1, w: 9.2, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const suggestions = [
    { num: "1", title: "聚焦价值", desc: "从任务重要性出发，而非AI能力出发" },
    { num: "2", title: "扬长避短", desc: "用AI放大核心优势，不补短板" },
    { num: "3", title: "系统思考", desc: "关注整个工作流，而非单个任务" }
  ];
  suggestions.forEach((s, i) => {
    slide.addShape(pres.shapes.OVAL, { x: 0.5, y: 1.8 + i * 1.0, w: 0.5, h: 0.5, fill: { color: theme.primary } });
    slide.addText(s.num, { x: 0.5, y: 1.8 + i * 1.0, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.title, { x: 1.2, y: 1.8 + i * 1.0, w: 2, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, valign: "middle" });
    slide.addText(s.desc, { x: 3.2, y: 1.8 + i * 1.0, w: 6.2, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, valign: "middle" });
  });
`;

contentGenerators[23] = () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.1, w: 9.2, h: 3.8, fill: { color: theme.light, transparency: 60 }, rectRadius: 0.1 });
  slide.addText("练习步骤", { x: 0.6, y: 1.2, w: 2, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "1. 选择一个工作流", options: { breakLine: true } },
    { text: "2. 回答10个问题", options: { breakLine: true } },
    { text: "3. 找出Top 3杠杆点", options: { breakLine: true } },
    { text: "4. 制定AI介入计划", options: { breakLine: true } }
  ], { x: 0.6, y: 1.7, w: 8.8, h: 2.0, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.secondary });
  slide.addText("目标：找到对你工作影响最大的那个AI切入点", { x: 0.6, y: 3.8, w: 8.8, h: 0.8, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent });
`;

contentGenerators[24] = () => `
  slide.addText("杠杆点识别表", { x: 0.4, y: 1.1, w: 9.2, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addTable([
    [{ text: "任务", options: { bold: true } }, { text: "频率评分", options: { bold: true } }, { text: "价值评分", options: { bold: true } }, { text: "AI匹配度", options: { bold: true } }, { text: "综合得分", options: { bold: true } }],
    ["任务1", "高/中/低", "高/中/低", "高/中/低", "=SUM"],
    ["任务2", "高/中/低", "高/中/低", "高/中/低", "=SUM"],
    ["任务3", "高/中/低", "高/中/低", "高/中/低", "=SUM"]
  ], { x: 0.4, y: 1.7, w: 9.2, h: 2.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, border: { pt: 1, color: theme.light }, fill: { color: theme.bg } });
`;

contentGenerators[25] = () => `
  slide.addText("案例：产品经理的杠杆点识别", { x: 0.4, y: 1.1, w: 9.2, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "需求分析", options: { bullet: true, breakLine: true } },
    { text: "方案设计", options: { bullet: true, breakLine: true } },
    { text: "项目管理", options: { bullet: true, breakLine: true } },
    { text: "数据分析", options: { bullet: true, breakLine: true } },
    { text: "文档撰写", options: { bullet: true } }
  ], { x: 0.4, y: 1.7, w: 9.2, h: 2.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[26] = () => `
  slide.addText("案例分析：谁是高杠杆任务？", { x: 0.4, y: 1.1, w: 9.2, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const analyses = [
    { task: "需求分析", result: "杠杆点", color: theme.primary },
    { task: "方案设计", result: "持续关注", color: theme.accent },
    { task: "项目管理", result: "考虑自动化", color: theme.accent },
    { task: "数据分析", result: "效率工具", color: theme.secondary },
    { task: "文档撰写", result: "效率工具", color: theme.secondary }
  ];
  analyses.forEach((a, i) => {
    slide.addText(a.task, { x: 0.5, y: 1.7 + i * 0.6, w: 3, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.5, y: 1.7 + i * 0.6, w: 2.5, h: 0.4, fill: { color: a.color, transparency: 80 }, rectRadius: 0.05 });
    slide.addText(a.result, { x: 3.5, y: 1.7 + i * 0.6, w: 2.5, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: a.color, align: "center", valign: "middle" });
  });
`;

contentGenerators[27] = () => `
  slide.addText("本节小结（上）", { x: 0.4, y: 1.1, w: 9.2, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "AI杠杆点 = 高频率 × 高价值 × 可放大", options: { bullet: true, breakLine: true } },
    { text: "10个问题识别法系统评估任务", options: { bullet: true, breakLine: true } },
    { text: "Q1-Q2: 频率评估", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Q3-Q4: 价值判断", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Q5-Q6: 能力匹配", options: { bullet: true, indentLevel: 1 } }
  ], { x: 0.4, y: 1.7, w: 9.2, h: 3.0, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[28] = () => `
  slide.addText("本节小结（下）", { x: 0.4, y: 1.1, w: 9.2, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText([
    { text: "AI能做 ≠ 该让AI做", options: { bullet: true, breakLine: true } },
    { text: "避免三种失败模式：伪杠杆点、能力错配、单点幻觉", options: { bullet: true, breakLine: true } },
    { text: "用杠杆点识别表量化评估", options: { bullet: true, breakLine: true } },
    { text: "Q7-Q8: AI可行性", options: { bullet: true, indentLevel: 1, breakLine: true } },
    { text: "Q9-Q10: 复利效应", options: { bullet: true, indentLevel: 1 } }
  ], { x: 0.4, y: 1.7, w: 9.2, h: 3.0, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.secondary });
`;

contentGenerators[29] = () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.5, w: 9.2, h: 2.5, fill: { color: theme.primary, transparency: 90 }, rectRadius: 0.1 });
  slide.addText("找到杠杆点之后呢？", { x: 0.4, y: 1.5, w: 9.2, h: 1.2, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center", valign: "middle" });
  slide.addText("模块四 - 聚焦与排序", { x: 0.4, y: 2.7, w: 9.2, h: 1.0, fontSize: 24, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle" });
  slide.addText("确定AI落地的优先级，制定执行路线图", { x: 0.4, y: 4.2, w: 9.2, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, align: "center" });
`;

contentGenerators[30] = () => `
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.5, y: 0.5, w: 3.0, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("模块三", { x: 3.5, y: 0.5, w: 3.0, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addText("完成", { x: 0.4, y: 1.2, w: 9.2, h: 0.8, fontSize: 44, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 2.1, w: 8.4, h: 1.6, fill: { color: theme.light, transparency: 70 }, rectRadius: 0.1 });
  slide.addText("本模块收获", { x: 0.8, y: 2.2, w: 8.4, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center" });
  slide.addText([
    { text: "✓  AI杠杆点识别公式", options: { breakLine: true } },
    { text: "✓  10问题评估法", options: { breakLine: true } },
    { text: "✓  避免三种失败模式", options: { breakLine: true } }
  ], { x: 2.8, y: 2.6, w: 4.8, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 3.9, w: 8.4, h: 1.0, fill: { color: theme.primary, transparency: 92 }, line: { color: theme.primary, width: 1.5 }, rectRadius: 0.1 });
  slide.addText("下一模块：模块四 - 聚焦与排序", { x: 0.8, y: 3.95, w: 8.4, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addText("确定AI落地的优先级，制定执行路线图", { x: 0.8, y: 4.4, w: 8.4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
`;

// Generate all slide files
for (const s of slides) {
  const content = contentGenerators[s.num]();
  const isCover = s.num === 1;

  const code = `// slide-${s.num}.js - ${s.type}: ${s.title}
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: '${s.type}',
  index: ${s.num},
  title: '${s.title}'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("${s.title}", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  ${content}

  // Page number badge (skip for cover)
  ${!isCover ? `
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("${s.badge}", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  ` : ''}

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

  fs.writeFileSync(path.join(__dirname, `slide-${s.num}.js`), code);
  console.log(`Created slide-${s.num}.js: ${s.title}`);
}

console.log('\nAll 30 slides created!');
