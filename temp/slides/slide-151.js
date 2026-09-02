// slide-151.js - Content: 产出物全览（1/2）
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 151, title: `产出物全览（1/2）` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`产出物全览（1/2）`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  const colWidths = [4.0, 3.0, 2.0];
  const startX = [0.5, 4.5, 7.5];
  const startY = 0.95;
  const rowH = 0.65;
  const headers = [`产出物`, `来自`, "完成情况`];
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: startY, w: 9, h: rowH, fill: { color: theme.primary } });
  headers.forEach((h, i) => {
    slide.addText(h, { x: startX[i], y: startY, w: colWidths[i], h: rowH, fontSize: 11, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  });
  const rows = [
    { item: `岗位画像表`, from: `第一天上午·练习一`, status: `☐` },
    { item: `数字员工设计文档（2份）`, from: `第一天上午·练习二`, status: `☐` },
    { item: `业务规则表（2份，每份>=8条）`, from: `第一天下午·练习四`, status: `☐` },
    { item: `Skill初稿（2个，经第一轮迭代）`, from: `第一天下午·练习五`, status: `☐` },
    { item: `知识库初版 + 对比测试记录`, from: `第一天下午·练习六`, status: `☐` },
    { item: `2个Skill正式验收记录`, from: `第二天上午·练习七`, status: `☐` }
  ];
  rows.forEach((row, i) => {
    const y = startY + rowH * (i + 1);
    const bgColor = i % 2 === 0 ? theme.light : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9, h: rowH, fill: { color: bgColor } });
    slide.addText(row.item, { x: startX[0], y: y, w: colWidths[0], h: rowH, fontSize: 10, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `left`, valign: `middle`, margin: [0, 0, 0, 8] });
    slide.addText(row.from, { x: startX[1], y: y, w: colWidths[1], h: rowH, fontSize: 10, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `center`, valign: `middle` });
    slide.addText(row.status, { x: startX[2], y: y, w: colWidths[2], h: rowH, fontSize: 14, fontFace: `Arial`, color: theme.accent, align: `center`, valign: `middle` });
  });
  slide.addText(`151`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };