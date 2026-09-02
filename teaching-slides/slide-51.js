const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("认证标准说明", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Three dimension cards
  const dimensions = [
    {
      title: "知识掌握",
      percent: "30%",
      desc: "核心概念和工具理解",
      color: theme.primary
    },
    {
      title: "技能展示",
      percent: "40%",
      desc: "工具运用和提问技术",
      color: theme.accent
    },
    {
      title: "态度体现",
      percent: "30%",
      desc: "中立立场和过程管理",
      color: theme.secondary
    }
  ];

  dimensions.forEach((d, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.1, w: 2.9, h: 3.8,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 10, offset: 4, angle: 135, opacity: 0.1 }
    });

    // Top color bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.1, w: 2.9, h: 0.15,
      fill: { color: d.color }
    });

    // Percent circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.85, y: 1.5, w: 1.2, h: 1.2,
      fill: { color: d.color }
    });
    slide.addText(d.percent, {
      x: x + 0.85, y: 1.5, w: 1.2, h: 1.2,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(d.title, {
      x: x + 0.2, y: 2.85, w: 2.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(d.desc, {
      x: x + 0.2, y: 3.35, w: 2.5, h: 1.2,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });

  // Bottom note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.1, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("认证标准采用加权评分，综合评估学员在三个维度的表现", {
    x: 0.5, y: 5.1, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
