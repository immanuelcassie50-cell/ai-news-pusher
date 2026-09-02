const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "2b2d42",
  secondary: "8d99ae",
  accent: "ef233c",
  light: "edf2f4",
  bg: "f8f9fa"
};

function createSlide() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";

  const slide = pptx.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: theme.bg } });

  // Left accent bar
  slide.addShape("rect", { x: 0, y: 0, w: 0.125, h: "100%", fill: { color: theme.accent } });

  // Title at top
  slide.addText("AI时代已经来临", {
    x: 0.625, y: 0.417, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  // Large quote box in center
  slide.addShape("rect", { x: 0.625, y: 1.3, w: 8.75, h: 2.0, fill: { color: theme.primary }, rectRadius: 0.1 });

  // Quote text
  slide.addText([
    { text: "\"", options: { fontSize: 72, color: theme.accent } },
    { text: "AI不会取代顾问，但使用AI的顾问会取代不使用AI的顾问", options: { fontSize: 24, color: "ffffff" } },
    { text: "\"", options: { fontSize: 72, color: theme.accent } }
  ], {
    x: 0.9, y: 1.5, w: 8.1, h: 1.6,
    fontFace: "Microsoft YaHei", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Reality Check section title
  slide.addText("现实检视", {
    x: 0.625, y: 3.5, w: 2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, margin: 0
  });

  // Four reality points in a row
  const realities = [
    "AI可以处理海量信息",
    "AI可以生成方案初稿",
    "AI可以提供分析视角",
    "但AI不能替代人类判断"
  ];

  const boxWidth = 2.0;
  const startX = 0.625;
  const gap = 0.167;

  realities.forEach((text, i) => {
    const xPos = startX + i * (boxWidth + gap);
    const isLast = i === 3;

    slide.addShape("rect", {
      x: xPos, y: 3.95, w: boxWidth, h: 1.2,
      fill: { color: isLast ? theme.accent : "ffffff" },
      rectRadius: 0.083,
      line: { color: isLast ? theme.accent : theme.light, width: 1 }
    });

    slide.addText(text, {
      x: xPos, y: 3.95, w: boxWidth, h: 1.2,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: isLast ? "ffffff" : theme.primary,
      align: "center", valign: "middle", margin: 0.125
    });
  });

  return slide;
}

const slideConfig = {
  theme,
  title: "AI时代已经来临",
  description: "模块四开篇：AI时代已经来临的名言与现实检视",
  dimensions: { width: 10, height: 5.625 }
};

module.exports = { createSlide, slideConfig };