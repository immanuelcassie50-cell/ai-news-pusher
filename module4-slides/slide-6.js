const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 6, title: '标准一：价值大' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Title
  slide.addText("标准一：价值大", { x: 0.4, y: 0.3, w: 9.2, h: 0.6, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true, align: "left", valign: "middle" });
  // Subtitle
  slide.addText("这件事对核心目标的贡献有多大？", { x: 0.4, y: 0.95, w: 9.2, h: 0.4, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "left", valign: "middle" });
  // Question cards
  const qCards = [
    { q: "不做这件事，后果有多严重？", hint: "可量化的损失是什么？" },
    { q: "做好这件事，能带来什么质变？", hint: "突破点在哪里？" },
    { q: "这件事与核心目标的关联度？", hint: "相关性 1-10 打几分？" }
  ];
  const cardWidth = 2.9;
  const cardHeight = 2.0;
  const startX = 0.5;
  const gap = 0.25;
  qCards.forEach((card, i) => {
    const x = startX + i * (cardWidth + gap);
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.5, w: cardWidth, h: cardHeight, fill: { color: theme.light }, rectRadius: 0.1 });
    // Question mark
    slide.addText("?", { x: x + 0.15, y: 1.6, w: 0.5, h: 0.5, fontSize: 28, fontFace: "Arial", color: theme.primary, bold: true, align: "center", valign: "middle" });
    // Question text
    slide.addText(card.q, { x: x + 0.15, y: 2.1, w: cardWidth - 0.3, h: 0.7, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, bold: false, align: "left", valign: "top" });
    // Hint text
    slide.addText(card.hint, { x: x + 0.15, y: 2.85, w: cardWidth - 0.3, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: false, align: "left", valign: "top", italic: true });
  });
  // Key insight box at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 3.8, w: 9.2, h: 1.0, fill: { color: theme.primary }, rectRadius: 0.1 });
  slide.addText([
    { text: "判断标准：", options: { bold: true } },
    { text: "如果只能选一件事，这件事必须做且做好了能带来决定性突破" }
  ], { x: 0.6, y: 3.8, w: 8.8, h: 1.0, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: false, align: "center", valign: "middle" });
  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("6", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
module.exports = { createSlide, slideConfig };
