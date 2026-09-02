// slide-007.js — Learning objectives part 2
const slideConfig = { type: 'content-text', index: 7 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P7  · 学习目标 (二)', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('剩下两个能力', {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const items = [
    { c: theme.accent, k: 'D1', t: '评估标准建构',  d: '把目标转化为可比较的评估标准，区分"必须满足"与"越好越好"。' },
    { c: theme.light,  k: 'D2', t: '方案权衡',      d: '在多个方案间做出有依据、能向他人解释的选择。' },
    { c: theme.accent, k: 'R1', t: '风险识别',      d: '系统识别行动方案可能面临的通用风险与组织特有风险。' },
    { c: theme.light,  k: 'R2', t: '预案设计',      d: '为关键风险设计预防与应急措施，并明确责任人。' },
    { c: theme.accent, k: 'I1', t: '整合转化',      d: '把四步成果串联成一份完整、自圆其说的行动计划。' },
    { c: theme.light,  k: 'AI1', t: '人机协同分工',  d: '在每一步区分"交给AI / 与AI协同 / 自己做"，形成判断习惯。' }
  ];
  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 1.75 + row * 1.05;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.45, h: 0.95,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addText(it.k, {
      x: x + 0.15, y: y + 0.1, w: 0.6, h: 0.4,
      fontSize: 14, fontFace: 'Georgia', color: it.c, bold: true, margin: 0
    });
    s.addText(it.t, {
      x: x + 0.8, y: y + 0.12, w: 3.55, h: 0.35,
      fontSize: 15, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
    });
    s.addText(it.d, {
      x: x + 0.15, y: y + 0.5, w: 4.2, h: 0.45,
      fontSize: 10.5, fontFace: 'Microsoft YaHei', color: theme.muted, valign: 'top', margin: 0
    });
  });

  s.addText('07', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };