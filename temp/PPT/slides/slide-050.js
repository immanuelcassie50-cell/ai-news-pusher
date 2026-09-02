// slide-050.js — Group review method
const slideConfig = { type: 'content-text', index: 50 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P50  · 小组复盘', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('讲给你的同伴听', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const steps = [
    { c: theme.accent, n: '1', t: '直觉与结论',
      d: '打开你之前折好的直觉答案，告诉同伴：直觉和验证结论是否一致。' },
    { c: theme.light,  n: '2', t: '被挑战',
      d: '对方问："如果这条假设不成立，是否还有别的解释？" 这是批判意识训练。' },
    { c: theme.accent, n: '3', t: '改进描述',
      d: '把根因描述改写成"流程 / 机制"层语言，避免指名道姓。' }
  ];
  steps.forEach((st, i) => {
    const y = 1.7 + i * 1.0;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.9,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: st.c }, line: { color: st.c, width: 0 }
    });
    s.addText(st.n, {
      x: 0.65, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: 'Georgia', color: theme.primary, bold: true,
      align: 'center', valign: 'middle', margin: 0
    });
    s.addText(st.t, {
      x: 1.3, y: y + 0.12, w: 2.0, h: 0.65,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: st.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(st.d, {
      x: 3.35, y: y + 0.12, w: 6.05, h: 0.65,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
  });

  s.addText('关键提问  ·  "你的直觉和结论差别出现在哪一步？"', {
    x: 0.5, y: 4.8, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('50', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };