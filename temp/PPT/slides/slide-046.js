// slide-046.js — AI hypothesis prompt example
const slideConfig = { type: 'content-text', index: 46 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P46  · 提示词示例', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一段可以立刻用的提示词', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

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
    { text: '"我现在要分析以下问题的可能原因：（粘贴你的问题陈述）。', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '请你扮演一名有经验的顾问，请帮我列出 12-15 个可能原因，分类如下：', options: { breakLine: true, bold: true, color: theme.accent } },
    { text: '—— 人（动机、能力、沟通、协作）', options: { breakLine: true } },
    { text: '—— 流程（机制、节奏、衔接）', options: { breakLine: true } },
    { text: '—— 系统（工具、数据、环境）', options: { breakLine: true } },
    { text: '—— 外部（市场、客户、政策）', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '请不要排序，也不要给建议。我会自己决定哪些值得验证。"', options: { italic: true, color: theme.light } }
  ], {
    x: 0.85, y: 2.05, w: 8.5, h: 2.55,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', paraSpaceAfter: 2
  });

  s.addText('46', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };