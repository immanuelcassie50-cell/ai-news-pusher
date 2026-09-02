// slide-080.js - 维度三：个人诉求分析
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度③', theme.primary);
  addContentTitle(slide, '维度③：个人诉求分析', '在岗位利益之上，每个人还有个人层面的诉求');

  // 顶部说明
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('个人诉求不完全由岗位决定，但也不是随机的——和他目前的处境、过去的经历、未来的目标密切相关。', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 六大诉求类型 - 3x2
  const types = [
    { num: '1', title: '被认可 / 被看见', desc: '希望自己的付出和价值被公开承认；对「抢功」特别敏感' },
    { num: '2', title: '安全感 / 稳定', desc: '担心改变带来的不确定性；对「风险」高度警觉' },
    { num: '3', title: '掌控权', desc: '不喜欢被「空降」的方案；喜欢参与过程、有话语权' },
    { num: '4', title: '发展空间', desc: '希望这件事能让自己的能力或影响力提升' },
    { num: '5', title: '团队关系维护', desc: '不希望项目破坏他与下属或同事的关系' },
    { num: '6', title: '减轻负担', desc: '当前工作已经很满，不想再增加事情' }
  ];
  const startX = 0.5;
  const startY = 2.4;
  const cardW = 3.0;
  const cardH = 1.2;
  const gapX = 0.15;
  const gapY = 0.1;
  types.forEach(function (t, i) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    // 卡片
    slide.addShape('rect', {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 编号
    slide.addShape('ellipse', {
      x: x + 0.15, y: y + 0.18, w: 0.35, h: 0.35,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(t.num, {
      x: x + 0.15, y: y + 0.18, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: FONT_EN,
      color: theme.white, bold: true, align: 'center', valign: 'middle'
    });
    // 标题
    slide.addText(t.title, {
      x: x + 0.6, y: y + 0.18, w: cardW - 0.7, h: 0.35,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
    // 描述
    slide.addText(t.desc, {
      x: x + 0.15, y: y + 0.6, w: cardW - 0.25, h: cardH - 0.65,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 13
    });
  });

  // 底部提示
  slide.addText('同一个人可能同时有多种个人诉求。信息相对"软性"，需要通过观察来获取。', {
    x: 0.5, y: 4.9, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
