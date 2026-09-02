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

  slide.addText("AI使用注意事项", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  slide.addShape("rect", { x: 0.5, y: 1.1, w: 4.3, h: 3.8, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
  slide.addShape("rect", { x: 0.5, y: 1.1, w: 4.3, h: 0.6, fill: { color: "2a9d8f" } });
  slide.addText("应该做", { x: 0.5, y: 1.1, w: 4.3, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });

  const dos = ["保持批判性思维", "核实AI输出", "保护客户隐私", "持续学习新工具"];
  dos.forEach((item, i) => {
    const y = 1.9 + i * 0.7;
    slide.addText("V", { x: 0.7, y: y, w: 0.4, h: 0.5, fontSize: 16, fontFace: "Arial", bold: true, color: "2a9d8f", valign: "middle", margin: 0 });
    slide.addText(item, { x: 1.2, y: y, w: 3.4, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 5.2, y: 1.1, w: 4.3, h: 3.8, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
  slide.addShape("rect", { x: 5.2, y: 1.1, w: 4.3, h: 0.6, fill: { color: theme.accent } });
  slide.addText("不要做", { x: 5.2, y: 1.1, w: 4.3, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });

  const donts = ["不要完全依赖AI", "不要泄露敏感信息", "不要忽视人工判断", "不要停止专业学习"];
  donts.forEach((item, i) => {
    const y = 1.9 + i * 0.7;
    slide.addText("X", { x: 5.4, y: y, w: 0.4, h: 0.5, fontSize: 16, fontFace: "Arial", bold: true, color: theme.accent, valign: "middle", margin: 0 });
    slide.addText(item, { x: 5.9, y: y, w: 3.4, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  return slide;
}

const slideConfig = { theme, title: "AI使用注意事项", description: "AI使用的应该做与不要做注意事项", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };