// slide-05.js - What is Digital Transformation
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '数字化转型的本质'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("数字化转型的本质", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Core definition box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fill: { color: theme.light }
  });

  slide.addText("数字化转型 ≠ 技术升级", {
    x: 0.7, y: 1.2, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("数字化转型 = 业务转型 + 组织转型 + 人的转型", {
    x: 0.7, y: 1.75, w: 8.5, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Three pillars
  const pillars = [
    { title: "业务转型", desc: "流程数字化\n数据驱动决策\n客户体验重构" },
    { title: "组织转型", desc: "架构扁平化\n团队自组织\n文化再塑造" },
    { title: "人的转型", desc: "能力升级\n思维转变\n行为习惯更新" }
  ];

  pillars.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.7, w: 2.9, h: 2.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.7, w: 2.9, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(p.title, {
      x: x, y: 2.78, w: 2.9, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(p.desc, {
      x: x + 0.15, y: 3.45, w: 2.6, h: 1.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
