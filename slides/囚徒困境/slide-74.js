// slide-74.js - Direction 3: Detection Mechanisms (方向三：建立识别机制)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 74,
  title: '方向三：建立识别机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("方向三：建立识别机制", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Core principle
  slide.addText("核心逻辑：你无法惩罚你无法检测到的背叛", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // The detection challenge - visual diagram
  // Hidden betrayal concept
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("监测的挑战", {
    x: 0.7, y: 1.95, w: 3.9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const challenges = [
    "信息不对称",
    "行为难以观察",
    "证据难以获取",
    "成本约束"
  ];

  challenges.forEach((c, idx) => {
    const y = 2.45 + idx * 0.45;

    slide.addShape(pres.shapes.OVAL, {
      x: 0.9, y: y + 0.08, w: 0.2, h: 0.2,
      fill: { color: "c53030" }
    });

    slide.addText(c, {
      x: 1.25, y: y, w: 3.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Solutions
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.8, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("应对方法", {
    x: 5.4, y: 1.95, w: 3.9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const solutions = [
    "透明度要求",
    "审计权条款",
    "第三方验证",
    "信息披露义务"
  ];

  solutions.forEach((s, idx) => {
    const y = 2.45 + idx * 0.45;

    slide.addShape(pres.shapes.OVAL, {
      x: 5.6, y: y + 0.08, w: 0.2, h: 0.2,
      fill: { color: theme.primary }
    });

    slide.addText(s, {
      x: 5.95, y: y, w: 3.3, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Arrow between
  slide.addShape(pres.shapes.LINE, {
    x: 4.85, y: 3.05, w: 0.3, h: 0,
    line: { color: theme.accent, width: 2 }
  });

  // Bottom section: Key principle
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fill: { color: theme.accent }
  });
  slide.addText("有效的惩罚机制 = 可检测性 + 可证实性 + 可执行性", {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("74", {
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
  pres.writeFile({ fileName: "slide-74-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
