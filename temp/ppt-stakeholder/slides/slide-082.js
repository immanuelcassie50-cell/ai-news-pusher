// slide-082.js - 维度四：态度与行为预判
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度④', theme.primary);
  addContentTitle(slide, '维度④：态度与行为预判', '结合前三维度，预判他对项目的天然态度——以及"切入哪里"最有效');

  // 顶部说明
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('预判必须有依据——他的KPI和这个项目的关系是什么？他的行为模式是什么？', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 三个切入问题
  const items = [
    { title: '他在乎什么？', desc: '项目能为他带来的价值，他天然会关注的点——找到他"主战场"和项目的连接点。' },
    { title: '他不在乎什么？', desc: '对他无效的说辞——不要把时间浪费在这里。比如对KPI导向的人讲宏大叙事。' },
    { title: '什么能真正打动他？', desc: '最有效的切入角度：利益切入 / 逻辑切入 / 情感切入（三选一或组合）。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 2.4, itemH: 0.85, gap: 0.15, w: 8.8 });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('最常见错误：对所有人用同一种切入方式。', {
    x: 0.7, y: 4.95, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
