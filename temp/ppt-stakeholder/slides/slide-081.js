// slide-081.js - 个人诉求类型
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addCompareTable } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度③', theme.primary);
  addContentTitle(slide, '六类诉求：判断"他在项目中最想要什么"', '岗位利益是客观的，个人诉求是主观的——别混着填');

  const rows = [
    { left: '被认可/被看见', right: '希望付出被公开承认；对"抢功"特别敏感' },
    { left: '安全感/稳定', right: '担心改变带来的不确定性；对"风险"高度警觉' },
    { left: '掌控权', right: '不喜欢被"空降"的方案；喜欢参与过程、有话语权' },
    { left: '发展空间', right: '希望这件事能让自己的能力或影响力提升' },
    { left: '团队关系维护', right: '不希望项目破坏他与下属或同事的关系' },
    { left: '减轻负担', right: '当前工作已经很满，不想再增加事情' }
  ];
  addCompareTable(slide, rows, {
    x: 0.5, y: 1.75, colW: 4.35, rowH: 0.5,
    leftTitle: '诉求类型',
    rightTitle: '典型表现'
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 5.0, w: 9, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('区分：岗位利益是组织信息可推断；个人诉求需要观察才能了解。', {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
