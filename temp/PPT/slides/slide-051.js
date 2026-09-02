// slide-051.js — Common pitfalls module 2
const slideConfig = { type: 'content-text', index: 51 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P51  · 常见坑', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('溯源针模块的常见卡点', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const pits = [
    { c: theme.light, t: '坑 1  ·  把症状当原因',
      d: '例："因为没按时交付"——这是症状，不是原因。' },
    { c: theme.accent, t: '坑 2  ·  多个原因混在一起未拆分',
      d: '"流程不顺 + 团队不给力 + 客户多变"——要先逐条验证。' },
    { c: theme.light, t: '坑 3  ·  跨部门讨论演变为抱怨',
      d: '讲"是谁的错"，而不是"是什么机制"。' }
  ];
  pits.forEach((p, i) => {
    const y = 1.65 + i * 1.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 1.0,
      fill: { color: p.c }, line: { color: p.c, width: 0 }
    });
    s.addText(p.t, {
      x: 0.75, y: y + 0.2, w: 8.6, h: 0.35,
      fontSize: 13, fontFace: 'Microsoft YaHei', color: p.c, bold: true, margin: 0
    });
    s.addText(p.d, {
      x: 0.75, y: y + 0.55, w: 8.6, h: 0.35,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
    });
  });

  s.addText('51', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };