// slide-67.js - Contract Design (合同与违约条款)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '合同与违约条款'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("合同与违约条款", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left section: Key concepts
  slide.addText("关键条款设计", {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const concepts = [
    { title: "违约金条款", desc: "事先约定违约金额，降低举证成本" },
    { title: "损害赔偿金", desc: "明确计算方式，便于快速索赔" },
    { title: "实际履行", desc: "要求按约执行，而非仅赔偿" }
  ];

  concepts.forEach((concept, idx) => {
    const y = 1.8 + idx * 0.85;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.5, h: 0.75,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 0.75,
      fill: { color: theme.accent }
    });

    slide.addText(concept.title, {
      x: 0.7, y: y + 0.08, w: 4.1, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(concept.desc, {
      x: 0.7, y: y + 0.4, w: 4.1, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right section: Example
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.6,
    fill: { color: theme.primary }
  });

  slide.addText("案例：竞业禁止条款", {
    x: 5.4, y: 1.4, w: 3.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const examplePoints = [
    "员工离职后一定期限内",
    "不得加入竞争对手公司",
    "不得从事同类业务",
    "违反则需赔偿损失"
  ];

  examplePoints.forEach((point, idx) => {
    const y = 2.1 + idx * 0.55;

    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: y + 0.1, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });

    slide.addText(point, {
      x: 5.85, y: y, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("精心设计的合同让背叛成本清晰可见、不可避免", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("67", {
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
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
