// slide-02.js - Table of Contents
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page title
  slide.addText("目录", {
    x: 0.5, y: 0.4, w: 3, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.primary }
  });

  // TOC items
  const tocItems = [
    { num: "01", title: "工具路由的判断逻辑", sub: "决策树与工具选择" },
    { num: "02", title: "格式处理", sub: "工具之间的翻译层" },
    { num: "03", title: "个人AI产出库", sub: "让每次积累都有地方放" }
  ];

  tocItems.forEach((item, i) => {
    const yPos = 1.5 + i * 1.3;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(item.num, {
      x: 0.5, y: yPos, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title and subtitle
    slide.addText(item.title, {
      x: 1.4, y: yPos + 0.05, w: 6, h: 0.4,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.sub, {
      x: 1.4, y: yPos + 0.42, w: 6, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right decorative block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 1.5, w: 1.2, h: 3.5,
    fill: { color: theme.primary, transparency: 8 }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };