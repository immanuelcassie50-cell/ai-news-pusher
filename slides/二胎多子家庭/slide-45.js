// slide-45.js - 模块三小结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 45,
  title: '模块三核心要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("模块三核心要点", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key takeaways
  const takeaways = [
    { num: "1", text: "专属时间=被看见的感觉" },
    { num: "2", text: "质量>数量，全身心的10分钟" },
    { num: "3", text: "孩子主导，父母配合" },
    { num: "4", text: "障碍只是需要解决的问题" }
  ];

  const startY = 1.4;
  const itemHeight = 0.95;
  const startX = 0.5;

  takeaways.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 9, h: 0.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 0.06, h: 0.8,
      fill: { color: theme.primary }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: startX + 0.25, y: y + 0.13, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: startX + 0.25, y: y + 0.13, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Takeaway text
    slide.addText(item.text, {
      x: startX + 1.0, y: y, w: 7.5, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.2, w: 2, h: 0.03,
    fill: { color: theme.accent }
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
  pres.writeFile({ fileName: "slide-45-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
