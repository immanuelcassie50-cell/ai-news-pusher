// slide-105.js - Experience vs Rote: 经验积累 vs 套路熟练
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: "content",
  index: 105,
  title: "经验积累 vs 套路熟练"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: t.primary }
  });
  slide.addText("经验积累 vs 套路熟练", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Left column - 经验丰富
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.15, w: 4.35, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });
  // Top accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 4.35, h: 0.08,
    fill: { color: t.primary }
  });

  slide.addText("经验丰富", {
    x: 0.7, y: 1.4, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: t.primary, bold: true
  });

  slide.addText('每次遇到新的人，都还愿意重新从"你是谁"问起', {
    x: 0.7, y: 2.0, w: 4, h: 1.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: t.secondary,
    valign: "top"
  });

  // Check mark
  slide.addShape(pres.shapes.OVAL, {
    x: 2.0, y: 3.5, w: 0.5, h: 0.5,
    fill: { color: t.primary }
  });
  slide.addText("✓", {
    x: 2.0, y: 3.5, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Right column - 套路熟练
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.15, y: 1.15, w: 4.35, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });
  // Top accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.15, y: 1.15, w: 4.35, h: 0.08,
    fill: { color: t.light }
  });

  slide.addText("套路熟练", {
    x: 5.35, y: 1.4, w: 4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: t.light, bold: true
  });

  slide.addText("用同一套冲稳保比例模板套所有学生，技术上不会出错，但没有回答任何一个关于这个具体的人的问题", {
    x: 5.35, y: 2.0, w: 4, h: 1.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: t.secondary,
    valign: "top"
  });

  // X mark
  slide.addShape(pres.shapes.OVAL, {
    x: 6.65, y: 3.5, w: 0.5, h: 0.5,
    fill: { color: t.light }
  });
  slide.addText("✗", {
    x: 6.65, y: 3.5, w: 0.5, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.65,
    fill: { color: t.secondary },
    rectRadius: 0.08
  });
  slide.addText("客户未必能一眼看出差别，但时间长了一定能感受到", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Page number badge (bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("105", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-105-preview.pptx" })
    .then(() => console.log("Created slide-105-preview.pptx"));
}
