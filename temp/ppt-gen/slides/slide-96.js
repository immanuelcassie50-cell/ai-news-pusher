// slide-96.js - Common Mistakes to Avoid
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 96,
  title: '变革管理常见误区'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革管理常见误区", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const mistakes = [
    { wrong: "技术导向", right: "人文导向", detail: "只关注系统功能，忽略员工感受和适应能力" },
    { wrong: "一次性变革", right: "持续迭代", detail: "认为项目结束就是变革完成，忽略持续巩固" },
    { wrong: "自上而下", right: "共同参与", detail: "把员工当执行者，而不是变革的贡献者" },
    { wrong: "信息控制", right: "透明沟通", detail: "以为少说就不会乱，实际上只会增加不信任" },
    { wrong: "完美计划", right: "快速试错", detail: "追求完美方案再行动，错失最佳时机" }
  ];

  mistakes.forEach((m, i) => {
    const y = 1.0 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.8, h: 0.75,
      fill: { color: "DC3545" }
    });
    slide.addText("✗ " + m.wrong, {
      x: 0.5, y: y + 0.2, w: 1.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText("→", {
      x: 2.3, y: y + 0.2, w: 0.5, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: theme.accent, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.8, y: y, w: 1.8, h: 0.75,
      fill: { color: "28A745" }
    });
    slide.addText("✓ " + m.right, {
      x: 2.8, y: y + 0.2, w: 1.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.6, y: y, w: 4.9, h: 0.75,
      fill: { color: theme.light }
    });
    slide.addText(m.detail, {
      x: 4.8, y: y + 0.2, w: 4.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-96-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
