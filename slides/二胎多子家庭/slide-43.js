// slide-43.js - 特殊情况处理
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 43,
  title: '特殊情况处理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("特殊情况处理", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // 4 special cases
  const cases = [
    { label: "双职工家庭", solution: "早起或睡前时间" },
    { label: "二宝还小", solution: "婴儿背带里的一对一" },
    { label: "青春期孩子", solution: "用\"顺便\"替代\"专门\"" },
    { label: "外出务工", solution: "视频专属时间也算" }
  ];

  const startY = 1.2;
  const itemHeight = 1.0;
  const startX = 0.5;

  cases.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 0.06, h: 0.85,
      fill: { color: theme.accent }
    });

    // Label circle
    slide.addShape(pres.shapes.OVAL, {
      x: startX + 0.25, y: y + 0.18, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: startX + 0.25, y: y + 0.18, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Label text
    slide.addText(item.label, {
      x: startX + 0.95, y: y, w: 2.5, h: 0.85,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Arrow
    slide.addText("→", {
      x: startX + 3.4, y: y, w: 0.5, h: 0.85,
      fontSize: 20, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Solution text
    slide.addText(item.solution, {
      x: startX + 4.0, y: y, w: 4.5, h: 0.85,
      fontSize: 16, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-43-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
