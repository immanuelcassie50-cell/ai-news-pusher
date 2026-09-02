// slide-13.js - Three-Dimensional Fairness Model (公平感三维模型)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 13,
  title: '公平感三维模型'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("公平感三维模型", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 3 dimensions - vertical cards
  const dimensions = [
    { title: "物质层", items: ["玩具", "时间", "空间"] },
    { title: "情感层", items: ["关注", "认可", "陪伴"] },
    { title: "发展层", items: ["教育", "兴趣", "支持"] }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.5;
  const startX = 0.5;
  const cardY = 1.2;
  const gap = 0.35;

  dimensions.forEach((dim, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: 0.1, h: cardHeight,
      fill: { color: theme.primary }
    });

    // Dimension title
    slide.addText(dim.title, {
      x: x + 0.2, y: cardY + 0.3, w: cardWidth - 0.4, h: 0.7,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Items
    dim.items.forEach((item, itemIdx) => {
      const itemY = cardY + 1.2 + itemIdx * 0.7;

      // Item circle
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.4, y: itemY + 0.1, w: 0.35, h: 0.35,
        fill: { color: theme.accent }
      });

      // Item text
      slide.addText(item, {
        x: x + 0.9, y: itemY, w: 1.8, h: 0.55,
        fontSize: 18, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
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
  pres.writeFile({ fileName: "slide-13-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
