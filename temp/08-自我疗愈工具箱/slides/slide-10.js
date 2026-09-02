/**
 * Slide 10 - 日常心理保养的作用机制
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
  slide.addText("日常心理保养的作用机制", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("科学验证的三大大核心机制", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Three mechanism columns
  const mechW = 2.9;
  const mechH = 3.85;
  const startX = 0.5;
  const gap = 0.25;

  const mechanisms = [
    {
      num: "01",
      title: "压力中断",
      subtitle: "Stress Interruption",
      color: theme.primary,
      research: "研究发现：每天20分钟的正念练习可降低皮质醇水平23%",
      how: [
        "识别压力信号",
        "暂停并深呼吸",
        "从压力中抽离",
        "给身心恢复时间"
      ]
    },
    {
      num: "02",
      title: "情绪加工",
      subtitle: "Emotional Processing",
      color: theme.accent,
      research: "研究表明：情绪日记写作可改善情绪调节能力35%",
      how: [
        "识别当下情绪",
        "接纳而非压抑",
        "表达与释放情绪",
        "重构消极认知"
      ]
    },
    {
      num: "03",
      title: "韧性建设",
      subtitle: "Resilience Building",
      color: theme.light,
      research: "数据支持：持续的心理保养可提升心理韧性评分28%",
      how: [
        "建立支持系统",
        "培养成长思维",
        "强化自我效能",
        "积累成功体验"
      ]
    }
  ];

  mechanisms.forEach((mech, i) => {
    const x = startX + i * (mechW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: mechW, h: mechH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top color bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.5, w: mechW, h: 0.6,
      fill: { color: mech.color }
    });

    // Number
    slide.addText(mech.num, {
      x: x + 0.15, y: 1.55, w: 0.5, h: 0.5,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });

    // Title (Chinese)
    slide.addText(mech.title, {
      x: x + 0.6, y: 1.55, w: mechW - 0.75, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // Subtitle (English)
    slide.addText(mech.subtitle, {
      x: x + 0.6, y: 1.85, w: mechW - 0.75, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: "FFFFFF", bold: false
    });

    // Research box
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 2.2, w: mechW - 0.3, h: 0.75,
      fill: { color: mech.color, transparency: 85 }
    });
    slide.addText(mech.research, {
      x: x + 0.25, y: 2.25, w: mechW - 0.5, h: 0.65,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      lineSpaceMult: 1.3
    });

    // "How" section title
    slide.addText("实践方法", {
      x: x + 0.15, y: 3.05, w: mechW - 0.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: mech.color, bold: true
    });

    // How items
    mech.how.forEach((item, j) => {
      const itemY = 3.4 + j * 0.35;
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.2, y: itemY + 0.08, w: 0.12, h: 0.12,
        fill: { color: mech.color }
      });
      slide.addText(item, {
        x: x + 0.4, y: itemY, w: mechW - 0.55, h: 0.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false
      });
    });
  });

  // Page number
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "日常心理保养的作用机制",
  pageNumber: 10
};

module.exports = { createSlide, slideConfig };
