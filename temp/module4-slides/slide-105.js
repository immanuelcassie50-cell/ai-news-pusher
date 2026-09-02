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

  slide.addText("AI应用场景一：客户分析", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const capabilities = [
    "自动分析客户画像数据",
    "挖掘潜在需求和风险偏好",
    "生成客户关注点报告",
    "追踪客户动态变化"
  ];

  capabilities.forEach((cap, i) => {
    const y = 1.2 + i * 0.75;
    slide.addShape("ellipse", { x: 0.6, y: y + 0.12, w: 0.35, h: 0.35, fill: { color: theme.accent } });
    slide.addText("✓", { x: 0.6, y: y + 0.12, w: 0.35, h: 0.35, fontSize: 14, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(cap, { x: 1.1, y: y, w: 5, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 6.5, y: 1.2, w: 3, h: 2.5, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("推荐工具", { x: 6.5, y: 1.4, w: 3, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", margin: 0 });
  slide.addText("CRM系统\n智能分析模块", { x: 6.5, y: 1.9, w: 3, h: 1.5, fontSize: 20, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "AI应用场景一：客户分析", description: "客户分析AI应用场景的能力与工具", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };