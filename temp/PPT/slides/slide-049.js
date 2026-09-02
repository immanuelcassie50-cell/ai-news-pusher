// slide-049.js — Avoiding blame-game framing
const slideConfig = { type: 'content-text', index: 49 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P49  · 重要约定', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('根因 ≠ 找人背锅', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Translation examples
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.1,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('表述转化示例', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('把"某人某部门"翻译成"流程或机制"层面的描述', {
    x: 0.85, y: 2.2, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  const pairs = [
    { before: '"是张经理没有及时审批"', after: '"审批环节缺少时限提醒机制"' },
    { before: '"销售乱承诺"',           after: '"销售口径缺少与产能的双向确认"' },
    { before: '"技术团队水平差"',         after: '"关键技术决策缺少评审环节"' },
    { before: '"客户老变需求"',           after: '"需求变更未触发范围与时间评估"' }
  ];
  pairs.forEach((p, i) => {
    const y = 2.65 + i * 0.45;
    s.addText(p.before, {
      x: 0.85, y, w: 4.0, h: 0.35,
      fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.light, italic: true,
      valign: 'middle', margin: 0
    });
    s.addText('→', {
      x: 4.85, y, w: 0.3, h: 0.35,
      fontSize: 14, fontFace: 'Georgia', color: theme.accent, bold: true,
      align: 'center', valign: 'middle', margin: 0
    });
    s.addText(p.after, {
      x: 5.15, y, w: 4.4, h: 0.35,
      fontSize: 11.5, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true,
      valign: 'middle', margin: 0
    });
  });

  s.addText('49', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };