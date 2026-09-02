// slide-009.js — Module 0 divider
const slideConfig = { type: 'section-divider', index: 9 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  // Big module number
  s.addText('00', {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 160, fontFace: 'Georgia', color: theme.divider,
    bold: true, margin: 0
  });
  s.addText('MODULE 00', {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 6, margin: 0
  });

  // Right block: title + key question
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.6, y: 1.4, w: 0.08, h: 2.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('重新定义"难题"', {
    x: 4.85, y: 1.45, w: 5, h: 0.7,
    fontSize: 36, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('在 AI 时代，难题的边界已经变了', {
    x: 4.85, y: 2.2, w: 5, h: 0.45,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.accent, margin: 0
  });
  s.addText('我们今天要做的，是把这张新地图打开。', {
    x: 4.85, y: 2.75, w: 5, h: 0.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  // Time hint
  s.addText('时长  ·  约 75 分钟', {
    x: 4.85, y: 3.85, w: 5, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  s.addText('09', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };