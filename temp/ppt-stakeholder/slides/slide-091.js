// slide-091.js - 陈静：完整复盘
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addCompareTable } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范复盘', theme.primary);
  addContentTitle(slide, '陈静  /  完整复盘：从模糊到可预测的转变', '把"陈静这个人怎么样"替换成"陈静在岗位上的真实处境"');

  // 误区 vs 正确
  const rows = [
    { left: '她做IT的，应该对系统项目天然感兴趣', right: '她在意的是系统稳定性，不是"是否上线"。需求不稳的项目她天然警惕' },
    { left: '跟她讲"集团数字化转型"会让她支持', right: '她需要看见"做得到"的技术依据——宏大叙事对她无效' },
    { left: '她是支持者，不用特别花精力', right: '她是关键节点+天然受益者双重角色——需要明确的话语权保障' },
    { left: '正式邮件发个需求规格就行', right: '先非正式探底（茶/饭）+ 正式沟通 + 借力CTO背书——三步组合' },
    { left: '只要她支持就能推动', right: '还要预判需求变更风险，提前签变更流程——这是协作的最大障碍' }
  ];
  addCompareTable(slide, rows, {
    x: 0.5, y: 1.7, colW: 4.35, rowH: 0.55,
    leftTitle: '常见误区（直觉判断）',
    rightTitle: '正确做法（画像支撑）'
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.75, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('一旦你知道她的KPI是什么、最怕什么、天然会在乎什么——"搞不定"就变成"找到正确切入点还没用"。', {
    x: 0.7, y: 4.75, w: 8.6, h: 0.55,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
