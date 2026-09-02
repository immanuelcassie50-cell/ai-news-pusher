// slide-26.js - 出生顺序的育儿启示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '出生顺序的育儿启示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("出生顺序的育儿启示", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Insights as cards
  const insights = [
    { target: "老大", action: "不给过多压力", desc: "避免\"你是哥哥/姐姐，应该做榜样\"的心态" },
    { target: "老小", action: "不当永远的小宝宝", desc: "允许承担责任，不要总是\"他还小\"来替他开脱" },
    { target: "中间孩子", action: "看见独特处境", desc: "他既没有老大的特权，也没有老小的豁免" },
    { target: "所有孩子", action: "避免标签化", desc: "不要用\"你就是...\"来定义孩子的性格发展" }
  ];

  const startY = 1.3;
  const cardHeight = 0.95;
  const gap = 0.15;

  insights.forEach((insight, idx) => {
    const y = startY + idx * (cardHeight + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Target badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.75, y: y + 0.25, w: 1.3, h: 0.45,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(insight.target, {
      x: 0.75, y: y + 0.25, w: 1.3, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Action text
    slide.addText(insight.action, {
      x: 2.2, y: y + 0.15, w: 3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(insight.desc, {
      x: 2.2, y: y + 0.5, w: 7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
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
  pres.writeFile({ fileName: "slide-26-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
