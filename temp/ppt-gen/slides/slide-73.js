// slide-73.js - Stakeholder Mapping Tool
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 73,
  title: '利益相关方管理地图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("利益相关方管理地图", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // 2x2 matrix
  const matrixLabels = [
    { x: 0.5, y: 1.0, label: "高影响力-高利益", color: "DC3545", items: ["项目发起人", "核心管理层"] },
    { x: 5.0, y: 1.0, label: "高影响力-低利益", color: theme.accent, items: ["IT部门", "外部顾问"] },
    { x: 0.5, y: 3.2, label: "低影响力-高利益", color: "FFC107", items: ["一线员工代表", "HR部门"] },
    { x: 5.0, y: 3.2, label: "低影响力-低利益", color: theme.light, items: ["行政支持", "后勤部门"] }
  ];

  matrixLabels.forEach(m => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: m.x, y: m.y, w: 4.5, h: 2.0,
      fill: { color: theme.bg },
      line: { color: m.color === theme.light ? "CCCCCC" : m.color, width: 2 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: m.x, y: m.y, w: 4.5, h: 0.45,
      fill: { color: m.color }
    });
    slide.addText(m.label, {
      x: m.x, y: m.y + 0.08, w: 4.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: m.color === "FFC107" || m.color === theme.light ? theme.secondary : "FFFFFF", bold: true, align: "center"
    });
    slide.addText(m.items.join("\n"), {
      x: m.x + 0.2, y: m.y + 0.55, w: 4, h: 1.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-73-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
