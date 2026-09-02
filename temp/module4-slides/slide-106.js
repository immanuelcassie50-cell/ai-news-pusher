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

  slide.addShape("rect", { x: 0, y: 5.542, w: "100%", h: 0.083, fill: { color: theme.accent } });

  slide.addText("AI应用场景二：方案生成", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const capabilities = [
    "根据客户情况生成配置建议",
    "匹配适合的金融产品",
    "优化组合比例",
    "生成方案讲解要点"
  ];

  capabilities.forEach((cap, i) => {
    const y = 1.2 + i * 0.9;
    slide.addShape("ellipse", { x: 0.6, y: y, w: 0.5, h: 0.5, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.6, y: y, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    if (i < capabilities.length - 1) {
      slide.addShape("rect", { x: 0.825, y: y + 0.5, w: 0.05, h: 0.4, fill: { color: theme.light } });
    }
    slide.addText(cap, { x: 1.3, y: y, w: 5, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 6.8, y: 1.5, w: 2.8, h: 2.8, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
  slide.addShape("rect", { x: 6.8, y: 1.5, w: 2.8, h: 0.6, fill: { color: theme.primary }, rectRadius: 0 });
  slide.addText("推荐工具", { x: 6.8, y: 1.5, w: 2.8, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
  slide.addText("智能投顾系统", { x: 6.8, y: 2.3, w: 2.8, h: 1.8, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "AI应用场景二：方案生成", description: "方案生成AI应用场景的能力与工具", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };