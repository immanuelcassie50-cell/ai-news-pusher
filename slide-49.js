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

  slide.addText("重建市场边界的六条路径", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const paths = [
    { num: "1", text: "跨越替代性行业" },
    { num: "2", text: "跨越战略集团" },
    { num: "3", text: "跨越买方群体" },
    { num: "4", text: "跨越互补性产品" },
    { num: "5", text: "跨越行业功能情感" },
    { num: "6", text: "跨越时间" }
  ];

  const cols = 3;
  const cardW = 2.9;
  const cardH = 1.6;
  const gapX = 0.2;
  const gapY = 0.25;
  const startX = 0.5;
  const startY = 1.2;

  paths.forEach((p, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.5, h: cardH,
      fill: { color: theme.secondary }
    });
    slide.addText(p.num, {
      x: x, y: y, w: 0.5, h: cardH,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.text, {
      x: x + 0.6, y: y, w: cardW - 0.7, h: cardH,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("49", {
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
pres.writeFile({ fileName: "slide-49-preview.pptx" })
  .then(() => console.log("Created slide-49-preview.pptx"))
  .catch(err => console.error(err));
