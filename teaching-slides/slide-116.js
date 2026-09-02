const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("长期项目陪伴式催化", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("从一次会议到全程陪跑", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left section - Scenarios
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.5, w: 4.5, h: 2.3,
    fill: { color: theme.light }
  });

  slide.addText("适用场景", {
    x: 0.6, y: 1.65, w: 4.1, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scenarios = [
    { icon: "🔄", text: "组织变革项目" },
    { icon: "🎯", text: "战略落地执行" },
    { icon: "👥", text: "团队能力建设" },
    { icon: "🔗", text: "跨部门协作项目" }
  ];

  scenarios.forEach((s, i) => {
    const y = 2.15 + i * 0.42;

    slide.addText(s.icon, {
      x: 0.7, y: y, w: 0.4, h: 0.35,
      fontSize: 12
    });

    slide.addText(s.text, {
      x: 1.2, y: y, w: 3.5, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Right section - Companion modes (timeline style)
  slide.addText("陪伴模式", {
    x: 5.2, y: 1.5, w: 4.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 2.45, w: 0.04, h: 2.4,
    fill: { color: theme.secondary, transparency: 50 }
  });

  const modes = [
    { title: "定期催化会议", desc: "每周/每月定期召开", timing: "持续" },
    { title: "关键节点深度催化", desc: "项目重要节点介入", timing: "按需" },
    { title: "日常咨询支持", desc: "随时答疑和指导", timing: "随时" },
    { title: "阶段评估与调整", desc: "里程碑复盘优化", timing: "阶段" }
  ];

  modes.forEach((m, i) => {
    const y = 1.95 + i * 0.62;

    // Timeline dot
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.25, y: y + 0.12, w: 0.34, h: 0.34,
      fill: { color: theme.accent }
    });

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 5.75, y: y, w: 3.85, h: 0.55,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Title
    slide.addText(m.title, {
      x: 5.9, y: y + 0.05, w: 2.5, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(m.desc, {
      x: 5.9, y: y + 0.28, w: 2.5, h: 0.22,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Timing badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 8.5, y: y + 0.12, w: 0.95, h: 0.3,
      fill: { color: theme.primary, transparency: 15 },
      rectRadius: 0.05
    });
    slide.addText(m.timing, {
      x: 8.5, y: y + 0.12, w: 0.95, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom process flow
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("陪伴式催化的价值", {
    x: 0.6, y: 5.05, w: 2.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const values = [
    "建立深度信任",
    "理解项目全貌",
    "持续跟进落地",
    "形成长期伙伴"
  ];

  values.forEach((v, i) => {
    const x = 0.6 + i * 2.3;

    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 5.4, w: 0.28, h: 0.28,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x, y: 5.4, w: 0.28, h: 0.28,
      fontSize: 10, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(v, {
      x: x + 0.38, y: 5.4, w: 1.8, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff",
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
