// slide-065.js — Decision rationale write-up
const slideConfig = { type: 'content-text', index: 65 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P65  · 选择陈述', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('把决策说完整', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.15,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('最终决策陈述', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('"我们选择 C 方案（双轨交付）—— 因为它在两条必须满足的标准上都成立，且在加权维度总分最高。"', {
    x: 0.85, y: 2.2, w: 8.5, h: 0.7,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', margin: 0
  });
  s.addText('我们放弃的  ·  ', {
    x: 0.85, y: 3.05, w: 1.8, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.light, italic: true, margin: 0
  });
  s.addText('B 方案（变更费）会引发销售反弹；A 方案（加强审批）对根因的针对性不足。', {
    x: 2.65, y: 3.05, w: 6.7, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('实施要点  ·  ', {
    x: 0.85, y: 3.45, w: 1.8, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.light, italic: true, margin: 0
  });
  s.addText('承诺交付（小范围）与增量开发（缓冲池）并行；销售对承诺范围知情。', {
    x: 2.65, y: 3.45, w: 6.7, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('复查时间  ·  ', {
    x: 0.85, y: 3.85, w: 1.8, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.light, italic: true, margin: 0
  });
  s.addText('6 周后回看"按时交付率"与"客户满意度"两项指标的改善幅度。', {
    x: 2.65, y: 3.85, w: 6.7, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('→ 这份陈述，将进入模块四  ·  预警针', {
    x: 0.85, y: 4.4, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, bold: true, margin: 0
  });

  s.addText('65', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };