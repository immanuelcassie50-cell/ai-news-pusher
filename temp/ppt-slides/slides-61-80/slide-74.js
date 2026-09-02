// slide-74.js - 本章核心要点 (Chapter 7 Summary)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 74,
  title: '本章核心要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本章核心要点", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Chapter badge
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 1.8, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("第七章 · 产出收敛", {
    x: 0.5, y: 1.05, w: 1.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Key points - horizontal cards
  const points = [
    { num: "01", title: "收敛时机", desc: "约60%时间是最佳收敛点\n关注参与者疲劳信号" },
    { num: "02", title: "分类整理", desc: "相似性聚类、矩阵分类\n优先级排序" },
    { num: "03", title: "筛选过滤", desc: " funnel模型\n3-5项最终产出" },
    { num: "04", title: "投票决策", desc: "多种技术适配不同场景\n确保公平透明" }
  ];

  points.forEach((pt, i) => {
    const x = 0.5 + i * 2.35;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.65, w: 2.2, h: 2.4,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addText(pt.num, {
      x: x + 0.15, y: 1.8, w: 0.6, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: theme.light, bold: true
    });

    // Title
    slide.addText(pt.title, {
      x: x + 0.15, y: 2.25, w: 1.9, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: 2.65, w: 0.8, h: 0.04,
      fill: { color: theme.accent }
    });

    // Description
    slide.addText(pt.desc, {
      x: x + 0.15, y: 2.8, w: 1.9, h: 1.1,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom - Output quality & documentation
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.25, w: 9, h: 0.6,
    fill: { color: theme.light }
  });

  slide.addText("产出质量6标准：", {
    x: 0.7, y: 4.25, w: 1.6, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  slide.addText("完整性 · 清晰性 · 具体性 · 可衡量 · 可行性 · 共识度", {
    x: 2.3, y: 4.25, w: 5, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle"
  });

  slide.addText("文档化：实时、结构化、可视化、当场确认", {
    x: 7.0, y: 4.25, w: 2.4, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, valign: "middle"
  });

  // Key reminder
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 8.5, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("核心：收敛不是压缩，而是提炼——从发散的想法中提取真正的价值", {
    x: 0.7, y: 5.0, w: 8.3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("74", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };