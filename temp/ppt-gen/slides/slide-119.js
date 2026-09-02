// slide-119.js - Change Management in Digital Era
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 119,
  title: '数字化时代的变革管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("数字化时代的变革管理", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Key differences
  const differences = [
    { old: "一次性大爆炸式变革", new: "持续迭代式变革" },
    { old: "自上而下命令式", new: "共同参与式变革" },
    { old: "纸质沟通加会议", new: "数字化即时沟通" },
    { old: "年度绩效评估", new: "实时反馈机制" },
    { old: "部门墙分隔", new: "跨职能协作" }
  ];

  differences.forEach((d, i) => {
    const y = 1.0 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4, h: 0.7,
      fill: { color: "FFEBEE" }
    });
    slide.addText("✗ " + d.old, {
      x: 0.7, y: y + 0.2, w: 3.6, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "DC3545", align: "left"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.5, y: y, w: 5, h: 0.7,
      fill: { color: "E8F5E9" }
    });
    slide.addText("✓ " + d.new, {
      x: 4.7, y: y + 0.2, w: 4.6, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-119-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
