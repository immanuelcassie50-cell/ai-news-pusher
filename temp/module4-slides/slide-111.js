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

  slide.addText("AI生成的方案示例", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const outputItems = ["执行摘要", "客户情况分析", "资产配置建议", "产品匹配方案", "风险提示", "下一步行动建议"];

  outputItems.forEach((item, i) => {
    const y = 1.1 + i * 0.6;
    slide.addShape("ellipse", { x: 0.6, y: y, w: 0.45, h: 0.45, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.6, y: y, w: 0.45, h: 0.45, fontSize: 14, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(item, { x: 1.2, y: y, w: 4, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 5.8, y: 1.1, w: 3.7, h: 3.3, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("AI的优势", { x: 5.8, y: 1.4, w: 3.7, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", margin: 0 });

  const advantages = ["快速", "全面", "结构化"];
  advantages.forEach((adv, i) => {
    const y = 2.1 + i * 0.7;
    slide.addShape("rect", { x: 6.3, y: y, w: 2.7, h: 0.5, fill: { color: theme.accent }, rectRadius: 0.25 });
    slide.addText(adv, { x: 6.3, y: y, w: 2.7, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
  });

  return slide;
}

const slideConfig = { theme, title: "AI生成的方案示例", description: "AI生成的方案结构与优势", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };