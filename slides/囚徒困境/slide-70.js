// slide-70.js - Direction 2: Increase Future Value (方向二：增加未来合作价值)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 70,
  title: '方向二：增加未来合作价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("方向二：增加未来合作价值", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main insight
  slide.addText("核心逻辑：让长期合作的收益高于短期背叛的收益", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Diagram showing time dimension
  // Timeline arrow
  slide.addShape(pres.shapes.LINE, {
    x: 1, y: 2.8, w: 8, h: 0,
    line: { color: theme.primary, width: 3 }
  });

  // Arrow head
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.8, y: 2.7, w: 0.3, h: 0.2,
    fill: { color: theme.primary }
  });

  // Timeline labels
  slide.addText("短期", {
    x: 1, y: 2.3, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  slide.addText("长期", {
    x: 7.5, y: 2.3, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Two paths
  // Betrayal path (red)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 1.5, w: 2.5, h: 0.6,
    fill: { color: "c53030", transparency: 20 },
    line: { color: "c53030", width: 1 }
  });
  slide.addText("背叛收益", {
    x: 1.5, y: 1.5, w: 2.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "c53030", bold: false,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.LINE, {
    x: 2.75, y: 2.1, w: 0, h: 0.5,
    line: { color: "c53030", width: 1, dashType: "dash" }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 3.2, w: 2.5, h: 0.6,
    fill: { color: "c53030", transparency: 40 },
    line: { color: "c53030", width: 1 }
  });
  slide.addText("未来损失", {
    x: 1.5, y: 3.2, w: 2.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "c53030", bold: false,
    align: "center", valign: "middle"
  });

  // Cooperation path (blue)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6, y: 1.5, w: 2.5, h: 0.6,
    fill: { color: theme.primary, transparency: 20 },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("短期投入", {
    x: 6, y: 1.5, w: 2.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.LINE, {
    x: 7.25, y: 2.1, w: 0, h: 0.5,
    line: { color: theme.primary, width: 1, dashType: "dash" }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6, y: 3.2, w: 2.5, h: 0.6,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("长期收益", {
    x: 6, y: 3.2, w: 2.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Key methods section
  const methods = [
    { title: "关系投资", desc: "投入专用资产，增加转换成本" },
    { title: "长期合同", desc: "多年绑定，平滑短期波动" },
    { title: "互惠条款", desc: "如最惠待遇，确保利益共享" }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const startY = 4.1;
  const gapX = 0.25;

  methods.forEach((m, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(m.title, {
      x: x + 0.15, y: startY + 0.1, w: cardWidth - 0.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(m.desc, {
      x: x + 0.15, y: startY + 0.45, w: cardWidth - 0.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("70", {
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
  pres.writeFile({ fileName: "slide-70-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
