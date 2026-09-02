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

  slide.addText("价值曲线：战略的可视化", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("价值", {
    x: 0.2, y: 2.5, w: 0.4, h: 1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 1.2, y: 1.2, w: 7.5, h: 3.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 1 }
  });

  slide.addShape(pres.ShapeType.line, {
    x: 1.2, y: 4.5, w: 7.5, h: 0,
    line: { color: theme.primary, width: 2 }
  });

  slide.addShape(pres.ShapeType.line, {
    x: 1.2, y: 1.2, w: 0, h: 3.3,
    line: { color: theme.primary, width: 2 }
  });

  const factors = ["因素A", "因素B", "因素C", "因素D", "因素E"];
  const xPositions = [1.7, 3.1, 4.5, 5.9, 7.3];
  factors.forEach((f, i) => {
    slide.addText(f, {
      x: xPositions[i], y: 4.55, w: 1, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center"
    });
  });

  const industryY = [3.5, 3.5, 3.5, 3.5, 3.5];
  const blueY = [2.0, 4.0, 1.8, 3.8, 1.6];

  industryY.forEach((y, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: xPositions[i] + 0.35, y: y - 0.1, w: 0.2, h: 0.2,
      fill: { color: "c1121f" }
    });
  });

  blueY.forEach((y, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: xPositions[i] + 0.35, y: y - 0.1, w: 0.2, h: 0.2,
      fill: { color: theme.secondary }
    });
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 6.3, y: 1.3, w: 2.2, h: 0.9,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 1 }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 6.45, y: 1.45, w: 0.2, h: 0.2,
    fill: { color: "c1121f" }
  });
  slide.addText("红海 (跟随行业)", {
    x: 6.7, y: 1.4, w: 1.7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "c1121f"
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 6.45, y: 1.8, w: 0.2, h: 0.2,
    fill: { color: theme.secondary }
  });
  slide.addText("蓝海 (差异化)", {
    x: 6.7, y: 1.75, w: 1.7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("价值曲线展示了企业在各竞争因素上相对于行业的位置", {
    x: 1.2, y: 1.25, w: 5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("48", {
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
pres.writeFile({ fileName: "slide-48-preview.pptx" })
  .then(() => console.log("Created slide-48-preview.pptx"))
  .catch(err => console.error(err));
