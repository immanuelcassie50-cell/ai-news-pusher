// slide-05.js - Course Introduction 3 (你将获得)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '你将获得'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("你将获得", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Tools/resources list
  const tools = [
    "公平感三维评估模型",
    "差异化满足指南",
    "专属时间设计模板",
    "STEA冲突转化检查清单",
    "30天行动计划表"
  ];

  const startY = 1.3;
  const itemHeight = 0.75;

  tools.forEach((tool, idx) => {
    const y = startY + idx * itemHeight;

    // Checkmark circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.08, w: 0.45, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText("✓", {
      x: 0.7, y: y + 0.08, w: 0.45, h: 0.45,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Tool name
    slide.addText(tool, {
      x: 1.35, y: y, w: 8, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 2, h: 0.03,
    fill: { color: theme.accent }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
