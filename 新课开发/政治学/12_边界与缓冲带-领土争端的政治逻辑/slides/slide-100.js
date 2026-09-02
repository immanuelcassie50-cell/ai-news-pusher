// slide-100.js - 调停者的可信度与中立性
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("调停者的可信度与中立性", {
    x: 0.5, y: 0.25, w: 8, h: 0.65,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("Credibility and Neutrality of Mediators", {
    x: 0.5, y: 0.85, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary
  });

  // Central diagram - balance scale concept
  // Left pillar - Credibility
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 3.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("可信度要素", {
    x: 0.7, y: 1.45, w: 3.8, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  const credibilityItems = [
    { label: "专业能力", desc: "深厚的外交经验与领域知识" },
    { label: "过往记录", desc: "成功调解历史彰显信誉" },
    { label: "组织背书", desc: "联合国等国际机构支持" },
    { label: "执行承诺", desc: "有能力确保协议落实" }
  ];

  credibilityItems.forEach((item, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 2.05 + i * 0.7, w: 0.25, h: 0.25,
      fill: { color: theme.primary }
    });
    slide.addText(item.label, {
      x: 1.1, y: 2.0 + i * 0.7, w: 1.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.desc, {
      x: 1.1, y: 2.3 + i * 0.7, w: 3.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right pillar - Neutrality
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 3.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("中立性要求", {
    x: 5.5, y: 1.45, w: 3.8, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  const neutralityItems = [
    { label: "利益均衡", desc: "不偏袒任何一方的利益" },
    { label: "立场超然", desc: "与争端结果无直接或间接利益" },
    { label: "过程公正", desc: "给予双方同等时间与发言权" },
    { label: "信息保密", desc: "不泄露一方的底牌给另一方" }
  ];

  neutralityItems.forEach((item, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: 2.05 + i * 0.7, w: 0.25, h: 0.25,
      fill: { color: theme.accent }
    });
    slide.addText(item.label, {
      x: 5.9, y: 2.0 + i * 0.7, w: 1.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.desc, {
      x: 5.9, y: 2.3 + i * 0.7, w: 3.4, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Examples at bottom
  slide.addText("典型案例：", {
    x: 0.5, y: 5.1, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("联合国秘书处（普遍性）、挪威（自愿中立传统）、教皇国外交（道德权威）", {
    x: 1.6, y: 5.1, w: 7.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("100", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-100-preview.pptx' });
}

module.exports = { createSlide };
