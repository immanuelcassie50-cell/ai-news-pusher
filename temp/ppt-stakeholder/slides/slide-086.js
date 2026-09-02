// slide-086.js - 陈静：维度一基本定位
const { THEME, FONT_CN, FONT_EN, addPartMark, addBottomBrand, addContentTitle } = require('./design-system.js');

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  addPartMark(slide, 'PART 03  /  深度画像  /  示范  /  维度①', theme.primary);
  addContentTitle(slide, '陈静  /  维度① 基本定位', '资源控制者 × 天然支持者（双重角色）');

  // 顶部角色定位
  slide.addShape('rect', {
    x: 0.5, y: 1.7, w: 9, h: 0.7,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('项目中的角色：', {
    x: 0.7, y: 1.7, w: 2, h: 0.7,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: 'left', valign: 'middle'
  });
  slide.addText('资源控制者 × 天然支持者', {
    x: 2.5, y: 1.7, w: 6.8, h: 0.7,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'left', valign: 'middle'
  });

  // 两个角色分析
  // 左：资源控制者
  slide.addShape('rect', {
    x: 0.5, y: 2.55, w: 4.35, h: 0.45,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('资源控制者', {
    x: 0.5, y: 2.55, w: 4.35, h: 0.45,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'center', valign: 'middle'
  });
  slide.addShape('rect', {
    x: 0.5, y: 3.0, w: 4.35, h: 1.7,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText('统报系统的技术部署完全依赖IT团队。', {
    x: 0.65, y: 3.1, w: 4.05, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: 'left', valign: 'top'
  });
  slide.addText('陈静是系统能否按期上线的关键决定者——她卡住，IT资源就排不上。', {
    x: 0.65, y: 3.5, w: 4.05, h: 1.0,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 14
  });

  // 右：天然支持者
  slide.addShape('rect', {
    x: 5.15, y: 2.55, w: 4.35, h: 0.45,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('天然支持者', {
    x: 5.15, y: 2.55, w: 4.35, h: 0.45,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: 'center', valign: 'middle'
  });
  slide.addShape('rect', {
    x: 5.15, y: 3.0, w: 4.35, h: 1.7,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText('系统一旦落地，IT部门维护的手工数据清洗工作量会大幅减少。', {
    x: 5.3, y: 3.1, w: 4.05, h: 0.6,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: 'left', valign: 'top', lineSpacing: 15
  });
  slide.addText('她是项目成功后的直接受益者之一——这是她的内在动力。', {
    x: 5.3, y: 3.7, w: 4.05, h: 0.8,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: 'left', valign: 'top', lineSpacing: 14
  });

  // 底部金句
  slide.addShape('rect', {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape('rect', {
    x: 0.5, y: 4.85, w: 0.08, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText('一个人可以同时属于多个类型。识别她多重角色后，才能针对性设计协作方式。', {
    x: 0.75, y: 4.85, w: 8.7, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: 'left', valign: 'middle'
  });

  addBottomBrand(slide, pageNum, totalPages);
}

module.exports = { createSlide };
