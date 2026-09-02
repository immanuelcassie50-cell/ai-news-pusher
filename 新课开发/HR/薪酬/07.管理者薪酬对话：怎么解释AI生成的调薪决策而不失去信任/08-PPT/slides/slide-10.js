// slide-10.js - 来自真实HR调研的员工担忧（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 10,
  title: '来自真实HR调研的员工担忧'
};

const quotes = [
  {
    text: "我不知道系统是怎么判断我值多少钱的，感觉像个黑箱，我只拿到了一个数字，没有解释。",
    icon: "Q1"
  },
  {
    text: "调薪的时候老板说'这是系统算的'，好像他自己没有发言权一样。我就想问他：你觉得我值多少？",
    icon: "Q2"
  },
  {
    text: "我看到系统给我的市场参考值是80分位，但最后调完我算了一下，只相当于50分位。那这个系统到底在干什么？",
    icon: "Q3"
  },
  {
    text: "我知道AI可能比人更客观，但我还是更相信我的老板亲口告诉我，而不是一张系统生成的通知单。",
    icon: "Q4"
  },
  {
    text: "如果我的调薪是算法决定的，那是不是意味着我的努力可以被量化、被预测？那我工作的意义是什么？",
    icon: "Q5"
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('来自真实HR调研的员工担忧', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.65,
    fontSize: 30,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 副标题 ==========
  slide.addText('2024年HR科技公司调研（经脱敏处理）', {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.35,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    align: 'left',
    valign: 'middle'
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.28,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== 马赛克布局参数 ==========
  const cardPadding = 0.18;
  const cardRadius = 0.1;
  const leftColX = 0.5;
  const rightColX = 5.1;
  const colWidth = 4.4;

  // 卡片高度配置 - 形成视觉节奏
  const cardHeights = [1.18, 1.05, 1.25, 1.0, 1.35];
  const cardStartY = 1.55;
  const cardGap = 0.18;

  // ========== 计算各卡片位置（交错布局）==========
  // 左列：Q1, Q3（交错）
  // 右列：Q2, Q4（交错）
  // 底部：Q5（跨两列）

  const positions = [
    // Q1 - 左列第一张
    { x: leftColX, y: cardStartY, w: colWidth, h: cardHeights[0] },
    // Q2 - 右列第一张
    { x: rightColX, y: cardStartY + 0.15, w: colWidth, h: cardHeights[1] },
    // Q3 - 左列第二张
    { x: leftColX, y: cardStartY + cardHeights[0] + cardGap + 0.1, w: colWidth, h: cardHeights[2] },
    // Q4 - 右列第二张
    { x: rightColX, y: cardStartY + cardHeights[0] + cardGap + cardHeights[1] + cardGap + 0.25, w: colWidth, h: cardHeights[3] },
    // Q5 - 底部跨两列
    { x: leftColX, y: cardStartY + cardHeights[0] + cardGap + cardHeights[2] + cardGap + 0.2, w: colWidth * 2 + 0.5, h: cardHeights[4] }
  ];

  // ========== 绘制引言卡片 ==========
  quotes.forEach((quote, idx) => {
    const pos = positions[idx];
    const isBottomCard = idx === 4;
    const accentColor = idx % 2 === 0 ? theme.accent : theme.primary;

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: pos.x,
      y: pos.y,
      w: pos.w,
      h: pos.h,
      fill: { color: theme.light, transparency: 75 },
      line: { color: theme.light, width: 0.8 },
      rectRadius: cardRadius
    });

    // 左侧强调边条
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x,
      y: pos.y + 0.15,
      w: 0.08,
      h: pos.h - 0.3,
      fill: { color: accentColor }
    });

    // 引号装饰符号
    slide.addText('"', {
      x: pos.x + 0.2,
      y: pos.y + 0.05,
      w: 0.4,
      h: 0.5,
      fontSize: 36,
      fontFace: 'Georgia',
      color: accentColor,
      bold: true,
      transparency: 40
    });

    // 引言内容
    slide.addText(quote.text, {
      x: pos.x + 0.35,
      y: pos.y + 0.25,
      w: pos.w - 0.6,
      h: pos.h - 0.45,
      fontSize: idx === 4 ? 13 : 12,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      italic: true,
      align: 'left',
      valign: 'top'
    });

    // 右下角引言编号
    slide.addText(quote.icon, {
      x: pos.x + pos.w - 0.55,
      y: pos.y + pos.h - 0.4,
      w: 0.45,
      h: 0.3,
      fontSize: 10,
      fontFace: 'Arial',
      color: accentColor,
      bold: true,
      align: 'right',
      valign: 'bottom',
      transparency: 30
    });
  });

  // ========== 底部装饰元素 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.35,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.68,
    y: 5.35,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.86,
    y: 5.35,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  return slide;
}

// 单独预览模式
if (require.main === module) {
  const pptxgen = require('pptxgenjs');
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';

  const theme = {
    primary: "8B2635",
    secondary: "4A4A4A",
    accent: "C45C3E",
    light: "D4C5C5",
    bg: "FAF8F7"
  };

  createSlide(pres, theme);

  const outputPath = 'D:/CC/新课开发/HR/薪酬/07.管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任/08-PPT/slides/output/slide-10-preview.pptx';
  pres.writeFile({ fileName: outputPath })
    .then(() => {
      console.log('Preview saved:', outputPath);
    })
    .catch(err => {
      console.error('Preview failed:', err.message);
    });
}

module.exports = {
  createSlide,
  slideConfig
};
