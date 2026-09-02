// slide-155.js - Content: 四样成果回顾
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 155, title: `四样成果回顾` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`四样成果回顾`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  const cards = [
    { num: `01`, title: `数字员工蓝图`, desc: `你这个岗位的数字员工规划图` },
    { num: `02`, title: `2个以上的专属Skill`, desc: `用真实数据跑过两轮迭代` },
    { num: `03`, title: `知识库资产`, desc: `业务经验的沉淀` },
    { num: `04`, title: `团队部署计划`, desc: `含定时任务配置、推广方案、30天行动清单` }
  ];
  cards.forEach((card, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.0 + row * 2.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x, y: y, w: 4.4, h: 1.9, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.15, y: y + 0.15, w: 0.7, h: 0.7, fill: { color: theme.accent }, rectRadius: 0.1 });
    slide.addText(card.num, { x: x + 0.15, y: y + 0.15, w: 0.7, h: 0.7, fontSize: 18, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    slide.addText(card.title, { x: x + 1.0, y: y + 0.2, w: 3.2, h: 0.5, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, valign: `middle` });
    slide.addText(card.desc, { x: x + 0.15, y: y + 0.95, w: 4.1, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addText(`155`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };