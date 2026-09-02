// slide-41.js - 设计示例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 41,
  title: '设计示例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("设计示例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three examples
  const examples = [
    { name: "小明（5岁）", desc: "每周3次，每次25分钟\"游戏时间\"" },
    { name: "小华（10岁）", desc: "每周2次，公园骑行+聊天" },
    { name: "小美（14岁）", desc: "每周1次，咖啡厅聊天60分钟" }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.2;
  const startX = 0.5;
  const startY = 1.4;
  const gap = 0.35;

  examples.forEach((ex, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (cardWidth - 0.8) / 2, y: startY + 0.5, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: x + (cardWidth - 0.8) / 2, y: startY + 0.5, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Name
    slide.addText(ex.name, {
      x: x + 0.2, y: startY + 1.5, w: cardWidth - 0.4, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(ex.desc, {
      x: x + 0.2, y: startY + 2.2, w: cardWidth - 0.4, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 0.05, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("根据孩子年龄和兴趣，灵活调整形式与时长", {
    x: 0.7, y: 5.0, w: 8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
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
  pres.writeFile({ fileName: "slide-41-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
