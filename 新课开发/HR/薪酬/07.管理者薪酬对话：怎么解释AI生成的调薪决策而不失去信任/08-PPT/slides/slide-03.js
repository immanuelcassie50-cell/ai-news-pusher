// slide-03.js - 从"人工计价"到"系统算价"（对比页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 3,
  title: '从"人工计价"到"系统算价"'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('从"人工计价"到"系统算价"', {
    x: 0.5,
    y: 0.35,
    w: 9,
    h: 0.7,
    fontSize: 32,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.0,
    w: 1.0,
    h: 0.04,
    fill: { color: theme.accent }
  });

  // ========== 两列布局参数 ==========
  const colWidth = 4.3;
  const col1X = 0.5;
  const col2X = 5.2;
  const cardTopY = 1.35;
  const headerHeight = 0.55;
  const cardHeight = 3.2;

  // ========== 左侧卡片：传统场景 ==========
  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: col1X,
    y: cardTopY,
    w: colWidth,
    h: cardHeight,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.12
  });

  // 左侧头部背景（深灰）
  slide.addShape(pres.ShapeType.roundRect, {
    x: col1X,
    y: cardTopY,
    w: colWidth,
    h: headerHeight,
    fill: { color: theme.secondary },
    line: { color: theme.secondary, width: 0 },
    rectRadius: 0.12
  });

  // 头部下缘补充（让底部是直角）
  slide.addShape(pres.ShapeType.rect, {
    x: col1X,
    y: cardTopY + headerHeight - 0.15,
    w: colWidth,
    h: 0.15,
    fill: { color: theme.secondary },
    line: { width: 0 }
  });

  // 左侧头部标题
  slide.addText('传统场景（二手车）', {
    x: col1X,
    y: cardTopY,
    w: colWidth,
    h: headerHeight,
    fontSize: 18,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 左侧内容区
  const leftContentY = cardTopY + headerHeight + 0.25;
  const leftItems = [
    { label: '车主报价', content: '"这车我买了15万，现在卖12万"' },
    { label: '回答', content: '"我了解的，差不多就这个价"' },
    { label: '员工感受', content: '半信半疑，依赖经验判断' }
  ];

  leftItems.forEach((item, idx) => {
    const itemY = leftContentY + idx * 0.85;

    // 标签
    slide.addText(item.label, {
      x: col1X + 0.25,
      y: itemY,
      w: 1.0,
      h: 0.35,
      fontSize: 12,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 内容
    slide.addText(item.content, {
      x: col1X + 0.25,
      y: itemY + 0.35,
      w: colWidth - 0.5,
      h: 0.45,
      fontSize: 14,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'top'
    });
  });

  // ========== 右侧卡片：AI新场景 ==========
  // 卡片背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: col2X,
    y: cardTopY,
    w: colWidth,
    h: cardHeight,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.12
  });

  // 右侧头部背景（深红）
  slide.addShape(pres.ShapeType.roundRect, {
    x: col2X,
    y: cardTopY,
    w: colWidth,
    h: headerHeight,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 },
    rectRadius: 0.12
  });

  // 头部下缘补充
  slide.addShape(pres.ShapeType.rect, {
    x: col2X,
    y: cardTopY + headerHeight - 0.15,
    w: colWidth,
    h: 0.15,
    fill: { color: theme.primary },
    line: { width: 0 }
  });

  // 右侧头部标题
  slide.addText('AI新场景', {
    x: col2X,
    y: cardTopY,
    w: colWidth,
    h: headerHeight,
    fontSize: 18,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 右侧内容区
  const rightContentY = cardTopY + headerHeight + 0.25;
  const rightItems = [
    { label: '系统报价', content: '"市场行情12万，成交区间10.5-13.5万，车况87分"' },
    { label: '回答', content: '"不是人定的，是系统根据数据实时计算的"' },
    { label: '员工感受', content: '信不信？—— 算法厌恶心理' }
  ];

  rightItems.forEach((item, idx) => {
    const itemY = rightContentY + idx * 0.85;

    // 标签
    slide.addText(item.label, {
      x: col2X + 0.25,
      y: itemY,
      w: 1.0,
      h: 0.35,
      fontSize: 12,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 内容
    slide.addText(item.content, {
      x: col2X + 0.25,
      y: itemY + 0.35,
      w: colWidth - 0.5,
      h: 0.45,
      fontSize: 14,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'top'
    });
  });

  // ========== 底部关键洞察框 ==========
  const insightY = 4.7;
  const insightHeight = 0.7;

  // 边框背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: insightY,
    w: 9,
    h: insightHeight,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  // 左侧强调色条
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: insightY,
    w: 0.12,
    h: insightHeight,
    fill: { color: theme.accent },
    line: { width: 0 }
  });

  // 关键洞察文字
  slide.addText('"AI进入薪酬决策，让这件事从\'人工解释人工决策\'变成了\'人工解释AI决策\'"', {
    x: 0.8,
    y: insightY,
    w: 8.5,
    h: insightHeight,
    fontSize: 15,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== 底部装饰点 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.15,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.7,
    y: 5.15,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.9,
    y: 5.15,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.light }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
