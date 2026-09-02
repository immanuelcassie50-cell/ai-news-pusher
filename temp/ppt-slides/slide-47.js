// slide-47.js - 关键认知：AI输出是起点不是终点
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "关键认知：AI输出是起点不是终点",
  pageNumber: 47,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 标题
  slide.addText("关键认知", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 核心观点
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: theme.primary },
    rectRadius: 0.12
  });

  slide.addText("AI输出是起点，不是终点", {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 流程图：AI输出 → 你的修改 → 最终结果
  const flowY = 2.7;
  const boxWidth = 2.4;
  const boxHeight = 1.3;
  const arrowWidth = 0.8;

  // AI输出框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: flowY, w: boxWidth, h: boxHeight,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText("AI输出", {
    x: 0.5, y: flowY + 0.15, w: boxWidth, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  slide.addText("初稿、草案、建议", {
    x: 0.5, y: flowY + 0.55, w: boxWidth, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  // 箭头1
  slide.addText("→", {
    x: 3.0, y: flowY + 0.35, w: arrowWidth, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // 你的修改框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 3.9, y: flowY, w: boxWidth, h: boxHeight,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("你的修改", {
    x: 3.9, y: flowY + 0.15, w: boxWidth, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText("核实、调整、补充", {
    x: 3.9, y: flowY + 0.55, w: boxWidth, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center"
  });

  // 箭头2
  slide.addText("→", {
    x: 6.4, y: flowY + 0.35, w: arrowWidth, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // 最终结果框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 7.3, y: flowY, w: boxWidth, h: boxHeight,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("最终结果", {
    x: 7.3, y: flowY + 0.15, w: boxWidth, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText("可信赖、可用", {
    x: 7.3, y: flowY + 0.55, w: boxWidth, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center"
  });

  // 关键提示
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.3, w: 9, h: 1.1,
    fill: { color: theme.light },
    rectRadius: 0.1
  });

  const tips = [
    "AI负责生成初稿，你负责保证质量",
    "不要省略"核实"这个步骤，不要偷懒"
  ];

  tips.forEach((tip, i) => {
    slide.addText((i === 0 ? "✓" : "✓") + " " + tip, {
      x: 0.7, y: 4.45 + i * 0.45, w: 8.6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-47-output.pptx" })
    .then(() => console.log("Created: slide-47-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };