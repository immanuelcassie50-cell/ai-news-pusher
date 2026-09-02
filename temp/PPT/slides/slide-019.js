// slide-019.js — How consciousness surfaces during class
const slideConfig = { type: 'content-text', index: 19 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P19  · 显性化的时机', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('讲师在哪些瞬间点破', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const rows = [
    { c: theme.accent, t: '全局意识',
      when: '学员只考虑自己视角时',
      ask: '"换成你的客户/下属/财务部门看，他们怎么定义？"' },
    { c: theme.light,  t: '结构化意识',
      when: '学员跳步骤、想到哪写到哪时',
      ask: '"如果刚才跳过那一步，结论会变吗？"' },
    { c: theme.accent, t: '批判意识',
      when: '学员对 AI / 第一个直觉答案毫不怀疑时',
      ask: '"这个结论你愿意现在拿给上级汇报吗？"' },
    { c: theme.light,  t: '人机协同意识',
      when: '每次三分法使用之后',
      ask: '"刚才那步你之前怎么做？以后打算怎么分工？"' },
    { c: theme.accent, t: '风险意识',
      when: '学员想到方案就直接往下走',
      ask: '"这个方案推进，你心里有没有一点不踏实？"' }
  ];
  rows.forEach((r, i) => {
    const y = 1.65 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.58,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.58,
      fill: { color: r.c }, line: { color: r.c, width: 0 }
    });
    s.addText(r.t, {
      x: 0.7, y: y + 0.1, w: 1.9, h: 0.38,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: r.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(r.when, {
      x: 2.65, y: y + 0.1, w: 3.6, h: 0.38,
      fontSize: 10.5, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
    s.addText(r.ask, {
      x: 6.3, y: y + 0.1, w: 3.1, h: 0.38,
      fontSize: 10.5, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true,
      valign: 'middle', margin: 0
    });
  });

  s.addText('19', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };