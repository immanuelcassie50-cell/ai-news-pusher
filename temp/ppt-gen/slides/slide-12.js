// slide-12.js - Leadership Behavior in Change
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '变革中管理者的关键行为'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中管理者的关键行为", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Two columns
  const leftBehaviors = [
    { title: "说清楚", desc: "愿景、意义、时间表、支持资源" },
    { title: "听进去", desc: "主动询问、倾听担忧、不打断" },
    { title: "做榜样", desc: "率先使用新系统、公开学新技能" }
  ];

  const rightBehaviors = [
    { title: "给反馈", desc: "及时肯定、及时纠偏" },
    { title: "担责任", desc: "出了问题先承担、不甩锅" },
    { title: "有耐心", desc: "允许适应期、不急于求成" }
  ];

  leftBehaviors.forEach((b, i) => {
    const y = 1.2 + i * 1.35;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.3, h: 1.2,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 1.2,
      fill: { color: theme.accent }
    });
    slide.addText(b.title, {
      x: 0.75, y: y + 0.15, w: 3.8, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "left"
    });
    slide.addText(b.desc, {
      x: 0.75, y: y + 0.6, w: 3.8, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  rightBehaviors.forEach((b, i) => {
    const y = 1.2 + i * 1.35;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5, y: y, w: 4.5, h: 1.2,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5, y: y, w: 0.08, h: 1.2,
      fill: { color: theme.primary }
    });
    slide.addText(b.title, {
      x: 5.25, y: y + 0.15, w: 4, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(b.desc, {
      x: 5.25, y: y + 0.6, w: 4, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
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
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
