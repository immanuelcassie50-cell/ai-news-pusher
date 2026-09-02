const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("18", {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Title
  slide.addText("访谈者最重要的一个动作", {
    x: 0.5, y: 0.4, w: 8.5, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, bold: true,
    color: theme.primary, margin: 0
  });

  // Decorative line under title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Center action box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.35, w: 9, h: 1.8,
    fill: { color: theme.light }
  });

  // Action description
  slide.addText("在被访谈者说完一段话之后，重复你听到的最关键那句话，然后问：", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 16,
    color: theme.secondary, margin: 0
  });

  // Question box
  slide.addShape(pres.ShapeType.rect, {
    x: 1.0, y: 2.1, w: 7.6, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("\"你这里说的[关键词]，能再说具体一点吗？\"", {
    x: 1.0, y: 2.1, w: 7.6, h: 0.8,
    fontFace: "Microsoft YaHei", fontSize: 18, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Two effect boxes - left
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 4.25, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  // Number badge 1
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.7, y: 3.65, w: 0.45, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.7, y: 3.65, w: 0.45, h: 0.45,
    fontFace: "Arial", fontSize: 18, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  slide.addText("重复和确认", {
    x: 1.25, y: 3.7, w: 3.3, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, bold: true,
    color: theme.primary, margin: 0
  });
  slide.addText("让被访谈者感到被认真听见", {
    x: 0.7, y: 4.2, w: 3.8, h: 0.8,
    fontFace: "Microsoft YaHei", fontSize: 14,
    color: theme.secondary, margin: 0
  });

  // Two effect boxes - right
  slide.addShape(pres.ShapeType.rect, {
    x: 5.25, y: 3.5, w: 4.25, h: 1.7,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 }
  });

  // Number badge 2
  slide.addShape(pres.ShapeType.ellipse, {
    x: 5.45, y: 3.65, w: 0.45, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 5.45, y: 3.65, w: 0.45, h: 0.45,
    fontFace: "Arial", fontSize: 18, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  slide.addText("深挖层次", {
    x: 6.0, y: 3.7, w: 3.3, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, bold: true,
    color: theme.primary, margin: 0
  });
  slide.addText("帮助挖出更深的层次", {
    x: 5.45, y: 4.2, w: 3.8, h: 0.8,
    fontFace: "Microsoft YaHei", fontSize: 14,
    color: theme.secondary, margin: 0
  });
}

const slideConfig = {
  title: "访谈者最重要的动作",
  file: "slide-18.js",
  page: 18
};

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-18.pptx" })
    .then(() => console.log("Created: slide-18.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };