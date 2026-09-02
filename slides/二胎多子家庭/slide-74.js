// slide-74.js - 合作性语言示例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 74,
  title: '合作性语言示例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("合作性语言示例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Intro text
  slide.addText('用"我们"开始，让每个孩子感受到团队归属感', {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  // Examples
  const examples = [
    { phrase: '"我们可以怎么一起玩？"', scenario: "争抢玩具时" },
    { phrase: '"谁来照顾玩具熊？"', scenario: "分配责任时" },
    { phrase: '"怎么分配零食让每个人都开心？"', scenario: "分享食物时" },
    { phrase: '"我们一起想办法解决这个问题吧"', scenario: "发生冲突时" }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.3;
  const startX = 0.5;
  const startY = 1.65;
  const gapX = 0.3;
  const gapY = 0.2;

  examples.forEach((ex, idx) => {
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

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.primary }
    });

    // Phrase
    slide.addText(ex.phrase, {
      x: x + 0.2, y: y + 0.2, w: cardWidth - 0.4, h: 0.7,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Scenario tag
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.2, y: y + 0.9, w: 1.8, h: 0.3,
      fill: { color: theme.accent, transparency: 80 },
      rectRadius: 0.05
    });
    slide.addText(ex.scenario, {
      x: x + 0.2, y: y + 0.9, w: 1.8, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 92 }
  });
  slide.addText('合作性语言让孩子学会思考"我们"而非"我"，培养团队精神', {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
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
  pres.writeFile({ fileName: "slide-74-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
