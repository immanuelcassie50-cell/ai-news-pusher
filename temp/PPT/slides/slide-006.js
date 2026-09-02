// slide-006.js — Learning objectives part 1
const slideConfig = { type: 'content-text', index: 6 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P6  · 学习目标 (一)', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('六个能力锚点', {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('两天密集内容最终沉淀为 6 个可观察的能力变化', {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  const items = [
    { c: theme.accent,  k: 'F1', t: '问题聚焦',     d: '把模糊问题转化为清晰的问题陈述' },
    { c: theme.light,   k: 'F2', t: '优先级判断',   d: '在多个问题点中判断处理顺序' },
    { c: theme.accent,  k: 'C1', t: '假设生成',     d: '围绕问题陈述系统生成可能原因' },
    { c: theme.light,   k: 'C2', t: '验证推理',     d: '用证据对假设原因进行验证或排除' }
  ];
  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 2.05 + row * 1.4;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.45, h: 1.25,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addText(it.k, {
      x: x + 0.2, y: y + 0.1, w: 0.7, h: 0.4,
      fontSize: 18, fontFace: 'Georgia', color: it.c, bold: true, margin: 0
    });
    s.addText(it.t, {
      x: x + 0.95, y: y + 0.12, w: 3.4, h: 0.4,
      fontSize: 17, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(it.d, {
      x: x + 0.2, y: y + 0.62, w: 4.05, h: 0.55,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'top', margin: 0
    });
  });

  s.addText('06', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };