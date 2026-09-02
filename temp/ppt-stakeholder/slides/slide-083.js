// slide-083.js - 三种切入角度
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度④', theme.primary);
  addContentTitle(slide, '三种切入角度：选对"打动他"的方式', '切入点的选择逻辑是"他的信息处理偏好"，不是"你的习惯"');

  // 三个并排卡片
  const ways = [
    {
      num: '01', title: '利益切入',
      sub: '用数据或案例说明"这件事能帮你实现你在乎的目标"',
      apply: 'KPI导向强、结果驱动的人',
      danger: '对"过程体验"重视的人效果有限'
    },
    {
      num: '02', title: '逻辑切入',
      sub: '用清晰的论证说明"为什么这件事是对的"',
      apply: '分析型、对可行性存有理性疑虑的人',
      danger: '对关系导向的人容易显得冷冰冰'
    },
    {
      num: '03', title: '情感切入',
      sub: '用参与感、被重视感、信任关系来推动',
      apply: '对关系和过程体验看重的人；在意"自己立场被尊重"的人',
      danger: '对强KPI导向的人效果有限'
    }
  ];
  const startX = 0.4;
  const cardW = 3.1;
  const cardH = 3.2;
  const gap = 0.1;
  ways.forEach(function (w, i) {
    const x = startX + i * (cardW + gap);
    const y = 1.75;
    // 卡片
    slide.addShape('rect', {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色块
    slide.addShape('rect', {
      x: x, y: y, w: cardW, h: 0.7,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 编号
    slide.addText(w.num, {
      x: x + 0.15, y: y + 0.1, w: cardW - 0.3, h: 0.3,
      fontSize: 11, fontFace: FONT_EN,
      color: theme.light, bold: true, align: 'left', valign: 'middle'
    });
    // 标题
    slide.addText(w.title, {
      x: x + 0.15, y: y + 0.3, w: cardW - 0.3, h: 0.4,
      fontSize: 18, fontFace: FONT_CN,
      color: theme.white, bold: true, align: 'left', valign: 'middle'
    });
    // 描述
    slide.addText(w.sub, {
      x: x + 0.15, y: y + 0.85, w: cardW - 0.3, h: 0.7,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 14
    });
    // 适用
    slide.addShape('rect', {
      x: x + 0.15, y: y + 1.65, w: cardW - 0.3, h: 0.7,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText('适用：' + w.apply, {
      x: x + 0.25, y: y + 1.65, w: cardW - 0.5, h: 0.7,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.dark, align: 'left', valign: 'middle', lineSpacing: 13
    });
    // 风险
    slide.addText('风险：' + w.danger, {
      x: x + 0.15, y: y + 2.4, w: cardW - 0.3, h: 0.7,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.accent, italic: true, align: 'left', valign: 'top', lineSpacing: 13
    });
  });

  // 底部金句
  slide.addText('强KPI的人讲关系效果有限；重自主权的人用数据说服可能引发"被安排"的抵触。', {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
