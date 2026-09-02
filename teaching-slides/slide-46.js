const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText("综合催化方案设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Six elements in hexagonal flow
  const elements = [
    { num: "1", title: "问题定义", desc: "明确要解决的问题", icon: "?" },
    { num: "2", title: "目标设定", desc: "期望达成的结果", icon: "◎" },
    { num: "3", title: "利益相关方", desc: "识别并分析各方", icon: "⚪" },
    { num: "4", title: "工具选择", desc: "选择适合的工具组合", icon: "⚙" },
    { num: "5", title: "时间规划", desc: "安排各环节时间", icon: "⏱" },
    { num: "6", title: "应急预案", desc: "预判突发状况", icon: "!" }
  ];

  // Hexagonal grid layout (2 rows of 3)
  const hexWidth = 2.8;
  const hexHeight = 1.8;
  const startX = 0.7;
  const startY = 1.2;
  const gapX = 0.3;
  const gapY = 0.25;

  elements.forEach((e, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (hexWidth + gapX);
    const y = startY + row * (hexHeight + gapY);

    // Hexagon card background
    slide.addShape(pres.ShapeType.hexagon, {
      x: x, y: y, w: hexWidth, h: hexHeight,
      fill: { color: row === 0 ? theme.light : theme.primary, transparency: row === 0 ? 0 : 0 }
    });

    // Icon circle
    const iconBgColor = row === 0 ? theme.accent : theme.accent;
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.2, y: y + 0.25, w: 0.7, h: 0.7,
      fill: { color: iconBgColor }
    });
    slide.addText(e.icon, {
      x: x + 0.2, y: y + 0.25, w: 0.7, h: 0.7,
      fontSize: 20,
      align: "center", valign: "middle"
    });

    // Number
    slide.addText(e.num, {
      x: x + 1.0, y: y + 0.2, w: 0.5, h: 0.4,
      fontSize: 24, fontFace: "Arial",
      color: row === 0 ? theme.accent : theme.accent, bold: true
    });

    // Title
    slide.addText(e.title, {
      x: x + 0.2, y: y + 1.0, w: 2.4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: row === 0 ? theme.primary : "ffffff", bold: true
    });

    // Description
    slide.addText(e.desc, {
      x: x + 0.2, y: y + 1.35, w: 2.4, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: row === 0 ? theme.secondary : theme.light
    });

    // Arrow between elements (horizontal)
    if (col < 2) {
      slide.addText("→", {
        x: x + hexWidth, y: y + 0.6, w: 0.3, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent,
        align: "center", valign: "middle"
      });
    }
  });

  // Arrow between rows
  slide.addText("↓", {
    x: startX + 2 * (hexWidth + gapX) + hexWidth / 2 - 0.15, y: startY + hexHeight - 0.1,
    w: 0.3, h: 0.5,
    fontSize: 20, fontFace: "Arial",
    color: theme.accent,
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.5, w: 10, h: 0.25,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide };
