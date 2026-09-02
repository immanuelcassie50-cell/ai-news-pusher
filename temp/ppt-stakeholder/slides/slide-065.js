// slide-065.js - 第三部分：章节封面
const { THEME, FONT_CN, FONT_EN } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 背景大色块（深红）
  slide.addShape('rect', {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  // 装饰斜线
  slide.addShape('line', {
    x: 0, y: 0, w: 4, h: 1.5,
    line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape('line', {
    x: 6, y: 4.1, w: 4, h: 1.5,
    line: { color: theme.accent, width: 1.5 }
  });
  // 底部装饰条
  slide.addShape('rect', {
    x: 0, y: 5.45, w: 10, h: 0.18,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // PART 标签
  slide.addText('PART', {
    x: 0.7, y: 1.2, w: 2, h: 0.4,
    fontSize: 16, fontFace: FONT_EN,
    color: theme.light, bold: true, align: 'left', valign: 'middle',
    charSpacing: 10
  });
  // 巨大编号
  slide.addText('03', {
    x: 0.7, y: 1.5, w: 4, h: 2.5,
    fontSize: 200, fontFace: FONT_EN,
    color: theme.white, bold: true, align: 'left', valign: 'top'
  });

  // 右侧：标题
  slide.addText('深度画像', {
    x: 4.5, y: 2.2, w: 5, h: 0.9,
    fontSize: 56, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });
  // 副标
  slide.addText('看见岗位背后的真实诉求', {
    x: 4.5, y: 3.2, w: 5, h: 0.5,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.light, align: 'left', valign: 'middle'
  });
  // 英文副标
  slide.addText('Deep Persona Mapping', {
    x: 4.5, y: 3.7, w: 5, h: 0.4,
    fontSize: 13, fontFace: FONT_EN,
    color: theme.light, align: 'left', valign: 'middle',
    charSpacing: 3
  });

  // 底部章节进度
  slide.addText('六部分中的  /  3 / 6', {
    x: 0.7, y: 4.7, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: 'left', valign: 'middle',
    charSpacing: 3
  });

  // 底部品牌
  slide.addText('利益相关方深度实战  ·  授课PPT', {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.white, align: 'left', valign: 'middle'
  });
  slide.addText('065 / 170', {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.white, align: 'right', valign: 'middle'
  });
}

module.exports = { createSlide };
