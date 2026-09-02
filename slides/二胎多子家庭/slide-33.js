// slide-33.js - 模块二小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 33,
  title: '模块二核心要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("模块二核心要点", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    { icon: "1", title: "差异化满足，而非平均分配" },
    { icon: "2", title: "出生顺序影响但不是决定" },
    { icon: "3", title: "年龄差影响关系模式" },
    { icon: "4", title: "发展需求是设计的基础" }
  ];

  const startY = 1.4;
  const itemHeight = 0.95;

  takeaways.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.8,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(item.icon, {
      x: 0.8, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title text
    slide.addText(item.title, {
      x: 1.5, y: y, w: 7.8, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.2, w: 2, h: 0.03,
    fill: { color: theme.light }
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
  pres.writeFile({ fileName: "slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
