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

  // Dark background block - full slide
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }
  });

  // Decorative diagonal accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 4.5, w: 10, h: 1.125,
    fill: { color: theme.secondary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("19", {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Chapter number - large
  slide.addText("07", {
    x: 0.5, y: 1.0, w: 2.5, h: 1.5,
    fontFace: "Arial", fontSize: 96, bold: true,
    color: theme.light, margin: 0
  });

  // Chapter title
  slide.addText("访谈演练", {
    x: 0.5, y: 2.5, w: 9, h: 1.0,
    fontFace: "Microsoft YaHei", fontSize: 48, bold: true,
    color: "FFFFFF", margin: 0
  });

  // Subtitle
  slide.addText("两两结构化访谈（实操产出）", {
    x: 0.5, y: 3.6, w: 9, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 20,
    color: theme.light, margin: 0
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.3, w: 3, h: 0.05,
    fill: { color: theme.accent }
  });
}

const slideConfig = {
  title: "章节7分隔页",
  file: "slide-19.js",
  page: 19
};

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-19.pptx" })
    .then(() => console.log("Created: slide-19.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };