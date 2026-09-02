// slide-039.js — Why "first intuition" is dangerous
const slideConfig = { type: 'content-text', index: 39 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P39  · 直觉的陷阱', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('第一个想到的原因，往往不是真的原因', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // 4 reasons
  const reasons = [
    { c: theme.light, t: '可得性偏差',
      d: '最近发生的、印象深刻的，容易被默认为原因。' },
    { c: theme.accent, t: '确认偏差',
      d: '我们倾向于找到"符合直觉"的证据，忽视反向证据。' },
    { c: theme.light, t: '锚定效应',
      d: '第一直觉会形成"锚"，后续所有证据被相对评估。' },
    { c: theme.accent, t: '替罪羊偏好',
      d: '复杂问题容易被简化为"某个人的问题"。' }
  ];
  reasons.forEach((r, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 1.7 + row * 1.55;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.45, h: 1.35,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.08, h: 1.35,
      fill: { color: r.c }, line: { color: r.c, width: 0 }
    });
    s.addText(r.t, {
      x: x + 0.25, y: y + 0.15, w: 4, h: 0.4,
      fontSize: 16, fontFace: 'Microsoft YaHei', color: r.c, bold: true, margin: 0
    });
    s.addText(r.d, {
      x: x + 0.25, y: y + 0.6, w: 4, h: 0.65,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', margin: 0
    });
  });

  s.addText('应对方法  ·  把直觉先记下来，但不下结论；用工具逐一验证。', {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, bold: true, margin: 0
  });

  s.addText('39', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };