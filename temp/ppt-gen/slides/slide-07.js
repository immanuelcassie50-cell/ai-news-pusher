// slide-07.js - Trust: The Hidden Variable
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '信任：变革成败的隐藏变量'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("信任：变革成败的隐藏变量", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Iceberg metaphor
  slide.addText("变革冰山", {
    x: 0.5, y: 1.1, w: 2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  // Visible part (above water)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 4.2, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("可见：战略、流程、技术", {
    x: 0.5, y: 1.75, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });

  // Water line
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 2.4, w: 4.2, h: 0,
    line: { color: theme.secondary, width: 1, dashType: "dash" }
  });

  // Hidden part (below water)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.5, w: 4.2, h: 2.6,
    fill: { color: theme.light }
  });
  slide.addText("隐藏：信任、恐惧、\n       惯性、意义", {
    x: 0.7, y: 2.8, w: 3.8, h: 1.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Right side - Trust equation
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.1, w: 4.5, h: 4,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  slide.addText("信任公式", {
    x: 5.2, y: 1.3, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  slide.addText("信任 = 可信度 × 可靠度 × 亲密度 ÷ 自我导向", {
    x: 5.2, y: 1.9, w: 4.1, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  const trustFactors = [
    { factor: "可信度", desc: "能力与专业" },
    { factor: "可靠度", desc: "言行一致" },
    { factor: "亲密度", desc: "情感连接" },
    { factor: "自我导向", desc: "私心程度（÷）" }
  ];

  trustFactors.forEach((t, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.2, y: 2.6 + i * 0.65, w: 1.3, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(t.factor, {
      x: 5.2, y: 2.68, w: 1.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(t.desc, {
      x: 6.6, y: 2.68, w: 2.7, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("任一要素为0，信任即崩塌", {
    x: 5.2, y: 5.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
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
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
