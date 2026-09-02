// slide-060.js — Decision rationale (narrative)
const slideConfig = { type: 'content-text', index: 60 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P60  · 选择说明', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一句话说清为什么', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Example decision narrative
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.15,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('决策陈述', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText(`"我们选择 C 方案（渐进缩减）—— 因为它在'过渡期支持'这一必须满足的标准上仍然成立，而在客户口碑与决策经验两个加权标准上得分最高。"`, {
    x: 0.85, y: 2.2, w: 8.5, h: 1.0,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', margin: 0
  });
  s.addText('结构  ·  选哪个 + 为什么 + 放弃了什么', {
    x: 0.85, y: 3.3, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });
  s.addText([
    { text: '明确写出"我们没有选哪个 + 为什么"', options: { bullet: true, breakLine: true } },
    { text: '说明哪些标准起了决定作用', options: { bullet: true, breakLine: true } },
    { text: '承认这个选择"放弃了什么"，避免后续被"为什么没选 X"反复质疑', options: { bullet: true } }
  ], {
    x: 0.85, y: 3.65, w: 8.5, h: 1.0,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 3
  });

  s.addText('60', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };