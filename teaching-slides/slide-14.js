const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("ORID应用场景", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four scenario cards - 2x2 grid layout
  const scenarios = [
    {
      num: "01",
      title: "会议复盘",
      desc: "对会议决策过程进行回顾，梳理共识与分歧，明确后续行动",
      icon: "会",
      color: theme.primary
    },
    {
      num: "02",
      title: "项目回顾",
      desc: "总结项目执行中的经验教训，评估目标达成情况与改进空间",
      icon: "项",
      color: theme.accent
    },
    {
      num: "03",
      title: "团队沟通",
      desc: "促进团队成员表达观点与感受，建立信任与理解，提升协作效能",
      icon: "团",
      color: theme.secondary
    },
    {
      num: "04",
      title: "个人反思",
      desc: "支持个人对工作与生活进行深度反思，明确方向与行动计划",
      icon: "思",
      color: theme.primary
    }
  ];

  const gridStartX = 0.5;
  const gridStartY = 1.15;
  const cardW = 4.35;
  const cardH = 1.9;
  const gapX = 0.3;
  const gapY = 0.25;

  scenarios.forEach((scenario, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = gridStartX + col * (cardW + gapX);
    const y = gridStartY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.light },
      line: { color: theme.secondary, width: 0.5 }
    });

    // Left color accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.1, h: cardH,
      fill: { color: scenario.color }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: y + 0.2, w: 0.55, h: 0.45,
      fill: { color: scenario.color }
    });
    slide.addText(scenario.num, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(scenario.title, {
      x: x + 0.95, y: y + 0.22, w: 3.1, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + cardW - 0.9, y: y + 0.2, w: 0.65, h: 0.65,
      fill: { color: scenario.color, transparency: 85 },
      line: { color: scenario.color, width: 1 }
    });
    slide.addText(scenario.icon, {
      x: x + cardW - 0.9, y: y + 0.28, w: 0.65, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: scenario.color, bold: true, align: "center", valign: "middle", margin: 0
    });

    // Description
    slide.addText(scenario.desc, {
      x: x + 0.3, y: y + 0.85, w: cardW - 0.5, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });

    // Bottom ORID hint bar
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: y + cardH - 0.45, w: cardW - 0.4, h: 0.3,
      fill: { color: scenario.color, transparency: 90 }
    });
    slide.addText("适用 ORID 全四层", {
      x: x + 0.2, y: y + cardH - 0.45, w: cardW - 0.4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: scenario.color, align: "center", valign: "middle", margin: 0
    });
  });

  // Bottom decorative line
  slide.addShape(pres.ShapeType.line, {
    x: 0.5, y: 5.35, w: 9, h: 0,
    line: { color: theme.secondary, width: 0.5, dashType: "dash", transparency: 50 }
  });

  // Footer tip
  slide.addText("TIP: 选择合适的场景是有效应用ORID的第一步", {
    x: 0.5, y: 5.4, w: 9, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  return slide;
}

module.exports = { createSlide };
