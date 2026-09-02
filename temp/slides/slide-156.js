// slide-156.js - Content: 核心方法论
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 156, title: `核心方法论` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`核心方法论`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  const items = [
    { title: `从工具到员工`, desc: `不是你每次输入，而是AI按角色和规则执行` },
    { title: `从规则到知识库`, desc: `规则管怎么做，知识库管凭什么做` },
    { title: `从个人到组织`, desc: `个人工具->团队资产，需要推广和管理机制` }
  ];
  items.forEach((item, i) => {
    const y = 1.0 + i * 1.45;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y, w: 9, h: 1.3, fill: { color: theme.light }, rectRadius: 0.1 });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 1.3, fill: { color: theme.accent } });
    slide.addText(item.title, { x: 0.8, y: y + 0.15, w: 8.5, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(item.desc, { x: 0.8, y: y + 0.65, w: 8.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addText(`156`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };