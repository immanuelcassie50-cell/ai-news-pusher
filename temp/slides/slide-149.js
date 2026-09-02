// slide-149.js - Self-Assessment Checklist
const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "自我评估 checklist",
  type: "content",
  courseNumber: 19,
  category: "亲密关系"
};

function createSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: "F6F3EF" };

  // Left accent bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: "B81025" }
  });

  // Header
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.12, y: 0, w: 9.88, h: 1.0,
    fill: { color: "B81025" }
  });

  slide.addText("自我评估 checklist", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  slide.addText("对照检查你的依恋模式发展进程", {
    x: 0.5, y: 0.7, w: 9, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "C9ADA7", margin: 0
  });

  // Checklist items
  const checks = [
    "我能准确识别自己的依恋类型",
    "我了解自己在亲密关系中的自动化反应模式",
    "当情绪升起时，我能先暂停再回应",
    "我能在关系中表达自己的真实需求",
    "我与伴侣/重要他人有安全健康的情感连接"
  ];

  // Checkbox container
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 9.0, h: 4.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });

  checks.forEach((check, idx) => {
    const y = 1.45 + idx * 0.7;

    // Checkbox
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.7, y: y + 0.05, w: 0.35, h: 0.35,
      fill: { color: "F6F3EF" },
      line: { color: "C9ADA7", width: 1.5 },
      rectRadius: 0.05
    });

    slide.addText("☐", {
      x: 0.7, y: y + 0.02, w: 0.35, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: "D4122B", align: "center", valign: "middle", margin: 0
    });

    // Check item text
    slide.addText(check, {
      x: 1.2, y: y, w: 8.0, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "4A4748", valign: "middle", margin: 0
    });
  });

  // Footer note
  slide.addText("每达成一项，就在对应的框里打勾。定期回顾，见证自己的成长。", {
    x: 0.5, y: 5.1, w: 9.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "B81025", italic: true, margin: 0
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
