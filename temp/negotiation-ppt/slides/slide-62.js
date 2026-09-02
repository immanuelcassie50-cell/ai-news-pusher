// slide-62.js - 模块3小结
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 62, title: '模块3小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 模块小结", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("模块三 · 五个核心工具", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    { n: "01", t: "BATNA", d: "决定议价能力的根源——必须真实存在" },
    { n: "02", t: "三个数字", d: "期望 / 底线 / BATNA——顺序不能错" },
    { n: "03", t: "六张牌", d: "时间/信息/关系/退路/灵活/专业——六种筹码" },
    { n: "04", t: "八步准备", d: "从接到通知到坐下来的完整动作" },
    { n: "05", t: "准备表", d: "把准备变成可重复的流程" }
  ];

  items.forEach((it, i) => {
    const y = 1.55 + i * 0.65;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 0.7, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(it.n, {
      x: 0.4, y: y, w: 0.7, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(it.t, {
      x: 1.25, y: y, w: 3.0, h: 0.55,
      fontSize: 12.5, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(it.d, {
      x: 4.4, y: y, w: 5.1, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("回家作业：拿一个真实谈判填一份准备表——下周带回来分享", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("62", {
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
  pres.writeFile({ fileName: "slide-62-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
