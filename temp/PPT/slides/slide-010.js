// slide-010.js — Regular vs Challenging problems table
const slideConfig = { type: 'content-comparison', index: 10 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P10  · 两种难题', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('常规问题  vs  挑战性问题', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Comparison table
  const headerOpt = (color, text) => ({ text, options: {
    fill: { color: theme.secondary }, color, bold: true,
    fontSize: 13, fontFace: 'Microsoft YaHei', align: 'left', valign: 'middle'
  } });
  const cellOpt = (txt, color) => ({ text: txt, options: {
    color: color || theme.bg, fontSize: 11, fontFace: 'Microsoft YaHei',
    valign: 'middle', align: 'left'
  } });
  const dimOpt = (txt) => ({ text: txt, options: {
    color: theme.muted, fontSize: 11, fontFace: 'Microsoft YaHei',
    bold: true, valign: 'middle', align: 'left',
    fill: { color: theme.panel }
  } });

  s.addTable([
    [headerOpt(theme.accent, '维度'), headerOpt(theme.muted, '常规问题'), headerOpt(theme.light, '挑战性问题')],
    [dimOpt('目标清晰度'), cellOpt('答案路径明确'), cellOpt('目标本身需要先定义')],
    [dimOpt('信息获取'),   cellOpt('经验丰富即可解决'), cellOpt('需要跨领域信息整合')],
    [dimOpt('判断核心'),   cellOpt('技术 / 操作层面'),     cellOpt('价值 / 取舍 / 责任')],
    [dimOpt('AI 表现'),     cellOpt('AI 表现极佳'),         cellOpt('AI 能列选项，难判断权重')],
    [dimOpt('主要风险'),   cellOpt('效率不高'),             cellOpt('决策错误 + 责任真空')]
  ], {
    x: 0.5, y: 1.65, w: 9, colW: [1.8, 3.6, 3.6], rowH: 0.55,
    border: { type: 'solid', pt: 1, color: theme.divider },
    fontFace: 'Microsoft YaHei'
  });

  s.addText('看清这两类的差别，是进入四个模块的前提。', {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('10', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };