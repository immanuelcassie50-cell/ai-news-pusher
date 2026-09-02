// slide-057.js — Practical example of criteria classification
const slideConfig = { type: 'content-text', index: 57 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P57  · 范例', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一张标准的归类', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('决策情境  ·  是否砍掉腰部产品线', {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 12, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
  } });
  const cellOpt = (txt, color) => ({ text: txt, options: {
    color: color || theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei',
    valign: 'middle', align: 'left'
  } });
  const tagOpt = (txt, color) => ({ text: txt, options: {
    color: color, fontSize: 10, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'center'
  } });

  s.addTable([
    [headerOpt(theme.accent, '标准'), headerOpt(theme.accent, '来源视角'), headerOpt(theme.light, '类别')],
    [cellOpt('不能违反已签合同的最低交付量', true), cellOpt('法务 / 客户', true), tagOpt('必须满足', theme.light)],
    [cellOpt('不影响品牌定位的连续性', true), cellOpt('市场', true), tagOpt('必须满足', theme.light)],
    [cellOpt('不影响现有客户的过渡支持', true), cellOpt('客户成功', true), tagOpt('必须满足', theme.light)],
    [cellOpt('释放的资源能投入更高产出业务', true), cellOpt('战略', true), tagOpt('越好越好', theme.accent)],
    [cellOpt('团队能力得到升级与沉淀', true), cellOpt('组织', true), tagOpt('越好越好', theme.accent)],
    [cellOpt('建立可复制的"精简-聚焦"决策经验', true), cellOpt('组织', true), tagOpt('越好越好', theme.accent)]
  ], {
    x: 0.5, y: 1.9, w: 9, colW: [4.4, 2.4, 2.2], rowH: 0.45,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('57', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };