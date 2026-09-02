// slide-041.js — Feature comparison: example 1
const slideConfig = { type: 'content-text', index: 41 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P41  · 范例 · 销售下降', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('新签客户下降的根因排查', {
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
    [headerOpt(theme.accent, '特征维度'), headerOpt(theme.light, '下降的项目'), headerOpt(theme.accent, '未下降的项目'), headerOpt(theme.muted, '差别')],
    [cellOpt('销售跟进入数'), cellOpt('1 人', true), cellOpt('2 人', true), diffOpt('投入差异')],
    [cellOpt('客户来源'), cellOpt('80% 来自老客户转介', true), cellOpt('50% 转介 + 50% 新渠道', true), diffOpt('来源结构')],
    [cellOpt('决策周期'), cellOpt('3 个月以上', true), cellOpt('4-8 周', true), diffOpt('客户成熟度')],
    [cellOpt('决策人层级'), cellOpt('一把手决定', true), cellOpt('部门负责人决定', true), diffOpt('决策杠杆')],
    [cellOpt('销售话术版本'), cellOpt('沿用 2023 版', true), cellOpt('2025 升级版', true), diffOpt('内容老化')],
    [cellOpt('价格策略'), cellOpt('标准报价', true), cellOpt('分级折扣', true), diffOpt('灵活度')],
    [cellOpt('签约前试点'), cellOpt('无', true), cellOpt('60% 有', true), diffOpt('降低门槛')]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [1.8, 2.4, 2.4, 2.4], rowH: 0.38,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('41', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };