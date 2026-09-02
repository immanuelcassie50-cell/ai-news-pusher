// slide-023.js — Symptom vs pre-judged answer
const slideConfig = { type: 'content-text', index: 23 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P23  · 模块一 · 第一关', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('你现在写的，是"问题"，还是"答案"？', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Two example cards
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 1.4,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 1.4,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('"因为 A 部门不配合，导致项目延期"', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.45,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText('这句话里，已经把原因（A 部门不配合）和现象（项目延期）混在一起。', {
    x: 0.85, y: 2.3, w: 8.5, h: 0.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('我们先把它拆开：现象是什么？延期了多久？所有相关方都同意"是 A 部门的问题"吗？', {
    x: 0.85, y: 2.65, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.25, w: 9, h: 1.6,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.25, w: 0.08, h: 1.6,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('拆开之后', {
    x: 0.85, y: 3.4, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText('现象  ·  客户上线版本比计划晚 14 天', {
    x: 0.85, y: 3.8, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('原因（先列出多种假设）  ·  A 部门接口延迟？需求变更？测试发现阻塞？', {
    x: 0.85, y: 4.15, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
  });
  s.addText('这个问题本身  ·  如何让下一次客户交付按期上线？', {
    x: 0.85, y: 4.5, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  s.addText('23', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };