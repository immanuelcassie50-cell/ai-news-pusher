// slide-075.js - 四个核心问题总览
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addTwoColumn } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度②', theme.primary);
  addContentTitle(slide, '四个核心问题：从岗位到项目的"利益推演"', '不同岗位的绩效来源天差地别');

  // 左栏：前两个问题
  const leftItems = [
    { title: '问题一：核心KPI和绩效压力', desc: '大区总经理在意整体业绩；运营经理在意执行效率；IT经理在意系统稳定性。' },
    { title: '问题二：汇报链（向谁负责）', desc: '了解他的汇报链，等于了解他最怕让谁失望。' }
  ];
  // 右栏：后两个问题
  const rightItems = [
    { title: '问题三：核心工作目标', desc: '今年最看重什么？职业发展下一步在哪里？组织内地位靠什么维持？' },
    { title: '问题四：项目对他的影响', desc: '成功对他意味着什么？失败对他意味着什么？这是配合度的核心。' }
  ];
  addTwoColumn(slide, leftItems, rightItems, {
    leftX: 0.5, rightX: 5.15, colW: 4.35, startY: 1.7, itemH: 1.4, gap: 0.2
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.65, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('你的项目是帮他们实现KPI，还是在KPI压力期给他们增加额外负担？', {
    x: 0.7, y: 4.65, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
