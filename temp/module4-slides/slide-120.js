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
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: theme.primary } });

  slide.addText("模块四核心理念", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", margin: 0
  });

  slide.addText([
    { text: "\"", options: { fontSize: 80, color: theme.accent } },
    { text: "AI是顾问的超级助手，而不是替代者。", options: { fontSize: 32, color: "ffffff" } },
    { text: "\"", options: { fontSize: 80, color: theme.accent } }
  ], {
    x: 0.5, y: 1.5, w: 9, h: 1.5,
    fontFace: "Microsoft YaHei", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("善用AI，让自己更专业。", {
    x: 0.5, y: 3.0, w: 9, h: 0.8,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "ffffff", align: "center", valign: "middle", margin: 0
  });

  slide.addShape("rect", { x: 3.5, y: 4.2, w: 3, h: 0.06, fill: { color: theme.accent } });
  slide.addText("——AI时代的顾问之道", { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "模块四核心理念", description: "模块四金句：AI是顾问的超级助手", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };