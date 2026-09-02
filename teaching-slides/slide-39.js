const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("冲突管理五大策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Five strategies
  const strategies = [
    {
      name: "竞争",
      icon: "⚔️",
      desc: "坚持己方立场",
      when: "紧急决策、原则问题",
      color: theme.accent
    },
    {
      name: "协作",
      icon: "🤝",
      desc: "寻求双赢方案",
      when: "重要事项、长期关系",
      color: "2ECC71"
    },
    {
      name: "妥协",
      icon: "⚖️",
      desc: "各让一步",
      when: "中等重要、时限压力",
      color: "F4A261"
    },
    {
      name: "回避",
      icon: "⏸️",
      desc: "暂时搁置",
      when: "小事、非核心问题",
      color: theme.secondary
    },
    {
      name: "顺应",
      icon: "🙏",
      desc: "优先满足对方",
      when: "对方更重要、关系优先",
      color: "3498DB"
    }
  ];

  // Horizontal flow layout
  strategies.forEach((s, i) => {
    const x = 0.3 + i * 1.95;

    // Card
    slide.addShape("rect", {
      x: x, y: 1.15, w: 1.8, h: 3.5,
      fill: { color: theme.light }
    });

    // Top colored header
    slide.addShape("rect", {
      x: x, y: 1.15, w: 1.8, h: 0.8,
      fill: { color: s.color }
    });

    // Icon
    slide.addText(s.icon, {
      x: x, y: 1.2, w: 1.8, h: 0.45,
      fontSize: 22,
      align: "center", valign: "middle"
    });

    // Strategy name
    slide.addText(s.name, {
      x: x, y: 1.65, w: 1.8, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    // Description
    slide.addText(s.desc, {
      x: x + 0.1, y: 2.1, w: 1.6, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Divider line
    slide.addShape("rect", {
      x: x + 0.3, y: 2.7, w: 1.2, h: 0.03,
      fill: { color: s.color }
    });

    // When to use label
    slide.addText("何时使用", {
      x: x + 0.1, y: 2.85, w: 1.6, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // When description
    slide.addText(s.when, {
      x: x + 0.1, y: 3.2, w: 1.6, h: 1.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center"
    });

    // Arrow connector (except last)
    if (i < 4) {
      slide.addText("→", {
        x: x + 1.75, y: 2.5, w: 0.3, h: 0.4,
        fontSize: 18, fontFace: "Arial",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // Bottom tip
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fill: { color: theme.primary, transparency: 90 }
  });

  slide.addText("💡 没有最好的策略，只有最适合当下情境的选择", {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
