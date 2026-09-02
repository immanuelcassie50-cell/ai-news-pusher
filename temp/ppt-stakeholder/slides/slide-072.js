// slide-072.js - 维度一：基本定位
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度①', theme.primary);
  addContentTitle(slide, '维度①：基本定位', '他在这个项目中扮演什么角色——不是"他的职位是什么"');

  // 顶部说明
  slide.addText('问自己的问题：项目推进过程中，他起什么作用？', {
    x: 0.5, y: 1.65, w: 9, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: 'left', valign: 'middle'
  });

  // 6个角色类型 - 3x2 网格
  const roles = [
    { num: '1', title: '决策授权者', desc: '项目最终能否推进、资源能否到位，要经过他的审批或授权' },
    { num: '2', title: '资源控制者', desc: '掌管预算、人力、技术或关键渠道的人' },
    { num: '3', title: '执行关键节点', desc: '流程中某个关键环节的负责人，他卡住整个流程就卡住' },
    { num: '4', title: '隐性影响者', desc: '不直接参与，但他的态度会影响其他人跟不跟进' },
    { num: '5', title: '潜在阻力者', desc: '项目推进可能触及他的既有利益，他有动机让项目变慢或失败' },
    { num: '6', title: '天然支持者', desc: '项目成功对他有直接好处，他有内在动力配合推进' }
  ];
  const startX = 0.5;
  const startY = 2.1;
  const cardW = 3.0;
  const cardH = 1.35;
  const gapX = 0.15;
  const gapY = 0.1;
  roles.forEach(function (r, i) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    // 卡片背景
    slide.addShape('rect', {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 左侧色条
    slide.addShape('rect', {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: i < 2 ? theme.accent : theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 编号
    slide.addText(r.num, {
      x: x + 0.15, y: y + 0.1, w: 0.4, h: 0.35,
      fontSize: 16, fontFace: FONT_EN,
      color: theme.accent, bold: true, align: 'left', valign: 'middle'
    });
    // 标题
    slide.addText(r.title, {
      x: x + 0.5, y: y + 0.1, w: cardW - 0.6, h: 0.35,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
    // 描述
    slide.addText(r.desc, {
      x: x + 0.15, y: y + 0.5, w: cardW - 0.25, h: cardH - 0.55,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 15
    });
  });

  // 底部提示
  slide.addText('一个人可以同时属于多个类型。', {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
