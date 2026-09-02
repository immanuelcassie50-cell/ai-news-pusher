const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "264653",
  secondary: "2a9d8f",
  accent: "e9c46a",
  light: "f4a261",
  bg: "fefae0"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("红海与蓝海：两种竞争逻辑", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 4.2, h: 3.8,
    fill: { color: "c1121f", transparency: 15 },
    line: { color: "c1121f", width: 2 }
  });

  slide.addText("红海", {
    x: 0.5, y: 1.4, w: 4.2, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "c1121f", bold: true, align: "center"
  });

  slide.addText([
    { text: "竞争激烈", options: { bullet: true, breakLine: true } },
    { text: "价格战", options: { bullet: true, breakLine: true } },
    { text: "利润压缩", options: { bullet: true, breakLine: true } },
    { text: "血腥一片", options: { bullet: true } }
  ], {
    x: 0.8, y: 2.2, w: 3.6, h: 2.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, paraSpaceAfter: 12
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.3, y: 1.3, w: 4.2, h: 3.8,
    fill: { color: theme.secondary, transparency: 15 },
    line: { color: theme.secondary, width: 2 }
  });

  slide.addText("蓝海", {
    x: 5.3, y: 1.4, w: 4.2, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "center"
  });

  slide.addText([
    { text: "无竞争", options: { bullet: true, breakLine: true } },
    { text: "创造需求", options: { bullet: true, breakLine: true } },
    { text: "高利润", options: { bullet: true, breakLine: true } },
    { text: "宁静蔚蓝", options: { bullet: true } }
  ], {
    x: 5.6, y: 2.2, w: 3.6, h: 2.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, paraSpaceAfter: 12
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.35, y: 2.7, w: 1, h: 1,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.35, y: 2.7, w: 1, h: 1,
    fontSize: 18, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("46", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
const pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";
createSlide(pres, theme);
pres.writeFile({ fileName: "slide-46-preview.pptx" })
  .then(() => console.log("Created slide-46-preview.pptx"))
  .catch(err => console.error(err));
