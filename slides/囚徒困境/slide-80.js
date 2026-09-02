// slide-80.js - Word-of-Mouth Networks (口碑与信息传递)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 80,
  title: '口碑与信息传递'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("口碑与信息传递", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Network diagram
  // Central node
  slide.addShape(pres.shapes.OVAL, {
    x: 4.25, y: 2.3, w: 1.5, h: 1.0,
    fill: { color: theme.accent }
  });
  slide.addText("企业", {
    x: 4.25, y: 2.55, w: 1.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Surrounding nodes
  const nodes = [
    { x: 2.0, y: 1.5, label: "供应商" },
    { x: 6.5, y: 1.5, label: "客户" },
    { x: 1.5, y: 3.2, label: "同行" },
    { x: 7.0, y: 3.2, label: "监管" },
    { x: 4.5, y: 4.0, label: "媒体" }
  ];

  nodes.forEach((node) => {
    slide.addShape(pres.shapes.OVAL, {
      x: node.x, y: node.y, w: 1.3, h: 0.8,
      fill: { color: theme.secondary }
    });
    slide.addText(node.label, {
      x: node.x, y: node.y + 0.2, w: 1.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false,
      align: "center", valign: "middle"
    });

    // Lines to center
    slide.addShape(pres.shapes.LINE, {
      x: node.x + 0.65, y: node.y + 0.8, w: 4.25 - node.x - 0.65 + 0.75, h: 2.3 - node.y - 0.8,
      line: { color: theme.light, width: 1 }
    });
  });

  // Key insight on left
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 3.5, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addText("信息传播路径", {
    x: 0.7, y: 1.55, w: 3.1, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const paths = [
    "商会活动",
    "行业会议",
    "社交媒体",
    "私下交流"
  ];

  paths.forEach((path, idx) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: 2.05 + idx * 0.35, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(path, {
      x: 1.05, y: 1.95 + idx * 0.35, w: 2.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Consequence on right
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 4.0, w: 3.3, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("口碑的双向效应", {
    x: 6.4, y: 4.15, w: 2.9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("好行为 → 更多机会\n坏行为 → 被边缘化", {
    x: 6.4, y: 4.5, w: 2.9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addText("80", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-80-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
