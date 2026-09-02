// slide-048.js — Hypothesis verification: full demo
const slideConfig = { type: 'content-text', index: 48 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P48  · 完整示范', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('从 12 条假设，验证到 3 条', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 10.5, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
  } });
  const cellOpt = (txt, color) => ({ text: txt, options: {
    color: color || theme.bg, fontSize: 9.5, fontFace: 'Microsoft YaHei',
    valign: 'middle', align: 'left'
  } });
  const lvlOpt = (txt, color) => ({ text: txt, options: {
    color: color, fontSize: 9.5, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'center',
    fill: { color: theme.panel }
  } });

  s.addTable([
    [headerOpt(theme.accent, '假设'), headerOpt(theme.accent, '类别'), headerOpt(theme.accent, '关键证据'), headerOpt(theme.muted, '等级')],
    [cellOpt('需求变更失控', true), cellOpt('流程', true), cellOpt('3 个延期项目平均变更 4 次；按时项目 < 1 次', true), lvlOpt('很可能', theme.accent)],
    [cellOpt('销售承诺过满', true), cellOpt('流程', true), cellOpt('销售口径与产能评估脱钩，无双向确认', true), lvlOpt('很可能', theme.accent)],
    [cellOpt('客户接口频繁变更', true), cellOpt('人', true), cellOpt('2 次接口人变更未做项目交接', true), lvlOpt('中等', theme.light)],
    [cellOpt('项目预算控制弱', true), cellOpt('流程', true), cellOpt('范围蔓延 4 次未触发升级', true), lvlOpt('中等', theme.light)],
    [cellOpt('团队人手不足', true), cellOpt('人', true), cellOpt('本期人手配置与上期相同', true), lvlOpt('排除', theme.muted)],
    [cellOpt('技术方案选型失误', true), cellOpt('系统', true), cellOpt('技术评审通过，复盘未发现共性', true), lvlOpt('排除', theme.muted)]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [2.2, 1.2, 3.8, 1.8], rowH: 0.45,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('最终判断  ·  根因是"流程层面的需求变更与销售承诺机制缺失"，不是具体某个人的问题。', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, bold: true, margin: 0
  });

  s.addText('48', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };