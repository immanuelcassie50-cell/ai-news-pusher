const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 5, title: '聚焦的三个标准' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Title
  slide.addText("聚焦的三个标准", { x: 0.4, y: 0.3, w: 9.2, h: 0.6, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });
  // Three vertical cards
  const cardWidth = 2.8;
  const cardHeight = 3.8;
  const startX = 0.6;
  const gap = 0.3;
  const cards = [
    { num: "1", title: "价值大", desc: "这件事对核心目标的贡献有多大？\n\n能否带来决定性的突破或质变？" },
    { num: "2", title: "能落地", desc: "在现有资源条件下能否执行？\n\n是否有清晰的路径和里程碑？" },
    { num: "3", title: "可积累", desc: "这件事能否产生复利效应？\n\n今天的工作能否让明天更容易？" }
  ];
  cards.forEach((card, i) => {
    const x = startX + i * (cardWidth + gap);
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.1, w: cardWidth, h: cardHeight, fill: { color: theme.light }, rectRadius: 0.1 });
    // Number circle
    slide.addShape(pres.shapes.OVAL, { x: x + cardWidth/2 - 0.3, y: 1.3, w: 0.6, h: 0.6, fill: { color: theme.primary } });
    slide.addText(card.num, { x: x + cardWidth/2 - 0.3, y: 1.3, w: 0.6, h: 0.6, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    // Title
    slide.addText(card.title, { x: x, y: 2.1, w: cardWidth, h: 0.5, fontSize: 22, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "center", valign: "middle" });
    // Description
    slide.addText(card.desc, { x: x + 0.2, y: 2.7, w: cardWidth - 0.4, h: 2.0, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "left", valign: "top" });
  });
  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("5", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
