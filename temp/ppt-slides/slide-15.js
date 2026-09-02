// slide-15.js - 追问三步技巧
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 15,
  title: '核心追问技巧'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("核心追问技巧", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText('从"感觉"挖出"动作"', {
    x: 0.5, y: 1.0, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Context box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 1.2,
    fill: { color: theme.light, transparency: 40 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 0.08, h: 1.2,
    fill: { color: theme.secondary }
  });
  slide.addText("问题背景", {
    x: 0.8, y: 1.7, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText('被访谈者最容易说"我就是凭感觉"、"我说不太清楚"。原因：真的没有意识到自己在做什么。', {
    x: 0.8, y: 2.05, w: 8.4, h: 0.65,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Three steps overview - horizontal cards
  const stepData = [
    { num: "1", label: "描述情境", desc: "从模糊转向具体" },
    { num: "2", label: "锁定行为", desc: "从感觉转向行动" },
    { num: "3", label: "追问逻辑", desc: "从行为转向判断" }
  ];

  stepData.forEach((step, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.1, w: 2.9, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 1.1, y: 3.25, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + 1.1, y: 3.25, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step label
    slide.addText(step.label, {
      x: x, y: 4.05, w: 2.9, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Step description
    slide.addText(step.desc, {
      x: x, y: 4.45, w: 2.9, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("15", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
    primary: "8B2942",
    secondary: "4A4A4A",
    accent: "C75B5B",
    light: "E8D5D5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-15-preview.pptx" });
}

module.exports = { createSlide, slideConfig };