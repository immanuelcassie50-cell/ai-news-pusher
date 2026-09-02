// slide-044.js — Why intuition anchoring matters
const slideConfig = { type: 'content-text', index: 44 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P44  · 回收直觉', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('差别出现在哪一步', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.1,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('三种典型情况', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '直觉对了 → ', options: { bold: true, color: theme.accent } },
    { text: '说明你对这个领域有足够的经验积累。继续保持"先验证再下结论"的习惯。', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '直觉不完全对 → ', options: { bold: true, color: theme.light } },
    { text: '你的方向有部分正确，但缺了关键变量。验证帮我们补上了那块。', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '直觉完全错了 → ', options: { bold: true, color: theme.light } },
    { text: '这正是溯源针的价值。验证会让我们意识到，有一个我们根本没想过的变量在起作用。', options: { breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '无论哪种情况，都不是"对错"问题，是"完整度"问题。', options: { italic: true, color: theme.muted } }
  ], {
    x: 0.85, y: 2.25, w: 8.5, h: 2.45,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', paraSpaceAfter: 2
  });

  s.addText('44', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };