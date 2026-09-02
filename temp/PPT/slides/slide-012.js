// slide-012.js — AI is redrawing the boundary
const slideConfig = { type: 'content-text', index: 12 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P12  · 边界正在被重画', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('AI 让很多"难题"退场，', {
    x: 0.5, y: 0.85, w: 9, h: 0.65,
    fontSize: 30, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('又让另一些变成新的难题。', {
    x: 0.5, y: 1.5, w: 9, h: 0.65,
    fontSize: 30, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  // Stat callout 1
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.55, w: 4.45, h: 1.95,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addText('约 70%', {
    x: 0.5, y: 2.65, w: 4.45, h: 1.0,
    fontSize: 64, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', margin: 0
  });
  s.addText('过去用于"收集信息 + 罗列选项"的时间', {
    x: 0.5, y: 3.7, w: 4.45, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
    align: 'center', margin: 0
  });
  s.addText('AI 大幅压缩，甚至归零', {
    x: 0.5, y: 4.05, w: 4.45, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted,
    italic: true, align: 'center', margin: 0
  });

  // Stat callout 2
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 2.55, w: 4.45, h: 1.95,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addText('约 30%', {
    x: 5.05, y: 2.65, w: 4.45, h: 1.0,
    fontSize: 64, fontFace: 'Georgia', color: theme.light, bold: true,
    align: 'center', margin: 0
  });
  s.addText('关于取舍、责任、判断的工作', {
    x: 5.05, y: 3.7, w: 4.45, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
    align: 'center', margin: 0
  });
  s.addText('从未更轻松，反而被凸显出来', {
    x: 5.05, y: 4.05, w: 4.45, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted,
    italic: true, align: 'center', margin: 0
  });

  s.addText('讲师注：比例不要求精确记忆，关键在量级感。', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  s.addText('12', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };