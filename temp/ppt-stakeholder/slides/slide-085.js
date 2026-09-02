// slide-085.js - 示范人物：陈静
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范', theme.primary);
  addContentTitle(slide, '示范人物：陈静（IT部华北区负责人）', '叶云对IT部负责人陈静的完整五维画像——请你在读时同步思考：你的某个核心人物会有什么不同？');

  // 左侧人物档案卡
  slide.addShape('rect', {
    x: 0.5, y: 1.75, w: 3.2, h: 3.2,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  // 档案顶部装饰
  slide.addShape('rect', {
    x: 0.5, y: 1.75, w: 3.2, h: 0.08,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('人物档案', {
    x: 0.7, y: 1.95, w: 2.8, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, bold: true, align: 'left', valign: 'middle',
    charSpacing: 6
  });
  slide.addText('陈静', {
    x: 0.7, y: 2.3, w: 2.8, h: 0.6,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('IT部华北区负责人', {
    x: 0.7, y: 2.95, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.light, align: 'left', valign: 'middle'
  });
  // 档案字段
  const fields = [
    { k: '性别', v: '女' },
    { k: '年龄', v: '42岁' },
    { k: '背景', v: 'IT出身' },
    { k: '工龄', v: '华北区13年' }
  ];
  fields.forEach(function (f, i) {
    const y = 3.55 + i * 0.32;
    slide.addText(f.k, {
      x: 0.7, y: y, w: 0.8, h: 0.28,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.light, align: 'left', valign: 'middle'
    });
    slide.addText(f.v, {
      x: 1.5, y: y, w: 2, h: 0.28,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.white, bold: true, align: 'left', valign: 'middle'
    });
  });

  // 右侧：维度预览
  slide.addText('五维画像速览', {
    x: 4.0, y: 1.85, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });
  // 分隔线
  slide.addShape('rect', {
    x: 4.0, y: 2.25, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  const dims = [
    { num: '①', title: '基本定位', result: '资源控制者 × 天然支持者' },
    { num: '②', title: '岗位利益', result: 'KPI：系统稳定性 + 重点项目按期交付' },
    { num: '③', title: '个人诉求', result: '技术方案可靠性；最怕需求不稳定' },
    { num: '④', title: '态度预判', result: '需要清晰需求规格 + 完整时间计划' },
    { num: '⑤', title: '沟通要点', result: '非正式探底 + 借力集团CTO背书' }
  ];
  dims.forEach(function (d, i) {
    const y = 2.4 + i * 0.5;
    // 编号
    slide.addText(d.num, {
      x: 4.0, y: y, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: 'left', valign: 'middle'
    });
    // 标题
    slide.addText(d.title, {
      x: 4.5, y: y, w: 1.3, h: 0.4,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: 'left', valign: 'middle'
    });
    // 结果
    slide.addText(d.result, {
      x: 5.85, y: y, w: 3.7, h: 0.4,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: 'left', valign: 'middle'
    });
  });

  // 底部提示
  slide.addText('下一页开始，详细展示每一个维度的分析过程。', {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
