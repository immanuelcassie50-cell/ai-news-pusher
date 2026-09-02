// slide-52.js - STEA步骤3: Explore
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 52,
  title: 'E - Explore 探索方案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("E - Explore 探索方案", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Step indicator
  slide.addText("第三步", {
    x: 8.5, y: 0.2, w: 1, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "right", valign: "middle"
  });

  // 4 actions in horizontal layout
  const actions = [
    { title: "头脑风暴", desc: "列出所有可能的方案" },
    { title: "不否定", desc: "每个方案都值得记录" },
    { title: "孩子参与", desc: "让他们提出建议" },
    { title: "考虑", desc: "每个方案的可行性" }
  ];

  const cardWidth = 2.15;
  const cardHeight = 3.4;
  const startX = 0.5;
  const startY = 1.3;
  const gap = 0.27;

  actions.forEach((action, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(String(idx + 1), {
      x: x, y: startY + 0.3, w: cardWidth, h: 0.6,
      fontSize: 36, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(action.title, {
      x: x + 0.15, y: startY + 1.1, w: cardWidth - 0.3, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(action.desc, {
      x: x + 0.15, y: startY + 1.7, w: cardWidth - 0.3, h: 1.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
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
  pres.writeFile({ fileName: "slide-52-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
