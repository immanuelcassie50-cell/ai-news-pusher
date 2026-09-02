// slide-004.js — Why this course (value prop)
const slideConfig = { type: 'content-text', index: 4 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('WHY  ·  为什么这门课', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('AI 不会替你做决定，', {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 36, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('它只会把决定推到更难的地方。', {
    x: 0.5, y: 1.55, w: 9, h: 0.7,
    fontSize: 36, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true, margin: 0
  });

  // Two big insight cards
  const cards = [
    { x: 0.5, color: theme.light,
      eyebrow: '以前', title: '难题 = 收集信息难',
      body: '我们把 70% 的时间花在"找资料、列方案、摆选项"上，真正的判断反而被压缩。' },
    { x: 5.05, color: theme.accent,
      eyebrow: '现在', title: '难题 = 判断责任难',
      body: 'AI 把上面那 70% 压缩到 10%。剩下 30%，关于取舍与责任的部分，从未更轻松。' }
  ];
  cards.forEach(c => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.65, w: 4.45, h: 2.3,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.65, w: 4.45, h: 0.05,
      fill: { color: c.color }, line: { color: c.color, width: 0 }
    });
    s.addText(c.eyebrow, {
      x: c.x + 0.25, y: 2.85, w: 4, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: c.color, charSpacing: 4, margin: 0
    });
    s.addText(c.title, {
      x: c.x + 0.25, y: 3.15, w: 4, h: 0.5,
      fontSize: 22, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(c.body, {
      x: c.x + 0.25, y: 3.7, w: 4, h: 1.15,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'top', margin: 0
    });
  });

  s.addText('04', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };