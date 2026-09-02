// slide-48.js - 冲突的类型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 48,
  title: '冲突的类型'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("冲突的类型", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 types in 2x2 grid
  const types = [
    { num: "1", title: "资源竞争", desc: "争玩具、争关注" },
    { num: "2", title: "边界侵犯", desc: "进入房间、碰东西" },
    { num: "3", title: "关系争夺", desc: "谁是妈妈的最爱" },
    { num: "4", title: "能力比较", desc: "谁跑得快、谁学习好" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.8;
  const startX = 0.5;
  const startY = 1.3;
  const gapX = 0.4;
  const gapY = 0.35;

  types.forEach((type, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fill: { color: theme.primary }
    });
    slide.addText(type.num, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(type.title, {
      x: x + 0.95, y: y + 0.2, w: 3.0, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(type.desc, {
      x: x + 0.95, y: y + 0.75, w: 3.0, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-48-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
