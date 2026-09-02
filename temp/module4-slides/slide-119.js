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

  slide.addText("演练评分标准", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const criteria = [
    { name: "客户画像准确性", score: 20 },
    { name: "配置逻辑合理性", score: 30 },
    { name: "产品匹配恰当性", score: 20 },
    { name: "风险提示完整性", score: 15 },
    { name: "呈现表达专业性", score: 15 }
  ];

  const barStartX = 0.5;
  const barY = 1.2;
  const barH = 0.6;
  const barGap = 0.15;
  const maxBarW = 6.0;

  criteria.forEach((c, i) => {
    const y = barY + i * (barH + barGap);
    const barW = (c.score / 100) * maxBarW * 1.5;

    slide.addText(c.name, { x: 0.5, y: y, w: 2.5, h: barH, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, valign: "middle", margin: 0 });
    slide.addShape("rect", { x: 3.2, y: y + 0.1, w: maxBarW, h: barH - 0.2, fill: { color: theme.light }, rectRadius: 0.08 });
    slide.addShape("rect", { x: 3.2, y: y + 0.1, w: Math.min(barW, maxBarW), h: barH - 0.2, fill: { color: i < 2 ? theme.accent : theme.primary }, rectRadius: 0.08 });
    slide.addText(c.score + "分", { x: 9.3, y: y, w: 0.7, h: barH, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: theme.accent, valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 3.2, y: 4.7, w: 6.5, h: 0.6, fill: { color: theme.primary }, rectRadius: 0.08 });
  slide.addText("总分：100分", { x: 3.2, y: 4.7, w: 6.5, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "演练评分标准", description: "演练评分的五个维度及分值", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };