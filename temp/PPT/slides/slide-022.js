// slide-022.js — Why need problem focusing
const slideConfig = { type: 'content-text', index: 22 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P22  · 模块一 · 为什么', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('问题没聚焦，后面的努力都白费', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  // Two-column comparison
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.45, h: 0.05,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('问题没聚焦', {
    x: 0.7, y: 1.85, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText([
    { text: '团队花两周做方案，最后发现对的是另一件事', options: { bullet: true, breakLine: true } },
    { text: '根因分析列了 8 条原因，每条都不够具体', options: { bullet: true, breakLine: true } },
    { text: '决策方案三个各有支持者，但谁都说服不了谁', options: { bullet: true, breakLine: true } },
    { text: '风险预案做了 30 条，重点一条都没压住', options: { bullet: true } }
  ], {
    x: 0.7, y: 2.3, w: 4.1, h: 2.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 6
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.7, w: 4.45, h: 3.1,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.05, y: 1.7, w: 4.45, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('问题已聚焦', {
    x: 5.25, y: 1.85, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '团队用一个画面理解问题，所有讨论聚焦同一处', options: { bullet: true, breakLine: true } },
    { text: '根因分析列出 3 个最可能假设，按证据排序', options: { bullet: true, breakLine: true } },
    { text: '方案对比有清晰的评估标准，争议可被结构化', options: { bullet: true, breakLine: true } },
    { text: '风险预案聚焦 3-5 项高优先级，各有责任人', options: { bullet: true } }
  ], {
    x: 5.25, y: 2.3, w: 4.1, h: 2.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 6
  });

  s.addText('22', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };