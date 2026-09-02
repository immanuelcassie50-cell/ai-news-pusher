// slide-25.js - Content: 实操产出 · 使用提示词生成话术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 25,
  title: "实操产出 · 使用提示词生成话术"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("实操产出 · 使用提示词生成话术", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Time badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.2, y: 0.35, w: 1.3, h: 0.5,
    fill: { color: theme.secondary },
    rectRadius: 0.05
  });
  slide.addText("20分钟", {
    x: 8.2, y: 0.35, w: 1.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Process flow - 3 steps
  const steps = [
    { num: "1", text: "把提示词模板复制到AI工具，填入你的具体信息" },
    { num: "2", text: "运行，拿到AI生成的初稿" },
    { num: "3", text: "用验证清单逐项检查" }
  ];

  steps.forEach((step, i) => {
    const y = 1.2 + i * 1.3;

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.8, h: 0.8,
      fill: { color: theme.secondary }
    });
    slide.addText(step.num, {
      x: 0.5, y: y, w: 0.8, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Step text
    slide.addText(step.text, {
      x: 1.5, y: y, w: 8, h: 0.8,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "left", valign: "middle"
    });

    // Connector line (except last)
    if (i < 2) {
      slide.addShape(pres.shapes.LINE, {
        x: 0.9, y: y + 0.85, w: 0, h: 0.4,
        line: { color: theme.accent, width: 2 }
      });
    }
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("25", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };