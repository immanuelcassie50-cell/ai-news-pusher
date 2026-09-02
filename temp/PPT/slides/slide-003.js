// slide-003.js — Opening question 2 (contrast)
const slideConfig = { type: 'content-text', index: 3 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P3  · 开场问题', {
    x: 0.5, y: 0.4, w: 3, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('再写下另一件', {
    x: 0.5, y: 0.85, w: 9, h: 0.45,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.45, w: 9, h: 3.2,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.45, w: 0.08, h: 3.2,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('反过来的那一件', {
    x: 0.95, y: 1.6, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.light, margin: 0
  });
  s.addText('你工作中有一件事，', {
    x: 0.95, y: 2.0, w: 8.5, h: 0.55,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('原来觉得"按流程走就行"，', {
    x: 0.95, y: 2.55, w: 8.5, h: 0.55,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('但现在反而变得更难判断了。', {
    x: 0.95, y: 3.1, w: 8.5, h: 0.55,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  s.addText('同样是越具体越好。写完后，与邻座两两分享。', {
    x: 0.95, y: 3.95, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  s.addText('时间  ·  3 分钟书写 + 5 分钟邻座分享', {
    x: 0.5, y: 4.9, w: 6, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });
  s.addText('03', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };