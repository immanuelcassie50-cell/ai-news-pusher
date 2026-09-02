const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "呼吸法场景应用",
  type: "content",
  pageNumber: 17
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

  // Title
  slide.addText("呼吸法场景应用", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Three scenario cards
  const scenarios = [
    {
      title: "通勤场景",
      subtitle: "地铁/公交上",
      icon: "地铁",
      technique: "4-7-8呼吸法",
      desc: "人多嘈杂时，用深呼吸保持冷静，避免焦虑蔓延",
      tip: "闭上眼睛更有效果"
    },
    {
      title: "办公场景",
      subtitle: "会议前准备",
      icon: "会议",
      technique: "腹式呼吸",
      desc: "进入会议室前做3-5次腹式呼吸，缓解紧张感",
      tip: "可在厕所或走廊快速完成"
    },
    {
      title: "情绪危机",
      subtitle: "紧急平复",
      icon: "情绪",
      technique: "4-7-8呼吸法",
      desc: "情绪爆发时，立刻用4-7-8法降低生理唤醒",
      tip: "这是救命技巧，熟练掌握"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.7;
  const startX = 0.6;
  const gap = 0.25;

  scenarios.forEach((scene, i) => {
    const x = startX + i * (cardWidth + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardWidth - 0.9) / 2, y: 1.4, w: 0.9, h: 0.9,
      fill: { color: theme.primary }
    });
    slide.addText(scene.icon, {
      x: x + (cardWidth - 0.9) / 2, y: 1.4, w: 0.9, h: 0.9,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(scene.title, {
      x: x + 0.15, y: 2.4, w: cardWidth - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Subtitle
    slide.addText(scene.subtitle, {
      x: x + 0.15, y: 2.75, w: cardWidth - 0.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });

    // Technique badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.3, y: 3.1, w: cardWidth - 0.6, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(scene.technique, {
      x: x + 0.3, y: 3.1, w: cardWidth - 0.6, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(scene.desc, {
      x: x + 0.2, y: 3.55, w: cardWidth - 0.4, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });

    // Tip
    slide.addText("💡 " + scene.tip, {
      x: x + 0.15, y: 4.4, w: cardWidth - 0.3, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle"
    });
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("17", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
