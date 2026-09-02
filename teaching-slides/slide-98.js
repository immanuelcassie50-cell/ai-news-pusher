const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("复训与持续学习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("持续成长，在实践中精进", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left column - Retraining policy
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.55, w: 4.4, h: 2.8,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.55, w: 4.4, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("复训政策", {
    x: 0.6, y: 1.7, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const retraining = [
    { icon: "1", text: "一年内可免费复训" },
    { icon: "2", text: "复训需提前预约" },
    { icon: "3", text: "复训内容更新说明" }
  ];

  retraining.forEach((item, i) => {
    const y = 2.2 + i * 0.65;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.05, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(item.icon, {
      x: 0.7, y: y + 0.05, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(item.text, {
      x: 1.2, y: y, w: 3.4, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Right column - Continuous learning
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.55, w: 4.5, h: 2.8,
    fill: { color: "ffffff" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.55, w: 4.5, h: 0.08,
    fill: { color: theme.primary }
  });

  slide.addText("持续学习", {
    x: 5.3, y: 1.7, w: 4.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const learning = [
    { name: "线上学习社群", desc: "与优秀催化师交流经验", color: theme.secondary },
    { name: "月度实践分享", desc: "分享催化案例与心得", color: theme.primary },
    { name: "年度进阶工作坊", desc: "深度进阶与认证更新", color: theme.accent }
  ];

  learning.forEach((item, i) => {
    const y = 2.2 + i * 0.65;

    slide.addShape(pres.ShapeType.chevron, {
      x: 5.3, y: y, w: 4.1, h: 0.55,
      fill: { color: item.color, transparency: 85 },
      line: { color: item.color, width: 1 }
    });

    slide.addText(item.name, {
      x: 5.5, y: y + 0.05, w: 2.5, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: item.color, bold: true
    });
    slide.addText(item.desc, {
      x: 5.5, y: y + 0.28, w: 3.7, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Learning path visual
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.55, w: 9.2, h: 1.0,
    fill: { color: theme.light }
  });

  slide.addText("学习路径", {
    x: 0.6, y: 4.6, w: 8.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Path steps
  const pathSteps = ["课程学习", "实践应用", "复训提升", "认证进阶", "成为导师"];
  pathSteps.forEach((step, i) => {
    const x = 0.6 + i * 1.8;

    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 4.95, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText((i + 1).toString(), {
      x: x, y: 4.95, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step, {
      x: x - 0.3, y: 5.32, w: 1.0, h: 0.2,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // Arrow between steps
    if (i < pathSteps.length - 1) {
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.38, y: 5.1, w: 1.35, h: 0.03,
        fill: { color: theme.secondary, transparency: 50 }
      });
    }
  });

  return slide;
}

module.exports = { createSlide };
