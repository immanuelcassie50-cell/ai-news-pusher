const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("催化师个人品牌建设", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("从优秀到卓越，从个人到品牌", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Brand elements - path/journey style
  const brandElements = [
    { num: "1", title: "专业形象", desc: "穿着得体/准时守信", icon: "◉", color: theme.accent },
    { num: "2", title: "知识储备", desc: "持续学习/案例积累", icon: "◎", color: theme.primary },
    { num: "3", title: "实战经验", desc: "多主持/多复盘", icon: "▣", color: "#43aa8b" },
    { num: "4", title: "个人风格", desc: "形成独特的催化风格", icon: "★", color: theme.secondary },
    { num: "5", title: "网络口碑", desc: "学员推荐/案例分享", icon: "◐", color: "#e07a5f" }
  ];

  // Central path
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.3, w: 9, h: 0.06,
    fill: { color: theme.secondary, transparency: 50 }
  });

  // Path dots
  brandElements.forEach((b, i) => {
    const x = 0.5 + i * 2.25;

    // Main card - alternating top/bottom
    const isTop = i % 2 === 0;
    const cardY = isTop ? 1.5 : 3.5;

    // Connector line
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.45, y: isTop ? 2.85 : 3.36, w: 0.04, h: 0.5,
      fill: { color: b.color, transparency: 40 }
    });

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: cardY, w: 2.0, h: 1.2,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: cardY, w: 2.0, h: 0.1,
      fill: { color: b.color }
    });

    // Icon
    slide.addText(b.icon, {
      x: x + 0.1, y: cardY + 0.18, w: 0.5, h: 0.4,
      fontSize: 18, fontFace: "Arial",
      color: b.color
    });

    // Number
    slide.addText(b.num, {
      x: x + 0.65, y: cardY + 0.18, w: 0.4, h: 0.3,
      fontSize: 14, fontFace: "Arial",
      color: b.color, bold: true
    });

    // Title
    slide.addText(b.title, {
      x: x + 0.1, y: cardY + 0.55, w: 1.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(b.desc, {
      x: x + 0.1, y: cardY + 0.82, w: 1.8, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom section - brand benefits
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.85, w: 9.2, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("品牌价值", {
    x: 0.6, y: 4.92, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  const benefits = ["溢价能力", "优先机会", "持续推荐"];
  benefits.forEach((benefit, i) => {
    const x = 2.0 + i * 2.5;

    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 5.1, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText("✓", {
      x: x, y: 5.1, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(benefit, {
      x: x + 0.45, y: 5.1, w: 1.8, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "ffffff",
      valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide };
