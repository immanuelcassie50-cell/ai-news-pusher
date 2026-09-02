// slide-005.js — Course value proposition (specific outcomes)
const slideConfig = { type: 'content-text', index: 5 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P5  · 两天的承诺', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('你带走什么', {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const items = [
    { n: '01', t: '一个智策罗盘框架', d: '问题聚焦—根因—决策—风险，四步形成一条完整思考链路。' },
    { n: '02', t: '一套人机协同判断线', d: '"交给AI / 与AI协同 / 自己做"，回到每一项具体工作时都能用。' },
    { n: '03', t: '一份个人行动计划', d: '把自己的真实问题走完四步，输出可立即落地的方案与风险预案。' }
  ];
  items.forEach((it, i) => {
    const y = 1.85 + i * 1.05;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.95,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.95,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    s.addText(it.n, {
      x: 0.7, y: y + 0.1, w: 0.9, h: 0.75,
      fontSize: 32, fontFace: 'Georgia', color: theme.accent, bold: true, margin: 0
    });
    s.addText(it.t, {
      x: 1.65, y: y + 0.12, w: 7.7, h: 0.4,
      fontSize: 17, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(it.d, {
      x: 1.65, y: y + 0.5, w: 7.7, h: 0.4,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
    });
  });

  s.addText('05', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };