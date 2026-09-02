// slide-68.js - 比较性语言的伤害
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '比较性语言的伤害'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("比较性语言的伤害", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Impact items with visual icons
  const impacts = [
    { icon: "1", title: "伤害自尊心", desc: "被比较的孩子感到自己不够好，产生自我怀疑" },
    { icon: "2", title: "破坏手足感情", desc: "兄弟姐妹间产生怨恨、嫉妒等负面情绪" },
    { icon: "3", title: "孩子学会比较他人", desc: "孩子长大后也会用同样的方式评价他人" },
    { icon: "4", title: "降低自信和动力", desc: '"你怎么不如XX"让孩子失去前进的动力' }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.5;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.3;
  const gapY = 0.25;

  impacts.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.45, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(item.icon, {
      x: x + 0.25, y: y + 0.45, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 1.0, y: y + 0.25, w: cardWidth - 1.2, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: x + 1.0, y: y + 0.75, w: cardWidth - 1.2, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
