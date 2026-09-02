// slide-033.js — Group review method
const slideConfig = { type: 'content-text', index: 33 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P33  · 小组复盘', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('把问题交给同伴看一眼', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Three-step method
  const steps = [
    { c: theme.accent, n: '1', t: '陈述',  d: '用一句话讲给对方听你现在的版本。不解释，不辩护，30 秒内说完。' },
    { c: theme.light,  n: '2', t: '被提问', d: '对方只能问"澄清性问题"，不能评价对错。重点问"你指的是什么"。' },
    { c: theme.accent, n: '3', t: '复述',  d: '你用对方能听懂的版本再说一遍，并标注这次改动最大的那一处。' }
  ];
  steps.forEach((st, i) => {
    const y = 1.7 + i * 0.85;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.75,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.13, w: 0.5, h: 0.5,
      fill: { color: st.c }, line: { color: st.c, width: 0 }
    });
    s.addText(st.n, {
      x: 0.65, y: y + 0.13, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: 'Georgia', color: theme.primary, bold: true,
      align: 'center', valign: 'middle', margin: 0
    });
    s.addText(st.t, {
      x: 1.3, y: y + 0.1, w: 1.4, h: 0.55,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: st.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(st.d, {
      x: 2.75, y: y + 0.1, w: 6.65, h: 0.55,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
  });

  s.addText('每人 6 分钟一组（陈述 1 / 提问 3 / 复述 2）', {
    x: 0.5, y: 4.5, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, margin: 0
  });
  s.addText('关键提问："你的问题陈述里，还有没有藏着的'原因'？"', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  s.addText('33', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };