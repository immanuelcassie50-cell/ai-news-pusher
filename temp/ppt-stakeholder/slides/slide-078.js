// slide-078.js - 问题三：核心目标
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度②  /  问题三', theme.primary);
  addContentTitle(slide, '问题三：核心工作目标与业绩来源', '他今年最看重什么？职业发展下一步在哪里？');

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
  slide.addText('他今年的"主战场"是什么？他在组织内的地位靠什么维持？', {
    x: 0.75, y: 1.7, w: 8.7, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });

  // 三个核心问题
  const items = [
    { title: '他今年最看重的事情是什么？', desc: '不只是KPI——是他在组织内证明自己价值的"主战场"。把项目嵌入他的主战场，他会自然推进。' },
    { title: '他的职业发展下一步在哪里？', desc: '晋升？轮岗？转管理？转业务？项目能为他下一步"加分"吗？这决定他投入的精力。' },
    { title: '他在组织内的地位靠什么维持？', desc: '是业务能力？人脉？资历？还是不可替代的"关键人"位置？搞清楚这点，就知道他对项目的"安全感"边界。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 2.35, itemH: 0.85, gap: 0.15, w: 8.8 });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('这些问题的答案，决定了他面对你的项目时会优先考虑什么。', {
    x: 0.7, y: 4.9, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
