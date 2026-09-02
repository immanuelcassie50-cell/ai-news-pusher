// slide-148.js - Call to Action: Apply What You Learned
const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "行动倡议",
  type: "content",
  courseNumber: 19,
  category: "亲密关系"
};

function createSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: "B81025" };

  // Decorative circles
  slide.addShape(pptx.ShapeType.ellipse, {
    x: -1, y: 3.5, w: 4, h: 4,
    fill: { color: "D4122B", transparency: 60 }
  });

  slide.addShape(pptx.ShapeType.ellipse, {
    x: 8, y: -1, w: 3.5, h: 3.5,
    fill: { color: "4A4748", transparency: 70 }
  });

  // Main heading
  slide.addText("从今天开始", {
    x: 0.5, y: 1.2, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "C9ADA7", align: "center"
  });

  slide.addText("改善你的依恋模式", {
    x: 0.5, y: 1.8, w: 9, h: 1.0,
    fontSize: 42, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  // Divider
  slide.addShape(pptx.ShapeType.rect, {
    x: 4, y: 3.0, w: 2, h: 0.05,
    fill: { color: "C9ADA7" }
  });

  // Action items
  const actions = [
    "完成ECR-R自我评估问卷",
    "觉察自己在关系中的自动化反应",
    "每周实践一项新的沟通方式"
  ];

  actions.forEach((action, idx) => {
    const y = 3.3 + idx * 0.55;

    slide.addShape(pptx.ShapeType.ellipse, {
      x: 2.5, y: y + 0.08, w: 0.3, h: 0.3,
      fill: { color: "D4122B" }
    });

    slide.addText((idx + 1).toString(), {
      x: 2.5, y: y + 0.08, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    slide.addText(action, {
      x: 3.0, y: y, w: 5, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", valign: "middle", margin: 0
    });
  });

  // Course name
  slide.addText("依恋类型：认清你在关系中的行为模式", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "C9ADA7", align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
