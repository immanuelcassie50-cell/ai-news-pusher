// slide-067.js — Common pitfalls module 3
const slideConfig = { type: 'content-text', index: 67 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P67  · 常见坑', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('决断针模块的常见卡点', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const pits = [
    { c: theme.light, t: '坑 1  ·  评估标准只有自己的视角',
      d: '导致方案在其他人眼里"显然有问题"，但你没有预期到。' },
    { c: theme.accent, t: '坑 2  ·  让 AI 决定权重',
      d: 'AI 给的权重看起来很专业，但本质是"一般组织的一般偏好"，不是你公司的。' },
    { c: theme.light, t: '坑 3  ·  选完之后讲不清为什么',
      d: '自己复盘都说不出三条以上理由，说明决策没有站住脚。' }
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

  s.addText('67', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };