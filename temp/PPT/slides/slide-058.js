// slide-058.js — Decision trade-off table intro
const slideConfig = { type: 'content-text', index: 58 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P58  · 决策权衡表', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('让选择"可被向他人解释"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.15,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  s.addText('表的结构', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });
  s.addText([
    { text: '左侧  ·  评估标准 + 权重（你自己定）', options: { bullet: true, breakLine: true } },
    { text: '顶部  ·  候选方案（至少 3 个，可借助 AI 生成）', options: { bullet: true, breakLine: true } },
    { text: '内部  ·  每个方案在每个标准上的得分（AI 可给初稿）', options: { bullet: true, breakLine: true } },
    { text: '右侧  ·  加权总分（参考用，最终选择不只看分数）', options: { bullet: true, breakLine: true } },
    { text: '底部  ·  一句话结论 + 选择理由', options: { bullet: true, breakLine: true } },
    { text: '', options: { breakLine: true } },
    { text: '关键提醒  ·  分数只是参考，"权重"和"否决项"才是真正决定选择的环节。', options: { italic: true, color: theme.light } }
  ], {
    x: 0.85, y: 2.25, w: 8.5, h: 2.5,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', paraSpaceAfter: 3
  });

  s.addText('58', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };