// slide-21.js - Chapter 2 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("本章小结", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Chapter badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.0, y: 0.35, w: 1.5, h: 0.5,
    fill: { color: theme.primary, transparency: 85 },
    rectRadius: 0.08
  });
  slide.addText("第二章", {
    x: 8.0, y: 0.35, w: 1.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    { text: "分数是硬约束，决定不了方向", symbol: "1" },
    { text: "先人后分 vs 先分后人，答案完全不一样", symbol: "2" },
    { text: "可得性偏差让人天然先做容易的事", symbol: "3" },
    { text: "先确定分数带来掌控感，但也漏掉关键信息", symbol: "4" }
  ];

  takeaways.forEach((item, i) => {
    const y = 1.2 + i * 1.0;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: theme.light, transparency: 75 },
      rectRadius: 0.1
    });

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.17, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText("\u2713", {
      x: 0.7, y: y + 0.17, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Number
    slide.addText(item.symbol, {
      x: 1.35, y: y, w: 0.4, h: 0.85,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item.text, {
      x: 1.85, y: y, w: 7.4, h: 0.85,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Bottom quote
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 5.0, w: 7, h: 0.5,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText('"先算人的人，算的是该去哪"', {
    x: 1.5, y: 5.0, w: 7, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("21", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-21-preview.pptx" })
    .then(() => console.log("Preview saved: slide-21-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
