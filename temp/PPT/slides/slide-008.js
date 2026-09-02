// slide-008.js — Course map preview
const slideConfig = { type: 'content-process', index: 8 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P8  · 课程地图', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('两天 · 一个罗盘 · 一条链路', {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 30, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Compass: 4 modules + center axis + integration
  const cx = 5, cy = 3.15; // center
  // Center hub
  s.addShape(pres.shapes.OVAL, {
    x: cx - 0.7, y: cy - 0.7, w: 1.4, h: 1.4,
    fill: { color: theme.secondary }, line: { color: theme.accent, width: 2 }
  });
  s.addText('智策\n罗盘', {
    x: cx - 0.7, y: cy - 0.45, w: 1.4, h: 0.9,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });

  // Four directions: N=聚焦, E=溯源, S=决断, W=预警
  const dirs = [
    { x: cx - 0.95, y: cy - 1.95, label: '北 · 聚焦针', sub: '问题是什么' },
    { x: cx + 0.55, y: cy - 0.4,  label: '东 · 溯源针', sub: '为什么发生' },
    { x: cx - 0.95, y: cy + 0.75, label: '南 · 决断针', sub: '该怎么选' },
    { x: cx - 2.45, y: cy - 0.4,  label: '西 · 预警针', sub: '哪里会出问题' }
  ];
  dirs.forEach((d, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: d.x, y: d.y, w: 1.9, h: 0.75,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: d.x, y: d.y, w: 1.9, h: 0.04,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    s.addText(d.label, {
      x: d.x + 0.1, y: d.y + 0.08, w: 1.7, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
    });
    s.addText(d.sub, {
      x: d.x + 0.1, y: d.y + 0.38, w: 1.7, h: 0.3,
      fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
    });
  });

  // Center axis vertical bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: cx - 0.02, y: 0.65, w: 0.04, h: 4.9,
    fill: { color: theme.divider }, line: { color: theme.divider, width: 0 }
  });
  s.addText('人机协同三分法', {
    x: cx + 0.1, y: 1.4, w: 2, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });

  // Bottom note: integration
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addText('模块五 · 整合与行动转化 —— 把四步成果串联为一份行动计划', {
    x: 0.6, y: 5.0, w: 8.8, h: 0.45,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent,
    valign: 'middle', margin: 0
  });

  s.addText('08', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };