// slide-030.js — 三分 marking on AI output (circle/strike/mark)
const slideConfig = { type: 'content-text', index: 30 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P30  · 三分标记', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('把 AI 给的内容过一遍', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const marks = [
    { mark: '圈', color: theme.accent, c: '○',
      t: 'AI 说对了，我之前没注意到的',
      d: '这是新视角，留下来做线索。' },
    { mark: '划', color: theme.light, c: '—',
      t: 'AI 根本不知道，只有我 / 我们团队才知道',
      d: '这是组织专属信息，要由你补充进去。' },
    { mark: '标', color: theme.muted, c: '✗',
      t: 'AI 说的其实和实际情况不符',
      d: '这是批判意识，敢于否认 AI 的"看起来都对"。' }
  ];
  marks.forEach((m, i) => {
    const y = 1.65 + i * 1.05;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.95,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.18, w: 0.6, h: 0.6,
      fill: { color: theme.primary }, line: { color: m.color, width: 2 }
    });
    s.addText(m.c, {
      x: 0.7, y: y + 0.18, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: 'Georgia', color: m.color, bold: true,
      align: 'center', valign: 'middle', margin: 0
    });
    s.addText(m.mark + '  ·  ' + m.t, {
      x: 1.5, y: y + 0.12, w: 7.9, h: 0.4,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(m.d, {
      x: 1.5, y: y + 0.5, w: 7.9, h: 0.4,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'top', margin: 0
    });
  });

  s.addText('30', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };