// slide-055.js — Multi-perspective deep example
const slideConfig = { type: 'content-text', index: 55 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P55  · 视角展开', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一个具体决策的 4 个视角', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('决策情境  ·  是否砍掉腰部产品线，把资源集中到头部？', {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  const views = [
    { c: theme.accent, who: '上级视角',     s: '战略一致性、投入产出、品牌风险' },
    { c: theme.light,  who: '客户视角',     s: '产品可获得性、价格稳定性、过渡期支持' },
    { c: theme.accent, who: '受影响员工',   s: '岗位去向、过渡期、长期发展机会' },
    { c: theme.light,  who: '执行团队',     s: '切换成本、技能迁移、节奏可承受' }
  ];
  views.forEach((v, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 1.95 + row * 1.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.45, h: 1.25,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.45, h: 0.05,
      fill: { color: v.c }, line: { color: v.c, width: 0 }
    });
    s.addText(v.who, {
      x: x + 0.25, y: y + 0.18, w: 4, h: 0.4,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: v.c, bold: true, margin: 0
    });
    s.addText(v.s, {
      x: x + 0.25, y: y + 0.6, w: 4, h: 0.55,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg, valign: 'top', margin: 0
    });
  });

  s.addText('一个决策好不好，往往不是判断出来的，是被四个视角都"扛"过去的。', {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  s.addText('55', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };