// slide-034.js — Common pitfalls
const slideConfig = { type: 'content-text', index: 34 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P34  · 常见坑', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('学员在聚焦针模块的常见卡点', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const pits = [
    { c: theme.light, t: '坑 1  ·  把现象写成原因',
      d: '例："团队执行力差"——这是原因预判，不是现象。', fix: '改："过去两个月，3 个项目平均延期 14 天交付。"' },
    { c: theme.accent, t: '坑 2  ·  范围大到自己无法影响',
      d: '例："公司战略方向不清晰"——超出个人决策范围。', fix: '改："我所在团队下一季度的工作重点该如何定。"' },
    { c: theme.light, t: '坑 3  ·  直接采用 AI 给的版本',
      d: '不质疑、不补充、不删除，结果是"AI 看起来都对"。', fix: '用三分标记（圈 / 划 / 标）走一遍。' }
  ];
  pits.forEach((p, i) => {
    const y = 1.65 + i * 1.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 1.0,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 1.0,
      fill: { color: p.c }, line: { color: p.c, width: 0 }
    });
    s.addText(p.t, {
      x: 0.75, y: y + 0.1, w: 8.6, h: 0.35,
      fontSize: 13, fontFace: 'Microsoft YaHei', color: p.c, bold: true, margin: 0
    });
    s.addText(p.d, {
      x: 0.75, y: y + 0.4, w: 8.6, h: 0.32,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
    });
    s.addText('解法  ·  ' + p.fix, {
      x: 0.75, y: y + 0.7, w: 8.6, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
    });
  });

  s.addText('34', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };