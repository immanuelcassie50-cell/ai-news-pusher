// slide-059.js — Weight & trade-off table
const slideConfig = { type: 'content-text', index: 59 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P59  · 权衡表范例', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('加权打分 · 一张完整的表', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 10, fontFace: 'Microsoft YaHei', align: 'center', valign: 'middle'
  } });
  const headerOptL = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 10, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
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
    [headerOptL(theme.accent, '评估标准'), headerOpt(theme.accent, '权重'), headerOpt(theme.light, 'A 维持现状'), headerOpt(theme.light, 'B 立即砍'), headerOpt(theme.light, 'C 渐进缩减')],
    [dimOpt('合同与合规（必须）'), weightOpt('×'), cellOpt('✓'), cellOpt('✓'), cellOpt('✓')],
    [dimOpt('过渡期支持（必须）'), weightOpt('×'), cellOpt('✓'), cellOpt('✗'), cellOpt('✓')],
    [dimOpt('释放资源可投入高产出（20%）'), weightOpt('20%'), cellOpt('3'), cellOpt('9'), cellOpt('7')],
    [dimOpt('团队能力沉淀（20%）'), weightOpt('20%'), cellOpt('5'), cellOpt('6'), cellOpt('8')],
    [dimOpt('客户口碑延续（30%）'), weightOpt('30%'), cellOpt('8'), cellOpt('4'), cellOpt('7')],
    [dimOpt('决策经验可复制（30%）'), weightOpt('30%'), cellOpt('5'), cellOpt('8'), cellOpt('8')],
    [{ text: '加权总分', options: { fill: { color: theme.panel }, color: theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'left' } },
     { text: '100%', options: { fill: { color: theme.panel }, color: theme.muted, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } },
     { text: '5.5', options: { fill: { color: theme.panel }, color: theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } },
     { text: '5.4', options: { fill: { color: theme.panel }, color: theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } },
     { text: '7.3', options: { fill: { color: theme.accent }, color: theme.primary, fontSize: 11, fontFace: 'Microsoft YaHei', bold: true, valign: 'middle', align: 'center' } }
    ]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [3.0, 1.0, 1.65, 1.65, 1.7], rowH: 0.38,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('必须满足的标准用 × 标记（任一不满足即否决）', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.light, italic: true, margin: 0
  });

  s.addText('59', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };