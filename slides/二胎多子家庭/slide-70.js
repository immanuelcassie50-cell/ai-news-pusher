// slide-70.js - 描述性语言替代第2页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 70,
  title: '更多替代示例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("更多替代示例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Examples
  const examples = [
    { before: '"为什么你不能像妹妹一样乖？"', after: '"我看到你今天自己穿了衣服，真独立"' },
    { before: '"你是哥哥，应该让着弟弟"', after: '"弟弟还不太会玩这个，我们可以一起教他"' },
    { before: '"姐姐都考95分，你呢？"', after: '"我看到你这次考试比上次进步了，继续加油"' },
    { before: '"你怎么总是比不上你哥"', after: '"你有自己的优点，比如..."' }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.5;
  const startX = 0.5;
  const startY = 1.15;
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

    // Before text (with strikethrough effect - just red color)
    slide.addText("Before:", {
      x: x + 0.15, y: y + 0.1, w: 0.8, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(ex.before, {
      x: x + 0.15, y: y + 0.35, w: cardWidth - 0.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false, align: "left", valign: "top"
    });

    // Arrow
    slide.addText("↓", {
      x: x + 0.15, y: y + 0.7, w: cardWidth - 0.3, h: 0.25,
      fontSize: 12, fontFace: "Arial",
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });

    // After text
    slide.addText("After:", {
      x: x + 0.15, y: y + 0.9, w: 0.8, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addText(ex.after, {
      x: x + 0.15, y: y + 1.1, w: cardWidth - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false, align: "left", valign: "top"
    });
  });

  // Tip box at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.primary, transparency: 90 }
  });
  slide.addText("提示：改变语言习惯需要时间，慢慢来，从每天一句开始", {
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
  pres.writeFile({ fileName: "slide-70-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
