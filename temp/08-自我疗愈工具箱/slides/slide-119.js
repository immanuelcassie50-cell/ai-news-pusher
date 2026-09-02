/**
 * Slide 119 - 课程总结
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程总结", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Left section - What we covered
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.4, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.08 }
  });

  slide.addText("课程内容回顾", {
    x: 0.7, y: 1.25, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const modules = [
    "模块1: 心理健康与预防医学视角",
    "模块2: 呼吸与放松技术",
    "模块3: 身体扫描与渐进式肌肉放松",
    "模块4: 正念冥想基础",
    "模块5: 自我关怀",
    "模块6: 表达性写作",
    "模块7: 积极心理学应用"
  ];

  modules.forEach((mod, i) => {
    slide.addText("✓ " + mod, {
      x: 0.7, y: 1.7 + i * 0.26, w: 4, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Right section - Tools recap
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.1, w: 4.4, h: 2.5,
    fill: { color: theme.primary }
  });

  slide.addText("掌握的工具", {
    x: 5.3, y: 1.25, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  const tools = [
    "呼吸技术：4-7-8呼吸法、腹式呼吸",
    "身体扫描与PMR",
    "三分钟呼吸空间",
    "STOP五感正念",
    "自我关怀话术",
    "情绪释放四步法",
    "感恩日记"
  ];

  tools.forEach((tool, i) => {
    slide.addText("• " + tool, {
      x: 5.3, y: 1.7 + i * 0.26, w: 4, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false
    });
  });

  // Core message box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.8, w: 9, h: 0.8,
    fill: { color: theme.accent }
  });

  slide.addText("核心信息", {
    x: 0.7, y: 3.9, w: 1.5, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("心理健康维护不需要大量时间——每天几分钟的练习，就能带来持久的心理健康改善", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Takeaway quote
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.75, w: 9, h: 0.7,
    fill: { color: theme.secondary }
  });

  slide.addText('你值得被善待，包括被你自己善待', {
    x: 0.7, y: 4.85, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number
  slide.addText("119", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "summary",
  module: "Closing",
  title: "课程总结",
  pageNumber: 119
};

module.exports = { createSlide, slideConfig };
