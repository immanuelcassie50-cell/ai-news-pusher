// slide-090.js - 陈静：维度五沟通要点
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addBulletList } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范  /  维度⑤', theme.primary);
  addContentTitle(slide, '陈静  /  维度⑤ 沟通与协作要点', '把前面所有分析转化成"具体怎么打交道"');

  // 三个具体问题
  const items = [
    { title: '沟通注意事项', desc: '正式沟通前先非正式探底（一起喝茶/午饭），了解她目前的工作量状态。话题焦点：技术实现可行性 + IT团队合理工作量——不是"业务有多需要"。' },
    { title: '协作障碍预判', desc: '最容易出问题：需求冻结之后业务侧中途提修改，她的团队承担返工压力→态度急转。预防：立项前把"需求变更流程"谈清楚，双方签字确认。' },
    { title: '借力关键人', desc: '她非常信任集团CTO（直线上级）。叶云后来借助总部项目负责人林峰，请他推动了CTO的正式背书——整个IT协作顺畅很多。' }
  ];
  addBulletList(slide, items, { x: 0.6, y: 1.75, itemH: 1.1, gap: 0.15, w: 8.8 });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('"在她最忙时不要提"是有效建议；"保持良好关系"是无效建议——具体到操作上。', {
    x: 0.7, y: 4.95, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
