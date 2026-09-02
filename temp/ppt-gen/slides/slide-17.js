// slide-17.js - Pioneers Analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 17,
  title: '开拓者：变革的先行者'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("开拓者：变革的先行者（15-20%）", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Characteristics
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 4.3, h: 3.2,
    fill: { color: theme.light }
  });

  slide.addText("特征", {
    x: 0.7, y: 1.25, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const chars = [
    "主动寻求变化，不安于现状",
    "愿意承担风险，率先尝试",
    "对新事物有好奇心和学习欲",
    "相信变革会带来机会"
  ];

  chars.forEach((c, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 1.75 + i * 0.6, w: 0.08, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(c, {
      x: 0.95, y: 1.75 + i * 0.6, w: 3.6, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // How to manage
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.1, w: 4.5, h: 3.2,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  slide.addText("如何管理", {
    x: 5.2, y: 1.25, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const manage = [
    "赋能授权，让他们成为变革大使",
    "提供资源支持，避免孤军奋战",
    "让开拓者参与方案设计",
    "给予认可，但避免捧杀"
  ];

  manage.forEach((m, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.75 + i * 0.6, w: 0.08, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText(m, {
      x: 5.45, y: 1.75 + i * 0.6, w: 3.8, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // Warning
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.7,
    fill: { color: theme.accent }
  });

  slide.addText("注意：开拓者可能因"太超前"而遭到质疑，需要保护他们的积极性", {
    x: 0.7, y: 4.65, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "left"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-17-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
