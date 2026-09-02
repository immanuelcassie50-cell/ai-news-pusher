// slide-63.js - 干预技巧
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '干预技巧'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("干预技巧", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Left column - Techniques list
  const techniques = [
    { name: "重新框定", desc: "将问题置于新的、更建设性的框架中" },
    { name: "情感标注", desc: "命名各方的感受，让情绪可见化" },
    { name: "暂停提问", desc: "强制中断，引入反思性问题" },
    { name: "角色互换", desc: "让各方站在对方角度思考" },
    { name: "共同利益", desc: "寻找超越分歧的共同目标" }
  ];

  techniques.forEach((tech, i) => {
    const y = 1.3 + i * 0.78;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(tech.name, {
      x: 1.1, y: y - 0.05, w: 1.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(tech.desc, {
      x: 1.1, y: y + 0.3, w: 3.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right side - Example box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 1.3, w: 4.5, h: 3.5,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 1.3, w: 4.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("干预话术示例", {
    x: 5.0, y: 1.3, w: 4.5, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const examples = [
    "\"我注意到双方都很关注这个问题，让我们先暂停一下...\"",
    "\"如果站在对方的角度，你认为他的核心诉求是什么？\"",
    "\"除了这个争议点，我们有什么是可以达成共识的？\""
  ];

  examples.forEach((ex, i) => {
    slide.addText(ex, {
      x: 5.2, y: 1.95 + i * 0.9, w: 4.1, h: 0.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "top",
      italic: true
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("63", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };