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

  slide.addShape("rect", { x: 0, y: 0, w: 0.125, h: "100%", fill: { color: theme.accent } });

  slide.addText("模块四核心要点", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const takeaways = [
    "AI是效率工具，可以提升顾问专业度",
    "四大应用场景：客户分析、方案生成、市场研究、客户沟通",
    "提示词框架是AI输出质量的关键",
    "三层人工精修确保方案质量",
    "顾问的不可替代性在于共情、信任和判断"
  ];

  const startY = 1.1;
  const itemH = 0.75;

  takeaways.forEach((item, i) => {
    const y = startY + i * itemH;
    slide.addShape("ellipse", { x: 0.6, y: y + 0.1, w: 0.45, h: 0.45, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.6, y: y + 0.1, w: 0.45, h: 0.45, fontSize: 14, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(item, { x: 1.2, y: y, w: 8.3, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
    if (i < takeaways.length - 1) {
      slide.addShape("rect", { x: 1.2, y: y + 0.65, w: 8.3, h: 0.02, fill: { color: theme.light } });
    }
  });

  return slide;
}

const slideConfig = { theme, title: "模块四核心要点", description: "模块四的五个核心要点总结", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };