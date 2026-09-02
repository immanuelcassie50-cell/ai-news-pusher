const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("第三天学习总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Five key points in a circular arrangement
  const keyPoints = [
    { num: "01", title: "复杂问题识别", desc: "区分简单、复合、复杂与混乱问题" },
    { num: "02", title: "利益相关方分析", desc: "识别利益方并分析其影响力与关注度" },
    { num: "03", title: "冲突类型与应对", desc: "四象限冲突模型与应对策略" },
    { num: "04", title: "突发状况应对", desc: "常见突发状况的识别与处理方法" },
    { num: "05", title: "团队诊断工具", desc: "五维度雷达图评估团队状态" }
  ];

  // Central circle
  const centerX = 5;
  const centerY = 3.3;

  // Outer ring
  slide.addShape("ellipse", {
    x: centerX - 1.8, y: centerY - 1.8, w: 3.6, h: 3.6,
    fill: { color: theme.light }
  });

  // Middle ring
  slide.addShape("ellipse", {
    x: centerX - 1.3, y: centerY - 1.3, w: 2.6, h: 2.6,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 2 }
  });

  // Center
  slide.addShape("ellipse", {
    x: centerX - 0.6, y: centerY - 0.6, w: 1.2, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("DAY 3", {
    x: centerX - 0.6, y: centerY - 0.2, w: 1.2, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Five points around the circle
  const radius = 2.7;
  keyPoints.forEach((p, i) => {
    const angle = (i * 72 - 90) * Math.PI / 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    // Connector line
    const innerX = centerX + 1.9 * Math.cos(angle);
    const innerY = centerY + 1.9 * Math.sin(angle);

    slide.addShape("rect", {
      x: Math.min(x, innerX), y: Math.min(y, innerY),
      w: Math.abs(x - innerX) || 0.02, h: Math.abs(y - innerY) || 0.02,
      fill: { color: theme.secondary, transparency: 50 },
      rotate: angle * 180 / Math.PI
    });

    // Point card
    slide.addShape("rect", {
      x: x - 0.85, y: y - 0.55, w: 1.7, h: 1.1,
      fill: { color: theme.bg },
      line: { color: theme.primary, width: 1 }
    });

    // Number badge
    slide.addShape("rect", {
      x: x - 0.85, y: y - 0.55, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(p.num, {
      x: x - 0.85, y: y - 0.55, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(p.title, {
      x: x - 0.4, y: y - 0.5, w: 1.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(p.desc, {
      x: x - 0.75, y: y - 0.12, w: 1.5, h: 0.6,
      fontSize: 7, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom bar
  slide.addShape("rect", {
    x: 0, y: 5.5, w: 10, h: 0.25,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide };
