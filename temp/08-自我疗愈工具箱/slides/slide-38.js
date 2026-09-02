const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "三分钟呼吸空间详解",
  type: "content",
  pageNumber: 38
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
  slide.addText("38", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("三分钟呼吸空间详解", {
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

  // Three detailed minute sections
  const minutes = [
    {
      minute: "第1分钟",
      title: "觉醒",
      subtitle: "Waking Up",
      content: [
        "身体：感受身体的基本姿势，哪里紧绷？",
        "情绪：此刻有什么情绪在流动？",
        "思绪：脑海中飘过什么想法？"
      ]
    },
    {
      minute: "第2分钟",
      title: "聚焦",
      subtitle: "Focusing",
      content: [
        "将注意力轻轻拉回呼吸",
        "感受呼吸时腹部的起伏",
        "当走神时，温和地重新聚焦"
      ]
    },
    {
      minute: "第3分钟",
      title: "扩展",
      subtitle: "Expanding",
      content: [
        "将觉知扩展到整个身体",
        "感受身体与环境的关系",
        "以接纳的心态面对当下"
      ]
    }
  ];

  minutes.forEach((min, i) => {
    const x = 0.5 + i * 3.15;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 3, h: 3.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Header with minute label
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 3, h: 0.55,
      fill: { color: theme.primary }
    });
    slide.addText(min.minute, {
      x: x, y: 1.2, w: 3, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(min.title, {
      x: x, y: 1.85, w: 3, h: 0.55,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Subtitle
    slide.addText(min.subtitle, {
      x: x, y: 2.35, w: 3, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.8, y: 2.75, w: 1.4, h: 0.03,
      fill: { color: theme.accent }
    });

    // Content points
    min.content.forEach((point, j) => {
      const py = 2.95 + j * 0.7;

      // Bullet
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.25, y: py + 0.18, w: 0.1, h: 0.1,
        fill: { color: theme.light }
      });

      slide.addText(point, {
        x: x + 0.45, y: py, w: 2.4, h: 0.6,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "left", valign: "top"
      });
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
