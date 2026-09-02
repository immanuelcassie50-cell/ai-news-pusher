// slide-068.js — Module 3 output + bridge
const slideConfig = { type: 'content-text', index: 68 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P68  · 模块三产出', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('"选定方案 + 选择陈述"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 2.4,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 2.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('交付物的样子', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '至少 3 个候选方案（带 AI 协助生成的痕迹）', options: { bullet: true, breakLine: true } },
    { text: '一套评估标准（带权重、明确两类）', options: { bullet: true, breakLine: true } },
    { text: '一张权衡表（每个方案在每个标准上的得分）', options: { bullet: true, breakLine: true } },
    { text: '一份选择陈述：选哪个 / 为什么 / 放弃了什么 / 复查时间', options: { bullet: true } }
  ], {
    x: 0.85, y: 2.25, w: 8.5, h: 1.75,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 4
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.25, w: 9, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 1 }
  });
  s.addText('→ 接下来，带着它进入模块四  ·  预警针', {
    x: 0.65, y: 4.25, w: 8.7, h: 0.55,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent,
    valign: 'middle', margin: 0
  });

  s.addText('68', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };