// slide-062.js — AI for candidate generation only
const slideConfig = { type: 'content-text', index: 62 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P62  · AI 用法', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('让 AI 列选项，不让 AI 替你选', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // AI can / AI cannot
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('AI 能做的', {
    x: 0.7, y: 1.8, w: 4, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '围绕根因，列出 3-5 个候选方案', options: { bullet: true, breakLine: true } },
    { text: '为每个方案补充"业内常见做法"', options: { bullet: true, breakLine: true } },
    { text: '对方案的每个标准给出初步打分', options: { bullet: true, breakLine: true } },
    { text: '提示可能被忽略的边缘方案', options: { bullet: true } }
  ], {
    x: 0.7, y: 2.25, w: 4.1, h: 2.5,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 5
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('AI 给不了的', {
    x: 5.25, y: 1.8, w: 4, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText([
    { text: '决定哪个方案"必须满足"还是"越好越好"', options: { bullet: true, breakLine: true } },
    { text: '确定每个标准的权重', options: { bullet: true, breakLine: true } },
    { text: '判断某个方案是否会引发组织内部冲突', options: { bullet: true, breakLine: true } },
    { text: '承担"选错了"的责任', options: { bullet: true } }
  ], {
    x: 5.25, y: 2.25, w: 4.1, h: 2.5,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 5
  });

  s.addText('62', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };