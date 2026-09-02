// slide-62.js - 互动练习4：用STEA处理冲突
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 62,
  title: '练习：用STEA处理冲突'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：用STEA处理冲突", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Practice scenario card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.08, h: 1.4,
    fill: { color: theme.accent }
  });
  slide.addText("场景练习", {
    x: 0.8, y: 1.2, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText('两个孩子为谁先玩iPad争吵起来，大宝说："我先拿到的！"二宝哭喊："每次都是哥哥先玩！"', {
    x: 0.8, y: 1.6, w: 8.5, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top"
  });

  // Instructions
  slide.addText("请用STEA框架思考，你会如何处理？", {
    x: 0.5, y: 2.7, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // STEA template cards
  const steaSteps = [
    { letter: "S", title: "停止", desc: "我会先说..." },
    { letter: "T", title: "同理", desc: "我会说..." },
    { letter: "E", title: "探索", desc: "我会问..." },
    { letter: "A", title: "行动", desc: "我们会一起决定..." }
  ];

  const stepWidth = 2.1;
  const stepStartX = 0.5;
  const stepY = 3.2;
  const stepGap = 0.3;

  steaSteps.forEach((step, idx) => {
    const x = stepStartX + idx * (stepWidth + stepGap);

    // Step card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: stepY, w: stepWidth, h: 2.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Step letter circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.7, y: stepY + 0.2, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(step.letter, {
      x: x + 0.7, y: stepY + 0.2, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step title
    slide.addText(step.title, {
      x: x + 0.15, y: stepY + 1.0, w: stepWidth - 0.3, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Step description
    slide.addText(step.desc, {
      x: x + 0.15, y: stepY + 1.4, w: stepWidth - 0.3, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
    });
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
  pres.writeFile({ fileName: "slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
