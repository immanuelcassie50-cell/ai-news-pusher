/**
 * Slide 104 - 制定你的计划练习
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Exercise badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.3, w: 1.3, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("练习", {
    x: 0.5, y: 0.3, w: 1.3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("制定你的计划练习", {
    x: 1.9, y: 0.3, w: 6, h: 0.45,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    valign: "middle"
  });

  // Subtitle
  slide.addText("按顺序完成以下四个步骤，创建你的个人化每日保养计划", {
    x: 0.5, y: 0.85, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // 4 steps with worksheets
  const steps = [
    {
      num: "1",
      title: "确定2-3个核心习惯",
      questions: [
        "哪个工具最适合你？",
        "你打算在什么时间做？",
        "从几分钟开始？"
      ],
      space: "回答: ____________________"
    },
    {
      num: "2",
      title: "选择场景工具",
      questions: [
        "早晨用什么？",
        "工作中用什么？",
        "睡前用什么？"
      ],
      space: "回答: ____________________"
    },
    {
      num: "3",
      title: "定义预警信号",
      questions: [
        "什么信号表明你需要启动危机工具？",
        "你的危机工具是什么？"
      ],
      space: "回答: ____________________"
    },
    {
      num: "4",
      title: "设计每周复盘",
      questions: [
        "什么时候复盘？",
        "用什么方式追踪？"
      ],
      space: "回答: ____________________"
    }
  ];

  const cardW = 2.15;
  const cardH = 3.6;
  const startX = 0.5;
  const gap = 0.3;

  steps.forEach((step, i) => {
    const x = startX + i * (cardW + gap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.35, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Step number
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardW - 0.7) / 2, y: 1.5, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + (cardW - 0.7) / 2, y: 1.5, w: 0.7, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: 2.3, w: cardW - 0.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.3, y: 2.8, w: cardW - 0.6, h: 0.03,
      fill: { color: theme.accent }
    });

    // Questions
    slide.addText(
      step.questions.map((q, idx) => ({
        text: "• " + q,
        options: { breakLine: idx < step.questions.length - 1 }
      })),
      {
        x: x + 0.15, y: 2.95, w: cardW - 0.3, h: 0.8,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        lineSpaceMult: 1.3
      }
    );

    // Space for answer
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.1, y: 3.85, w: cardW - 0.2, h: 0.95,
      fill: { color: theme.bg }
    });
    slide.addText(step.space, {
      x: x + 0.15, y: 3.9, w: cardW - 0.3, h: 0.85,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      valign: "top"
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("104", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "exercise",
  module: "Module 7",
  title: "制定你的计划练习",
  pageNumber: 104
};

module.exports = { createSlide, slideConfig };
