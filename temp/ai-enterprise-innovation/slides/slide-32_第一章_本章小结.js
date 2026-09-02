// slide-32_第一章_本章小结 - 总结页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 32,
  title: '第一章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("第一章小结", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 本章内容回顾
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("本章内容", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const contents = [
    "AI技术演进与范式转移",
    "三次创新浪潮的对比",
    "企业AI应用现状与差距",
    "行业渗透率差异分析",
    "先行者红利与追赶者机会",
    "技术成熟度与理性预期"
  ];

  contents.forEach((item, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: 1.9 + i * 0.42, w: 0.1, h: 0.1,
      fill: { color: theme.light }, line: { type: 'none' }
    });
    slide.addText(item, {
      x: 0.95, y: 1.8 + i * 0.42, w: 3.6, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 核心要点
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.5,
    fill: { color: theme.secondary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 0.5,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("核心要点", {
    x: 5.2, y: 1.2, w: 4.3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  const keyPoints = [
    "AI是基础设施而非风口",
    "技术已成熟，应用需加速",
    "窗口期3-5年，行动需及时",
    "小步快跑是最佳策略"
  ];

  keyPoints.forEach((point, i) => {
    slide.addText("✓ " + point, {
      x: 5.4, y: 1.9 + i * 0.6, w: 3.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部 - 进入下一章提示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("下一章：企业AI创新的六大挑战 →", {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("32", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
