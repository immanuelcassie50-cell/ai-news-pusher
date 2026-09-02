/**
 * Slide 101 - 建立微习惯的步骤
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
  slide.addText("建立微习惯的步骤", {
    x: 0.5, y: 0.3, w: 9, h: 0.65,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("四步走，让心理保养成为自动化的日常", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // 4 steps
  const steps = [
    {
      num: "1",
      title: "选择锚点",
      desc: "将新习惯依附于已有的习惯上",
      example: "\"起床刷牙后\" → 做3分钟呼吸空间",
      tip: "锚点越具体越好"
    },
    {
      num: "2",
      title: "从小开始",
      desc: "开始时目标要小到荒谬",
      example: "1分钟冥想、3次深呼吸、写3句话",
      tip: "小到不可能失败"
    },
    {
      num: "3",
      title: "记录和庆祝",
      desc: "每完成就打个勾，让自己看到进步",
      example: "用日历或习惯追踪App打勾",
      tip: "庆祝很重要，哪怕只是自我肯定"
    },
    {
      num: "4",
      title: "逐步扩展",
      desc: "等习惯自动化后，再逐渐增加时长",
      example: "1分钟 → 3分钟 → 5分钟",
      tip: "不要急，让习惯先根深蒂固"
    }
  ];

  const cardW = 2.15;
  const cardH = 3.5;
  const startX = 0.5;
  const gap = 0.3;

  steps.forEach((step, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.45, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Step number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + (cardW - 0.8) / 2, y: 1.6, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + (cardW - 0.8) / 2, y: 1.6, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: 2.5, w: cardW - 0.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Gold underline
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.5, y: 2.9, w: cardW - 1, h: 0.04,
      fill: { color: theme.accent }
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.15, y: 3.05, w: cardW - 0.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });

    // Example
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.1, y: 3.55, w: cardW - 0.2, h: 0.55,
      fill: { color: theme.bg }
    });
    slide.addText(step.example, {
      x: x + 0.15, y: 3.6, w: cardW - 0.3, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "center", valign: "middle"
    });

    // Tip
    slide.addText("💡 " + step.tip, {
      x: x + 0.1, y: 4.2, w: cardW - 0.2, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center", valign: "top"
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("101", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "建立微习惯的步骤",
  pageNumber: 101
};

module.exports = { createSlide, slideConfig };
