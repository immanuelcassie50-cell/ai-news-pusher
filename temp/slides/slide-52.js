// slide-52.js - 核心概念：冲稳保是风险偏好的翻译
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 52,
  title: '冲稳保是风险偏好的翻译'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("冲稳保是风险偏好的翻译", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Main quote box - prominent centerpiece
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 2.0,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  // Quote mark decoration
  slide.addText("“", {
    x: 0.7, y: 1.2, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    transparency: 40
  });

  // Quote text
  slide.addText("“冲窝保不是三个装满学校的抽屉，是一个人对‘我愿意承担多大风险去换多大的可能性’这句话的翻译。", {
    x: 1.0, y: 1.6, w: 8.0, h: 1.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key insight cards
  const insights = [
    {
      icon: "!",
      title: "纯数学陷阱",
      desc: "大部分教程把冲稳保讲成比例、级差、调剂的纯数学问题"
    },
    {
      icon: "→",
      title: "与人脱钩",
      desc: "只停在这一层，冲稳保就变成了跟具体的人完全脱钩的公式"
    },
    {
      icon: "?",
      title: "真正的问题",
      desc: "如果最后掉到保底档，能不能接受？"
    }
  ];

  const cardW = 2.85;
  const startX = 0.5;
  const cardY = 3.6;
  const cardH = 1.6;
  const gap = 0.2;

  insights.forEach((insight, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: cardY + 0.15, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(insight.icon, {
      x: x + 0.15, y: cardY + 0.15, w: 0.45, h: 0.45,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(insight.title, {
      x: x + 0.15, y: cardY + 0.7, w: cardW - 0.3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(insight.desc, {
      x: x + 0.15, y: cardY + 1.05, w: cardW - 0.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    });
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("52", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-52-preview.pptx" })
    .then(() => console.log("Created: slide-52-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
