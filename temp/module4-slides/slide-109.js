const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "2b2d42",
  secondary: "8d99ae",
  accent: "ef233c",
  light: "edf2f4",
  bg: "f8f9fa"
};

function createSlide() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";

  const slide = pptx.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: theme.bg } });

  slide.addText("方案生成提示词框架", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const frameItems = [
    { letter: "F", name: "Facts", desc: "客户基本情况" },
    { letter: "R", name: "Requirements", desc: "客户需求目标" },
    { letter: "A", name: "Assets", desc: "可投资产状况" },
    { letter: "M", name: "Market", desc: "市场环境分析" },
    { letter: "E", name: "Evaluation", desc: "评估和建议" }
  ];

  const boxW = 1.6;
  const boxH = 2.4;
  const startX = 0.5;
  const gap = 0.25;

  frameItems.forEach((item, i) => {
    const x = startX + i * (boxW + gap);
    slide.addShape("rect", { x: x, y: 1.1, w: boxW, h: boxH, fill: { color: i === 4 ? theme.accent : theme.primary }, rectRadius: 0.1 });
    slide.addText(item.letter, { x: x, y: 1.3, w: boxW, h: 0.7, fontSize: 40, fontFace: "Arial", bold: true, color: "ffffff", align: "center", margin: 0 });
    slide.addText(item.name, { x: x, y: 2.0, w: boxW, h: 0.5, fontSize: 14, fontFace: "Arial", bold: true, color: "ffffff", align: "center", margin: 0 });
    slide.addText(item.desc, { x: x, y: 2.5, w: boxW, h: 0.8, fontSize: 12, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "top", margin: 0.1 });
  });

  slide.addText("结构化输入  →  高质量输出", {
    x: 0.5, y: 3.8, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei", bold: true,
    color: theme.secondary, align: "center", margin: 0
  });

  slide.addShape("rect", { x: 2.5, y: 4.5, w: 5, h: 0.08, fill: { color: theme.light } });
  slide.addShape("ellipse", { x: 2.3, y: 4.35, w: 0.4, h: 0.4, fill: { color: theme.primary } });
  slide.addShape("ellipse", { x: 7.3, y: 4.35, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("输入", { x: 2.3, y: 4.8, w: 0.4, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", margin: 0 });
  slide.addText("输出", { x: 7.3, y: 4.8, w: 0.4, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "方案生成提示词框架", description: "FRAME提示词框架：Facts/Requirements/Assets/Market/Evaluation", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };