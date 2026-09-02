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

  slide.addText("人工精修的五个细节", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, margin: 0
  });

  const details = [
    { num: "1", text: "数字要核对\nAI可能虚构数据" },
    { num: "2", text: "产品要验证\n确认产品是否在售" },
    { num: "3", text: "风险要强调\n不要只报喜不报忧" },
    { num: "4", text: "话术要调整\n符合个人风格" },
    { num: "5", text: "情感要投入\n加入人文关怀" }
  ];

  const cardW = 1.72;
  const startX = 0.5;
  const gap = 0.15;

  details.forEach((detail, i) => {
    const x = startX + i * (cardW + gap);
    slide.addShape("rect", { x: x, y: 1.2, w: cardW, h: 3.5, fill: { color: "ffffff" }, rectRadius: 0.1, line: { color: theme.light, width: 1 } });
    slide.addShape("ellipse", { x: x + (cardW - 0.6) / 2, y: 1.5, w: 0.6, h: 0.6, fill: { color: theme.accent } });
    slide.addText(detail.num, { x: x + (cardW - 0.6) / 2, y: 1.5, w: 0.6, h: 0.6, fontSize: 20, fontFace: "Arial", bold: true, color: "ffffff", align: "center", valign: "middle", margin: 0 });
    slide.addText(detail.text, { x: x + 0.1, y: 2.3, w: cardW - 0.2, h: 2.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "top", margin: 0 });
  });

  return slide;
}

const slideConfig = { theme, title: "人工精修的五个细节", description: "数字核对、产品验证、风险强调、话术调整、情感投入", dimensions: { width: 10, height: 5.625 } };
module.exports = { createSlide, slideConfig };