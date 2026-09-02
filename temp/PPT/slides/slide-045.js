// slide-045.js — AI assisted hypothesis generation
const slideConfig = { type: 'content-text', index: 45 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P45  · AI 协同 · 假设生成', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('让 AI 帮你列出可能原因', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Two columns: AI can / AI limitation
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('AI 能做', {
    x: 0.7, y: 1.8, w: 4, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '列出 10-20 个可能原因', options: { bullet: true, breakLine: true } },
    { text: '覆盖常见与不常见的视角', options: { bullet: true, breakLine: true } },
    { text: '提供相似情境下的常见解释', options: { bullet: true, breakLine: true } },
    { text: '按类别分组（人 / 流程 / 系统）', options: { bullet: true } }
  ], {
    x: 0.7, y: 2.25, w: 4.1, h: 2.5,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 6
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('AI 给不了', {
    x: 5.25, y: 1.8, w: 4, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText([
    { text: '判断"哪个最可能"——这要靠证据', options: { bullet: true, breakLine: true } },
    { text: '知道"我们公司特有的原因"', options: { bullet: true, breakLine: true } },
    { text: '替你排除不需要的选项', options: { bullet: true, breakLine: true } },
    { text: '承担结论被推翻时的责任', options: { bullet: true } }
  ], {
    x: 5.25, y: 2.25, w: 4.1, h: 2.5,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 6
  });

  s.addText('AI 的清单是"撒网"，人是"收网"。', {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('45', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };