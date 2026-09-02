// slide-103.js - Change Management Maturity Assessment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 103,
  title: '变革管理成熟度自测'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革管理成熟度自测", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const levels = [
    { level: "Level 1: 初始级", desc: "变革随意、无计划、缺乏系统方法", score: "0-20分" },
    { level: "Level 2: 可重复级", desc: "有基本流程，但执行不一致", score: "21-40分" },
    { level: "Level 3: 已定义级", desc: "有标准流程，全组织一致应用", score: "41-60分" },
    { level: "Level 4: 已管理级", desc: "量化管理，持续监控和优化", score: "61-80分" },
    { level: "Level 5: 优化级", desc: "持续改进，输出最佳实践", score: "81-100分" }
  ];

  levels.forEach((l, i) => {
    const y = 1.0 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.8, h: 0.75,
      fill: { color: theme.accent }
    });
    slide.addText(l.level, {
      x: 0.5, y: y + 0.15, w: 1.8, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.3, y: y, w: 5.5, h: 0.75,
      fill: { color: theme.light }
    });
    slide.addText(l.desc, {
      x: 2.5, y: y + 0.2, w: 5.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText(l.score, {
      x: 7.8, y: y + 0.2, w: 1.5, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center"
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
  pres.writeFile({ fileName: "slide-103-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
