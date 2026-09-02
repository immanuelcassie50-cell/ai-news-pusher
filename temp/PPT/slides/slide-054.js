// slide-054.js — Where do evaluation criteria come from
const slideConfig = { type: 'content-text', index: 54 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P54  · 第一问', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('评估标准，从哪里来？', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Three perspective circles
  const perspectives = [
    { c: theme.accent, t: '你的上级', q: '会写出什么标准？', e: '通常关注：风险、合规、对外承诺' },
    { c: theme.light,  t: '受决策影响最大的人', q: '会写出什么标准？', e: '通常关注：工作负担、公平、未来机会' },
    { c: theme.accent, t: '你自己', q: '会写出什么标准？', e: '通常关注：执行难度、可控性、长期收益' }
  ];
  perspectives.forEach((p, i) => {
    const y = 1.7 + i * 1.05;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.95,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.95,
      fill: { color: p.c }, line: { color: p.c, width: 0 }
    });
    s.addText(p.t, {
      x: 0.75, y: y + 0.15, w: 2.5, h: 0.4,
      fontSize: 16, fontFace: 'Microsoft YaHei', color: p.c, bold: true, margin: 0
    });
    s.addText(p.q, {
      x: 0.75, y: y + 0.5, w: 2.5, h: 0.4,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, italic: true, margin: 0
    });
    s.addText(p.e, {
      x: 3.45, y: y + 0.3, w: 5.95, h: 0.4,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'middle', margin: 0
    });
  });

  s.addText('"好"是谁说的好？—— 把视角列全，才知道哪条标准是真正该用的。', {
    x: 0.5, y: 4.9, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('54', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };