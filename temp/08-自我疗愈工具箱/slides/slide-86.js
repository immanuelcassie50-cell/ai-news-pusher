const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "情绪低落时工具选择逻辑",
  type: "content",
  pageNumber: 86
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
  slide.addText("86", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("情绪低落时工具选择逻辑", {
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

  // Three condition cards
  const cards = [
    {
      condition: "完全不想动",
      tools: ["躺着做身体扫描", "4-7-8呼吸", "床上感恩日记"],
      icon: "😴"
    },
    {
      condition: "脑子停不下来",
      tools: ["四步情绪释放", "自由书写清空", "专注5个感官"],
      icon: "🌀"
    },
    {
      condition: "想转移但不逃避",
      tools: ["5-4-3-2-1感官接地", "轻度身体活动", "与自然连接"],
      icon: "🔄"
    }
  ];

  cards.forEach((card, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 3.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.25, w: 2.9, h: 0.8,
      fill: { color: theme.primary }
    });

    // Icon
    slide.addText(card.icon, {
      x: x, y: 1.3, w: 2.9, h: 0.4,
      fontSize: 20,
      align: "center", valign: "middle"
    });

    // Condition text
    slide.addText(card.condition, {
      x: x, y: 1.7, w: 2.9, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Tools section
    slide.addText("推荐工具", {
      x: x, y: 2.2, w: 2.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.5, y: 2.6, w: 1.9, h: 0.03,
      fill: { color: theme.light }
    });

    // Tools list
    card.tools.forEach((tool, j) => {
      const py = 2.8 + j * 0.65;

      // Bullet
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.3, y: py + 0.15, w: 0.1, h: 0.1,
        fill: { color: theme.accent }
      });

      slide.addText(tool, {
        x: x + 0.5, y: py, w: 2.2, h: 0.55,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "left", valign: "middle"
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
