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
  slide.addText("17", {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Title
  slide.addText("一个追问案例", {
    x: 0.5, y: 0.4, w: 8.5, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, bold: true,
    color: theme.primary, margin: 0
  });

  // Decorative line under title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Main quote box - large quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 9, h: 2.6,
    fill: { color: theme.light },
    line: { color: theme.accent, width: 1 }
  });

  // Quote mark
  slide.addText('"', {
    x: 0.7, y: 1.3, w: 0.6, h: 0.8,
    fontFace: "Georgia", fontSize: 72, bold: true,
    color: theme.accent, margin: 0
  });

  // Quote text
  slide.addText("客户的语速开始放慢，开始说\"我知道你们也很难\"——我判断这时候他已经从质问状态转移到倾诉状态了，这个时候才适合切回配置逻辑", {
    x: 1.0, y: 1.7, w: 8.0, h: 1.8,
    fontFace: "Microsoft YaHei", fontSize: 18,
    color: theme.secondary, align: "left", valign: "middle",
    margin: 0
  });

  // Closing quote mark
  slide.addText('"', {
    x: 8.6, y: 3.2, w: 0.6, h: 0.8,
    fontFace: "Georgia", fontSize: 72, bold: true,
    color: theme.accent, margin: 0
  });

  // Insight section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.3, w: 9, h: 1.0,
    fill: { color: theme.primary }
  });

  // Insight label
  slide.addText("洞察", {
    x: 0.7, y: 4.45, w: 0.8, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
    color: theme.light, margin: 0
  });

  // Insight text
  slide.addText("这种判断逻辑，才是可以被提炼成工具的东西", {
    x: 1.5, y: 4.45, w: 7.8, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 20, bold: true,
    color: "FFFFFF", margin: 0
  });
}

const slideConfig = {
  title: "案例：判断逻辑",
  file: "slide-17.js",
  page: 17
};

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-17.pptx" })
    .then(() => console.log("Created: slide-17.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };