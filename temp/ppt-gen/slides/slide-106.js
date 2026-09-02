// slide-106.js - Change Resistance Deep Dive
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 106,
  title: '变革阻力深度分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革阻力深度分析", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const resistanceTypes = [
    { type: "理性阻力", root: "不理解为什么变", response: "清晰解释变革原因和长远价值" },
    { type: "情感阻力", root: "担心失去、害怕失败", response: "同理心倾听，提供安全感" },
    { type: "利益阻力", root: "变革影响切身利益", response: "寻找双赢方案或合理补偿" },
    { type: "能力阻力", root: "不确定能否适应", response: "充分培训和支持，建立信心" },
    { type: "习惯阻力", root: "现有方式更舒适", response: "渐进过渡，展示新方式的好处" }
  ];

  resistanceTypes.forEach((r, i) => {
    const y = 1.0 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 0.75,
      fill: { color: theme.accent }
    });
    slide.addText(r.type, {
      x: 0.5, y: y + 0.2, w: 2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.5, y: y, w: 3.3, h: 0.75,
      fill: { color: theme.light }
    });
    slide.addText("根源：" + r.root, {
      x: 2.7, y: y + 0.2, w: 2.9, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.8, y: y, w: 3.7, h: 0.75,
      fill: { color: "E8F5E9" }
    });
    slide.addText("应对：" + r.response, {
      x: 6, y: y + 0.2, w: 3.3, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "2E7D32", align: "left"
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
  pres.writeFile({ fileName: "slide-106-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
