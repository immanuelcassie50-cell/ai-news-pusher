// slide-19.js - Interactive Exercise 1 (互动练习1)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 19,
  title: '练习：识别冰山层级'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：识别冰山层级", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: theme.accent, transparency: 90 },
    rectRadius: 0.1
  });
  slide.addText("场景", {
    x: 0.7, y: 1.3, w: 1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText('哥哥抱怨"你总是帮妹妹不帮我"', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Practice instructions
  slide.addText("请识别这句话背后的冰山层级：", {
    x: 0.5, y: 2.6, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Three boxes for answers
  const layers = [
    { label: "冰山之上 - 行为", placeholder: "观察到的具体行为是什么？" },
    { label: "冰山之中 - 情绪", placeholder: "孩子可能在感受什么？" },
    { label: "冰山之下 - 需求", placeholder: "孩子真正需要的是什么？" }
  ];

  const boxY = 3.2;
  const boxHeight = 0.9;
  const boxWidth = 2.9;
  const gap = 0.35;

  layers.forEach((layer, idx) => {
    const x = 0.5 + idx * (boxWidth + gap);

    // Box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: boxY, w: boxWidth, h: boxHeight,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1, dashType: "dash" }
    });

    // Label
    slide.addText(layer.label, {
      x: x, y: boxY + 0.1, w: boxWidth, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Placeholder
    slide.addText(layer.placeholder, {
      x: x + 0.1, y: boxY + 0.45, w: boxWidth - 0.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Tip at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 0.05, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("提示：先自己思考，再翻到下一页看参考答案", {
    x: 0.7, y: 4.9, w: 8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
