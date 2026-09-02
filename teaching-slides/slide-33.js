const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("第二天学习总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Six key points in a structured layout
  const points = [
    { num: "01", title: "团队动力学原理", desc: "理解团队发展的阶段与规律" },
    { num: "02", title: "提问技术", desc: "开放式与封闭式问题的应用" },
    { num: "03", title: "追问层次", desc: "剥洋葱式的深度追问方法" },
    { num: "04", title: "追问方式", desc: "递进式、转换式、究因式" },
    { num: "05", title: "提问链设计", desc: "构建引导深度思考的问题序列" },
    { num: "06", title: "AAR复盘技术", desc: "四步法：计划→实际→原因→改进" }
  ];

  // Left column - 3 items
  points.slice(0, 3).forEach((point, i) => {
    const y = 1.2 + i * 1.35;

    // Number badge
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.8, h: 1.1,
      fill: { color: theme.accent }
    });
    slide.addText(point.num, {
      x: 0.5, y: y, w: 0.8, h: 1.1,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Content card
    slide.addShape("rect", {
      x: 1.3, y: y, w: 3.3, h: 1.1,
      fill: { color: theme.light }
    });

    slide.addText(point.title, {
      x: 1.5, y: y + 0.15, w: 3, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(point.desc, {
      x: 1.5, y: y + 0.6, w: 3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right column - 3 items
  points.slice(3, 6).forEach((point, i) => {
    const y = 1.2 + i * 1.35;

    // Number badge
    slide.addShape("rect", {
      x: 5.2, y: y, w: 0.8, h: 1.1,
      fill: { color: theme.primary }
    });
    slide.addText(point.num, {
      x: 5.2, y: y, w: 0.8, h: 1.1,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Content card
    slide.addShape("rect", {
      x: 6.0, y: y, w: 3.5, h: 1.1,
      fill: { color: theme.light }
    });

    slide.addText(point.title, {
      x: 6.2, y: y + 0.15, w: 3.2, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(point.desc, {
      x: 6.2, y: y + 0.6, w: 3.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Center divider line
  slide.addShape("rect", {
    x: 4.95, y: 1.2, w: 0.04, h: 3.8,
    fill: { color: theme.secondary, transparency: 50 }
  });

  // Bottom decorative element
  slide.addShape("ellipse", {
    x: 8.3, y: 4.6, w: 1.8, h: 1.8,
    fill: { color: theme.accent, transparency: 90 }
  });

  return slide;
}

module.exports = { createSlide };
