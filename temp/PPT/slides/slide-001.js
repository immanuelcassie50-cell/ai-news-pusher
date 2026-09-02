// slide-001.js — COVER
const slideConfig = { type: 'cover', index: 1, title: '智策罗盘工作坊' };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  // Top thin gold rule
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.55, w: 1.4, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('WISDOM COMPASS WORKSHOP', {
    x: 0.6, y: 0.65, w: 6, h: 0.3,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent,
    charSpacing: 8, bold: true, margin: 0
  });

  // Massive Chinese title
  s.addText('系统思考与人机协同决策', {
    x: 0.6, y: 1.55, w: 9, h: 1.1,
    fontSize: 56, fontFace: 'Microsoft YaHei', color: theme.bg,
    bold: true, margin: 0
  });
  s.addText('—— 智策罗盘工作坊', {
    x: 0.6, y: 2.65, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.accent,
    margin: 0
  });

  // Subtitle / promise
  s.addText('在 AI 时代，把模糊难题变成可执行的决策链路', {
    x: 0.6, y: 3.6, w: 9, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.muted,
    margin: 0
  });

  // Bottom rule + meta
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.7, w: 8.8, h: 0.015,
    fill: { color: theme.divider }, line: { color: theme.divider, width: 0 }
  });
  s.addText('两天工作坊 · 内训授权版', {
    x: 0.6, y: 4.85, w: 5, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('讲师 · 罗宏伟', {
    x: 6.6, y: 4.85, w: 3, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.muted,
    align: 'right', margin: 0
  });
}
module.exports = { createSlide, slideConfig };