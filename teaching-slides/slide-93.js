const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("模块五：综合实战 — 路演点评细节", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Introduction
  slide.addText("路演点评的ORID框架", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // ORID framework for presentations
  const oridSteps = [
    {
      letter: "O",
      title: "客观描述",
      subtitle: "观察到的事实",
      points: ["路演的结构是否清晰？", "时间控制如何？", "用了哪些展示技巧？"],
      color: theme.secondary
    },
    {
      letter: "R",
      title: "反应感受",
      subtitle: "你的内心感受",
      points: ["整体感受如何？", "哪些地方印象深刻？", "哪里感觉不够流畅？"],
      color: theme.accent
    },
    {
      letter: "I",
      title: "洞察分析",
      subtitle: "深层原因分析",
      points: ["为什么会有这种感觉？", "优势和劣势的根源？", "值得学习的地方？"],
      color: theme.primary
    },
    {
      letter: "D",
      title: "决定建议",
      subtitle: "具体的改进建议",
      points: ["下次可以如何改进？", "推荐尝试的方法？", "需要强化的技能？"],
      color: theme.green
    }
  ];

  oridSteps.forEach((step, i) => {
    const x = 0.5 + i * 2.4;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 2.2, h: 3.0,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: 2.2, h: 0.6,
      fill: { color: step.color }
    });

    slide.addText(step.letter, {
      x: x, y: 1.5, w: 2.2, h: 0.6,
      fontSize: 28, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(step.title, {
      x: x, y: 2.15, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    slide.addText(step.subtitle, {
      x: x, y: 2.45, w: 2.2, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: step.color,
      align: "center"
    });

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 2.75, w: 1.8, h: 0.02,
      fill: { color: theme.light }
    });

    step.points.forEach((point, j) => {
      slide.addText("• " + point, {
        x: x + 0.15, y: 2.85 + j * 0.5, w: 1.9, h: 0.45,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.dark
      });
    });
  });

  // Key principle
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.7, w: 9, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("点评原则", {
    x: 0.7, y: 4.8, w: 1.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("先肯定再建议，先整体再细节，先感受再分析。点评是为了帮助成长，不是为了批评。", {
    x: 0.7, y: 5.1, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff"
  });

  return slide;
}

module.exports = { createSlide };
