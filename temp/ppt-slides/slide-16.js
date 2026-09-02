// slide-16.js - 追问三步详解
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '追问三步（从模糊到可用）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("追问三步（从模糊到可用）", {
    x: 0.5, y: 0.4, w: 9, h: 0.65,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Step 1
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 1.5, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.7, y: 1.5, w: 0.6, h: 0.6,
    fontSize: 22, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("你能描述一下当时具体发生了什么？", {
    x: 1.5, y: 1.45, w: 7.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 1.95, w: 1.8, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("从模糊转向具体情境", {
    x: 1.5, y: 1.95, w: 1.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Arrow down 1
  slide.addText("↓", {
    x: 4.5, y: 2.55, w: 0.5, h: 0.35,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, align: "center"
  });

  // Step 2
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.9, w: 9, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 3.1, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 0.7, y: 3.1, w: 0.6, h: 0.6,
    fontSize: 22, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("那个时候你做了什么？说了什么？", {
    x: 1.5, y: 3.05, w: 7.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 3.55, w: 1.8, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("从感觉转向行为", {
    x: 1.5, y: 3.55, w: 1.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Arrow down 2
  slide.addText("↓", {
    x: 4.5, y: 4.15, w: 0.5, h: 0.35,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent, align: "center"
  });

  // Step 3
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 4.65, w: 0.6, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("3", {
    x: 0.7, y: 4.65, w: 0.6, h: 0.6,
    fontSize: 22, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("你怎么知道要这样做，而不是做别的？", {
    x: 1.5, y: 4.6, w: 7.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 5.1, w: 1.8, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("从行为转向判断逻辑", {
    x: 1.5, y: 5.1, w: 1.8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };