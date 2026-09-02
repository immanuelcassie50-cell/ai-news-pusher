// slide-020.js — Module 0 output / handoff to Module 1
const slideConfig = { type: 'content-text', index: 20 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P20  · 模块零产出', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('你的"待研究真实问题"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 9, h: 2.6,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 0.08, h: 2.6,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('筛选标准', {
    x: 0.85, y: 1.85, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('这个问题，是你有一定决策权或影响力，并且在未来 1–3 个月内需要采取行动的吗？', {
    x: 0.85, y: 2.25, w: 8.5, h: 0.55,
    fontSize: 15, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addText('如果答案为否：', {
    x: 0.85, y: 2.95, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, margin: 0
  });
  s.addText('换一个问题，或者把范围缩小到自己能影响的部分。', {
    x: 0.85, y: 3.25, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('例如：把"公司战略方向不清晰"缩小为"我所在团队下一季度的工作重点该如何定"。', {
    x: 0.85, y: 3.6, w: 8.5, h: 0.55,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, valign: 'top', margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 1 }
  });
  s.addText('→ 这个真实问题，将成为模块一至模块四的练习素材。', {
    x: 0.65, y: 4.5, w: 8.7, h: 0.55,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent,
    valign: 'middle', margin: 0
  });

  s.addText('20', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };