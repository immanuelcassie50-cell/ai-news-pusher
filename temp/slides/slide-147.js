// slide-147.js - Four Attachment Types Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "四种依恋类型总结",
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

  slide.addText("四种依恋类型总结", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  slide.addText("了解自己属于哪种依恋类型，是成长的起点", {
    x: 0.5, y: 0.7, w: 9, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "C9ADA7", margin: 0
  });

  // Four attachment type cards
  const types = [
    { name: "安全型", color: "B81025", traits: ["信任伴侣", "情绪稳定", "适度依赖", "有效沟通"] },
    { name: "焦虑型", color: "D4122B", traits: ["担心被抛弃", "过度依赖", "情绪波动大", "渴望确认"] },
    { name: "回避型", color: "4A4748", traits: ["情感隔离", "抗拒亲密", "独立至上", "难以表达"] },
    { name: "混乱型", color: "C9ADA7", traits: ["忽冷忽热", "行为不可预测", "既渴望又害怕", "关系中常困惑"] }
  ];

  types.forEach((type, idx) => {
    const x = 0.5 + idx * 2.35;

    // Card
    slide.addShape(pptx.ShapeType.roundRect, {
      x: x, y: 1.2, w: 2.2, h: 4.0,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });

    // Color header
    slide.addShape(pptx.ShapeType.rect, {
      x: x, y: 1.2, w: 2.2, h: 0.8,
      fill: { color: type.color }
    });

    // Type name
    slide.addText(type.name, {
      x: x, y: 1.35, w: 2.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", margin: 0
    });

    // Traits list
    slide.addText(
      type.traits.map((trait, i) => ({
        text: trait,
        options: { bullet: true, breakLine: i < type.traits.length - 1 }
      })),
      {
        x: x + 0.15, y: 2.15, w: 1.9, h: 2.8,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: "4A4748", paraSpaceAfter: 6, margin: 0
      }
    );
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
