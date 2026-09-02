/**
 * Slide 65 - 为什么书写有效
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
  slide.addText("为什么书写有效", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("四个核心机制", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // 4 mechanism cards
  const cardW = 2.1;
  const cardH = 3.3;
  const cardY = 1.5;
  const gap = 0.25;
  const startX = 0.5;

  const mechanisms = [
    {
      num: "1",
      title: "情绪加工",
      desc: "将模糊的情绪感受转化为具体的文字表达",
      icon: "情绪"
    },
    {
      num: "2",
      title: "认知重构",
      desc: "在书写过程中重新审视事件，发现新的意义",
      icon: "认知"
    },
    {
      num: "3",
      title: "抑制释放",
      desc: "释放被压抑的情绪和记忆，减轻心理负担",
      icon: "释放"
    },
    {
      num: "4",
      title: "意义建构",
      desc: "将经历整合到自我叙事中，找到成长方向",
      icon: "意义"
    }
  ];

  mechanisms.forEach((mech, i) => {
    const cardX = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY, w: cardW, h: 0.08,
      fill: { color: theme.primary }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: cardX + 0.75, y: cardY + 0.3, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(mech.num, {
      x: cardX + 0.75, y: cardY + 0.3, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Title
    slide.addText(mech.title, {
      x: cardX + 0.1, y: cardY + 1.1, w: cardW - 0.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", bold: true
    });

    // Description
    slide.addText(mech.desc, {
      x: cardX + 0.15, y: cardY + 1.7, w: cardW - 0.3, h: 1.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", bold: false,
      lineSpaceMult: 1.4
    });
  });

  // Bottom research note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.primary, transparency: 10 }
  });
  slide.addText("研究支持：神经影像学研究显示，书写时大脑的情绪中心（杏仁核）活动降低，前额叶（理性思考）活动增强", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: false
  });

  // Page number
  slide.addText("65", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "为什么书写有效",
  pageNumber: 65
};

module.exports = { createSlide, slideConfig };
