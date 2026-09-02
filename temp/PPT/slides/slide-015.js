// slide-015.js — Module 1 full size map (reuse concept)
const slideConfig = { type: 'content-process', index: 15 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P15  · 一条完整链路', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('输出 → 输入的链条', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const steps = [
    { n: '00', t: '问题征集',     d: '真实问题清单' },
    { n: '01', t: '聚焦针',       d: '清晰的问题陈述' },
    { n: '02', t: '溯源针',       d: '验证过的根因' },
    { n: '03', t: '决断针',       d: '选定方案' },
    { n: '04', t: '预警针',       d: '风险预案' },
    { n: '05', t: '整合',         d: '行动计划' }
  ];
  const stepW = 1.35, gap = 0.15;
  const totalW = steps.length * stepW + (steps.length - 1) * gap;
  const startX = (10 - totalW) / 2;
  const stepY = 2.2, stepH = 1.6;

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gap);
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: stepY, w: stepW, h: stepH,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: stepY, w: stepW, h: 0.04,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    s.addText(step.n, {
      x, y: stepY + 0.15, w: stepW, h: 0.4,
      fontSize: 18, fontFace: 'Georgia', color: theme.accent, bold: true,
      align: 'center', margin: 0
    });
    s.addText(step.t, {
      x: x + 0.08, y: stepY + 0.6, w: stepW - 0.16, h: 0.4,
      fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true,
      align: 'center', margin: 0
    });
    s.addText(step.d, {
      x: x + 0.08, y: stepY + 1.0, w: stepW - 0.16, h: 0.5,
      fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.muted,
      align: 'center', valign: 'top', margin: 0
    });
    // Arrow between
    if (i < steps.length - 1) {
      const ax = x + stepW + 0.01;
      s.addShape(pres.shapes.RIGHT_TRIANGLE, {
        x: ax, y: stepY + stepH / 2 - 0.06, w: 0.13, h: 0.12,
        fill: { color: theme.accent }, line: { color: theme.accent, width: 0 },
        rotate: 90
      });
    }
  });

  s.addText('每个模块的输出，直接成为下一模块的输入。', {
    x: 0.5, y: 4.45, w: 9, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg,
    align: 'center', italic: true, margin: 0
  });
  s.addText('两天结束时，你拿到的不是四个孤立练习，而是一条完整的决策链路。', {
    x: 0.5, y: 4.8, w: 9, h: 0.35,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.muted,
    align: 'center', italic: true, margin: 0
  });

  s.addText('15', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };