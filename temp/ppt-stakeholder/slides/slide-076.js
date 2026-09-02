// slide-076.js - 问题一：KPI与绩效
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度②  /  问题一', theme.primary);
  addContentTitle(slide, '问题一：核心KPI和绩效压力', '不同岗位的绩效来源天差地别——这是判断"他会多配合"的第一步');

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
  slide.addText('他今年背的核心指标是什么？他的压力来自哪里？', {
    x: 0.75, y: 1.7, w: 8.7, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });

  // 各岗位示例
  const items = [
    { title: '大区总经理', desc: '在意整体业绩、区域市场份额；项目能加业绩就支持，反之则阻力大。' },
    { title: '运营经理', desc: '在意执行效率和问题数量；项目会增加工作量的，配合度直接下降。' },
    { title: 'IT经理', desc: '在意系统稳定性和故障次数；新系统如果带来不稳定风险，天生警惕。' },
    { title: '财务经理', desc: '在意准确率和合规性；项目如果触及合规灰色地带，态度保守。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 2.35, itemH: 0.55, gap: 0.1, w: 8.8 });

  // 底部判断逻辑
  slide.addShape('rect', {
    x: 0.5, y: 4.85, w: 9, h: 0.45,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('判断：项目是帮他们实现KPI，还是在KPI压力期给他们增加额外负担？', {
    x: 0.7, y: 4.85, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
