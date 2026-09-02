// slide-066.js — Group deliberation method
const slideConfig = { type: 'content-text', index: 66 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P66  · 小组共商', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('不求赢，求更完整', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const steps = [
    { c: theme.accent, t: '每个人先说自己的标准',
      d: '写下你认为最重要的 3 条评估标准及其权重。与同伴对比。' },
    { c: theme.light,  t: '寻找分歧点',
      d: '不是"我对你错"，而是"我们各自的权重背后，是什么不同的判断"？' },
    { c: theme.accent, t: '把分歧转化为标准补充',
      d: '如果对方提出的标准你没考虑到 → 加进你的清单，而不是说服对方放弃。' },
    { c: theme.light,  t: '回到你的决策',
      d: '不强行统一答案。每人对自己的决策负责，但接受同伴的"压力测试"。' }
  ];
  steps.forEach((st, i) => {
    const y = 1.7 + i * 0.78;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.7,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.7,
      fill: { color: st.c }, line: { color: st.c, width: 0 }
    });
    s.addText(st.t, {
      x: 0.75, y: y + 0.08, w: 3.0, h: 0.55,
      fontSize: 13, fontFace: 'Microsoft YaHei', color: st.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(st.d, {
      x: 3.85, y: y + 0.08, w: 5.55, h: 0.55,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
  });

  s.addText('66', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };