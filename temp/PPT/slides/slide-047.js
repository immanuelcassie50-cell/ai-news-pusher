// slide-047.js — Hypothesis verification table concept
const slideConfig = { type: 'content-text', index: 47 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P47  · 假设验证表', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('假设 → 证据 → 判断', {
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
  const strongOpt = (txt, color) => ({ text: txt, options: {
    color: color, fontSize: 10.5, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'left'
  } });

  s.addTable([
    [headerOpt(theme.accent, '假设'), headerOpt(theme.accent, '支持证据'), headerOpt(theme.accent, '反对证据'), headerOpt(theme.light, '判断')],
    [cellOpt('需求变更失控', true), cellOpt('3 个项目平均变更 4 次', true), cellOpt('按时项目变更 < 1 次', true), strongOpt('很可能是原因', theme.accent)],
    [cellOpt('团队人手不足', true), cellOpt('项目增加 30%', true), cellOpt('人手配置未变', true), strongOpt('排除', theme.muted)],
    [cellOpt('客户决策人变更', true), cellOpt('2 次客户接口人变更', true), cellOpt('按时项目接口人也稳定', true), strongOpt('中等可能', theme.light)]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [2.2, 2.4, 2.4, 2.0], rowH: 0.65,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('判断不是"对错"，而是"可能性等级 + 我有多大信心"。', {
    x: 0.5, y: 4.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  s.addText('建议用三档  ·  很可能 / 中等可能 / 排除', {
    x: 0.5, y: 4.6, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  s.addText('47', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };