// slide-061.js — AI boundary on weight
const slideConfig = { type: 'content-text', index: 61 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P61  · AI 协同边界', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('权重这件事，必须你自己来', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 9, h: 3.15,
    fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.65, w: 0.08, h: 3.15,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  s.addText('为什么 AI 给不了权重', {
    x: 0.85, y: 1.8, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.light, bold: true, margin: 0
  });
  s.addText('权重本质上是  ·  "你和你的组织更看重什么"', {
    x: 0.85, y: 2.25, w: 8.5, h: 0.5,
    fontSize: 16, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText([
    { text: 'AI 不知道你们公司今年战略重心是哪个方向', options: { bullet: true, breakLine: true } },
    { text: 'AI 不知道团队对"短期收益 vs 长期沉淀"的真实偏好', options: { bullet: true, breakLine: true } },
    { text: 'AI 不知道老板在最近的沟通里强调过哪些隐含优先级', options: { bullet: true, breakLine: true } },
    { text: 'AI 不知道哪些失败是不可接受的（必须否决），哪些是可承受的', options: { bullet: true } }
  ], {
    x: 0.85, y: 2.9, w: 8.5, h: 1.7,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, paraSpaceAfter: 4
  });

  s.addText('"权重是组织文化的具体表达。" —— 这一步，让 AI 协助打分；权重，由人决定。', {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, bold: true, margin: 0
  });

  s.addText('61', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };