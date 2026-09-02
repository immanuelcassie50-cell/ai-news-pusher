const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("六顶思考帽", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Six hats arranged in a circle pattern
  const hats = [
    { name: "白帽", desc: "事实与数据", color: "FFFFFF", textColor: theme.primary, emoji: "⚪" },
    { name: "红帽", desc: "情感与直觉", color: "E63946", textColor: "FFFFFF", emoji: "🔴" },
    { name: "黑帽", desc: "风险与问题", color: "1D1D1D", textColor: "FFFFFF", emoji: "⚫" },
    { name: "黄帽", desc: "价值与收益", color: "FFD700", textColor: theme.primary, emoji: "🟡" },
    { name: "绿帽", desc: "创意与可能", color: "2ECC71", textColor: "FFFFFF", emoji: "🟢" },
    { name: "蓝帽", desc: "过程与控制", color: "3498DB", textColor: "FFFFFF", emoji: "🔵" }
  ];

  // Center circle
  const centerX = 5;
  const centerY = 3.4;
  const radius = 1.8;

  // Draw center hub
  slide.addShape(pres.ShapeType.ellipse, {
    x: centerX - 0.8, y: centerY - 0.8, w: 1.6, h: 1.6,
    fill: { color: theme.light },
    line: { color: theme.secondary, width: 2 }
  });

  slide.addText("六顶\n思考帽", {
    x: centerX - 0.8, y: centerY - 0.5, w: 1.6, h: 1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Arrange hats around the center
  const positions = [
    { x: centerX - 2.2, y: centerY - 2.4 },   // top-left
    { x: centerX + 0.8, y: centerY - 2.4 },   // top-right
    { x: centerX - 3.2, y: centerY - 0.3 },   // left
    { x: centerX + 2.2, y: centerY - 0.3 },   // right
    { x: centerX - 2.2, y: centerY + 1.8 },   // bottom-left
    { x: centerX + 0.8, y: centerY + 1.8 }    // bottom-right
  ];

  hats.forEach((hat, i) => {
    const pos = positions[i];

    // Hat circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: pos.x, y: pos.y, w: 1.8, h: 1.8,
      fill: { color: hat.color },
      line: { color: theme.secondary, width: 1.5 }
    });

    // Hat name
    slide.addText(hat.name, {
      x: pos.x, y: pos.y + 0.4, w: 1.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: hat.textColor, bold: true, align: "center", valign: "middle"
    });

    // Hat description
    slide.addText(hat.desc, {
      x: pos.x, y: pos.y + 0.9, w: 1.8, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: hat.textColor, align: "center", valign: "top"
    });
  });

  // Connecting lines to center
  positions.forEach(pos => {
    const startX = pos.x + 0.9;
    const startY = pos.y + 1.8;
    const endX = centerX;
    const endY = centerY - 0.8;

    slide.addShape(pres.ShapeType.line, {
      x: Math.min(startX, endX),
      y: Math.min(startY, endY),
      w: Math.abs(startX - endX),
      h: Math.abs(startY - endY),
      line: { color: theme.secondary, width: 1, dashType: "dash" }
    });
  });

  // Bottom info bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.2, w: 10, h: 0.55,
    fill: { color: theme.light }
  });

  slide.addText("Edward de Bono 创立的水平思维工具，帮助团队全面思考问题", {
    x: 0.5, y: 5.28, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  return slide;
}

module.exports = { createSlide };
