/**
 * Slide 103 - 每日保养清单模板
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
  slide.addText("每日保养清单模板", {
    x: 0.5, y: 0.25, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("制定属于你自己的个人化方案", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Template sections
  const sections = [
    {
      title: "核心习惯 (2-3个)",
      items: [
        "习惯1: ______ 时间: ______ 时长: ______",
        "习惯2: ______ 时间: ______ 时长: ______",
        "习惯3: ______ 时间: ______ 时长: ______"
      ],
      color: theme.primary
    },
    {
      title: "场景工具配置",
      items: [
        "早晨启动: ______",
        "工作中减压: ______",
        "情绪低落时: ______",
        "睡前放松: ______"
      ],
      color: theme.accent
    },
    {
      title: "预警信号",
      items: [
        "需要使用'危机工具'的信号:",
        "1. ______",
        "2. ______",
        "3. ______"
      ],
      color: theme.light
    }
  ];

  const secW = 2.9;
  const secH = 2.4;
  const startX = 0.5;
  const startY = 1.15;
  const gap = 0.25;

  sections.forEach((sec, i) => {
    const x = startX + i * (secW + gap);

    // Section card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: startY, w: secW, h: secH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Header with color
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: startY, w: secW, h: 0.5,
      fill: { color: sec.color }
    });
    slide.addText(sec.title, {
      x: x, y: startY, w: secW, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Items
    slide.addText(
      sec.items.map((item, idx) => ({
        text: item,
        options: { breakLine: idx < sec.items.length - 1 }
      })),
      {
        x: x + 0.15, y: startY + 0.6, w: secW - 0.3, h: secH - 0.7,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        lineSpaceMult: 1.5
      }
    );
  });

  // Bottom row - Weekly review and Self-compassion
  const bottomY = 3.7;

  // Weekly review card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: bottomY, w: 4.4, h: 1.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: bottomY, w: 0.1, h: 1.25,
    fill: { color: theme.secondary }
  });
  slide.addText("每周复盘时间", {
    x: 0.75, y: bottomY + 0.1, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("时间: ______ \n完成度: ______ \n需要调整: ______", {
    x: 0.75, y: bottomY + 0.5, w: 4, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Self-compassion reminder card
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: bottomY, w: 4.4, h: 1.25,
    fill: { color: theme.primary }
  });
  slide.addText("自我慈悲提醒", {
    x: 5.3, y: bottomY + 0.15, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText('如果今天没有做到，明天是新的一天。\n不要自责，要理解。', {
    x: 5.3, y: bottomY + 0.55, w: 4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    italic: true
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("103", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "每日保养清单模板",
  pageNumber: 103
};

module.exports = { createSlide, slideConfig };
