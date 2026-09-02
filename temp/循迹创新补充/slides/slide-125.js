// slide-125.js - 创新方法论闭环
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 125,
  title: '创新方法论闭环'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.1, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("创新方法论闭环", {
    x: 0.5, y: 0.35, w: 5, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("从洞察到验证的完整旅程", {
    x: 0.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Circular flow diagram
  const centerX = 5.5;
  const centerY = 3.0;
  const radius = 1.6;

  const nodes = [
    { label: "循迹", angle: -90 },
    { label: "重问", angle: 0 },
    { label: "开局", angle: 90 },
    { label: "试真", angle: 180 }
  ];

  // Draw circular arrows connecting nodes
  slide.addShape(pres.shapes.OVAL, {
    x: centerX - radius, y: centerY - radius, w: radius * 2, h: radius * 2,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 2 }
  });

  // Draw arrows between nodes
  nodes.forEach((node, i) => {
    const nextNode = nodes[(i + 1) % 4];
    const angle1 = (node.angle * Math.PI) / 180;
    const angle2 = (nextNode.angle * Math.PI) / 180;

    // Node circle
    const nodeX = centerX + radius * Math.cos(angle1);
    const nodeY = centerY + radius * Math.sin(angle1);

    slide.addShape(pres.shapes.OVAL, {
      x: nodeX - 0.45, y: nodeY - 0.45, w: 0.9, h: 0.9,
      fill: { color: theme.accent }
    });

    slide.addText(node.label, {
      x: nodeX - 0.45, y: nodeY - 0.45, w: 0.9, h: 0.9,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Center text
  slide.addText("迭代\n深化", {
    x: centerX - 0.6, y: centerY - 0.35, w: 1.2, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Side info cards
  const infoCards = [
    { title: "闭环流程", items: ["用户洞察 → 问题定义", "创新激发 → 方案生成", "验证测试 → 迭代优化"] },
    { title: "持续创新", items: ["螺旋上升", "每轮迭代深化", "永不停止"] }
  ];

  infoCards.forEach((card, i) => {
    const cardX = i === 0 ? 0.5 : 7.8;
    const cardY = 2.0;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX, y: cardY, w: 2.5, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    slide.addText(card.title, {
      x: cardX + 0.15, y: cardY + 0.15, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    slide.addText(card.items.join("\n"), {
      x: cardX + 0.15, y: cardY + 0.5, w: 2.2, h: 1.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom text
  slide.addText("持续创新，永无止境", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("125", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
