const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("线上催化会议技巧", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("突破屏幕限制，创造参与体验", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Left section - Online characteristics
  slide.addText("线上特点", {
    x: 0.5, y: 1.5, w: 4.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const onlineFeatures = [
    { num: "1", title: "视觉线索减少", desc: "更依赖语言和提问", icon: "◐" },
    { num: "2", title: "注意力更分散", desc: "需要更多互动设计", icon: "◑" },
    { num: "3", title: "技术依赖", desc: "熟悉平台功能", icon: "◎" },
    { num: "4", title: "记录困难", desc: "善用共享文档", icon: "◒" }
  ];

  onlineFeatures.forEach((f, i) => {
    const y = 1.95 + i * 0.85;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 4.2, h: 0.75,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.65, y: y + 0.12, w: 0.5, h: 0.5,
      fill: { color: theme.accent, transparency: 15 }
    });
    slide.addText(f.icon, {
      x: 0.65, y: y + 0.12, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent,
      align: "center", valign: "middle"
    });

    // Number
    slide.addText(f.num, {
      x: 1.25, y: y + 0.15, w: 0.3, h: 0.3,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Title
    slide.addText(f.title, {
      x: 1.6, y: y + 0.12, w: 2.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(f.desc, {
      x: 1.6, y: y + 0.4, w: 2.8, h: 0.28,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right section - Tools
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.5, w: 4.6, h: 3.8,
    fill: { color: theme.light }
  });

  slide.addText("推荐工具", {
    x: 5.2, y: 1.65, w: 4.2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const tools = [
    { name: "投票/问卷工具", desc: "Mentimeter / 腾讯投票", color: theme.accent },
    { name: "共享白板", desc: "Miro / Figma / 腾讯文档", color: theme.primary },
    { name: "分组讨论室", desc: "Zoom Rooms / 腾讯会议分组", color: "#43aa8b" },
    { name: "计时器", desc: "TeamTimer / 倒计时小程序", color: theme.secondary }
  ];

  tools.forEach((t, i) => {
    const y = 2.15 + i * 0.8;

    // Tool card
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 4.2, h: 0.68,
      fill: { color: "ffffff" }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 5.2, y: y, w: 0.08, h: 0.68,
      fill: { color: t.color }
    });

    // Name
    slide.addText(t.name, {
      x: 5.4, y: y + 0.1, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(t.desc, {
      x: 5.4, y: y + 0.38, w: 3.8, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 5.35, w: 9.2, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("线上催化关键：设计更多互动环节，补偿视觉线索的缺失", {
    x: 0.6, y: 5.35, w: 8.8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "ffffff",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
