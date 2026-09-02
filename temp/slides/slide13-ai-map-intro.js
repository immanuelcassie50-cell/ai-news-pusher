const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("13", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("AI重构地图工具介绍", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Description
  slide.addText("用AI思维重新设计你的工作流程", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Map visual - simplified path
  const pathY = 2.8;
  const nodes = [
    { x: 0.8, label: "当前状态", icon: "●" },
    { x: 2.8, label: "↓", icon: "" },
    { x: 3.8, label: "目标场景", icon: "◎" },
    { x: 5.8, label: "↓", icon: "" },
    { x: 6.8, label: "行动路径", icon: "→" },
    { x: 8.5, label: "达成！", icon: "✓" }
  ];

  // Draw connecting line
  slide.addShape(pres.ShapeType.line, {
    x: 1.0, y: pathY, w: 7.5, h: 0,
    line: { color: theme.primary, width: 2, dashType: "dash" }
  });

  // Draw nodes
  const nodeData = [
    { x: 0.8, label: "当前状态", sub: "现状是什么" },
    { x: 3.8, label: "目标场景", sub: "想要什么" },
    { x: 6.8, label: "行动路径", sub: "怎么做" }
  ];

  nodeData.forEach((node) => {
    // Node circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: node.x, y: pathY - 0.4, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });

    // Node label
    slide.addText(node.label, {
      x: node.x - 0.5, y: pathY + 0.5, w: 1.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Node sub label
    slide.addText(node.sub, {
      x: node.x - 0.5, y: pathY + 0.9, w: 1.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center"
    });
  });

  // Final checkmark
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.3, y: pathY - 0.4, w: 0.8, h: 0.8,
    fill: { color: "4CAF50" }
  });
  slide.addText("✓", {
    x: 8.3, y: pathY - 0.35, w: 0.8, h: 0.7,
    fontSize: 24, fontFace: "Arial",
    color: theme.bg, bold: true,
    align: "center"
  });

  // Key message
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.6, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 10 },
    rectRadius: 0.08
  });
  slide.addText("目标：用AI重构工作流，省时省力出结果", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
