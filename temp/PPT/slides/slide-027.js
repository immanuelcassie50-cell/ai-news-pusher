// slide-027.js — Phenomenon vs pre-judged (deeper example)
const slideConfig = { type: 'content-text', index: 27 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P27  · 现象 vs 预判答案', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('同一句话，三种身份', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const rows = [
    { who: '现象', c: theme.accent,
      t: '"本季度新签客户数比上季度下降 18%"',
      note: '可被数据直接验证，没有判断' },
    { who: '原因（预判）', c: theme.light,
      t: '"是因为大客户减少 + 销售跟进不积极"',
      note: '已经替因果关系盖棺定论' },
    { who: '答案（预判）', c: theme.light,
      t: '"应该立刻加一名销售，并加大广告投放"',
      note: '已经在提方案，未必是最优解' },
    { who: '问题本身', c: theme.accent,
      t: '"如何在下一季度稳定新签客户数，并识别哪些干预最有效"',
      note: '可以包容多种原因和方案' }
  ];
  rows.forEach((r, i) => {
    const y = 1.65 + i * 0.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.72,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.72,
      fill: { color: r.c }, line: { color: r.c, width: 0 }
    });
    s.addText(r.who, {
      x: 0.7, y: y + 0.08, w: 1.7, h: 0.3,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: r.c, bold: true, margin: 0
    });
    s.addText(r.t, {
      x: 2.45, y: y + 0.05, w: 6.95, h: 0.4,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(r.note, {
      x: 2.45, y: y + 0.42, w: 6.95, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
    });
  });

  s.addText('27', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };