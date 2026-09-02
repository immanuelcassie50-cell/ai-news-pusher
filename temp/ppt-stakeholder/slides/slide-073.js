// slide-073.js - 角色类型六分类（详细表）
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addCompareTable } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度①', theme.primary);
  addContentTitle(slide, '六种角色：从权力与利益两个维度识别', '左列（被动支持） vs 右列（主动影响）');

  const rows = [
    { left: '天然支持者：项目成功对他有直接好处', right: '决策授权者：审批与资源最终由他决定' },
    { left: '执行关键节点：他卡住，流程就卡住', right: '资源控制者：掌管预算、人力、技术或关键渠道' },
    { left: '隐性影响者：不直接参与，但态度影响他人', right: '潜在阻力者：项目触及既有利益，可能主动拖延' }
  ];
  addCompareTable(slide, rows, {
    x: 0.5, y: 1.75, colW: 4.35, rowH: 0.8,
    leftTitle: '偏"配合"类（可借力）',
    rightTitle: '偏"卡点"类（需重点攻关）'
  });

  // 底部实用建议
  slide.addShape('rect', {
    x: 0.5, y: 4.45, w: 9, h: 0.7,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.5, y: 4.45, w: 0.08, h: 0.7,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('实用建议：把核心人物逐个过一遍，标注他属于哪一类（或哪几类），以及为什么。这会直接决定你在他身上投入多少时间。', {
    x: 0.75, y: 4.45, w: 8.7, h: 0.7,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: 'left', valign: 'middle', lineSpacing: 16
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
