// slide-92.js - 第十三章章节页：口碑与转介绍
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};

const slideConfig = {
  type: 'section-divider',
  index: 92,
  title: '口碑与转介绍'
};

function createSlide(pres, t) {
  const slide = pres.addSlide();
  slide.background = { color: t.primary };

  // Large chapter number - "第十三章"
  slide.addText("第十三章", {
    x: 0.6, y: 1.2, w: 4, h: 0.8,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    transparency: 30
  });

  // Main title
  slide.addText("口碑与转介绍", {
    x: 0.6, y: 2.0, w: 8, h: 1.2,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.3, w: 2.5, h: 0.06,
    fill: { color: "FFFFFF" }
  });

  // Subtitle
  slide.addText("副产品，不是目标", {
    x: 0.6, y: 3.55, w: 6, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    transparency: 20
  });

  // Decorative circles on right side
  slide.addShape(pres.shapes.OVAL, {
    x: 7.0, y: 2.5, w: 3.0, h: 3.0,
    fill: { color: "FFFFFF", transparency: 92 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 7.8, y: 3.2, w: 2.0, h: 2.0,
    fill: { color: "FFFFFF", transparency: 88 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.3, y: 3.8, w: 1.2, h: 1.2,
    fill: { color: "FFFFFF", transparency: 80 }
  });

  // Page number badge - bottom left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: t.accent }
  });
  slide.addText("92", {
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
  await pres.writeFile({ fileName: "D:/CC/temp/slides/slide-92-preview.pptx" });
  console.log("Created slide-92-preview.pptx");
}

main().catch(console.error);

module.exports = { createSlide, slideConfig };
