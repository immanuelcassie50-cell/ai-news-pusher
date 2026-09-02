// slide-056.js — Must-have vs nice-to-have
const slideConfig = { type: 'content-text', index: 56 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P56  · 两类标准', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('必须满足 vs 越好越好', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Two columns
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('必须满足', {
    x: 0.7, y: 1.8, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText('不满足即否决', {
    x: 0.7, y: 2.2, w: 4, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });
  s.addText([
    { text: '不能违反合规与法规', options: { bullet: true, breakLine: true } },
    { text: '不能让核心客户流失', options: { bullet: true, breakLine: true } },
    { text: '不能引发重大运营风险', options: { bullet: true, breakLine: true } },
    { text: '不能超出预算上限', options: { bullet: true } }
  ], {
    x: 0.7, y: 2.6, w: 4.1, h: 2.0,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 5
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.65, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('越好越好', {
    x: 5.25, y: 1.8, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('越满足越加分，但不满足也不否决', {
    x: 5.25, y: 2.2, w: 4, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });
  s.addText([
    { text: '长期收益', options: { bullet: true, breakLine: true } },
    { text: '团队成长与能力积累', options: { bullet: true, breakLine: true } },
    { text: '客户口碑与品牌资产', options: { bullet: true, breakLine: true } },
    { text: '后续可拓展性', options: { bullet: true } }
  ], {
    x: 5.25, y: 2.6, w: 4.1, h: 2.0,
    fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 5
  });

  s.addText('56', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };