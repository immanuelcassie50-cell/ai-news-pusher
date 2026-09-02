// slide-106.js - SCAMPER工作坊总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 106,
  title: 'SCAMPER工作坊成果'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1,
    fill: { color: theme.primary }
  });

  slide.addText("总结", {
    x: 0.5, y: 0.15, w: 1, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("SCAMPER工作坊成果", {
    x: 0.5, y: 0.38, w: 6, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("小组创新方案展示", {
    x: 5.5, y: 0.48, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });

  // Three group showcase
  const groups = [
    {
      name: "A组",
      idea: "基于M修改的手机支付改进方案",
      highlight: "指纹+面容双识别"
    },
    {
      name: "B组",
      idea: "基于C组合的社区团购模式",
      highlight: "邻里信任背书"
    },
    {
      name: "C组",
      idea: "基于E消除的极简保险产品",
      highlight: "一键投保"
    }
  ];

  const cardW = 2.9;
  const cardH = 2.3;
  const startX = 0.5;
  const startY = 1.2;
  const gap = 0.35;

  groups.forEach((group, i) => {
    const x = startX + i * (cardW + gap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: 0.55,
      fill: { color: i === 1 ? theme.accent : theme.primary }
    });

    // Group name
    slide.addText(group.name, {
      x: x, y: startY + 0.1, w: cardW, h: 0.35,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center"
    });

    // Label
    slide.addText("创新方案", {
      x: x + 0.15, y: startY + 0.7, w: 1.2, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // Idea
    slide.addText(group.idea, {
      x: x + 0.15, y: startY + 0.95, w: cardW - 0.3, h: 0.8,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary
    });

    // Highlight
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: startY + 1.8, w: cardW - 0.3, h: 0.35,
      fill: { color: theme.light }
    });
    slide.addText("亮点: " + group.highlight, {
      x: x + 0.25, y: startY + 1.82, w: cardW - 0.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Voting section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.7, w: 5.5, h: 0.7,
    fill: { color: theme.light }
  });

  slide.addText("投票评选", {
    x: 0.7, y: 3.8, w: 1.2, h: 0.2,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("选出最具商业价值的创新方案", {
    x: 0.7, y: 4.02, w: 5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Feedback section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 3.7, w: 3.3, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("点评反馈", {
    x: 6.4, y: 3.8, w: 1.2, h: 0.2,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("导师对各组方案进行专业点评", {
    x: 6.4, y: 4.02, w: 2.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // SCAMPER summary ribbon
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.75,
    fill: { color: theme.accent }
  });

  const letters = [
    { l: 'S', m: '替代' },
    { l: 'C', m: '组合' },
    { l: 'A', m: '适应' },
    { l: 'M', m: '修改' },
    { l: 'P', m: '用途' },
    { l: 'E', m: '消除' },
    { l: 'R', m: '重组' }
  ];

  letters.forEach((item, i) => {
    const x = 0.7 + i * 1.25;
    slide.addText(item.l, {
      x: x, y: 4.65, w: 0.5, h: 0.4,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    slide.addText(item.m, {
      x: x + 0.4, y: 4.72, w: 0.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("106", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };