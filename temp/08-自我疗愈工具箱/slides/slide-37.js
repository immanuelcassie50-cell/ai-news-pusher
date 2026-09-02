const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "三分钟呼吸空间",
  type: "content",
  pageNumber: 37
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
  slide.addText("37", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("三分钟呼吸空间", {
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

  // Intro text
  slide.addText('为什么叫"呼吸空间"？', {
    x: 0.5, y: 1.2, w: 5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("在忙碌中为自己创造一个暂停的心理空间，通过呼吸作为锚点", {
    x: 0.5, y: 1.6, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Three steps
  const steps = [
    {
      num: "1",
      title: "分钟",
      subtitle: "觉醒",
      duration: "觉察",
      desc: "检查身体、情绪、\n当下的思绪"
    },
    {
      num: "2",
      title: "分钟",
      subtitle: "聚焦",
      duration: "集中",
      desc: "将注意力收束到\n呼吸的感觉上"
    },
    {
      num: "3",
      title: "分钟",
      subtitle: "扩展",
      duration: "延伸",
      desc: "扩展觉知范围\n到整个身体和环境"
    }
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 3.15;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.15, w: 3, h: 2.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 1.1, y: 2.35, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + 1.1, y: 2.35, w: 0.8, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Duration label
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.9, y: 3.25, w: 1.2, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(step.duration, {
      x: x + 0.9, y: 3.25, w: 1.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Subtitle
    slide.addText(step.subtitle, {
      x: x, y: 3.7, w: 3, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.2, y: 4.2, w: 2.6, h: 0.75,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
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
