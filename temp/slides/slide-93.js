// slide-93.js - 口碑是副产品
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
  index: 93,
  title: "口碑是副产品"
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: t.primary }
  });
  slide.addText("口碑是副产品", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Large quote box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 2.8,
    fill: { color: "FFFFFF" },
    line: { color: t.primary, width: 2 },
    rectRadius: 0.1
  });

  // Quote mark decoration
  slide.addText("“", {
    x: 0.7, y: 1.1, w: 1, h: 1,
    fontSize: 72, fontFace: "Georgia",
    color: t.accent,
    transparency: 40
  });

  // Main quote text
  slide.addText("你要是天天想着怎么攒口碑、怎么让家长转介绍，反而攒不出来；把每一次判断做扎实了，口碑是自己长出来的，不是求来的。", {
    x: 1.0, y: 1.8, w: 8.0, h: 1.8,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: t.secondary,
    valign: "middle"
  });

  // Key insight below
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 1.0,
    fill: { color: t.light, transparency: 70 },
    rectRadius: 0.1
  });
  slide.addText("核心洞察：口碑是服务扎实之后自然生长的结果，而非刻意追求的目标", {
    x: 0.7, y: 4.35, w: 8.5, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: t.primary, bold: true,
    valign: "middle"
  });

  // Page number badge - bottom left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("93", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  await pres.writeFile({ fileName: "D:/CC/temp/slides/slide-93-preview.pptx" });
  console.log("Created slide-93-preview.pptx");
}

main().catch(console.error);

module.exports = { createSlide, slideConfig };
