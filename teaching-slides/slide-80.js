const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块三扩展：五大判断节点详解", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addText("人机协作中的关键决策点，每个节点都需要人为判断", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Five judgment nodes
  const nodes = [
    {
      num: "1",
      title: "任务定义节点",
      desc: "确定任务边界、目标、验收标准",
      question: "这个任务适合AI介入吗？",
      color: theme.accent,
      x: 0.5
    },
    {
      num: "2",
      title: "方案生成节点",
      desc: "AI生成后，人工评审方案质量",
      question: "方案是否满足需求？",
      color: theme.blue,
      x: 3.5
    },
    {
      num: "3",
      title: "风险评估节点",
      desc: "判断AI方案的风险点和局限性",
      question: "有哪些潜在风险？",
      color: theme.warm,
      x: 6.5
    }
  ];

  nodes.forEach((node) => {
    slide.addShape(pres.ShapeType.rect, {
      x: node.x, y: 1.5, w: 2.8, h: 2.0,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: node.x, y: 1.5, w: 2.8, h: 0.08,
      fill: { color: node.color }
    });

    slide.addShape(pres.ShapeType.ellipse, {
      x: node.x + 1.05, y: 1.65, w: 0.7, h: 0.7,
      fill: { color: node.color }
    });
    slide.addText(node.num, {
      x: node.x + 1.05, y: 1.65, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(node.title, {
      x: node.x + 0.15, y: 2.4, w: 2.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    slide.addText(node.desc, {
      x: node.x + 0.15, y: 2.75, w: 2.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    slide.addShape(pres.ShapeType.rect, {
      x: node.x + 0.15, y: 3.15, w: 2.5, h: 0.28,
      fill: { color: node.color, transparency: 15 }
    });
    slide.addText(node.question, {
      x: node.x + 0.15, y: 3.15, w: 2.5, h: 0.28,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: node.color, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Second row of nodes
  const nodes2 = [
    {
      num: "4",
      title: "执行监控节点",
      desc: "监督AI执行过程，及时干预",
      question: "执行过程是否正常？",
      color: theme.green,
      x: 1.5
    },
    {
      num: "5",
      title: "效果评估节点",
      desc: "评估最终效果，决定是否迭代",
      question: "效果是否达到预期？",
      color: theme.primary,
      x: 5.5
    }
  ];

  nodes2.forEach((node) => {
    slide.addShape(pres.ShapeType.rect, {
      x: node.x, y: 3.7, w: 2.8, h: 2.0,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: node.x, y: 3.7, w: 2.8, h: 0.08,
      fill: { color: node.color }
    });

    slide.addShape(pres.ShapeType.ellipse, {
      x: node.x + 1.05, y: 3.85, w: 0.7, h: 0.7,
      fill: { color: node.color }
    });
    slide.addText(node.num, {
      x: node.x + 1.05, y: 3.85, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(node.title, {
      x: node.x + 0.15, y: 4.6, w: 2.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    slide.addText(node.desc, {
      x: node.x + 0.15, y: 4.95, w: 2.5, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    slide.addShape(pres.ShapeType.rect, {
      x: node.x + 0.15, y: 5.35, w: 2.5, h: 0.28,
      fill: { color: node.color, transparency: 15 }
    });
    slide.addText(node.question, {
      x: node.x + 0.15, y: 5.35, w: 2.5, h: 0.28,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: node.color, bold: true,
      align: "center", valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
