// slide-093.js - 画像卡：基本信息
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  练习  /  基本信息', theme.primary);
  addContentTitle(slide, '画像卡 1  /  基本信息', '用基础信息建立"这是谁"的基本档案');

  // 顶部手形标记
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('✋ 练习  ·  人物画像卡 # ___', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 表格 - 4个字段
  const fields = [
    { k: '姓名 / 称呼', v: '________________________' },
    { k: '部门 / 岗位', v: '________________________' },
    { k: '年龄（大概范围）', v: '________________________' },
    { k: '在这个组织/岗位上的时间', v: '________________________' }
  ];
  fields.forEach(function (f, i) {
    const y = 2.35 + i * 0.55;
    // 左侧色条
    slide.addShape('rect', {
      x: 0.5, y: y, w: 0.08, h: 0.5,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    // 字段名
    slide.addText(f.k, {
      x: 0.7, y: y, w: 2.5, h: 0.5,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
    // 填写区
    slide.addShape('rect', {
      x: 3.3, y: y, w: 6.2, h: 0.5,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(f.v, {
      x: 3.5, y: y, w: 6, h: 0.5,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.mid, align: 'left', valign: 'middle'
    });
  });

  // 底部实用提示
  slide.addShape('rect', {
    x: 0.5, y: 4.7, w: 9, h: 0.6,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.5, y: 4.7, w: 0.08, h: 0.6,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('这些字段看似简单——但很多人对"任职时间"都没想清楚。它是判断他对组织熟悉度、影响力深度的关键信息。', {
    x: 0.75, y: 4.7, w: 8.7, h: 0.6,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, align: 'left', valign: 'middle', lineSpacing: 16
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
