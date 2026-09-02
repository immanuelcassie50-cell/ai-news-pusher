// slide-103.js - The Threshold: 那道坎
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
  index: 103,
  title: "那道坎"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: t.primary }
  });
  slide.addText("那道坎", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Main quote box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 3, angle: 135, opacity: 0.1 },
    rectRadius: 0.1
  });

  // Left accent bar on quote box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 0.12, h: 3.2,
    fill: { color: t.accent }
  });

  // Opening quote mark
  slide.addText('“', {
    x: 0.8, y: 1.4, w: 0.6, h: 0.8,
    fontSize: 60, fontFace: "Georgia",
    color: t.accent
  });

  // Quote content
  const quoteLines = [
    "新手觉得自己的成长，是学会更多的知识点、记住更多的政策细节；",
    '真正的成长，是从"这套方法对不对"变成"这个人到底是谁"',
    "——这道坎，很多人干了十年也没跨过去。"
  ];

  slide.addText(quoteLines.join("\n"), {
    x: 1.0, y: 2.0, w: 8.0, h: 2.2,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: t.secondary,
    valign: "top"
  });

  // Highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.5, y: 4.6, w: 4, h: 0.7,
    fill: { color: t.accent },
    rectRadius: 0.08
  });
  slide.addText('从"算得对"到"看得准"', {
    x: 5.5, y: 4.6, w: 4, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("103", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-103-preview.pptx" })
    .then(() => console.log("Created slide-103-preview.pptx"));
}
