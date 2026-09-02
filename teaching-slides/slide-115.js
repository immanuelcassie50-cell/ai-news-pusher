const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("跨文化催化技巧", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("理解差异，尊重多元，寻找共性", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Cultural dimensions - 2x2 grid
  const dimensions = [
    { title: "沟通方式", left: "直接表达", right: "间接表达", icon: "💬", color: theme.accent },
    { title: "决策风格", left: "个人决策", right: "共识决策", icon: "⚖️", color: theme.primary },
    { title: "时间观念", left: "准时守时", right: "弹性时间", icon: "⏰", color: "#43aa8b" },
    { title: "权力距离", left: "高权力距离", right: "低权力距离", icon: "👔", color: theme.secondary }
  ];

  dimensions.forEach((d, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8;
    const y = 1.5 + row * 1.4;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.5, h: 1.25,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Icon
    slide.addText(d.icon, {
      x: x + 0.15, y: y + 0.1, w: 0.5, h: 0.5,
      fontSize: 20
    });

    // Title
    slide.addText(d.title, {
      x: x + 0.7, y: y + 0.15, w: 3.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Left option
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: y + 0.6, w: 1.9, h: 0.5,
      fill: { color: d.color, transparency: 15 }
    });
    slide.addText(d.left, {
      x: x + 0.15, y: y + 0.6, w: 1.9, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: d.color, bold: true,
      align: "center", valign: "middle"
    });

    // VS
    slide.addText("vs", {
      x: x + 2.1, y: y + 0.6, w: 0.3, h: 0.5,
      fontSize: 8, fontFace: "Arial",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Right option
    slide.addShape(pres.ShapeType.rect, {
      x: x + 2.45, y: y + 0.6, w: 1.9, h: 0.5,
      fill: { color: d.color, transparency: 25 }
    });
    slide.addText(d.right, {
      x: x + 2.45, y: y + 0.6, w: 1.9, h: 0.5,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: d.color,
      align: "center", valign: "middle"
    });
  });

  // Bottom section - Strategies
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.35, w: 9.2, h: 1.4,
    fill: { color: theme.light }
  });

  slide.addText("跨文化应对策略", {
    x: 0.6, y: 4.45, w: 3, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const strategies = [
    { num: "1", text: "了解参与者背景" },
    { num: "2", text: "调整提问方式" },
    { num: "3", text: "尊重文化差异" },
    { num: "4", text: "寻找共同点" }
  ];

  strategies.forEach((s, i) => {
    const x = 0.6 + i * 2.3;

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 4.9, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x, y: 4.9, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Strategy text
    slide.addText(s.text, {
      x: x + 0.5, y: 4.9, w: 1.7, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    // Connector line (except last)
    if (i < 3) {
      slide.addShape(pres.ShapeType.rect, {
        x: x + 2.1, y: 5.08, w: 0.3, h: 0.04,
        fill: { color: theme.secondary, transparency: 50 }
      });
    }
  });

  // Key insight
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.4, w: 9.2, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("跨文化催化心法：没有正确的文化，只有合适的沟通方式", {
    x: 0.6, y: 5.4, w: 8.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    valign: "middle", align: "center"
  });

  return slide;
}

module.exports = { createSlide };
