// slide-014.js — Wisdom Compass framework diagram (full)
const slideConfig = { type: 'content-process', index: 14 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P14  · 智策罗盘', {
    x: 0.5, y: 0.3, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('四个方向 · 一个中心轴', {
    x: 0.5, y: 0.7, w: 9, h: 0.55,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Compass circle - center at (5, 3.3), radius ~ 1.7
  const cx = 5, cy = 3.3;
  // Outer circle (compass ring)
  s.addShape(pres.shapes.OVAL, {
    x: cx - 1.8, y: cy - 1.8, w: 3.6, h: 3.6,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  // Inner circle (center hub)
  s.addShape(pres.shapes.OVAL, {
    x: cx - 0.7, y: cy - 0.7, w: 1.4, h: 1.4,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 2 }
  });
  s.addText('智策\n罗盘', {
    x: cx - 0.7, y: cy - 0.45, w: 1.4, h: 0.9,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });

  // Four direction labels inside the ring (N/E/S/W)
  const dirs = [
    { label: '北 · 聚焦针',  question: '是什么', x: cx - 0.85, y: cy - 1.55, w: 1.7 },
    { label: '东 · 溯源针',  question: '为什么', x: cx + 0.25, y: cy - 0.25, w: 1.7 },
    { label: '南 · 决断针',  question: '怎么选', x: cx - 0.85, y: cy + 1.0,  w: 1.7 },
    { label: '西 · 预警针',  question: '会出错', x: cx - 1.95, y: cy - 0.25, w: 1.7 }
  ];
  dirs.forEach(d => {
    s.addText(d.label, {
      x: d.x, y: d.y, w: d.w, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true,
      align: 'center', margin: 0
    });
    s.addText(d.question, {
      x: d.x, y: d.y + 0.27, w: d.w, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.bg,
      align: 'center', margin: 0
    });
  });

  // Center axis label below
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 0.08, h: 0.5,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('中心轴 · 人机协同三分法（贯穿全程）—— 交给AI / 与AI协同 / 自己做', {
    x: 0.75, y: 4.9, w: 8.6, h: 0.5,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg,
    valign: 'middle', margin: 0
  });

  s.addText('14', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };