// slide-65.js - M4 内容地图
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 65, title: 'M4 内容地图' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 本模块地图", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("核心技术 · 五个核心动作", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    { n: "01", t: "锚定效应", d: "谁先报价，谁定规则——第一数字的影响力" },
    { n: "02", t: "让步节奏", d: "大小、快慢、\"非货币\"让步——三个层次" },
    { n: "03", t: "信息管理", d: "说什么、藏什么、怎么藏——分寸感" },
    { n: "04", t: "价值证明", d: "让对方相信你的方案值这个价" },
    { n: "05", t: "现场流程", d: "从开场到收尾的 5 个动作" }
  ];

  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.55 + row * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.5, h: 0.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 0.95,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(it.n, {
      x: x + 0.2, y: y + 0.1, w: 0.6, h: 0.4,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(it.t, {
      x: x + 0.9, y: y + 0.1, w: 3.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(it.d, {
      x: x + 0.9, y: y + 0.45, w: 3.5, h: 0.5,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 13
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.85, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("时长：2.5-3 小时  |  现场演练：每讲完一个技术配 1 个 5 分钟模拟", {
    x: 0.5, y: 4.85, w: 8.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("65", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-65-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
