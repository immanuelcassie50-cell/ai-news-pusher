// slide-82.js - 课程回顾第2页 - 核心工具回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 82,
  title: '核心工具回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("核心工具回顾", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Tools list
  const tools = [
    "公平感冰山模型",
    "差异化满足三维度",
    "专属时间设计模板",
    "STEA冲突转化法",
    "家庭语言公约"
  ];

  const cardWidth = 4.0;
  const cardHeight = 1.5;
  const startX = 0.65;
  const startY = 1.3;
  const gapX = 0.3;
  const gapY = 0.25;

  tools.forEach((tool, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 0.05,
      fill: { color: theme.accent }
    });

    // Tool icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.35, w: 0.6, h: 0.6,
      fill: { color: theme.light, transparency: 30 }
    });
    slide.addText(String(idx + 1), {
      x: x + 0.2, y: y + 0.35, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Tool text
    slide.addText(tool, {
      x: x + 1.0, y: y + 0.35, w: 2.8, h: 0.8,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-82-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
