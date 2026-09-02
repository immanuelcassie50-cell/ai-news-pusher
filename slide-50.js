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

  slide.addText("蓝海与红海的四个差异", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const differences = [
    { red: "竞争", blue: "规避竞争" },
    { red: "差异化", blue: "成本领先" },
    { red: "争夺现有需求", blue: "创造新需求" },
    { red: "价值增加", blue: "价值创新" }
  ];

  const startY = 1.1;
  const rowH = 1.0;
  const labelW = 1.2;
  const contentW = 3.5;

  differences.forEach((d, i) => {
    const y = startY + i * rowH;

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: labelW, h: 0.7,
      fill: { color: "c1121f" }
    });
    slide.addText("红海", {
      x: 0.5, y: y, w: labelW, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(d.red, {
      x: 1.8, y: y, w: contentW, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "c1121f",
      align: "center", valign: "middle"
    });

    slide.addText("→", {
      x: 4.6, y: y, w: 0.6, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(d.blue, {
      x: 5.3, y: y, w: contentW, h: 0.7,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 8.0, y: y, w: labelW, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText("蓝海", {
      x: 8.0, y: y, w: labelW, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("50", {
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
pres.writeFile({ fileName: "slide-50-preview.pptx" })
  .then(() => console.log("Created slide-50-preview.pptx"))
  .catch(err => console.error(err));
