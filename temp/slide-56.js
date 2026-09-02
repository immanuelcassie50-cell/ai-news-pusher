const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 56,
  title: '竞品分析与洞察提炼'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large section number "03"
  slide.addText("03", {
    x: 0, y: 1.2, w: 10, h: 2,
    fontSize: 144, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  // Section title
  slide.addText("竞品分析与洞察提炼", {
    x: 0, y: 3.2, w: 10, h: 0.8,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center"
  });

  // Subtitle
  slide.addText("知彼知己，百战不殆", {
    x: 0, y: 4.1, w: 10, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  // Decorative line under number
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 3.05, w: 2, h: 0.06,
    fill: { color: theme.primary }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2B2D42",
    accent: "8D99AE",
    light: "ED233C",
    bg: "F8F9FA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-56-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
