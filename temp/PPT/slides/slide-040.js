// slide-040.js — Feature comparison table: concept
const slideConfig = { type: 'content-text', index: 40 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P40  · 特征对照表', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('找差异，而不是找证据', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 12, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
  } });
  const cellOpt = (txt, color) => ({ text: txt, options: {
    color: color || theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei',
    valign: 'middle', align: 'left'
  } });

  s.addTable([
    [headerOpt(theme.accent, '特征'), headerOpt(theme.light, '问题发生的案例'), headerOpt(theme.accent, '问题没发生的案例')],
    [cellOpt('团队规模', true), cellOpt('7 人', true), cellOpt('5 人', true)],
    [cellOpt('客户行业', true), cellOpt('制造业为主', true), cellOpt('服务业为主', true)],
    [cellOpt('接口人是否变更', true), cellOpt('是，3 次', true), cellOpt('否', true)],
    [cellOpt('需求评审机制', true), cellOpt('非正式', true), cellOpt('有书面模板', true)]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [2.7, 3.15, 3.15], rowH: 0.55,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('两类案例之间的"差别"，往往就是真正的原因。', {
    x: 0.5, y: 4.7, w: 9, h: 0.35,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('40', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };