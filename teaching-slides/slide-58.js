const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("行动计划制定", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Action plan template
  const planItems = [
    {
      num: "1",
      title: "我的目标",
      placeholder: "三个月内主持X场行动学习会议",
      icon: "🎯"
    },
    {
      num: "2",
      title: "具体行动",
      placeholder: "每月练习一种工具",
      icon: "⚡"
    },
    {
      num: "3",
      title: "支持资源",
      placeholder: "寻找导师/学习小组",
      icon: "🤝"
    },
    {
      num: "4",
      title: "成功标志",
      placeholder: "能够独立主持会议",
      icon: "✓"
    }
  ];

  planItems.forEach((item, i) => {
    const y = 1.05 + i * 1.05;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.9,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.08, h: 0.9,
      fill: { color: theme.accent }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.75, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(item.num, {
      x: 0.75, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.4, y: y + 0.15, w: 1.5, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: 2.9, y: y + 0.2, w: 0.02, h: 0.5,
      fill: { color: theme.secondary }
    });

    // Placeholder/Input area
    slide.addText(item.placeholder, {
      x: 3.1, y: y + 0.15, w: 6.2, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true,
      valign: "middle"
    });
  });

  // Bottom motivational bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.25, w: 10, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("行动是学习的最好检验", {
    x: 0.5, y: 5.25, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
