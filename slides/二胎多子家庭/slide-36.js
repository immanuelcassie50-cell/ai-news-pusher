// slide-36.js - 专属时间心理学机制
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: '为什么专属时间重要？'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("为什么专属时间重要？", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Science-backed reasons
  const reasons = [
    {
      field: "神经科学",
      desc: "单独关注激活依恋系统",
      icon: "1"
    },
    {
      field: "心理学",
      desc: "建立"我被看见"的信念",
      icon: "2"
    },
    {
      field: "发展学",
      desc: "安全感是所有能力的基础",
      icon: "3"
    },
    {
      field: "关系学",
      desc: "手足竞争的本质是争夺父母关注",
      icon: "4"
    }
  ];

  const startY = 1.3;
  const cardHeight = 0.95;
  const gap = 0.15;

  reasons.forEach((reason, idx) => {
    const y = startY + idx * (cardHeight + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.22, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(reason.icon, {
      x: 0.7, y: y + 0.22, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Field name
    slide.addText(reason.field, {
      x: 1.4, y: y + 0.15, w: 1.8, h: 0.65,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(reason.desc, {
      x: 3.3, y: y + 0.15, w: 5.9, h: 0.65,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("核心：专属时间不是额外负担，而是日常养育的必要组成部分", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
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
  pres.writeFile({ fileName: "slide-36-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
