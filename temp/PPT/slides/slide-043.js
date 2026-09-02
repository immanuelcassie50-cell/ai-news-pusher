// slide-043.js — 直觉锚定法 (Intuition Anchoring)
const slideConfig = { type: 'content-text', index: 43 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P43  · 直觉锚定法', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('先把直觉记下来，再去验证', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Timeline-style process
  const steps = [
    { c: theme.accent, t: '写',   d: '凭直觉写下你认为最可能的原因。写完后，先不要划掉。' },
    { c: theme.muted, t: '折',   d: '把纸折起来放在一边。整个验证过程中，不要回看。' },
    { c: theme.accent, t: '验',   d: '用特征对照表、AI 假设清单、证据收集，逐一验证。' },
    { c: theme.light,  t: '比',   d: '打开折好的直觉，和验证结论对比。差别出现在哪一步？' }
  ];
  steps.forEach((st, i) => {
    const x = 0.5 + i * 2.275;
    const y = 1.7;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 2.15, h: 1.85,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 2.15, h: 0.05,
      fill: { color: st.c }, line: { color: st.c, width: 0 }
    });
    s.addText(st.t, {
      x, y: y + 0.15, w: 2.15, h: 0.6,
      fontSize: 36, fontFace: 'Microsoft YaHei', color: st.c, bold: true,
      align: 'center', margin: 0
    });
    s.addText(st.d, {
      x: x + 0.15, y: y + 0.85, w: 1.85, h: 0.95,
      fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.bg,
      align: 'center', valign: 'top', margin: 0
    });
    // Arrow
    if (i < steps.length - 1) {
      s.addShape(pres.shapes.RIGHT_TRIANGLE, {
        x: x + 2.18, y: y + 0.85, w: 0.1, h: 0.12,
        fill: { color: theme.divider }, line: { color: theme.divider, width: 0 },
        rotate: 90
      });
    }
  });

  s.addText('讲师注：验证过程中不要回看，避免被直觉"反向锚定"。', {
    x: 0.5, y: 4.65, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('43', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };