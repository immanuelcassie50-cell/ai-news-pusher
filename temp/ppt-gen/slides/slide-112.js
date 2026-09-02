// slide-112.js - Change Champion Recognition System
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 112,
  title: '变革大使荣誉体系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革大使荣誉体系", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const recognitionLevels = [
    { level: "变革新星", criteria: "首次参与变革项目并做出贡献", reward: "荣誉证书、纪念品" },
    { level: "变革先锋", criteria: "连续3个月积极参与并带动他人", reward: "公开表彰、优先培训机会" },
    { level: "变革领袖", criteria: "主导完成重要变革模块，影响显著", reward: "领导力发展机会、奖金" },
    { level: "变革传奇", criteria: "年度变革最佳实践创造者和传播者", reward: "年度盛典表彰、特殊福利" }
  ];

  recognitionLevels.forEach((r, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.5, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(r.level, {
      x: 0.5, y: y + 0.3, w: 2.5, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3, y: y, w: 4, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText(r.criteria, {
      x: 3.2, y: y + 0.15, w: 3.6, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText("奖励：" + r.reward, {
      x: 3.2, y: y + 0.5, w: 3.6, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "28A745", align: "left"
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7, y: 1.0, w: 2.5, h: 4.2,
    fill: { color: theme.light }
  });
  slide.addText("荣誉体系\n设计原则", {
    x: 7, y: 1.2, w: 2.5, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  const principles = ["可见性：公开认可\n", "及时性：快速反馈\n", "多样性：物质+精神\n", "真实性：基于贡献"];
  slide.addText(principles.join(""), {
    x: 7.2, y: 1.9, w: 2.1, h: 3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-112-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
