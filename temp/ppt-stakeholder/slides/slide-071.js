// slide-071.js - 深度画像五维框架
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像', theme.primary);
  addContentTitle(slide, '深度画像五维框架', '五个维度有逻辑顺序：岗位处境 → 个人层面 → 预判 → 沟通要点');

  // 五个维度卡片
  const dims = [
    { num: '01', title: '基本定位', desc: '他在这个项目中扮演什么角色' },
    { num: '02', title: '岗位利益', desc: 'KPI / 汇报链 / 核心目标 / 项目影响' },
    { num: '03', title: '个人诉求', desc: '被认可 / 安全感 / 掌控权 / 发展空间...' },
    { num: '04', title: '态度预判', desc: '他在乎什么 / 不在乎什么 / 怎么打动他' },
    { num: '05', title: '沟通要点', desc: '时机方式 / 协作障碍 / 借力关键人' }
  ];
  const startX = 0.4;
  const cardW = 1.84;
  const gap = 0.08;
  const cardY = 1.85;
  const cardH = 2.6;
  dims.forEach(function (d, i) {
    const x = startX + i * (cardW + gap);
    // 卡片背景
    slide.addShape('rect', {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色条
    slide.addShape('rect', {
      x: x, y: cardY, w: cardW, h: 0.08,
      fill: { color: i === 0 || i === 1 ? theme.accent : theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 编号
    slide.addText(d.num, {
      x: x, y: cardY + 0.2, w: cardW, h: 0.5,
      fontSize: 28, fontFace: FONT_EN,
      color: theme.primary, bold: true, align: 'center', valign: 'middle'
    });
    // 分隔线
    slide.addShape('rect', {
      x: x + cardW / 2 - 0.2, y: cardY + 0.85, w: 0.4, h: 0.03,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    // 标题
    slide.addText(d.title, {
      x: x, y: cardY + 1.0, w: cardW, h: 0.4,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'center', valign: 'middle'
    });
    // 描述
    slide.addText(d.desc, {
      x: x + 0.1, y: cardY + 1.5, w: cardW - 0.2, h: 1.0,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: 'center', valign: 'top', lineSpacing: 14
    });
  });

  // 底部提示
  slide.addText('按顺序来，不要跳着填。', {
    x: 0.5, y: 4.7, w: 9, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });
  slide.addText('这是整个画像框架中最重要的部分——也是大多数人分析得最浅的地方。', {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
