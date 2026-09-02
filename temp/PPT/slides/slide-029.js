// slide-029.js — AI prompt example
const slideConfig = { type: 'content-text', index: 29 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P29  · 提示词示例', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一段可以立刻用的提示词', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Prompt box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 3.1,
    fill: { color: theme.panel }, line: { color: theme.accent, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 0.08, h: 3.1,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('PROMPT', {
    x: 0.85, y: 1.7, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 6, bold: true, margin: 0
  });
  s.addText([
    { text: '"我正在处理以下问题：（在这里粘贴你的问题陈述）。', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '请你帮我梳理：', options: { breakLine: true, bold: true, color: theme.accent } },
    { text: '1) 这类问题常见的时间线是怎样的？哪些节点最容易出问题？', options: { breakLine: true } },
    { text: '2) 一般会涉及哪些角色或部门？各自的常见立场是什么？', options: { breakLine: true } },
    { text: '3) 在类似情境中，常见的原因解释有哪些？', options: { breakLine: true } },
    { text: '4) 有哪些容易被忽略的边缘情况？', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '请不要直接给结论，我只想看到结构化的可能性清单。"', options: { italic: true, color: theme.light } }
  ], {
    x: 0.85, y: 2.05, w: 8.5, h: 2.55,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', paraSpaceAfter: 2
  });

  s.addText('29', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };