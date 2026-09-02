// slide-038.js — Symptom vs root cause
const slideConfig = { type: 'content-text', index: 38 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P38  · 两种"原因"', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('症状 ≠ 根本原因', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.muted }, line: { color: theme.muted, width: 0 }
  });
  s.addText('症状', {
    x: 0.7, y: 1.8, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.muted, bold: true, margin: 0
  });
  s.addText('可以直接观察到的现象', {
    x: 0.7, y: 2.2, w: 4.1, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText([
    { text: '"项目延期了 14 天"', options: { bullet: true, breakLine: true } },
    { text: '"客户投诉了 3 次"', options: { bullet: true, breakLine: true } },
    { text: '"本月新签客户下降了 18%"', options: { bullet: true } }
  ], {
    x: 0.7, y: 2.6, w: 4.1, h: 1.0,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 4
  });
  s.addText('如果直接针对症状出手，往往是"救火"。', {
    x: 0.7, y: 3.85, w: 4.1, h: 0.4,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });
  s.addText('例：加班救火 → 疲于奔命 → 再次延期', {
    x: 0.7, y: 4.25, w: 4.1, h: 0.4,
    fontSize: 10.5, fontFace: 'Microsoft YaHei', color: theme.light, italic: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('根本原因', {
    x: 5.25, y: 1.8, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('系统性 / 机制层面的原因', {
    x: 5.25, y: 2.2, w: 4.1, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText([
    { text: '"需求变更缺少正式评审机制"', options: { bullet: true, breakLine: true } },
    { text: '"客户接口人变更未及时同步"', options: { bullet: true, breakLine: true } },
    { text: '"销售承诺的交付时间与产能脱钩"', options: { bullet: true } }
  ], {
    x: 5.25, y: 2.6, w: 4.1, h: 1.0,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 4
  });
  s.addText('针对根因出手，才能让症状不再反复。', {
    x: 5.25, y: 3.85, w: 4.1, h: 0.4,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });
  s.addText('例：建立需求变更评审 → 减少无效返工', {
    x: 5.25, y: 4.25, w: 4.1, h: 0.4,
    fontSize: 10.5, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('38', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };