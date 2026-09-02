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

  // Top accent bar
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.083, fill: { color: theme.accent } });

  // Title
  slide.addText("AI在财富管理的四个应用场景", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  // Four scenario cards in 2x2 grid
  const scenarios = [
    { number: "01", title: "客户分析", items: ["画像分析", "需求挖掘", "风险评估"] },
    { number: "02", title: "方案生成", items: ["资产配置建议", "产品匹配", "组合优化"] },
    { number: "03", title: "市场研究", items: ["数据分析", "趋势判断", "机会识别"] },
    { number: "04", title: "客户沟通", items: ["文案生成", "报告撰写", "定期更新"] }
  ];

  const cardW = 4.25;
  const cardH = 1.85;
  const startX = 0.5;
  const startY = 1.1;
  const gapX = 0.5;
  const gapY = 0.35;

  scenarios.forEach((scenario, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    slide.addShape("rect", { x: x, y: y, w: cardW, h: cardH, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
    slide.addShape("rect", { x: x, y: y, w: 0.083, h: cardH, fill: { color: theme.accent } });
    slide.addShape("ellipse", { x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5, fill: { color: theme.primary } });
    slide.addText(scenario.number, { x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5, fontSize: 14, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(scenario.title, { x: x + 0.9, y: y + 0.2, w: 3, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", bold: true, color: theme.primary, valign: "middle", margin: 0 });
    slide.addText(scenario.items.join(" · "), { x: x + 0.25, y: y + 0.85, w: cardW - 0.5, h: 0.85, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top", margin: 0 });
  });

  return slide;
}

const slideConfig = { theme, title: "AI在财富管理的四个应用场景", description: "客户分析、方案生成、市场研究、客户沟通四大场景", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };