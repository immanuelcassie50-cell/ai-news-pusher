// slide-031.js — Revised problem statement: full demo
const slideConfig = { type: 'content-text', index: 31 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P31  · 修订后的问题陈述', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('从 V1 到 V3 · 一个走过的轨迹', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const versions = [
    { v: 'V1', t: '"团队效率不行，要加强管理"',
      note: '原因已预设，且过于宏大' },
    { v: 'V2', t: '"过去 4 个月，团队连续 3 个项目延期交付"',
      note: '聚焦到可观察现象，但未指明方向' },
    { v: 'V3', t: '"如何让下一季度的 4 个客户项目按时交付，并把客户满意度评分稳定在 4.5 以上？"',
      note: '聚焦具体、可衡量、可被方案对比' }
  ];
  versions.forEach((v, i) => {
    const y = 1.65 + i * 1.05;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.95,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.6, h: 0.95,
      fill: { color: i === 2 ? theme.accent : theme.muted }, line: { color: theme.divider, width: 0 }
    });
    s.addText(v.v, {
      x: 0.5, y: y + 0.1, w: 0.6, h: 0.75,
      fontSize: 18, fontFace: 'Georgia', color: theme.primary, bold: true,
      align: 'center', valign: 'middle', margin: 0
    });
    s.addText(v.t, {
      x: 1.3, y: y + 0.12, w: 8.1, h: 0.5,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
    s.addText('评注  ·  ' + v.note, {
      x: 1.3, y: y + 0.58, w: 8.1, h: 0.35,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
    });
  });

  s.addText('从 V1 到 V3，不是文笔变好，是问题变得可被研究。', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('31', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };