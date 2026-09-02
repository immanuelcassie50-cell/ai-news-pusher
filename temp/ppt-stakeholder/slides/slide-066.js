// slide-066.js - 开场：害了方成的那句话
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addQuote } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像', theme.primary);
  addContentTitle(slide, '开场：害了方成的那句话', '方成在项目启动时，对华南区大区总经理有一个判断...');

  // 引述
  addQuote(slide, '"领导说推，他肯定支持。" —— 这是方成在项目启动时，对华南区大区总经理赵德年的判断。', {
    x: 0.6, y: 1.7, w: 8.8, h: 1.2
  });

  // 关键解读
  addContentTitle.title = '';
  slide.addText('这个判断来自哪里？', {
    x: 0.6, y: 3.0, w: 8.8, h: 0.35,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('来自直觉。来自「常识」——总部让推，领导当然会支持嘛。', {
    x: 0.6, y: 3.32, w: 8.8, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'middle'
  });

  // 错误总结
  slide.addShape('rect', {
    x: 0.6, y: 3.85, w: 8.8, h: 1.2,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.6, y: 3.85, w: 0.08, h: 1.2,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('但这个判断完全是错的。', {
    x: 0.85, y: 3.95, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('他没有公开说反对。他说了「支持」。但当方成需要他在关键时刻协调资源时，他总是「很忙，改天再说」；当一些门店店长找他投诉时，他态度模糊——这种模糊被下面的人解读成「领导对这事其实没那么在意」。', {
    x: 0.85, y: 4.35, w: 8.5, h: 0.7,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 16
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
