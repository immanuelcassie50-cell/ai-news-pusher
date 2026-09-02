// slide-146.js - Part 6 Summary: Key Learnings Recap
const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "课程知识点回顾",
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

  slide.addText("课程知识点回顾", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  slide.addText("Part 6: 总结与行动", {
    x: 0.5, y: 0.7, w: 9, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "C9ADA7", margin: 0
  });

  // Three key takeaways
  const takeaways = [
    { num: "01", title: "四种依恋类型", desc: "安全型、焦虑型、回避型、混乱型——认清自己的类型是改变的起点" },
    { num: "02", title: "关系中的行为模式", desc: "我们在亲密关系中的反应，往往是童年经历的延续和重现" },
    { num: "03", title: "成长路径", desc: "通过自我觉察、情绪管理和有效沟通，逐步建立安全的依恋关系" }
  ];

  takeaways.forEach((item, idx) => {
    const y = 1.25 + idx * 1.35;

    // Card background
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9.0, h: 1.2,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 0.7, y: y + 0.3, w: 0.6, h: 0.6,
      fill: { color: "D4122B" }
    });

    slide.addText(item.num, {
      x: 0.7, y: y + 0.35, w: 0.6, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(item.title, {
      x: 1.5, y: y + 0.15, w: 7.8, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "B81025", bold: true, margin: 0
    });

    // Description
    slide.addText(item.desc, {
      x: 1.5, y: y + 0.55, w: 7.8, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "4A4748", margin: 0
    });
  });

  // Bottom emphasis
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 5.1, w: 9.0, h: 0.4,
    fill: { color: "C9ADA7", transparency: 50 }
  });

  slide.addText("认识自己，是改善关系的第一步", {
    x: 0.5, y: 5.1, w: 9.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "B81025", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
