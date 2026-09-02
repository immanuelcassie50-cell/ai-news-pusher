// slide-064.js — Decision trade-off scoring
const slideConfig = { type: 'content-text', index: 64 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P64  · 权衡表 · 完整', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('方案对比 · 评估标准 · 加权', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const headerOptL = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 10, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
  } });
  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 10, fontFace: 'Microsoft YaHei', align: 'center', valign: 'middle'
  } });
  const cellOpt = (txt) => ({ text: txt, options: {
    color: theme.bg, fontSize: 10, fontFace: 'Microsoft YaHei',
    valign: 'middle', align: 'center'
  } });
  const weightOpt = (txt) => ({ text: txt, options: {
    color: theme.accent, fontSize: 10, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'center',
    fill: { color: theme.panel }
  } });
  const dimOpt = (txt) => ({ text: txt, options: {
    color: theme.muted, fontSize: 10, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'left',
    fill: { color: theme.panel }
  } });

  s.addTable([
    [headerOptL(theme.accent, '评估标准'), headerOpt(theme.accent, '权重'), headerOpt(theme.light, 'A 加强审批'), headerOpt(theme.light, 'B 引入变更费'), headerOpt(theme.light, 'C 双轨交付')],
    [dimOpt('不破坏现有客户体验（必须）'), weightOpt('×'), cellOpt('✓'), cellOpt('⚠'), cellOpt('✓')],
    [dimOpt('不引发销售团队反弹（必须）'), weightOpt('×'), cellOpt('✓'), cellOpt('✗'), cellOpt('✓')],
    [dimOpt('对根因的针对性（30%）'), weightOpt('30%'), cellOpt('7'), cellOpt('9'), cellOpt('7')],
    [dimOpt('实施成本可控（25%）'), weightOpt('25%'), cellOpt('9'), cellOpt('6'), cellOpt('5')],
    [dimOpt('可持续迭代（25%）'), weightOpt('25%'), cellOpt('6'), cellOpt('7'), cellOpt('8')],
    [dimOpt('组织能力沉淀（20%）'), weightOpt('20%'), cellOpt('5'), cellOpt('6'), cellOpt('9')],
    [{ text: '加权总分', options: { fill: { color: theme.panel }, color: theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'left' } },
     { text: '100%', options: { fill: { color: theme.panel }, color: theme.muted, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } },
     { text: '6.5', options: { fill: { color: theme.panel }, color: theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } },
     { text: '6.0（淘汰）', options: { fill: { color: theme.panel }, color: theme.muted, fontSize: 10, fontFace: 'Microsoft YaHei', italic: true, valign: 'middle', align: 'center' } },
     { text: '7.3', options: { fill: { color: theme.accent }, color: theme.primary, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } }
    ]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [3.0, 1.0, 1.65, 1.7, 1.65], rowH: 0.42,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('B 方案被销售反弹这条"必须满足"标准否决，不进入最终选择。', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.light, italic: true, margin: 0
  });

  s.addText('64', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };