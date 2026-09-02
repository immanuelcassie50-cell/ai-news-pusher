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

  slide.addText("人机协作最佳模式", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  slide.addShape("rect", { x: 0.5, y: 1.2, w: 4.2, h: 2.8, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("AI负责", { x: 0.5, y: 1.4, w: 4.2, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", margin: 0 });

  const aiTasks = ["信息收集", "数据分析", "方案生成"];
  aiTasks.forEach((task, i) => {
    slide.addShape("rect", { x: 1.0, y: 2.1 + i * 0.6, w: 3.2, h: 0.45, fill: { color: theme.accent }, rectRadius: 0.22 });
    slide.addText(task, { x: 1.0, y: 2.1 + i * 0.6, w: 3.2, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 5.3, y: 1.2, w: 4.2, h: 2.8, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.primary, width: 2 } });
  slide.addText("人类负责", { x: 5.3, y: 1.4, w: 4.2, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: theme.primary, align: "center", margin: 0 });

  const humanTasks = ["需求理解", "价值判断", "关系建立"];
  humanTasks.forEach((task, i) => {
    slide.addShape("rect", { x: 5.8, y: 2.1 + i * 0.6, w: 3.2, h: 0.45, fill: { color: theme.secondary }, rectRadius: 0.22 });
    slide.addText(task, { x: 5.8, y: 2.1 + i * 0.6, w: 3.2, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle", margin: 0 });
  });

  slide.addShape("ellipse", { x: 4.5, y: 2.2, w: 1, h: 1, fill: { color: theme.accent } });
  slide.addText("+", { x: 4.5, y: 2.2, w: 1, h: 1, fontSize: 36, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });

  slide.addShape("rect", { x: 1.5, y: 4.3, w: 7, h: 0.9, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText("协作公式：AI(效率) + 人类(判断) = 最优结果", { x: 1.5, y: 4.3, w: 7, h: 0.9, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: theme.primary, align: "center", valign: "middle", margin: 0 });

  slide.addText("关键：各展所长，协同增效", { x: 0.5, y: 5.3, w: 9, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "人机协作最佳模式", description: "AI与人类协作的最佳模式：各展所长，协同增效", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };