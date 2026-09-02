// slide-016.js — Center axis: 三分法 explained
const slideConfig = { type: 'content-text', index: 16 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P16  · 中心轴', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('人机协同三分法', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 30, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('不是一次性讲完的知识点，而是每一步都要回到的"动作"', {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.muted, margin: 0
  });

  const zones = [
    { c: theme.accent, label: 'A · 交给 AI',
      sub: '信息收集 / 初步归类 / 罗列选项 / 生成初稿',
      ex: '例：让 AI 把一份客户访谈记录整理成结构化纪要' },
    { c: theme.light, label: 'B · 与 AI 协同',
      sub: 'AI 先做、人再核验 / 人先定方向、AI 再展开',
      ex: '例：AI 生成 10 条假设清单，人选出 3 条值得验证的' },
    { c: theme.accent, label: 'C · 自己做',
      sub: '价值取舍 / 利益相关方共识 / 最终责任承担',
      ex: '例：决定砍掉一条产品线、告诉团队为什么' }
  ];
  zones.forEach((z, i) => {
    const y = 2.0 + i * 0.95;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.85,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addText(z.label, {
      x: 0.65, y: y + 0.1, w: 2.0, h: 0.4,
      fontSize: 16, fontFace: 'Microsoft YaHei', color: z.c, bold: true, margin: 0
    });
    s.addText(z.sub, {
      x: 2.7, y: y + 0.1, w: 6.7, h: 0.35,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.bg, margin: 0
    });
    s.addText(z.ex, {
      x: 2.7, y: y + 0.45, w: 6.7, h: 0.35,
      fontSize: 10.5, fontFace: 'Microsoft YaHei', color: theme.muted, italic: true, margin: 0
    });
  });

  s.addText('"这一步，AI 能帮你做到哪一步？从哪一步开始，必须是你自己来？"', {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('16', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };