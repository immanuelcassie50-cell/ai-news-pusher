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

  slide.addText("AI辅助工具推荐", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const tools = [
    { category: "研报分析", items: "通义听悟、智谱清言" },
    { category: "方案生成", items: "Kimi、文心一言" },
    { category: "内容创作", items: "秘塔写作猫、讯飞写作" },
    { category: "数据处理", items: "Excel AI、Python" },
    { category: "演示制作", items: "Gamma、Beautiful.ai" }
  ];

  const rowH = 0.75;
  const startY = 1.1;

  tools.forEach((tool, i) => {
    const y = startY + i * rowH;
    slide.addShape("rect", { x: 0.5, y: y, w: 1.8, h: 0.55, fill: { color: theme.accent }, rectRadius: 0.08 });
    slide.addText(tool.category, { x: 0.5, y: y, w: 1.8, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText("→", { x: 2.4, y: y, w: 0.5, h: 0.55, fontSize: 18, fontFace: "Arial", color: theme.secondary, align: "center", valign: "middle", margin: 0 });
    slide.addText(tool.items, { x: 3.0, y: y, w: 6.5, h: 0.55, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 0.5, y: 4.9, w: 9, h: 0.5, fill: { color: theme.light }, rectRadius: 0.08 });
  slide.addText("提示：选择适合自己工作流的工具，持续学习迭代", { x: 0.5, y: 4.9, w: 9, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "AI辅助工具推荐", description: "研报分析、方案生成、内容创作、数据处理、演示制作工具推荐", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };