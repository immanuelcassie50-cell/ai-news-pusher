// slide-084.js - 维度五：沟通协作要点
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度⑤', theme.primary);
  addContentTitle(slide, '维度⑤：沟通与协作要点', '把前面所有分析转化成"具体怎么与这个人打交道"的操作建议');

  // 顶部说明
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('具体到：在什么场合沟通？避开什么时机？先说什么？不要说什么？', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 三个具体问题
  const items = [
    { title: '与他沟通时需要注意什么？', desc: '时机、方式、禁忌话题、风格偏好——比如忙时不要提、避免让他觉得被"安排"。' },
    { title: '与他协作时最容易出现的障碍？', desc: '需求冻结后的修改？会议冲突？信息不同步？——预判到障碍，提前设流程规避。' },
    { title: '他身边有没有可以借力的关键影响者？', desc: '谁说话他比较听？谁可以帮你在他面前铺垫？——找到关键"二传手"。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 2.35, itemH: 0.85, gap: 0.15, w: 8.8 });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('写"保持良好关系"是无效建议；写"在她最忙时不要提"才是操作。', {
    x: 0.7, y: 4.95, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
