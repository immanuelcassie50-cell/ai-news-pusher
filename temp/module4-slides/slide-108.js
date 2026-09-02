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

  slide.addText("AI应用场景四：客户沟通", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const capabilities = ["自动生成客户报告", "撰写市场解读文章", "制作建议书PPT", "智能客服应答"];
  const cardW = 2.1;
  const startX = 0.5;
  const gap = 0.2;

  capabilities.forEach((cap, i) => {
    const x = startX + i * (cardW + gap);
    slide.addShape("rect", { x: x, y: 1.2, w: cardW, h: 2.2, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
    slide.addShape("rect", { x: x, y: 1.2, w: cardW, h: 0.1, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: x, y: 1.5, w: cardW, h: 0.6, fontSize: 36, fontFace: "Arial", bold: true, color: theme.accent, align: "center", margin: 0 });
    slide.addText(cap, { x: x + 0.1, y: 2.2, w: cardW - 0.2, h: 1, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle", margin: 0 });
  });

  slide.addShape("rect", { x: 0.5, y: 3.8, w: 9, h: 1.3, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText("推荐工具：内容生成平台", { x: 0.5, y: 3.8, w: 9, h: 1.3, fontSize: 24, fontFace: "Microsoft YaHei", color: "ffffff", align: "center", valign: "middle", margin: 0 });

  return slide;
}

const slideConfig = { theme, title: "AI应用场景四：客户沟通", description: "客户沟通AI应用场景的能力与工具", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };