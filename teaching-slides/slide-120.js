const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("持续改进与迭代", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("从优秀到卓越的进化之路", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left section - Improvement methods (circular flow)
  slide.addText("改进方法", {
    x: 0.5, y: 1.5, w: 4.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const improvements = [
    { num: "1", title: "会后复盘", desc: "每次会议后反思", color: theme.accent },
    { num: "2", title: "同行观摩", desc: "互相学习", color: theme.primary },
    { num: "3", title: "受训反馈", desc: "收集参与者反馈", color: "#43aa8b" },
    { num: "4", title: "自我觉察", desc: "录制会议复盘", color: theme.secondary }
  ];

  improvements.forEach((imp, i) => {
    const y = 1.95 + i * 0.78;

    // Card with connecting line
    if (i < 3) {
      slide.addShape(pres.ShapeType.rect, {
        x: 1.0, y: y + 0.65, w: 0.04, h: 0.15,
        fill: { color: imp.color, transparency: 50 }
      });
    }

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.5, h: 0.68,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.65, y: y + 0.14, w: 0.4, h: 0.4,
      fill: { color: imp.color }
    });
    slide.addText(imp.num, {
      x: 0.65, y: y + 0.14, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(imp.title, {
      x: 1.2, y: y + 0.12, w: 3.5, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(imp.desc, {
      x: 1.2, y: y + 0.38, w: 3.5, h: 0.24,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right section - Iteration paths (spiral/growth visual)
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.5, w: 4.4, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addText("迭代方向", {
    x: 5.4, y: 1.65, w: 4.0, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Iteration arrows showing growth
  const iterations = [
    { title: "工具优化", desc: "掌握新工具，提升效率", level: 1 },
    { title: "话术精进", desc: "磨炼提问和引导技巧", level: 2 },
    { title: "风格形成", desc: "形成独特的催化风格", level: 3 },
    { title: "知识拓展", desc: "持续学习跨学科知识", level: 4 }
  ];

  iterations.forEach((it, i) => {
    const baseX = 5.5;
    const baseY = 2.15;
    const x = baseX + i * 0.15;
    const y = baseY + i * 0.72;
    const width = 4.0 - i * 0.3;
    const height = 0.62;

    // Progressively larger/centered cards
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: width, h: height,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.05 + i * 0.02 }
    });

    // Level indicator
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: width, h: 0.08,
      fill: { color: theme.accent, transparency: (4 - it.level) * 20 }
    });

    // Level badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.16, w: 0.3, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(String(it.level), {
      x: x + 0.15, y: y + 0.16, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(it.title, {
      x: x + 0.55, y: y + 0.1, w: width - 0.7, h: 0.26,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(it.desc, {
      x: x + 0.55, y: y + 0.34, w: width - 0.7, h: 0.22,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom - Growth journey visualization
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.15, w: 9.2, h: 0.65,
    fill: { color: theme.primary }
  });

  // Journey steps
  const journey = ["新手", "→", "熟练", "→", "专家", "→", "大师"];
  journey.forEach((step, i) => {
    const x = 0.8 + i * 1.2;

    if (step !== "→") {
      slide.addShape(pres.ShapeType.ellipse, {
        x: x, y: 5.28, w: 0.35, h: 0.35,
        fill: { color: theme.accent }
      });
    }

    slide.addText(step, {
      x: x - 0.2, y: 5.28, w: 0.75, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: step !== "→",
      align: "center", valign: "middle"
    });
  });

  // Final message
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.55, w: 0.08, h: 0.25,
    fill: { color: theme.accent }
  });
  slide.addText("持续改进的秘诀：每次会议都比上次好一点点", {
    x: 0.6, y: 5.55, w: 8.8, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
