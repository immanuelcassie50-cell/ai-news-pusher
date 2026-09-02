// slide-077.js - 问题二：汇报链
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度②  /  问题二', theme.primary);
  addContentTitle(slide, '问题二：汇报链——他最怕让谁失望', '了解他的汇报链，等于了解他行动的真实驱动力');

  // 顶部问句
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 0.08, h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('他的直线上级是谁？横向汇报关系里，他在意谁的态度？', {
    x: 0.75, y: 1.7, w: 8.7, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });

  // 三个观察点
  const obs = [
    { num: '01', title: '直线上级是谁？', desc: '他的行为会优先响应直线上级的信号，而不是你。你的方案如果和他的直线上级意志一致，他会顺畅配合；不一致，他会拖延或应付。' },
    { num: '02', title: '横向关键人是谁？', desc: '他对谁汇报或频繁沟通？比如陈静同时向集团CTO和大区总经理赵磊汇报——赵磊的态度对她的配合度影响巨大。' },
    { num: '03', title: '他最怕让谁失望？', desc: '这是最直接的驱动力。一旦他最在意的人表态支持，他配合的意愿会显著提升。' }
  ];
  const startY = 2.4;
  obs.forEach(function (o, i) {
    const y = startY + i * 0.85;
    // 编号
    slide.addText(o.num, {
      x: 0.6, y: y, w: 0.6, h: 0.4,
      fontSize: 16, fontFace: FONT_EN,
      color: theme.accent, bold: true, align: 'left', valign: 'middle'
    });
    // 标题
    slide.addText(o.title, {
      x: 1.2, y: y, w: 8.3, h: 0.3,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
    // 描述
    slide.addText(o.desc, {
      x: 1.2, y: y + 0.3, w: 8.3, h: 0.5,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 14
    });
  });

  // 底部提示
  slide.addText('汇报关系不是组织图上的实线虚线——是"他实际响应谁"的判断。', {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
