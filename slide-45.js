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

  slide.addText("04", {
    x: 0.5, y: 1.2, w: 3, h: 2.5,
    fontSize: 120, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("MODULE 4", {
    x: 3.8, y: 1.5, w: 5.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary, bold: true,
    charSpacing: 8
  });

  slide.addText("战略选择", {
    x: 3.8, y: 2.1, w: 5.5, h: 1.2,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("蓝海战略与ERRC网格", {
    x: 3.8, y: 3.3, w: 5.5, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 3.8, y: 4.0, w: 2, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("45", {
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
pres.writeFile({ fileName: "slide-45-preview.pptx" })
  .then(() => console.log("Created slide-45-preview.pptx"))
  .catch(err => console.error(err));
