// slide-58.js - Content: First Time Making Own Decision
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 58, title: '第一次为自己做主' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("第一次为自己做主", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Subtitle
  slide.addText("第八章：志愿表的真正意义", {
    x: 0.5, y: 0.9, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Big quote card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 9, h: 2.8,
    fill: { color: theme.primary },
    rectRadius: 0.12,
    shadow: { type: 'outer', color: '000000', blur: 6, offset: 3, angle: 135, opacity: 0.12 }
  });

  // Quote mark (Unicode left double quotation mark)
  slide.addText("\u201C", {
    x: 0.8, y: 1.5, w: 0.6, h: 0.8,
    fontSize: 60, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  // Quote text
  slide.addText("\u8FD9\u5F20\u8868\u586B\u5B8C\uFF0C\u5F88\u591A\u5BB6\u957F\u89C9\u5F97\u4E8B\u60C5\u7ED3\u675F\u4E86\uFF0C\u5176\u5B9E\u5BF9\u8FD9\u4E2A\u5B69\u5B50\u6765\u8BF4\uFF0C\u8FD9\u53EF\u80FD\u662F\u4ED6\u4EBA\u751F\u91CC\u7B2C\u4E00\u6B21\uFF0C\u4E00\u4E2A\u6B63\u5F0F\u7684\u3001\u6709\u540E\u679C\u7684\u51B3\u5B9A\uFF0C\u662F\u4ECE\u4ED6\u81EA\u5DF1\u5634\u91CC\u8BF4\u51FA\u6765\u7684\u3002", {
    x: 1.0, y: 2.1, w: 8.0, h: 1.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    valign: "top"
  });

  // Key insight below
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: 'outer', color: '000000', blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 0.08, h: 0.9,
    fill: { color: theme.accent }
  });

  slide.addText("\u5FD7\u613F\u8868\u80CC\u540E\u771F\u6B63\u53D1\u751F\u7684\uFF1A\u5341\u4E03\u516B\u5C81\u7684\u4EBA\u7B2C\u4E00\u6B21\u5728\u6CA1\u6709\u6807\u51C6\u7B54\u6848\u7684\u60C5\u51B5\u4E0B\u4E3A\u81EA\u5DF1\u672A\u6765\u505A\u9009\u62E9", {
    x: 0.75, y: 4.4, w: 8.5, h: 0.9,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("58", {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-58-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
