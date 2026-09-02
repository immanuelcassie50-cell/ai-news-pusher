// slide-002.js — Opening question 1
const slideConfig = { type: 'content-text', index: 2 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  // Side label
  s.addText('P2  · 开场问题', {
    x: 0.5, y: 0.4, w: 3, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent,
    charSpacing: 4, margin: 0
  });
  s.addText('请在纸上写下', {
    x: 0.5, y: 0.85, w: 9, h: 0.45,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  // Big quote-like card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.45, w: 9, h: 3.2,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.45, w: 0.08, h: 3.2,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('过去一年里', {
    x: 0.95, y: 1.6, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, margin: 0
  });
  s.addText('你工作中有一件事，', {
    x: 0.95, y: 2.0, w: 8.5, h: 0.55,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('原来需要花很多时间和精力，', {
    x: 0.95, y: 2.55, w: 8.5, h: 0.55,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('但现在因为 AI，几乎不费力气了。', {
    x: 0.95, y: 3.1, w: 8.5, h: 0.55,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });

  s.addText('写一件，越具体越好。', {
    x: 0.95, y: 3.95, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  s.addText('时间  ·  3 分钟', {
    x: 0.5, y: 4.9, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });
  s.addText('02', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };