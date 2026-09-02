const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("冲突类型与应对策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Four conflict types
  const conflicts = [
    {
      type: "任务冲突",
      desc: "工作内容分歧",
      icon: "📋",
      strategy: "聚焦目标，回归事实",
      color: theme.accent
    },
    {
      type: "过程冲突",
      desc: "工作方式分歧",
      icon: "⚙️",
      strategy: "明确职责，统一流程",
      color: theme.primary
    },
    {
      type: "关系冲突",
      desc: "人际矛盾",
      icon: "💬",
      strategy: "情感疏导，建立信任",
      color: theme.secondary
    },
    {
      type: "利益冲突",
      desc: "资源分配分歧",
      icon: "🎁",
      strategy: "寻求共赢，适度妥协",
      color: "2ECC71"
    }
  ];

  // 2x2 grid layout
  conflicts.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.75;
    const y = 1.15 + row * 2.1;

    // Main card
    slide.addShape("rect", {
      x: x, y: y, w: 4.5, h: 1.9,
      fill: { color: theme.light }
    });

    // Left color strip
    slide.addShape("rect", {
      x: x, y: y, w: 0.12, h: 1.9,
      fill: { color: c.color }
    });

    // Icon circle
    slide.addShape("ellipse", {
      x: x + 0.35, y: y + 0.35, w: 0.9, h: 0.9,
      fill: { color: c.color, transparency: 20 }
    });
    slide.addText(c.icon, {
      x: x + 0.35, y: y + 0.35, w: 0.9, h: 0.9,
      fontSize: 28,
      align: "center", valign: "middle"
    });

    // Type name
    slide.addText(c.type, {
      x: x + 1.4, y: y + 0.25, w: 2.8, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(c.desc, {
      x: x + 1.4, y: y + 0.75, w: 2.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Strategy section
    slide.addShape("rect", {
      x: x + 0.35, y: y + 1.25, w: 3.9, h: 0.5,
      fill: { color: c.color, transparency: 85 }
    });

    slide.addText("→ " + c.strategy, {
      x: x + 0.5, y: y + 1.25, w: 3.7, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
