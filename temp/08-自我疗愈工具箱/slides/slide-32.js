const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "Module 2 Summary & Transition",
  type: "summary",
  pageNumber: 32
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("模块二总结与过渡", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // What we learned section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.2, w: 5.5, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("本模块学习内容", {
    x: 0.8, y: 1.3, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const learned = [
    "呼吸调节法：4-7-8呼吸、腹式呼吸",
    "身体扫描：从头到脚的觉察练习",
    "渐进式肌肉放松：PMR基础与完整版",
    "场景应用：根据不同情境选择技巧",
    "进阶路径：从初级到高级的练习建议"
  ];

  slide.addText(
    learned.map((l, i) => ({
      text: l,
      options: { bullet: true, breakLine: i < learned.length - 1 }
    })),
    {
      x: 0.8, y: 1.75, w: 5.1, h: 1.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      paraSpaceAfter: 6
    }
  );

  // Key takeaway
  slide.addShape(pres.ShapeType.rect, {
    x: 6.3, y: 1.2, w: 3.1, h: 2.4,
    fill: { color: theme.primary }
  });

  slide.addText("核心理念", {
    x: 6.5, y: 1.3, w: 2.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("身体是心灵的容器\n关注身体就是关注内心\n放松身体就是放松心灵", {
    x: 6.5, y: 1.8, w: 2.7, h: 1.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Next module preview
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.8, w: 8.8, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("下一个模块预告", {
    x: 0.8, y: 3.9, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Module 3 preview card
  slide.addShape(pres.ShapeType.rect, {
    x: 4.0, y: 3.95, w: 5.2, h: 1.0,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 1 }
  });

  slide.addText("模块三：正念微练习", {
    x: 4.2, y: 4.05, w: 4.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("学习更简短的正念练习方式，将正念融入日常生活的每一个瞬间", {
    x: 4.2, y: 4.45, w: 4.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Transition arrow
  slide.addText("→", {
    x: 0.8, y: 4.15, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("32", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
