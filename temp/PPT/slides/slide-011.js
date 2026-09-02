// slide-011.js — Practical example of the distinction
const slideConfig = { type: 'content-comparison', index: 11 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P11  · 一个具体例子', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('同一个团队 · 三种不同的难题', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const cards = [
    { tag: '常规', color: theme.muted, t: '每月销售报表',
      e: '按模板生成，路径固定。AI 已经能 1 分钟完成。' },
    { tag: '转向', color: theme.accent, t: '今年新签客户下降 18%',
      e: '现象清楚，但"原因是什么"已不能直接套用以往经验。' },
    { tag: '挑战', color: theme.light, t: '下一季度要不要砍掉腰部产品线',
      e: '连"该不该做这个决定"本身，都要先想清楚' }
  ];
  cards.forEach((c, i) => {
    const y = 1.7 + i * 1.15;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 1.0,
      fill: { color: c.color }, line: { color: c.color, width: 0 }
    });
    s.addText(c.tag, {
      x: 0.75, y: y + 0.1, w: 1.1, h: 0.8,
      fontSize: 16, fontFace: 'Microsoft YaHei', color: c.color, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(c.t, {
      x: 1.95, y: y + 0.12, w: 7.4, h: 0.4,
      fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(c.e, {
      x: 1.95, y: y + 0.55, w: 7.4, h: 0.4,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'top', margin: 0
    });
  });

  s.addText('11', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };