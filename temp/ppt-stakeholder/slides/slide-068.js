// slide-068.js - 深度画像的核心问题
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像', theme.primary);
  addContentTitle(slide, '深度画像的核心问题', '把模糊印象，替换成有岗位逻辑支撑的可预测判断');

  // 三个核心问题
  const items = [
    { title: '他坐在那个位置上，天然会在乎什么？', desc: '岗位职责、KPI、汇报关系——这些是可以从组织信息推断的客观内容。' },
    { title: '他的绩效是怎么算的？他最怕让谁失望？', desc: '了解他的汇报链，等于了解他行动的真实驱动力。' },
    { title: '这个项目对他意味着什么？成功和失败分别会带来什么？', desc: '项目对他的「利害」决定了他的配合度——而不是你的方案好不好。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 1.75, itemH: 0.9, gap: 0.2, w: 8.8 });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('一旦你知道一个人天然会在乎什么，"搞不定"就会变成"找到正确的切入点还没用"。', {
    x: 0.7, y: 4.8, w: 8.6, h: 0.5,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
