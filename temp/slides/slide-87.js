// slide-87.js - Biggest Risk Quote Slide
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 87,
  title: '最大的风险'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Title
  slide.addText("最大的风险", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Accent line under title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Quote container - rounded rectangle
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 3.2,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.1 }
  });

  // Left quote accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 0.1, h: 3.2,
    fill: { color: theme.primary }
  });

  // Quote mark - decorative
  slide.addText("“", {
    x: 0.8, y: 1.5, w: 1, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true,
    transparency: 50
  });

  // Quote text
  slide.addText("选错专业，是这个孩子人生里会经历的一次挫折；替他做了选择，是拿走了他本该拥有的一次自己承担后果的机会，这件事的代价，很多年后才会显出来。", {
    x: 1.0, y: 2.0, w: 7.8, h: 2.2,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle",
    lineSpaceMult: 1.5
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("87", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-87-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
