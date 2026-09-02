// slide-017.js — The三分法 flow sequence
const slideConfig = { type: 'content-process', index: 17 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P17  · 三步走', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('每一步都用同一组问题', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const seq = [
    { c: theme.accent, n: '1', t: '先问"AI 能做什么"',
      d: '把这步任务描述丢给 AI，AI 会给什么？这是"卸下负担"——把信息收集和初步罗列交给 AI。' },
    { c: theme.light,  n: '2', t: '再问"谁来做把关"',
      d: 'AI 给的东西放到我们公司 / 我们团队的实际情况里，哪些不成立？这是"与 AI 协同"。' },
    { c: theme.accent, n: '3', t: '最后问"谁承担后果"',
      d: '这件事选哪个方案、得罪哪个部门、承担什么风险，AI 不会替你承担。这是"自己做"。' }
  ];
  seq.forEach((it, i) => {
    const y = 1.7 + i * 1.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.2, w: 0.6, h: 0.6,
      fill: { color: it.c }, line: { color: it.c, width: 0 }
    });
    s.addText(it.n, {
      x: 0.7, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 22, fontFace: 'Georgia', color: theme.primary, bold: true,
      align: 'center', valign: 'middle', margin: 0
    });
    s.addText(it.t, {
      x: 1.5, y: y + 0.12, w: 7.9, h: 0.4,
      fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(it.d, {
      x: 1.5, y: y + 0.52, w: 7.9, h: 0.45,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'top', margin: 0
    });
  });

  s.addText('18', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };