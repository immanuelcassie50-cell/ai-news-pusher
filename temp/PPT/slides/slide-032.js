// slide-032.js — Revised problem statement (deeper example)
const slideConfig = { type: 'content-text', index: 32 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P32  · 另一个例子', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('把"我方感觉"换成"可观察现象"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Before/after cards
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.45, h: 0.05,
    fill: { color: theme.muted }, line: { color: theme.muted, width: 0 }
  });
  s.addText('改写前', {
    x: 0.7, y: 1.85, w: 4, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.muted, bold: true, margin: 0
  });
  s.addText('"客户越来越难伺候了，需求总变，团队疲于应付"', {
    x: 0.7, y: 2.3, w: 4.1, h: 1.0,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', margin: 0
  });
  s.addText('问题：', {
    x: 0.7, y: 3.4, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });
  s.addText([
    { text: '"难伺候"是主观感受', options: { bullet: true, breakLine: true } },
    { text: '"需求总变"无法衡量', options: { bullet: true, breakLine: true } },
    { text: '"疲于应付"无法验证', options: { bullet: true } }
  ], {
    x: 0.7, y: 3.7, w: 4.1, h: 1.1,
    fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 3
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.7, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.7, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('改写后', {
    x: 5.25, y: 1.85, w: 4, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('"如何在下一季度，把客户需求变更导致的工时浪费从 22% 降到 10% 以下？"', {
    x: 5.25, y: 2.3, w: 4.1, h: 1.0,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', margin: 0
  });
  s.addText('变化：', {
    x: 5.25, y: 3.4, w: 4, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, margin: 0
  });
  s.addText([
    { text: '主体由"客户"换为"我们"', options: { bullet: true, breakLine: true } },
    { text: '从感受换为可衡量指标', options: { bullet: true, breakLine: true } },
    { text: '有明确目标值与时间范围', options: { bullet: true } }
  ], {
    x: 5.25, y: 3.7, w: 4.1, h: 1.1,
    fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 3
  });

  s.addText('32', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };