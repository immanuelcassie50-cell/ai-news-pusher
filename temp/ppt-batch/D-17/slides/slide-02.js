// D-17 评委导入页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 2,
  title: '示范说明'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("示范说明", {
    x: 0.6, y: 0.4, w: 6, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.05, w: 0.6, h: 0.08,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("评的不是讲得多好，是方法能不能被复制", {
    x: 0.6, y: 1.25, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 4 个评价维度
  const dims = [
    { n: "01", t: "业务问题诊断", d: "真问题，不是凑数场景" },
    { n: "02", t: "AI 方案设计", d: "工具+流程+约束完整" },
    { n: "03", t: "提示词质量", d: "四段式 + 迭代 + 可复用" },
    { n: "04", t: "效果数据对比", d: "省时/提质/可衡量" }
  ];
  dims.forEach((d, i) => {
    const x = 0.6 + i * 2.2;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.1, w: 2.0, h: 2.2,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.1, w: 2.0, h: 0.5,
      fill: { color: theme.primary }, line: { type: "none" }
    });
    slide.addText(d.n, {
      x: x, y: 2.1, w: 2.0, h: 0.5,
      fontSize: 16, fontFace: "Arial", color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(d.t, {
      x: x + 0.1, y: 2.85, w: 1.8, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(d.d, {
      x: x + 0.1, y: 3.5, w: 1.8, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // 底部说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.7, w: 8.8, h: 0.5,
    fill: { color: theme.primary }, line: { type: "none" }
  });
  slide.addText("每课题 5 分钟说课 + 10 分钟试讲 + 5 分钟评委 AI 追问", {
    x: 0.6, y: 4.7, w: 8.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 页码
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { type: "none" }
  });
  slide.addText("02", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "003D7A", secondary: "333333", accent: "00A0E9",
    light: "F4F6F9", bg: "FFFFFF"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
