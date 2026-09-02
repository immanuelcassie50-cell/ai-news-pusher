// slide-159.js - Content: 记住这些关键认知
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 159, title: `记住这些关键认知` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`记住这些关键认知`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  const cards = [
    { title: `兜底规则不能少`, desc: `没有兜底，遇到边界情况AI会创造性地出错` },
    { title: `宁可上游冗余，不要下游不足`, desc: `多Skill协作里信息要完整` },
    { title: `先求能用，再求好用，最后离不开`, desc: `迭代是正常的，不是失败` }
  ];
  cards.forEach((card, i) => {
    const y = 1.0 + i * 1.45;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y, w: 9, h: 1.3, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 1.3, fill: { color: theme.accent } });
    slide.addText(card.title, { x: 0.8, y: y + 0.15, w: 8.5, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText(card.desc, { x: 0.8, y: y + 0.65, w: 8.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addText(`159`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };