const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("会议后的跟进工作", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("收尾不等于结束，跟进才能落地", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Follow-up items - left side cards
  const followups = [
    { num: "1", title: "会议纪要", desc: "整理讨论内容和共识", timing: "会后24小时内", color: theme.accent },
    { num: "2", title: "行动追踪", desc: "跟踪行动项执行", timing: "每周定期检查", color: theme.primary },
    { num: "3", title: "反馈收集", desc: "收集参与者反馈", timing: "会后3天内", color: "#43aa8b" },
    { num: "4", title: "自我复盘", desc: "反思催化过程中的得失", timing: "会后24小时内", color: theme.secondary },
    { num: "5", title: "关系维护", desc: "与关键参与者保持联系", timing: "持续", color: "#e07a5f" }
  ];

  // Timeline visual on the right
  slide.addShape(pres.ShapeType.rect, {
    x: 5.8, y: 1.6, w: 0.04, h: 3.5,
    fill: { color: theme.secondary, transparency: 50 }
  });

  followups.forEach((f, i) => {
    const y = 1.5 + i * 0.72;

    // Timeline dot
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.65, y: y + 0.15, w: 0.34, h: 0.34,
      fill: { color: f.color }
    });

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.4, y: y, w: 5.1, h: 0.62,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.55, y: y + 0.12, w: 0.38, h: 0.38,
      fill: { color: f.color }
    });
    slide.addText(f.num, {
      x: 0.55, y: y + 0.12, w: 0.38, h: 0.38,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(f.title, {
      x: 1.05, y: y + 0.08, w: 1.5, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(f.desc, {
      x: 1.05, y: y + 0.34, w: 2.5, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Timing badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 3.6, y: y + 0.15, w: 1.7, h: 0.32,
      fill: { color: f.color, transparency: 15 },
      rectRadius: 0.05
    });
    slide.addText(f.timing, {
      x: 3.6, y: y + 0.15, w: 1.7, h: 0.32,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: f.color, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Right side - key metrics
  slide.addShape(pres.ShapeType.rect, {
    x: 6.1, y: 1.5, w: 3.5, h: 3.6,
    fill: { color: theme.light }
  });

  slide.addText("跟进时效", {
    x: 6.3, y: 1.6, w: 3.1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const metrics = [
    { label: "纪要发送", value: "24h", color: theme.accent },
    { label: "反馈收集", value: "3天", color: theme.primary },
    { label: "首次追踪", value: "1周", color: "#43aa8b" },
    { label: "最终复盘", value: "1月", color: theme.secondary }
  ];

  metrics.forEach((m, i) => {
    const y = 2.1 + i * 0.75;

    slide.addShape(pres.ShapeType.rect, {
      x: 6.3, y: y, w: 3.1, h: 0.6,
      fill: { color: "ffffff" }
    });

    slide.addText(m.label, {
      x: 6.45, y: y + 0.05, w: 1.5, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    slide.addText(m.value, {
      x: 6.45, y: y + 0.28, w: 1.5, h: 0.28,
      fontSize: 16, fontFace: "Arial",
      color: m.color, bold: true
    });

    // Progress indicator
    slide.addShape(pres.ShapeType.rect, {
      x: 8.0, y: y + 0.25, w: 1.2, h: 0.1,
      fill: { color: theme.light }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 8.0, y: y + 0.25, w: 1.2 * (4 - i) / 4, h: 0.1,
      fill: { color: m.color }
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.25, w: 9.2, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("跟进是催化师的责任延伸：好的跟进让会议成果真正落地，建立持久信任", {
    x: 0.6, y: 5.25, w: 8.8, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
