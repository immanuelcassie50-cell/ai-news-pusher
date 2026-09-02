// slide-89.js - Case: Strategic Alliances (案例：战略联盟设计)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '案例：战略联盟设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例：战略联盟设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Governance mechanisms
  slide.addText("联盟治理机制", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const mechanisms = [
    { title: "联合委员会", desc: "双方高层参与的战略决策机构" },
    { title: "协调机制", desc: "日常运营层面的沟通协调" },
    { title: "争议解决", desc: "预设的纠纷处理流程" }
  ];

  mechanisms.forEach((mech, idx) => {
    const y = 1.55 + idx * 0.7;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.3, h: 0.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 0.6,
      fill: { color: theme.accent }
    });

    slide.addText(mech.title, {
      x: 0.7, y: y + 0.08, w: 3.9, h: 0.25,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(mech.desc, {
      x: 0.7, y: y + 0.32, w: 3.9, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Key design elements
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.3, h: 2.75,
    fill: { color: theme.primary }
  });

  slide.addText("联盟成功要素", {
    x: 5.4, y: 1.25, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const successFactors = [
    "清晰的共同目标",
    "对等的权利义务",
    "灵活的调整机制",
    "明确的退出条款"
  ];

  successFactors.forEach((factor, idx) => {
    const y = 1.75 + idx * 0.5;

    slide.addShape(pres.shapes.OVAL, {
      x: 5.5, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(factor, {
      x: 5.85, y: y, w: 3.4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom lesson
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("好的联盟设计让合作利益大于单干，让背叛成本高于收益", {
    x: 0.5, y: 4.1, w: 9, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("89", {
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
  pres.writeFile({ fileName: "slide-89-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
