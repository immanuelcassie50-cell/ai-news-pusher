#!/usr/bin/env python3
# -*- coding: utf-8 -*-

base = 'D:/新课开发/家庭亲子/16-学业压力与考试心理陪孩子走过关键节点/PPT/slides'

# Fixed slide-78.js
slide78 = '''const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 78, title: '家长情绪的重要性' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Page badge
  slide.addText("78", { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, color: "999999", align: "right" });
  // Title
  slide.addText("家长情绪的重要性", { x: 0.4, y: 0.3, w: 9.2, h: 0.6, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  // Data/quote layout - main stat + supporting points
  const cardW = 4.3;
  const cardH = 2.0;
  const startY = 1.2;
  const gap = 0.3;
  const radius = 0.1;
  // Main stat card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: startY, w: cardW, h: cardH, fill: { color: theme.primary }, rectRadius: radius });
  slide.addText("90%", { x: 0.5, y: startY + 0.2, w: cardW, h: 0.9, fontSize: 48, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center" });
  slide.addText("的孩子能敏锐察觉\\n家长的焦虑情绪", { x: 0.5, y: startY + 1.1, w: cardW, h: 0.8, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.light, align: "center" });
  // Supporting cards
  const points = [
    { title: "情绪传染", desc: "家长的焦虑会像感冒一样传染给孩子" },
    { title: "行为影响", desc: "焦虑的家长更容易做出过度反应" },
    { title: "自我照顾", desc: "家长心态平和，孩子才能更好地发挥" }
  ];
  points.forEach((p, i) => {
    const y = startY + cardH + gap + i * 1.0;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y, w: cardW, h: 0.85, fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }, rectRadius: radius });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.15, h: 0.85, fill: { color: theme.secondary } });
    slide.addText(p.title, { x: 0.8, y: y + 0.1, w: cardW - 0.4, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: 0.8, y: y + 0.4, w: cardW - 0.4, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: "555555" });
  });
  // Right side quote
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: startY, w: 4.3, h: 3.8, fill: { color: theme.light, transparency: 40 }, rectRadius: radius });
  slide.addText("\\u201C", { x: 5.4, y: startY + 0.2, w: 0.5, h: 0.6, fontSize: 60, fontFace: "Georgia", color: theme.secondary });
  slide.addText("照顾好自己的情绪，不是自私；这是给孩子最好的礼物。", { x: 5.5, y: startY + 0.9, w: 3.8, h: 1.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, italic: true });
  slide.addText("当你感到平静和自信，孩子也会从你的状态中汲取力量。", { x: 5.5, y: startY + 2.5, w: 3.8, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: "555555" });
  return slide;
}
module.exports = { createSlide, slideConfig };
'''

# Fixed slide-92.js
slide92 = '''const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 92, title: '考试的长期视角' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("考试的长期视角", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("将考试放在人生的长河中看待", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Main quote card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 2.2,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });

  // Quote mark
  slide.addText("\\u201C", {
    x: 0.7, y: 1.5, w: 0.6, h: 0.8,
    fontSize: 60, fontFace: "Georgia",
    color: theme.accent
  });

  // Quote text
  slide.addText("一次考试只是人生轨迹上的一个点，而不是整条线。\\n培养成长型思维，比关注单次分数更重要。", {
    x: 1.2, y: 1.9, w: 7.8, h: 1.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "left",
    lineSpaceMult: 1.5
  });

  // Three insight cards at bottom
  const insights = [
    { title: "人生轨迹", desc: "考试只是成长路上\\n的一个节点" },
    { title: "成长思维", desc: "关注能力提升\\n而非单纯分数" },
    { title: "降低 stakes", desc: "减轻压力\\n发挥真实水平" }
  ];

  insights.forEach((item, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 4.0, w: 2.9, h: 1.3,
      fill: { color: theme.secondary, transparency: 20 },
      rectRadius: 0.08
    });

    slide.addText(item.title, {
      x: x, y: 4.1, w: 2.9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    slide.addText(item.desc, {
      x: x, y: 4.5, w: 2.9, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center"
    });
  });

  // Page badge
  slide.addText("92", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

# Fixed slide-101.js
slide101 = '''const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 101, title: '理解发挥失常' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("理解发挥失常", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("这是数据，不是失败", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Quote card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 1.2,
    fill: { color: theme.accent, transparency: 15 },
    rectRadius: 0.1
  });

  slide.addText("\\u201C", {
    x: 0.6, y: 1.4, w: 0.5, h: 0.6,
    fontSize: 48, fontFace: "Georgia",
    color: theme.accent
  });

  slide.addText("发挥失常不是能力问题，而是状态波动。\\n把它当作信息收集，而不是对自己的评判。", {
    x: 1.0, y: 1.65, w: 8.2, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpaceMult: 1.4
  });

  // Common causes section
  slide.addText("常见原因", {
    x: 0.5, y: 2.9, w: 4.3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const causes = [
    "睡眠不足或身体状态不佳",
    "考试策略失误（时间分配）",
    "特定题型或知识点不熟悉",
    "考场环境干扰",
    "心理压力过大"
  ];

  causes.forEach((cause, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: 3.3 + i * 0.42, w: 4.3, h: 0.38,
      fill: { color: "FFFFFF" },
      rectRadius: 0.06
    });

    slide.addText("\\u2022", {
      x: 0.6, y: 3.35 + i * 0.42, w: 0.2, h: 0.28,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent
    });

    slide.addText(cause, {
      x: 0.8, y: 3.35 + i * 0.42, w: 3.9, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Normalizing section
  slide.addText("正常化", {
    x: 5.0, y: 2.9, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.0, y: 3.3, w: 4.5, h: 2.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });

  const normalizingPoints = [
    "每个学生都会有发挥失常",
    "一次不代表整体能力",
    "也是发现弱点的机会",
    "为下次提供改进方向"
  ];

  normalizingPoints.forEach((point, i) => {
    slide.addText("\\u2713", {
      x: 5.2, y: 3.45 + i * 0.45, w: 0.3, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: theme.secondary, bold: true
    });

    slide.addText(point, {
      x: 5.5, y: 3.45 + i * 0.45, w: 3.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Page badge
  slide.addText("101", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(f'{base}/slide-78.js', 'w', encoding='utf-8') as f:
    f.write(slide78)
print(f'Fixed: {base}/slide-78.js')

with open(f'{base}/slide-92.js', 'w', encoding='utf-8') as f:
    f.write(slide92)
print(f'Fixed: {base}/slide-92.js')

with open(f'{base}/slide-101.js', 'w', encoding='utf-8') as f:
    f.write(slide101)
print(f'Fixed: {base}/slide-101.js')
