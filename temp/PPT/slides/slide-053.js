// slide-053.js — Module 3 divider
const slideConfig = { type: 'section-divider', index: 53 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('MODULE 03', {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 6, margin: 0
  });
  s.addText('03', {
    x: 0.5, y: 0.8, w: 3, h: 2,
    fontSize: 160, fontFace: 'Georgia', color: theme.divider, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.6, y: 0.95, w: 1.5, h: 0.3,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('南 · 罗盘方位', {
    x: 4.6, y: 0.95, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.6, y: 1.45, w: 0.08, h: 2.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('决断针', {
    x: 4.85, y: 1.5, w: 5, h: 0.7,
    fontSize: 44, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('该怎么选？', {
    x: 4.85, y: 2.25, w: 5, h: 0.5,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.accent, margin: 0
  });
  s.addText('从"差不多都能选"到"有依据地选一个"。', {
    x: 4.85, y: 2.85, w: 5, h: 0.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  s.addText('时长  ·  约 180 分钟', {
    x: 4.85, y: 3.95, w: 5, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  s.addText('53', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };