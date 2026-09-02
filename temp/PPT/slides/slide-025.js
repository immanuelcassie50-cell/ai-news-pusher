// slide-025.js — Problem portrait card: detailed example
const slideConfig = { type: 'content-text', index: 25 };
function createSlide(pres, theme) {
  const s = pres.addSlide();
  s.background = { color: theme.primary };

  s.addText('P25  · 问题画像卡 · 范例', {
    x: 0.5, y: 0.4, w: 6, h: 0.3,
    fontSize: 10, fontFace: 'Georgia', color: theme.accent, charSpacing: 4, margin: 0
  });
  s.addText('一个真实问题的"画像"', {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei', color: theme.bg, bold: true, margin: 0
  });
  s.addText('问题陈述  ·  如何让下一次客户交付按期上线？', {
    x: 0.5, y: 1.45, w: 9, h: 0.4,
    fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, italic: true, margin: 0
  });

  const rows = [
    { l: '现象', v: '客户版本比计划晚 14 天上线，期间发生 3 次阻塞沟通', c: theme.accent },
    { l: '范围', v: '本季度涉及 4 个客户项目中的 3 个；执行团队 7 人 + 客户接口人', c: theme.light },
    { l: '时间', v: '过去 2 个月连续发生 4 次；前 6 个月类似问题仅 1 次', c: theme.accent },
    { l: '影响', v: '客户满意度评分从 4.6 跌到 3.9；预付续约意愿下降', c: theme.light },
    { l: '排除', v: '不是销售阶段签错了预期；不是资源不足（人力配置未变）', c: theme.accent }
  ];
  rows.forEach((r, i) => {
    const y = 2.05 + i * 0.55;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 9, h: 0.48,
      fill: { color: theme.secondary }, line: { color: theme.divider, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.08, h: 0.48,
      fill: { color: r.c }, line: { color: r.c, width: 0 }
    });
    s.addText(r.l, {
      x: 0.75, y: y + 0.05, w: 0.9, h: 0.38,
      fontSize: 12, fontFace: 'Microsoft YaHei', color: r.c, bold: true,
      valign: 'middle', margin: 0
    });
    s.addText(r.v, {
      x: 1.7, y: y + 0.05, w: 7.7, h: 0.38,
      fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.bg,
      valign: 'middle', margin: 0
    });
  });

  s.addText('25', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Georgia', color: theme.accent, bold: true,
    align: 'center', valign: 'middle', margin: 0
  });
}
module.exports = { createSlide, slideConfig };