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
  slide.addText("21", {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Title
  slide.addText("访谈时间安排", {
    x: 0.5, y: 0.4, w: 8.5, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, bold: true,
    color: theme.primary, margin: 0
  });

  // Decorative line under title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Timeline background bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.3, w: 9, h: 0.15,
    fill: { color: theme.light }
  });

  // Timeline items
  const timelineItems = [
    { x: 1.0, label: "A访谈B", time: "20-25分钟", color: theme.accent },
    { x: 4.2, label: "角色互换", time: "", color: theme.secondary },
    { x: 6.0, label: "B访谈A", time: "20-25分钟", color: theme.accent },
    { x: 8.3, label: "总计", time: "40-50分钟", color: theme.primary }
  ];

  timelineItems.forEach((item) => {
    // Node circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: item.x, y: 2.15, w: 0.45, h: 0.45,
      fill: { color: item.color }
    });

    // Connector line above
    slide.addShape(pres.ShapeType.rect, {
      x: item.x + 0.2, y: 1.7, w: 0.05, h: 0.45,
      fill: { color: item.color }
    });

    // Label
    slide.addText(item.label, {
      x: item.x - 0.5, y: 1.2, w: 1.5, h: 0.4,
      fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
      color: theme.secondary, align: "center", margin: 0
    });

    // Time below
    if (item.time) {
      slide.addText(item.time, {
        x: item.x - 0.3, y: 2.7, w: 1.1, h: 0.35,
        fontFace: "Arial", fontSize: 12,
        color: theme.secondary, align: "center", margin: 0
      });
    }
  });

  // Summary box at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 9, h: 1.7,
    fill: { color: theme.light }
  });

  // Summary title
  slide.addText("演练总时长", {
    x: 0.7, y: 3.7, w: 2, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, bold: true,
    color: theme.primary, margin: 0
  });

  // Time breakdown
  slide.addText([
    { text: "A访谈B：20-25分钟", options: { breakLine: true } },
    { text: "B访谈A：20-25分钟", options: { breakLine: true } },
    { text: "合计：40-50分钟", options: {} }
  ], {
    x: 0.7, y: 4.1, w: 8.6, h: 1.0,
    fontFace: "Microsoft YaHei", fontSize: 14,
    color: theme.secondary, margin: 0
  });
}

const slideConfig = {
  title: "访谈时长安排",
  file: "slide-21.js",
  page: 21
};

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-21.pptx" })
    .then(() => console.log("Created: slide-21.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };