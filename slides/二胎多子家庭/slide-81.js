// slide-81.js - 课程回顾第1页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 81,
  title: '课程回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("课程回顾", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 5 modules summary
  const modules = [
    { num: "01", title: "理解公平感的本质" },
    { num: "02", title: "看见差异的价值" },
    { num: "03", title: "设计专属时间" },
    { num: "04", title: "冲突转化四步法" },
    { num: "05", title: "语言重塑系统" }
  ];

  const cardWidth = 8.5;
  const cardHeight = 0.7;
  const startX = 0.75;
  const startY = 1.3;
  const gapY = 0.15;

  modules.forEach((mod, idx) => {
    const y = startY + idx * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 0.06, h: cardHeight,
      fill: { color: theme.primary }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: startX + 0.25, y: y + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(mod.num, {
      x: startX + 0.25, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title text
    slide.addText(mod.title, {
      x: startX + 0.95, y: y, w: 6, h: cardHeight,
      fontSize: 20, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-81-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
