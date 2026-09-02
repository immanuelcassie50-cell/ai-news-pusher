// slide-079.js - 问题四：项目影响
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle, addTwoColumn } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度②  /  问题四', theme.primary);
  addContentTitle(slide, '问题四：项目成功/失败对他的直接影响', '把"项目对他意味着什么"想清楚——这决定他配合的力度');

  // 顶部问句
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.5,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 0.08, h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('站在他的椅子上想：项目成功，他得到什么？失败，他失去什么？', {
    x: 0.75, y: 1.7, w: 8.7, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });

  // 左栏：成功的影响
  const leftItems = [
    { title: '更多工作量？', desc: '上线后他要持续维护——如果他本就超负荷，这就是负担。' },
    { title: '更好的数据报告？', desc: '项目能让他的汇报材料更漂亮——这会显著提升他的支持度。' },
    { title: '更高的可见度？', desc: '项目能否让他的名字出现在集团层面的成果里？可见度是关键动力。' }
  ];
  // 右栏：失败的影响
  const rightItems = [
    { title: '被追责？', desc: '如果项目失败会被归因到他的部门，他会非常保守；反之他会积极推动。' },
    { title: '没什么影响？', desc: '如果失败对他"无所谓"，他的优先级会立刻让位给自己的主指标。' },
    { title: '省去一大堆麻烦？', desc: '最危险的信号——他内心希望项目失败，这样他可以维持现状。' }
  ];
  addTwoColumn(slide, leftItems, rightItems, {
    leftX: 0.5, rightX: 5.15, colW: 4.35, startY: 2.35, itemH: 0.75, gap: 0.1
  });

  // 底部金句
  slide.addText('最危险的情况：他"无所谓"成败，且失败反而让他更轻松。', {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
