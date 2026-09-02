const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块一练习详解", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("自动贩卖机 vs 工作伙伴 — 案例深化", {
    x: 0.5, y: 1.0, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left panel - Vending Machine concept
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.7, w: 4.3, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.7, w: 4.3, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("自动贩卖机模式", {
    x: 0.7, y: 1.78, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const vendingPoints = [
    "输入：明确指令 → 输出：标准答案",
    "适合：重复性高、边界清晰的任务",
    "特点：高效、无情感、即刻响应",
    "局限：无法处理模糊情境",
    "典型场景：数据查询、格式转换"
  ];

  vendingPoints.forEach((point, i) => {
    slide.addText("•  " + point, {
      x: 0.7, y: 2.35 + i * 0.55, w: 3.9, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  // Right panel - Work Partner concept
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.7, w: 4.3, h: 3.5,
    fill: { color: "ffffff" },
    line: { color: theme.accent, width: 2 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.7, w: 4.3, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("工作伙伴模式", {
    x: 5.4, y: 1.78, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const partnerPoints = [
    "互动：双向沟通 → 共同探索",
    "适合：复杂问题、需要判断的情境",
    "特点：理解背景、提供建议、共同决策",
    "优势：可解释、能学习、会追问",
    "典型场景：方案策划、问题诊断"
  ];

  partnerPoints.forEach((point, i) => {
    slide.addText("•  " + point, {
      x: 5.4, y: 2.35 + i * 0.55, w: 3.9, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.dark
    });
  });

  // Bottom insight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.3, w: 9, h: 0.5,
    fill: { color: theme.secondary, transparency: 20 }
  });
  slide.addText("核心洞察：根据任务性质选择合适的协作模式，而非一味追求\"深度对话\"", {
    x: 0.7, y: 5.38, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  return slide;
}

module.exports = { createSlide };
