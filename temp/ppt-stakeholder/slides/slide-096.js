// slide-096.js - 画像卡：维度三到五
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  练习  /  维度③-⑤', theme.primary);
  addContentTitle(slide, '画像卡 4  /  维度③到⑤  ·  个人诉求 + 预判 + 沟通', '从"他是谁"走到"怎么与他打交道"');

  // 顶部手形标记
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('✋ 练习  ·  人物画像卡 # ___  /  维度③-⑤', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 三个维度分组
  const groups = [
    {
      title: '维度③ 个人诉求',
      qs: ['他目前最在意的事情是什么？', '他有哪些顾虑或潜在担忧？']
    },
    {
      title: '维度④ 态度与行为预判',
      qs: ['他对这个项目天然会持什么态度？', '他在乎什么 / 不在乎什么？', '什么最有可能打动他？']
    },
    {
      title: '维度⑤ 沟通与协作要点',
      qs: ['与他沟通时需要注意什么？', '与他协作时最容易出现的障碍？', '他身边有没有可以借力的关键人？']
    }
  ];
  const startY = 2.3;
  const groupH = 0.85;
  groups.forEach(function (g, i) {
    const y = startY + i * (groupH + 0.05);
    // 左侧色条
    slide.addShape('rect', {
      x: 0.5, y: y, w: 0.08, h: groupH,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    // 标题
    slide.addText(g.title, {
      x: 0.7, y: y, w: 2.5, h: groupH,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: 'left', valign: 'middle'
    });
    // 问题列表
    const qsText = g.qs.map(function (q, idx) { return (idx + 1) + '. ' + q; }).join('   ');
    slide.addText(qsText, {
      x: 3.3, y: y, w: 6.2, h: groupH,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'middle', lineSpacing: 14
    });
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('按此格式，把你剩余的5~7个核心人物逐一完成。每完成一张，画像体系就完整一点。', {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
