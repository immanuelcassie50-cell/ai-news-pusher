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

  slide.addText("蓝海战略的本质", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  slide.addText("不是比对手更好，而是与对手不同", {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  const principles = [
    { num: "1", text: "重建市场边界" },
    { num: "2", text: "聚焦全局而非数字" },
    { num: "3", text: "超越现有需求" }
  ];

  const startX = 0.5;
  const cardWidth = 2.8;
  const gap = 0.3;

  principles.forEach((p, i) => {
    const x = startX + i * (cardWidth + gap);

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.7, w: cardWidth, h: 2.2,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });

    slide.addShape(pres.ShapeType.ellipse, {
      x: x + cardWidth / 2 - 0.35, y: 2.9, w: 0.7, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(p.num, {
      x: x + cardWidth / 2 - 0.35, y: 2.9, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.text, {
      x: x + 0.15, y: 3.8, w: cardWidth - 0.3, h: 0.9,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("47", {
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
pres.writeFile({ fileName: "slide-47-preview.pptx" })
  .then(() => console.log("Created slide-47-preview.pptx"))
  .catch(err => console.error(err));
