// slide-09.js - Focus Matrix Introduction
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '聚焦排序矩阵'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  const margin = 0.4;

  // Top decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("聚焦排序矩阵", {
    x: margin, y: 0.3, w: 9.2, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle
  slide.addText("X轴实现难度  ×  Y轴价值大小", {
    x: margin, y: 0.9, w: 9.2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    margin: 0
  });

  // Matrix visualization
  const matrixX = 1.2;
  const matrixY = 1.5;
  const matrixW = 4.8;
  const matrixH = 3.2;
  const cellW = matrixW / 2;
  const cellH = matrixH / 2;

  // Draw quadrants
  slide.addShape(pres.shapes.RECTANGLE, {
    x: matrixX, y: matrixY, w: cellW, h: cellH,
    fill: { color: "E8F5E9" }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: matrixX + cellW, y: matrixY, w: cellW, h: cellH,
    fill: { color: "FFF3E0" }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: matrixX, y: matrixY + cellH, w: cellW, h: cellH,
    fill: { color: "E3F2FD" }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: matrixX + cellW, y: matrixY + cellH, w: cellW, h: cellH,
    fill: { color: "FFEBEE" }
  });

  // Grid lines
  slide.addShape(pres.shapes.LINE, {
    x: matrixX + cellW, y: matrixY, w: 0, h: matrixH,
    line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: matrixX, y: matrixY + cellH, w: matrixW, h: 0,
    line: { color: theme.accent, width: 1.5 }
  });

  // Quadrant labels - Quick Wins
  slide.addText("Quick Wins", {
    x: matrixX, y: matrixY + 0.3, w: cellW, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: true, align: "center", valign: "middle"
  });
  slide.addText("价值大 × 难度低", {
    x: matrixX, y: matrixY + 0.7, w: cellW, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: false, align: "center"
  });
  slide.addText("立即行动！", {
    x: matrixX, y: matrixY + cellH - 0.6, w: cellW, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "2E7D32", bold: true, align: "center"
  });

  // Major Projects
  slide.addText("Major Projects", {
    x: matrixX + cellW, y: matrixY + 0.3, w: cellW, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "E65100", bold: true, align: "center", valign: "middle"
  });
  slide.addText("价值大 × 难度高", {
    x: matrixX + cellW, y: matrixY + 0.7, w: cellW, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "E65100", bold: false, align: "center"
  });
  slide.addText("规划优先级", {
    x: matrixX + cellW, y: matrixY + cellH - 0.6, w: cellW, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "E65100", bold: true, align: "center"
  });

  // Fill-ins
  slide.addText("Fill-ins", {
    x: matrixX, y: matrixY + cellH + 0.3, w: cellW, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "1565C0", bold: true, align: "center", valign: "middle"
  });
  slide.addText("价值小 × 难度低", {
    x: matrixX, y: matrixY + cellH + 0.7, w: cellW, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "1565C0", bold: false, align: "center"
  });
  slide.addText("有空再做", {
    x: matrixX, y: matrixY + cellH + cellH - 0.6, w: cellW, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "1565C0", bold: true, align: "center"
  });

  // Avoid
  slide.addText("Avoid", {
    x: matrixX + cellW, y: matrixY + cellH + 0.3, w: cellW, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "C62828", bold: true, align: "center", valign: "middle"
  });
  slide.addText("价值小 × 难度高", {
    x: matrixX + cellW, y: matrixY + cellH + 0.7, w: cellW, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "C62828", bold: false, align: "center"
  });
  slide.addText("尽量避免", {
    x: matrixX + cellW, y: matrixY + cellH + cellH - 0.6, w: cellW, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "C62828", bold: true, align: "center"
  });

  // Axis labels
  slide.addText("实现难度 →", {
    x: matrixX, y: matrixY + matrixH + 0.15, w: matrixW, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "center"
  });
  slide.addText("低", {
    x: matrixX + 0.1, y: matrixY + matrixH - 0.35, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center"
  });
  slide.addText("高", {
    x: matrixX + matrixW - 0.5, y: matrixY + matrixH - 0.35, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center"
  });

  slide.addText("价值", {
    x: matrixX - 0.5, y: matrixY + matrixH / 2 - 0.2, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "center"
  });
  slide.addText("高", {
    x: matrixX - 0.45, y: matrixY + 0.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center"
  });
  slide.addText("低", {
    x: matrixX - 0.45, y: matrixY + matrixH - 0.4, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center"
  });

  // Priority guide
  const guideX = 6.4;
  const guideY = 1.5;

  slide.addText("优先级指南", {
    x: guideX, y: guideY, w: 3.2, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    margin: 0
  });

  const priorities = [
    { rank: "1", label: "Quick Wins", desc: "立刻做，价值大难度低", color: "2E7D32" },
    { rank: "2", label: "Major Projects", desc: "规划做，价值大难度高", color: "E65100" },
    { rank: "3", label: "Fill-ins", desc: "有空做，价值小难度低", color: "1565C0" },
    { rank: "4", label: "Avoid", desc: "尽量不做，价值小难度高", color: "C62828" }
  ];

  priorities.forEach((p, i) => {
    const itemY = guideY + 0.55 + i * 0.75;

    slide.addShape(pres.shapes.OVAL, {
      x: guideX, y: itemY, w: 0.4, h: 0.4,
      fill: { color: p.color }
    });
    slide.addText(p.rank, {
      x: guideX, y: itemY, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.label, {
      x: guideX + 0.55, y: itemY, w: 2.6, h: 0.25,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      margin: 0
    });
    slide.addText(p.desc, {
      x: guideX + 0.55, y: itemY + 0.28, w: 2.6, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      margin: 0
    });
  });

  // Action tip
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: guideX, y: 4.55, w: 3.2, h: 0.55,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("思考：你的任务落在哪个象限？", {
    x: guideX + 0.15, y: 4.6, w: 2.9, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });
  slide.addText("9", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "8C8C8C",
    light: "D4D4D4",
    bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: __dirname + "/slide-09-preview.pptx" });
}

module.exports = { createSlide, slideConfig };