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

  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 1.0, fill: { color: theme.primary } });
  slide.addText("AI应用场景三：市场研究", {
    x: 0.5, y: 0.2, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: "ffffff", margin: 0
  });

  const capabilities = [
    "实时分析市场数据",
    "识别投资机会和风险",
    "生成市场周报/月报",
    "追踪政策变化影响"
  ];

  slide.addText("核心能力", {
    x: 0.5, y: 1.3, w: 4.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true,
    color: theme.accent, margin: 0
  });

  capabilities.forEach((cap, i) => {
    const y = 1.85 + i * 0.7;
    slide.addShape("rect", { x: 0.6, y: y + 0.1, w: 0.2, h: 0.2, fill: { color: theme.accent }, rotate: 45 });
    slide.addText(cap, { x: 1.0, y: y, w: 4, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 5.5, y: 1.3, w: 4, h: 3.5, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
  slide.addText("推荐工具", { x: 5.5, y: 1.5, w: 4, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: theme.secondary, align: "center", margin: 0 });
  slide.addText("智能研报\n分析系统", { x: 5.5, y: 2.2, w: 4, h: 2, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "AI应用场景三：市场研究", description: "市场研究AI应用场景的能力与工具", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };