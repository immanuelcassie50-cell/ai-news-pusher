// slide-092.js - 练习：深度画像卡（封面）
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  练习', theme.primary);
  addContentTitle(slide, '练习：完成你的第一张深度画像', '用陈静示范为参考，完成6~8个核心人物中的第一张');

  // 顶部手形标记 + 关键提示
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.7,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  // 手形符号
  slide.addText('✋', {
    x: 0.7, y: 1.75, w: 0.6, h: 0.6,
    fontSize: 32, fontFace: FONT_EN,
    color: theme.white, bold: true, align: 'center', valign: 'middle'
  });
  slide.addText('深度画像分析卡  ·  每张预计 15~20 分钟', {
    x: 1.4, y: 1.7, w: 7.8, h: 0.7,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 关键建议
  slide.addText('建议从「你目前最难判断」或「你感觉最重要」的那个人开始。', {
    x: 0.5, y: 2.55, w: 9, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: 'left', valign: 'middle'
  });

  // 练习步骤 - 5个步骤
  const steps = [
    { num: '1', title: '基本信息', desc: '姓名、部门岗位、年龄范围、任职时间' },
    { num: '2', title: '维度①', desc: '基本定位（6种角色类型，可多选）' },
    { num: '3', title: '维度②', desc: '岗位利益（4个核心问题）' },
    { num: '4', title: '维度③', desc: '个人诉求（在意的事 + 顾虑）' },
    { num: '5', title: '维度④⑤', desc: '态度预判 + 沟通要点' }
  ];
  const cardW = 1.78;
  const cardH = 1.5;
  const startX = 0.5;
  const startY = 3.1;
  const gap = 0.07;
  steps.forEach(function (s, i) {
    const x = startX + i * (cardW + gap);
    slide.addShape('rect', {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape('rect', {
      x: x, y: startY, w: cardW, h: 0.08,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    // 编号
    slide.addText(s.num, {
      x: x, y: startY + 0.15, w: cardW, h: 0.45,
      fontSize: 22, fontFace: FONT_EN,
      color: theme.accent, bold: true, align: 'center', valign: 'middle'
    });
    // 标题
    slide.addText(s.title, {
      x: x, y: startY + 0.65, w: cardW, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'center', valign: 'middle'
    });
    // 描述
    slide.addText(s.desc, {
      x: x + 0.1, y: startY + 0.95, w: cardW - 0.2, h: 0.5,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: 'center', valign: 'top', lineSpacing: 13
    });
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.85, w: 9, h: 0.45,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('认真填写，不要敷衍——这一步的质量直接决定后面破局策略的有效性。', {
    x: 0.7, y: 4.85, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
