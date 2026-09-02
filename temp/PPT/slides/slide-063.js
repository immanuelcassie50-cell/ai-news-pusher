// slide-063.js — Full decision demo: another example
const slideConfig = { type: 'content-text', index: 63 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P63  · 完整示范 · 项目延期', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一个完整决策的展开', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Context
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 1.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 1.1,
    fill: { color: theme.muted }, line: { color: theme.muted, width: 0 }
  });
  s.addText('根因  ·  需求变更失控 + 销售承诺过满', {
    x: 0.85, y: 1.75, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.muted, bold: true, margin: 0
  });
  s.addText('问题陈述  ·  如何让下一季度客户交付按时上线，并把客户满意度稳定在 4.5 以上？', {
    x: 0.85, y: 2.1, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('核心难点  ·  变化的需求 × 有限的产能 × 严格的客户预期', {
    x: 0.85, y: 2.45, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  // 3 candidate solutions
  const sols = [
    { c: theme.muted, t: 'A · 加强审批', d: '所有需求变更必须经 PMO 审批' },
    { c: theme.accent, t: 'B · 引入变更费', d: '每次需求变更评估影响并收费' },
    { c: theme.light,  t: 'C · 双轨交付', d: '承诺交付 + 增量开发并行' }
  ];
  sols.forEach((sol, i) => {
    const y = 2.95 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.58,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.58,
      fill: { color: sol.c }, line: { color: sol.c, width: 0 }
    });
    s.addText(sol.t, {
      x: 0.75, y: y + 0.08, w: 2.5, h: 0.42,
      fontSize: 13, fontFace: 'Microsoft YaHei', color: sol.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(sol.d, {
      x: 3.4, y: y + 0.08, w: 6.0, h: 0.42,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
  });

  s.addText('63', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };