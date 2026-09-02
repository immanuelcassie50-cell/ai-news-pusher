// slide-90.js - Change Sustainability
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '变革成果固化与持续'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革成果固化与持续", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Main content - two columns
  // Left:固化要素
  slide.addText("成果固化四要素：", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const solidification = [
    { title: "制度化", desc: "将新做法纳入正式制度和流程" },
    { title: "规范化", desc: "形成标准操作程序和最佳实践" },
    { title: "常态化", desc: "将变革融入日常工作习惯" },
    { title: "持续优化", desc: "建立持续改进的机制和文化" }
  ];

  solidification.forEach((s, i) => {
    const y = 1.4 + i * 0.75;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.3, h: 0.65,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.65,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.7, y: y + 0.08, w: 1.5, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(s.desc, {
      x: 0.7, y: y + 0.35, w: 3.9, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Right:警惕信号
  slide.addText("警惕"伪变革"信号：", {
    x: 5.2, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const warnings = [
    "项目结束后新做法逐渐消失",
    "员工"回到以前的工作方式"",
    "没有持续的监督和反馈机制",
    "变革成果未纳入绩效考核"
  ];

  warnings.forEach((w, i) => {
    slide.addText("⚠ " + w, {
      x: 5.2, y: 1.4 + i * 0.55, w: 4.3, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("💡 关键洞察：真正的变革是让新做法成为"自然而然"的选择，而不是"不得不"的要求", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.4,
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
  pres.writeFile({ fileName: "slide-90-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
