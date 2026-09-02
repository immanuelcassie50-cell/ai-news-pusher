// slide-026.js — Phenomenon vs pre-judged answer identification
const slideConfig = { type: 'content-text', index: 26 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P26  · 自检方法', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('三句话自检', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const checks = [
    { c: theme.accent, t: '第一句',
      q: '"我现在的描述里，有没有一个具体的人或部门，被默认为问题的原因？"',
      hint: '如果有 → 把人和部门名遮住，看句子是否仍然成立。' },
    { c: theme.light,  t: '第二句',
      q: '"我现在的描述里，有没有暗含一个我想要的解决方案？"',
      hint: '如果有 → 把它拆出来，问题是问题，方案是方案。' },
    { c: theme.accent, t: '第三句',
      q: '"不同的人读到这句话，会觉得我们在说的是同一件事吗？"',
      hint: '如果不会 → 把模糊词换成具体、可观察的描述。' }
  ];
  checks.forEach((c, i) => {
    const y = 1.65 + i * 1.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addText(c.t, {
      x: 0.7, y: y + 0.1, w: 1.0, h: 0.4,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: c.c, bold: true, margin: 0
    });
    s.addText(c.q, {
      x: 1.7, y: y + 0.1, w: 7.7, h: 0.4,
      fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(c.hint, {
      x: 1.7, y: y + 0.5, w: 7.7, h: 0.45,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, valign: 'top', margin: 0
    });
  });

  s.addText('26', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };