// slide-042.js — Feature comparison: example 2
const slideConfig = { type: 'content-text', index: 42 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P42  · 范例 · 项目延期', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('客户交付延期的根因排查', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
  } });
  const cellOpt = (txt, color) => ({ text: txt, options: {
    color: color || theme.bg, fontSize: 10.5, fontFace: 'Microsoft YaHei',
    valign: 'middle', align: 'left'
  } });
  const diffOpt = (txt) => ({ text: txt, options: {
    color: theme.accent, fontSize: 10.5, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'left'
  } });

  s.addTable([
    [headerOpt(theme.accent, '特征维度'), headerOpt(theme.light, '延期的项目'), headerOpt(theme.accent, '按时交付的项目'), headerOpt(theme.muted, '差别')],
    [cellOpt('需求文档版本'), cellOpt('3 个版本未冻结', true), cellOpt('1 个版本冻结', true), diffOpt('变更控制')],
    [cellOpt('客户接口人'), cellOpt('2 次变更', true), cellOpt('全程不变', true), diffOpt('沟通连续性')],
    [cellOpt('里程碑复盘频次'), cellOpt('月度', true), cellOpt('双周', true), diffOpt('反馈频率')],
    [cellOpt('预算变更次数'), cellOpt('4 次', true), cellOpt('0-1 次', true), diffOpt('范围蔓延')],
    [cellOpt('风险登记更新'), cellOpt('未做', true), cellOpt('每周更新', true), diffOpt('预见机制')],
    [cellOpt('客户方高层介入'), cellOpt('从未介入', true), cellOpt('每里程碑 1 次', true), diffOpt('升级通道')]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [1.8, 2.4, 2.4, 2.4], rowH: 0.42,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('42', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };