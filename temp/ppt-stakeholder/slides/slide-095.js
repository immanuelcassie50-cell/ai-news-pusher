// slide-095.js - 画像卡：维度二（岗位利益）
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  练习  /  维度②', theme.primary);
  addContentTitle(slide, '画像卡 3  /  维度② 岗位利益分析', '四个问题——大多数人在这一层最浅');

  // 顶部手形标记
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('✋ 练习  ·  人物画像卡 # ___  /  维度②', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 四个问题 + 填写区
  const qs = [
    { num: '①', title: '他的核心KPI和绩效压力是什么？' },
    { num: '②', title: '他需要向谁负责？他最怕让谁失望？' },
    { num: '③', title: '他今年最核心的工作目标和业绩来源是什么？' },
    { num: '④', title: '项目成功 / 失败，分别对他意味着什么？' }
  ];
  const startY = 2.3;
  const itemH = 0.65;
  qs.forEach(function (q, i) {
    const y = startY + i * itemH;
    // 编号
    slide.addText(q.num, {
      x: 0.5, y: y, w: 0.5, h: 0.4,
      fontSize: 18, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: 'left', valign: 'middle'
    });
    // 标题
    slide.addText(q.title, {
      x: 1.0, y: y, w: 8.5, h: 0.4,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
    // 填写线
    slide.addShape('line', {
      x: 1.0, y: y + 0.5, w: 8.5, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('写"他比较强势"不算——把性格描述替换成岗位信息。', {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
