// slide-05.js - Course Core Value (课程核心价值)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '课程核心价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header with primary color
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程核心价值", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three value propositions - horizontal cards
  const values = [
    {
      num: "1",
      title: "画出来",
      desc: "系统化绘制客户知识地图",
      detail: "将散落的客户信息整合为结构化的知识地图"
    },
    {
      num: "2",
      title: "传下去",
      desc: "把个人判断变成组织能力",
      detail: "将经验丰富的员工的隐性知识显性化"
    },
    {
      num: "3",
      title: "用起来",
      desc: "让知识活在日常工作中",
      detail: "建立可持续的知识迭代和应用机制"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.4;
  const startX = 0.55;
  const cardY = 1.3;
  const gap = 0.3;

  values.forEach((value, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent block
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: 0.08,
      fill: { color: theme.primary }
    });

    // Large number
    slide.addText(value.num, {
      x: x, y: cardY + 0.3, w: cardWidth, h: 0.9,
      fontSize: 56, fontFace: "Arial",
      color: theme.light, bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(value.title, {
      x: x + 0.15, y: cardY + 1.3, w: cardWidth - 0.3, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(value.desc, {
      x: x + 0.15, y: cardY + 1.85, w: cardWidth - 0.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.6, y: cardY + 2.45, w: cardWidth - 1.2, h: 0.02,
      fill: { color: theme.light }
    });

    // Detail text
    slide.addText(value.detail, {
      x: x + 0.15, y: cardY + 2.55, w: cardWidth - 0.3, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center", valign: "top"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3A",
    secondary: "4A4E69",
    accent: "9A8C98",
    light: "E8E8E8",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
