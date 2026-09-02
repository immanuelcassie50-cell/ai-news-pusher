// slide-18.js - Followers Analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '跟随者：变革的主体力量'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("跟随者：变革的主体力量（40-50%）", {
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
    "理解变革的必要性",
    "愿意配合行动",
    "需要明确的指引和支持",
    "对不确定性有担忧但能接受"
  ];

  chars.forEach((c, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 1.75 + i * 0.65, w: 0.08, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(c, {
      x: 0.95, y: 1.75 + i * 0.65, w: 3.6, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
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
    "清晰说明变革对他们的具体影响",
    "提供充分的培训和过渡支持",
    "定期反馈进展，增强信心",
    "表彰进步，建立安全感"
  ];

  manage.forEach((m, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 1.75 + i * 0.65, w: 0.08, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(m, {
      x: 5.45, y: 1.75 + i * 0.65, w: 3.8, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // Key insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.7,
    fill: { color: theme.accent }
  });

  slide.addText("关键：跟随者是变革成功的决定性人群，需要重点投入沟通和支持", {
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
  pres.writeFile({ fileName: "slide-18-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
