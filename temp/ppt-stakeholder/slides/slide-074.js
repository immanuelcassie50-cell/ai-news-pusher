// slide-074.js - 维度二：岗位利益分析
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  维度②', theme.primary);
  addContentTitle(slide, '维度②：岗位利益分析', '这是整个画像框架中最重要的部分——也是大多数人分析得最浅的地方');

  // 顶部强调
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('岗位利益分析问的不是「他这个人怎么样」，而是四个可以查询和推断的问题。', {
    x: 0.7, y: 1.7, w: 8.6, h: 0.55,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 四个问题
  const qs = [
    { num: '1', title: '核心KPI和绩效压力是什么？', desc: '大区总经理在意整体业绩；运营经理在意执行效率；IT经理在意系统稳定性。' },
    { num: '2', title: '需要向谁负责，向谁汇报？', desc: '他的行动会倾向于「让直线上级满意」，而不是「支持你的项目」——除非这两件事是一件事。' },
    { num: '3', title: '最核心的工作目标和业绩来源？', desc: '今年最看重什么？职业发展下一步？组织内地位靠什么维持？' },
    { num: '4', title: '项目成功/失败对他的直接影响？', desc: '成功 = 更多工作量？更好的数据？更高的可见度？失败 = 被追责？省了一大堆麻烦？' }
  ];
  const startY = 2.4;
  const itemH = 0.6;
  const gap = 0.1;
  qs.forEach(function (q, i) {
    const y = startY + i * (itemH + gap);
    // 编号圆
    slide.addShape('ellipse', {
      x: 0.6, y: y + 0.1, w: 0.4, h: 0.4,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(q.num, {
      x: 0.6, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: FONT_EN,
      color: theme.white, bold: true, align: 'center', valign: 'middle'
    });
    // 标题
    slide.addText(q.title, {
      x: 1.15, y: y, w: 8.4, h: 0.3,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'top'
    });
    // 描述
    slide.addText(q.desc, {
      x: 1.15, y: y + 0.28, w: 8.4, h: itemH - 0.28,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'top'
    });
  });

  // 底部说明
  slide.addText('这四个问题，往往可以通过了解组织情况来回答——不需要高深的调研技能。', {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
