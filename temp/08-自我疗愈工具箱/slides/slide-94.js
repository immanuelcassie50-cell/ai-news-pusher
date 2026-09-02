const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "模块六小结",
  type: "summary",
  pageNumber: 94
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("94", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("模块六小结", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Four scenarios summary
  const summaries = [
    { scene: "晨间激活", tools: "呼吸空间 + 感恩/PMR", key: "温和启动，带着觉知" },
    { scene: "工作间隙", tools: "3分钟呼吸空间 / 快速PMR", key: "快速重启，隐蔽有效" },
    { scene: "情绪低落", tools: "4-7-8呼吸 + 身体扫描", key: "先稳定，不追求开心" },
    { scene: "睡前放松", tools: "PMR / 身体扫描 / 书写", key: "降噪比催睡更重要" }
  ];

  summaries.forEach((s, i) => {
    const x = 0.5 + i * 2.35;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 2.2, h: 2.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 2.2, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(s.scene, {
      x: x, y: 1.2, w: 2.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Tools
    slide.addText(s.tools, {
      x: x + 0.1, y: 1.85, w: 2.0, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.3, y: 2.6, w: 1.6, h: 0.03,
      fill: { color: theme.light }
    });

    // Key message
    slide.addText(s.key, {
      x: x + 0.1, y: 2.75, w: 2.0, h: 0.65,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle"
    });
  });

  // Integration message box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.7, w: 9, h: 1.3,
    fill: { color: theme.primary }
  });

  slide.addText("整合寄语", {
    x: 0.7, y: 3.85, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("工具适配生活，而非生活适配工具", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("每个人的场景不同，找到最适合自己的工具组合，坚持使用", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
