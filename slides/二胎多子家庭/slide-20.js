// slide-20.js - Exercise Answer Reference (参考答案)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'answer',
  index: 20,
  title: '参考答案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("参考答案", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario reminder
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.light, transparency: 80 },
    rectRadius: 0.08
  });
  slide.addText('场景：哥哥抱怨"你总是帮妹妹不帮我"', {
    x: 0.7, y: 1.1, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Answer layers
  const answers = [
    {
      layer: "冰山之上",
      layerColor: theme.accent,
      title: "行为表现",
      content: "哥哥大声抱怨、语气不满、指着妈妈理论"
    },
    {
      layer: "冰山之中",
      layerColor: theme.primary,
      title: "情绪感受",
      content: "委屈、嫉妒、失落、被忽视的感觉"
    },
    {
      layer: "冰山之下",
      layerColor: theme.secondary,
      title: "核心需求",
      content: "被看见、被认可、需要确认妈妈的爱"
    }
  ];

  const startY = 1.9;
  const cardHeight = 1.0;
  const gap = 0.2;

  answers.forEach((answer, idx) => {
    const y = startY + idx * (cardHeight + gap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.1, h: cardHeight,
      fill: { color: answer.layerColor }
    });

    // Layer badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: y + 0.25, w: 1.3, h: 0.5,
      fill: { color: answer.layerColor, transparency: 85 },
      rectRadius: 0.08
    });
    slide.addText(answer.layer, {
      x: 0.8, y: y + 0.25, w: 1.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: answer.layerColor, bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(answer.title, {
      x: 2.3, y: y + 0.15, w: 2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Content
    slide.addText(answer.content, {
      x: 2.3, y: y + 0.5, w: 6.9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "top"
    });
  });

  // Key insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("关键：回应情绪而非行为，满足需求而非平息抱怨", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
