// slide-036.js — Bridge to Module 2
const slideConfig = { type: 'content-text', index: 36 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P36  · 衔接 · 模块二', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('问题清楚了，再问一句', {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('—— 为什么会发生？', {
    x: 0.5, y: 1.6, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.85, w: 9, h: 1.55,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.85, w: 0.08, h: 1.55,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('请带着你的问题陈述进入下午场', {
    x: 0.85, y: 3.0, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '在模块二，我们要做两件事：', options: { breakLine: true, bold: true } },
    { text: '—— 不让"第一个想到的原因"直接成为结论', options: { breakLine: true } },
    { text: '—— 用证据把可能性逐一验证、排序', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '这一步，是"直觉"和"研究"的分水岭。', options: { italic: true, color: theme.light } }
  ], {
    x: 0.85, y: 3.4, w: 8.5, h: 1.0,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', paraSpaceAfter: 2
  });

  s.addText('36', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };