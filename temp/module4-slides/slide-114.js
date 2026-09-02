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
  slide.addText("AI时代顾问的不可替代性", {
    x: 0.5, y: 0.2, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei", bold: true,
    color: "ffffff", margin: 0
  });

  const items = [
    { title: "深度共情", desc: "理解客户的情感和焦虑" },
    { title: "信任关系", desc: "多年积累的信任资本" },
    { title: "复杂判断", desc: "非结构化问题的决策" },
    { title: "承担责任", desc: "对最终决策负责" },
    { title: "创意洞见", desc: "独特的人生经验智慧" }
  ];

  const cardW = 1.8;
  const startX = 0.5;
  const gap = 0.1;

  items.forEach((item, i) => {
    const x = startX + i * (cardW + gap);
    slide.addShape("rect", { x: x, y: 1.3, w: cardW, h: 3.5, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
    slide.addShape("ellipse", { x: x + (cardW - 0.7) / 2, y: 1.6, w: 0.7, h: 0.7, fill: { color: theme.accent } });
    slide.addText("X", { x: x + (cardW - 0.7) / 2, y: 1.6, w: 0.7, h: 0.7, fontSize: 24, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(item.title, { x: x + 0.1, y: 2.5, w: cardW - 0.2, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: theme.primary, align: "center", margin: 0 });
    slide.addText(item.desc, { x: x + 0.1, y: 3.1, w: cardW - 0.2, h: 1.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center", valign: "top", margin: 0 });
  });

  return slide;
}

const slideConfig = { theme, title: "AI时代顾问的不可替代性", description: "AI无法替代的五个方面：共情、信任、判断、责任、洞见", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };