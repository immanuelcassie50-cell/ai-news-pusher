// slide-028.js — AI assisted info sorting: introduce
const slideConfig = { type: 'content-text', index: 28 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P28  · AI 协同 · 引入', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('让 AI 帮你把背景理一遍', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Left: what AI can do
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('这一步交给 AI', {
    x: 0.7, y: 1.85, w: 4, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '列出可能的相关时间线', options: { bullet: true, breakLine: true } },
    { text: '整理涉及的角色与部门', options: { bullet: true, breakLine: true } },
    { text: '梳理类似问题在行业内的常见解释', options: { bullet: true, breakLine: true } },
    { text: '提示可能被忽略的边缘情况', options: { bullet: true } }
  ], {
    x: 0.7, y: 2.3, w: 4.1, h: 2.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 6
  });

  // Right: what you must verify
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.7, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.7, w: 4.45, h: 0.05,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('这一步自己做', {
    x: 5.25, y: 1.85, w: 4, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText([
    { text: '判定哪些信息和你公司实际情况无关', options: { bullet: true, breakLine: true } },
    { text: '补充只有团队内部才知道的关键背景', options: { bullet: true, breakLine: true } },
    { text: '质疑 AI 给出的"看起来都对"的解释', options: { bullet: true, breakLine: true } },
    { text: '把 AI 列出的清单，缩减到你能用上的 3-5 条', options: { bullet: true } }
  ], {
    x: 5.25, y: 2.3, w: 4.1, h: 2.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 6
  });

  s.addText('28', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };