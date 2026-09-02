// slide-094.js - 画像卡：维度一（基本定位）
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  练习  /  维度①', theme.primary);
  addContentTitle(slide, '画像卡 2  /  维度① 基本定位', '他在项目中扮演什么角色（可多选，并说明为什么）');

  // 顶部手形标记
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('✋ 练习  ·  人物画像卡 # ___  /  维度①', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 6个角色类型 - 复选风格
  slide.addText('角色类型（可多选）：', {
    x: 0.5, y: 2.35, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: 'left', valign: 'middle'
  });

  const types = [
    { num: 'A', title: '决策授权者' },
    { num: 'B', title: '资源控制者' },
    { num: 'C', title: '执行关键节点' },
    { num: 'D', title: '隐性影响者' },
    { num: 'E', title: '潜在阻力者' },
    { num: 'F', title: '天然支持者' }
  ];
  // 3x2 网格
  const startX = 0.5;
  const startY = 2.7;
  const cardW = 3.0;
  const cardH = 0.55;
  const gapX = 0.15;
  const gapY = 0.1;
  types.forEach(function (t, i) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    // 复选框
    slide.addShape('rect', {
      x: x, y: y, w: 0.3, h: 0.3,
      fill: { color: theme.white },
      line: { color: theme.primary, width: 1.5 }
    });
    // 编号
    slide.addText(t.num, {
      x: x + 0.4, y: y, w: 0.4, h: 0.3,
      fontSize: 12, fontFace: FONT_EN,
      color: theme.accent, bold: true, align: 'left', valign: 'middle'
    });
    // 标题
    slide.addText(t.title, {
      x: x + 0.8, y: y, w: cardW - 0.8, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
  });

  // 填写区域
  slide.addText('为什么选这些类型？', {
    x: 0.5, y: 4.0, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: 'left', valign: 'middle'
  });
  // 横线（书写区）
  for (let i = 0; i < 3; i++) {
    const y = 4.3 + i * 0.32;
    slide.addShape('line', {
      x: 0.5, y: y, w: 9, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
  }

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
