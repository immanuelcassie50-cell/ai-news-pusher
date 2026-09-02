// slide-089.js - 陈静：维度四态度预判
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addCompareTable } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范  /  维度④', theme.primary);
  addContentTitle(slide, '陈静  /  维度④ 态度与行为预判', '她在乎什么 / 她不在乎什么 / 什么能打动她');

  const rows = [
    { left: '需求的稳定性和技术方案的完整性；IT团队的工作量是否可控', right: '"集团数字化转型战略"之类的宏大叙事对她意义不大' },
    { left: '项目结果是否有可见的业务价值（支撑她的年终汇报）', right: '纯粹的关系型说服——她是技术型人格，需要看见"做得到"的技术依据' },
    { left: '一份清晰的需求规格说明书（必做/可选分明）', right: '一份说"尽快上线"的时间表——她要看的是现实计划，不是决心' },
    { left: '叶云明确表态"在需求变更上给IT部话语权"', right: '把决策权完全交给业务方——会让她立刻警觉' }
  ];
  addCompareTable(slide, rows, {
    x: 0.5, y: 1.75, colW: 4.35, rowH: 0.65,
    leftTitle: '她在乎什么（最有效的切入点）',
    rightTitle: '她不在乎什么（不要浪费时间的）'
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.65, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('切入点选择 = 利益切入 + 逻辑切入。技术型人格，看得见"做得到"才动。', {
    x: 0.7, y: 4.65, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
