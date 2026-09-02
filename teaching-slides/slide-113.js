const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("大型工作坊设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("30人以上的挑战与应对", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left section - Features
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 1.55, w: 4.5, h: 2.5,
    fill: { color: theme.light }
  });

  slide.addText("大型工作坊特点", {
    x: 0.6, y: 1.7, w: 4.1, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const features = [
    { num: "1", text: "人数多（30人以上）" },
    { num: "2", text: "分组必要" },
    { num: "3", text: "时间控制更难" },
    { num: "4", text: "共识形成更复杂" }
  ];

  features.forEach((f, i) => {
    const y = 2.2 + i * 0.45;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y, w: 0.32, h: 0.32,
      fill: { color: theme.accent }
    });
    slide.addText(f.num, {
      x: 0.7, y: y, w: 0.32, h: 0.32,
      fontSize: 11, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(f.text, {
      x: 1.15, y: y, w: 3.5, h: 0.32,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Right section - Principles
  slide.addText("设计原则", {
    x: 5.2, y: 1.55, w: 4.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const principles = [
    { title: "分组要均衡", desc: "考虑成员背景和能力搭配", color: theme.accent },
    { title: "规则要清晰", desc: "明确时间、流程、输出要求", color: theme.primary },
    { title: "走动要引导", desc: "设计走动路线和过渡环节", color: "#43aa8b" },
    { title: "汇报要精简", desc: "每组限时3分钟，重点突出", color: theme.secondary }
  ];

  principles.forEach((p, i) => {
    const y = 2.0 + i * 0.82;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.4, h: 0.72,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 0.08, h: 0.72,
      fill: { color: p.color }
    });

    // Title
    slide.addText(p.title, {
      x: 5.4, y: y + 0.1, w: 4.0, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(p.desc, {
      x: 5.4, y: y + 0.38, w: 4.0, h: 0.28,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom process flow
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.25, w: 9.2, h: 0.55,
    fill: { color: theme.primary }
  });

  slide.addText("大型工作坊核心：分组科学 → 规则清晰 → 引导有序 → 汇报精炼", {
    x: 0.6, y: 4.25, w: 8.8, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff",
    valign: "middle", align: "center"
  });

  // Size indicator
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.85,
    fill: { color: theme.accent, transparency: 10 }
  });

  slide.addText("适用规模参考", {
    x: 0.6, y: 5.05, w: 2, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const sizes = [
    { range: "30-50人", tip: "分4-6组" },
    { range: "50-100人", tip: "分6-10组" },
    { range: "100人以上", tip: "工作坊+分会场的形式" }
  ];

  sizes.forEach((s, i) => {
    const x = 0.6 + i * 3.0;

    slide.addText(s.range, {
      x: x, y: 5.35, w: 1.5, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    slide.addText(s.tip, {
      x: x + 1.6, y: 5.35, w: 1.3, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide };
