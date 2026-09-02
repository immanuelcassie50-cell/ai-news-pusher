// slide-19.js - 收到输出后你要做什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: '收到输出后你要做什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("收到输出后你要做什么", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 核心提示
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.0,
    fill: { color: "FFF0F0" },
    rectRadius: 0.1
  });
  slide.addText("不要立刻全部复制粘贴！", {
    x: 0.7, y: 1.3, w: 8.6, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("先花30秒检查：方向有没有偏、有没有明显遗漏、格式对不对", {
    x: 0.7, y: 1.8, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // 特别注意
  slide.addText("特别注意", {
    x: 0.5, y: 2.4, w: 3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.9, w: 9, h: 1.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("输出看起来不错，但你心里有个模糊的感觉\"还差点什么\"", {
    x: 0.7, y: 3.0, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText([
    { text: "这种感觉不要忽视。大多数人在这里会直接接受这个输出，进入下一轮，然后在第4轮发现问题其实出在第2轮。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "遇到\"差点什么\"的感觉，停下来，花30秒想清楚\"差\"在哪里，然后在当前这轮补上，而不是带着这个问题往后走。", options: {} }
  ], {
    x: 0.7, y: 3.5, w: 8.6, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 底部总结
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("这30秒比你复制之后发现不对再回来改要省时间得多", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };