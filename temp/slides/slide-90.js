// slide-90.js - The Final Word
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '最后一句话由谁说'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Light gray background
  slide.background = { color: theme.bg };

  // Title
  slide.addText("最后一句话由谁说", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Main content area
  // Step 1
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.3, w: 9, h: 0.85,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 1.45, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("1", {
    x: 0.7, y: 1.45, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("每次给出判断时，刻意留一个“这不是最终答案，是给你参考的一个角度”的空间", {
    x: 1.4, y: 1.45, w: 7.9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Step 2
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.3, w: 9, h: 0.85,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 2.45, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("2", {
    x: 0.7, y: 2.45, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("把最后拍板这个动作交还给孩子自己说出口", {
    x: 1.4, y: 2.45, w: 7.9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Step 3
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.3, w: 9, h: 0.85,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 3.45, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("3", {
    x: 0.7, y: 3.45, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("哪怕最后选出来的方向跟建议的一模一样", {
    x: 1.4, y: 3.45, w: 7.9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Key insight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.35, w: 9, h: 0.9,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("“由谁说出最后那句话”的差别决定了孩子是把自己当责任人，还是把责任推给当初给建议的人", {
    x: 0.7, y: 4.45, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge - circle style, bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("90", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-90-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
