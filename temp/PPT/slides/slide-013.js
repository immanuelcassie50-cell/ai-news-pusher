// slide-013.js — Quote-style reflection
const slideConfig = { type: 'content-text', index: 13 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P13  · 一个反直觉的判断', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });

  // Big quotation marks
  s.addText('"', {
    x: 0.5, y: 1.1, w: 1, h: 1,
    fontSize: 120, fontFace: 'Georgia', color: theme.accent, bold: true, margin: 0
  });

  s.addText('在 AI 时代，', {
    x: 1.4, y: 1.55, w: 8, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('我们的核心难题，', {
    x: 1.4, y: 2.25, w: 8, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('不是没有答案，', {
    x: 1.4, y: 2.95, w: 8, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText('而是答案太多，谁来选、谁来负责。', {
    x: 1.4, y: 3.65, w: 8, h: 0.7,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 0.3, h: 0.04,
    fill: { color: theme.divider }, line: { color: theme.divider, width: 0 }
  });
  s.addText('—— 本课程底层假设', {
    x: 0.9, y: 4.75, w: 6, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  s.addText('13', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };