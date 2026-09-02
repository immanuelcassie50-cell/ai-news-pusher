// slide-035.js — Module 1 output specification
const slideConfig = { type: 'content-text', index: 35 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P35  · 模块一产出', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('你带走的"问题陈述"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Spec card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.0,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.0,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('合格的"问题陈述"长什么样', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  s.addText([
    { text: '一段话能讲清楚，不必解释背景', options: { bullet: true, breakLine: true } },
    { text: '不暗含任何具体的人 / 部门作为原因', options: { bullet: true, breakLine: true } },
    { text: '不暗含一个我想要的解决方案', options: { bullet: true, breakLine: true } },
    { text: '可以被不同的人读到之后，理解的是同一件事', options: { bullet: true, breakLine: true } },
    { text: `是一个"可以问'为什么'"的句子，而不是一个判断`, options: { bullet: true, breakLine: true } },
    { text: '清楚边界：哪些事相关，哪些事明确不在范围内', options: { bullet: true } }
  ], {
    x: 0.85, y: 2.25, w: 8.5, h: 2.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 4
  });

  s.addText('→ 接下来，带着它进入模块二  ·  溯源针', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, bold: true, margin: 0
  });

  s.addText('35', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };