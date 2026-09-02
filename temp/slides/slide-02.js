// slide-02.js - Table of Contents
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("目录", {
    x: 0.5, y: 0.4, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 1, h: 0.06,
    fill: { color: theme.accent }
  });

  // Section items - 4 parts
  const sections = [
    { num: "01", title: "问题定义篇", desc: "三层定义 / 描述性定义 / 隐藏考题" },
    { num: "02", title: "类比思维篇", desc: "类比模型 / 类比三问 / 反面喻体法" },
    { num: "03", title: "归因分析篇", desc: "因果归因 / 竞争性假说 / 调研方案" },
    { num: "04", title: "标准决策篇", desc: "判断标准 / 隐藏标准 / 价值观冲突" }
  ];

  const startY = 1.6;
  const itemHeight = 0.9;

  sections.forEach((section, i) => {
    const y = startY + i * itemHeight;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.6, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(section.num, {
      x: 0.6, y: y, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(section.title, {
      x: 1.4, y: y, w: 4, h: 0.35,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(section.desc, {
      x: 1.4, y: y + 0.35, w: 6, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
