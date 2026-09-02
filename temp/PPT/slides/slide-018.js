// slide-018.js — Five consciousnesses
const slideConfig = { type: 'content-text', index: 18 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P18  · 五大意识', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('不单独设环节，但贯穿全程', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });

  const cons = [
    { c: theme.accent, t: '全局意识',  d: '跳出自己的位置，看多个相关方与多个维度', m: '模块一 / 五' },
    { c: theme.light,  t: '结构化意识', d: '用清晰的步骤与框架代替随意联想', m: '全程' },
    { c: theme.accent, t: '批判意识',  d: '对自己和 AI 给的结论都保持"再核验一次"', m: '模块二 / 三' },
    { c: theme.light,  t: '人机协同意识', d: '清楚人和 AI 各自的优势边界，主动设计分工', m: '全程（中心轴）' },
    { c: theme.accent, t: '风险意识',  d: '在行动前主动思考"可能哪里会出问题"', m: '模块四' }
  ];
  cons.forEach((c, i) => {
    const y = 1.65 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.58,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.58,
      fill: { color: c.c }, line: { color: c.c, width: 0 }
    });
    s.addText(c.t, {
      x: 0.75, y: y + 0.1, w: 2.2, h: 0.38,
      fontSize: 14, fontFace: 'Microsoft YaHei', color: c.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(c.d, {
      x: 2.95, y: y + 0.1, w: 5.6, h: 0.38,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
    s.addText(c.m, {
      x: 8.55, y: y + 0.1, w: 0.85, h: 0.38,
      fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.muted,
      align: 'right', valign: 'middle', margin: 0
    });
  });

  s.addText('19', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };