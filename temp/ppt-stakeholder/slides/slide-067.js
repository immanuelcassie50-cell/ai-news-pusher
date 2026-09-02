// slide-067.js - 赵德年的真实处境
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addTwoColumn } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像', theme.primary);
  addContentTitle(slide, '赵德年的真实处境', '把"我对这个人的印象"替换成"这个人坐在那个位置上的真实处境"');

  // 左栏：KPI压力
  const leftItems = [
    { title: '年底核心KPI', desc: '门店坪效提升 8% —— 对年终奖和未来晋升至关重要。' },
    { title: '资源争夺', desc: '未来三个月，运营团队精力要全用在「提坪效」上。' },
    { title: '统报系统影响', desc: '不能给主指标加分，反而会占用运营团队大量精力。' }
  ];
  // 右栏：态度真相
  const rightItems = [
    { title: '公开表态', desc: '他说了「支持」—— 在领导面前没有表示反对。' },
    { title: '真实态度', desc: '推是要推，但不能让它影响我的主指标。' },
    { title: '实际行为', desc: '关键协调时刻「很忙」；门店店长投诉时态度模糊。' }
  ];
  addTwoColumn(slide, leftItems, rightItems, {
    leftX: 0.5, rightX: 5.15, colW: 4.35, startY: 1.7, itemH: 0.85, gap: 0.15
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.65, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('方成的错误：从未坐在赵德年的位子上，想过那个位子上的人今年最大的压力是什么。', {
    x: 0.7, y: 4.65, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
