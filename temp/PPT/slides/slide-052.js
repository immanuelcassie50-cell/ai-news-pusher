// slide-052.js — Module 2 output + bridge to Module 3
const slideConfig = { type: 'content-text', index: 52 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P52  · 模块二产出', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('"经过验证的根因清单"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 2.5,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 2.5,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('交付物的样子', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '已排序的 3-5 条最可能原因（带证据）', options: { bullet: true, breakLine: true } },
    { text: '每条用"流程 / 机制"层语言描述，不指名道姓', options: { bullet: true, breakLine: true } },
    { text: '明确写出"已排除的假设"以及排除依据', options: { bullet: true, breakLine: true } },
    { text: '标注证据强度（强 / 中 / 弱）与我的信心', options: { bullet: true } }
  ], {
    x: 0.85, y: 2.25, w: 8.5, h: 1.85,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 4
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.35, w: 9, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 1 }
  });
  s.addText('→ 接下来，带着它进入模块三  ·  决断针', {
    x: 0.65, y: 4.35, w: 8.7, h: 0.55,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent,
    valign: 'middle', margin: 0
  });

  s.addText('52', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };