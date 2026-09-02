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
  slide.addText("22", {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Title
  slide.addText("访谈记录表", {
    x: 0.5, y: 0.4, w: 8.5, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, bold: true,
    color: theme.primary, margin: 0
  });

  // Decorative line under title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Header info row
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText([
    { text: "被访谈者：______", options: {} },
    { text: "          场景：______", options: {} },
    { text: "          访谈时长：______分钟", options: {} }
  ], {
    x: 0.7, y: 1.3, w: 8.6, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14,
    color: "FFFFFF", valign: "middle", margin: 0
  });

  // Table header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.9, w: 2.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("记录维度", {
    x: 0.5, y: 1.9, w: 2.5, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 3.0, y: 1.9, w: 6.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("记录内容（课堂手写）", {
    x: 3.0, y: 1.9, w: 6.5, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Table rows - upper part
  const upperRows = [
    "具体操作步骤",
    "判断依据",
    "他说过的原话"
  ];

  const rowHeight = 0.95;
  const startY = 2.5;

  upperRows.forEach((row, index) => {
    const y = startY + index * rowHeight;

    // Row label cell
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 2.5, h: rowHeight,
      fill: { color: theme.light },
      line: { color: theme.secondary, width: 0.5 }
    });
    slide.addText(row, {
      x: 0.5, y: y, w: 2.5, h: rowHeight,
      fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
      color: theme.primary, align: "center", valign: "middle", margin: 0
    });

    // Row content cell
    slide.addShape(pres.ShapeType.rect, {
      x: 3.0, y: y, w: 6.5, h: rowHeight,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 0.5 }
    });
  });

  // Continuation indicator
  slide.addText("（续见下页）", {
    x: 7.5, y: 5.1, w: 2, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 12,
    color: theme.secondary, align: "right", margin: 0
  });
}

const slideConfig = {
  title: "访谈记录表（上）",
  file: "slide-22.js",
  page: 22
};

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-22.pptx" })
    .then(() => console.log("Created: slide-22.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };