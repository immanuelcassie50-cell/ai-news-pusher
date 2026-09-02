const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("团队动力学原理", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Definition section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 9, h: 1.0,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 0.1, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("团队动力", {
    x: 0.8, y: 1.2, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });
  slide.addText("团队中影响成员行为的各种力量，包括推动力与阻力、凝聚力与分裂力的相互作用", {
    x: 0.8, y: 1.55, w: 8.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, margin: 0
  });

  // Four sources of power - 2x2 grid
  const sources = [
    { title: "目标", desc: "共同愿景与方向", icon: "🎯" },
    { title: "角色", desc: "职责分工与期待", icon: "👥" },
    { title: "流程", desc: "工作方法与规范", icon: "⚙️" },
    { title: "关系", desc: "人际互动与信任", icon: "🤝" }
  ];

  const sStartX = 0.5;
  const sStartY = 2.4;
  const sW = 2.1;
  const sH = 1.5;
  const sGapX = 0.2;
  const sGapY = 0.2;

  sources.forEach((src, i) => {
    const col = i % 4;
    const x = sStartX + col * (sW + sGapX);
    const y = sStartY;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: sW, h: sH,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: sW, h: 0.06,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + sW / 2 - 0.35, y: y + 0.2, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(src.title.charAt(0), {
      x: x + sW / 2 - 0.35, y: y + 0.25, w: 0.7, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(src.title, {
      x: x, y: y + 0.95, w: sW, h: 0.3,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", margin: 0
    });
    // Description
    slide.addText(src.desc, {
      x: x, y: y + 1.2, w: sW, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", margin: 0
    });
  });

  // Dynamic model - Input → Process → Output
  const modelY = 4.3;

  // Input box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: modelY, w: 2.5, h: 1.0,
    fill: { color: theme.primary }
  });
  slide.addText("输入", {
    x: 0.8, y: modelY, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("成员 + 任务 + 资源", {
    x: 0.8, y: modelY + 0.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Arrow 1
  slide.addText("→", {
    x: 3.3, y: modelY, w: 0.6, h: 1.0,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Process box
  slide.addShape(pres.ShapeType.rect, {
    x: 3.9, y: modelY, w: 2.5, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("过程", {
    x: 3.9, y: modelY, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("沟通 + 决策 + 协作", {
    x: 3.9, y: modelY + 0.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  // Arrow 2
  slide.addText("→", {
    x: 6.4, y: modelY, w: 0.6, h: 1.0,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Output box
  slide.addShape(pres.ShapeType.rect, {
    x: 7.0, y: modelY, w: 2.5, h: 1.0,
    fill: { color: theme.secondary }
  });
  slide.addText("输出", {
    x: 7.0, y: modelY, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("成果 + 成长 + 关系", {
    x: 7.0, y: modelY + 0.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff",
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
