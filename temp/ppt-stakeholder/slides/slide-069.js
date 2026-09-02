// slide-069.js - 重要前提：放下性格判断
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像', theme.primary);
  addContentTitle(slide, '重要前提：先放下「他这个人怎么样」', '深度画像最容易走偏的一步，就是变成"性格分析"');

  // 两栏对比
  // 左栏：性格判断
  slide.addShape('rect', {
    x: 0.5, y: 1.75, w: 4.35, h: 0.5,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText('性格判断（主观 · 难以预测）', {
    x: 0.5, y: 1.75, w: 4.35, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'center', valign: 'middle'
  });
  slide.addShape('rect', {
    x: 0.5, y: 2.25, w: 4.35, h: 2.6,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText('「他比较保守」「她很强势」「这人不好打交道」', {
    x: 0.7, y: 2.4, w: 4, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('这类描述的问题：', {
    x: 0.7, y: 2.9, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('·  哪种程度的保守？\n·  在什么事情上保守？\n·  跟谁说话时保守？\n·  没有可操作的指引', {
    x: 0.7, y: 3.25, w: 4, h: 1.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 20
  });

  // 右栏：岗位利益
  slide.addShape('rect', {
    x: 5.15, y: 1.75, w: 4.35, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('岗位利益（客观 · 可预测）', {
    x: 5.15, y: 1.75, w: 4.35, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'center', valign: 'middle'
  });
  slide.addShape('rect', {
    x: 5.15, y: 2.25, w: 4.35, h: 2.6,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText('他的KPI是什么？他向谁汇报？', {
    x: 5.35, y: 2.4, w: 4, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('这类信息的优势：', {
    x: 5.35, y: 2.9, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: 'left', valign: 'middle'
  });
  slide.addText('·  公开的绩效体系可查\n·  组织架构可看\n·  跟了解情况的人聊两句\n·  不依赖主观感受', {
    x: 5.35, y: 3.25, w: 4, h: 1.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 20
  });

  // 底部提示
  slide.addText('分析的起点永远是：他坐在那个位置上，天然会在乎什么。', {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: 'center', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
