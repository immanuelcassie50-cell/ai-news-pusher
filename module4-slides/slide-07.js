const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 7, title: '标准二：能落地' };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.primary } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.primary } });
  slide.addText("7", { x: 9.2, y: 0.2, w: 0.6, h: 0.5, fontSize: 14, fontFace: "Arial", color: theme.accent, align: "center" });
  slide.addText("标准二：能落地", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addText("问自己：这件事，我能调动足够的资源来推动吗？", { x: 0.5, y: 1.1, w: 9, h: 0.5, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary });
  const cardW = 2.8, cardH = 2.8, startX = 0.65, gap = 0.35, cardY = 1.9;
  const cards = [
    { title: "资源", icon: "?", questions: ["时间资源足够吗？", "资金预算够吗？", "外部支持有吗？"] },
    { title: "能力", icon: "?", questions: ["核心能力匹配吗？", "团队擅长吗？", "技术储备够吗？"] },
    { title: "条件", icon: "?", questions: ["外部环境允许吗？", "时机成熟吗？", "政策风险可控吗？"] }
  ];
  cards.forEach((card, i) => {
    const cx = startX + i * (cardW + gap);
    slide.addShape(pres.shapes.RECTANGLE, { x: cx, y: cardY, w: cardW, h: cardH, fill: { color: theme.light }, line: { color: theme.accent, width: 1 } });
    slide.addShape(pres.shapes.OVAL, { x: cx + cardW/2 - 0.35, y: cardY + 0.25, w: 0.7, h: 0.7, fill: { color: theme.primary } });
    slide.addText(card.icon, { x: cx + cardW/2 - 0.35, y: cardY + 0.25, w: 0.7, h: 0.7, fontSize: 24, fontFace: "Arial", color: "FFFFFF", align: "center", valign: "middle" });
    slide.addText(card.title, { x: cx, y: cardY + 1.1, w: cardW, h: 0.5, fontSize: 20, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    card.questions.forEach((q, qi) => {
      slide.addText("• " + q, { x: cx + 0.2, y: cardY + 1.65 + qi * 0.4, w: cardW - 0.3, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
    });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9, h: 0.45, fill: { color: theme.primary, transparency: 10 } });
  slide.addText("核心：不是"想不想做"，而是"能不能做"", { x: 0.6, y: 5.05, w: 8.8, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = 'LAYOUT_16x9'; const t = { primary: "C41E3A", secondary: "4A4A4A", accent: "8C8C8C", light: "D4D4D4", bg: "FFFFFF" }; createSlide(pres, t); pres.writeFile({ fileName: "slide-07-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
