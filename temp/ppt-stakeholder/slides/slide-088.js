// slide-088.js - 陈静：维度三个人诉求
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addTwoColumn } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范  /  维度③', theme.primary);
  addContentTitle(slide, '陈静  /  维度③ 个人诉求分析', '她最在意的事 + 她的核心顾虑');

  // 左栏：在意的事
  const leftItems = [
    { title: '她目前最在意的事', desc: '技术方案的可靠性——她不想接一个"推了一半再来反复改"的系统，这会让她的IT团队非常被动。' }
  ];
  // 右栏：核心顾虑
  const rightItems = [
    { title: '她的核心顾虑', desc: '需求不稳定——最担心"业务侧想法没想清楚，先让IT搭好了，后面一直改"。' }
  ];
  addTwoColumn(slide, leftItems, rightItems, {
    leftX: 0.5, rightX: 5.15, colW: 4.35, startY: 1.7, itemH: 1.3, gap: 0.2
  });

  // 关键经历
  slide.addShape('rect', {
    x: 0.5, y: 3.45, w: 9, h: 1.5,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.5, y: 3.45, w: 0.08, h: 1.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('关键经历：一次"被仓促推进"的项目', {
    x: 0.75, y: 3.55, w: 8.7, h: 0.35,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('过去她接了一个业务主导的系统项目，前期沟通不充分，上线后暴露大量bug，她的团队花了半年做修补，年终绩效因此受影响。这个经历让她对"被仓促推进"的项目有额外的警惕。', {
    x: 0.75, y: 3.9, w: 8.7, h: 1.0,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 16
  });

  // 底部金句
  slide.addText('如果叶云给她"需求清晰、节奏稳定、有完整规划"的信号，她的配合度会大幅提升。', {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
