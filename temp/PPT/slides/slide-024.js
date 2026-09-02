// slide-024.js — Problem portrait card: 5 dimensions overview
const slideConfig = { type: 'content-text', index: 24 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P24  · 问题画像卡', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('五个维度 · 把模糊问题"立"起来', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const dims = [
    { n: '01', t: '现象', q: '具体看到了什么？数据 / 行为 / 反馈' },
    { n: '02', t: '范围', q: '涉及谁、影响多广、边界在哪里' },
    { n: '03', t: '时间', q: '何时开始？多久发生一次？是否越来越严重' },
    { n: '04', t: '影响', q: '造成了什么业务后果？量级多大' },
    { n: '05', t: '排除', q: '明确"这不是什么"，排除相邻问题' }
  ];
  dims.forEach((d, i) => {
    const y = 1.7 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.58,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addText(d.n, {
      x: 0.65, y: y + 0.08, w: 0.7, h: 0.4,
      fontSize: 18, fontFace: 'Georgia', color: theme.accent, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(d.t, {
      x: 1.45, y: y + 0.08, w: 1.6, h: 0.4,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(d.q, {
      x: 3.1, y: y + 0.08, w: 6.3, h: 0.4,
      fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.muted,
      valign: 'middle', margin: 0
    });
  });

  s.addText('24', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };