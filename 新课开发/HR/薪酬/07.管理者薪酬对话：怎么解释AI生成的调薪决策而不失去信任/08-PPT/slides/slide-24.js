// slide-24.js - 三步信任重建法：第三步——情感连接（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 24,
  title: '三步信任重建法：第三步——情感连接'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

// 四个情感连接表达
const expressions = [
  {
    num: '01',
    title: '承认局限',
    quote: '"我能调整的空间确实有限"',
    effect: '让员工知道你在尽力',
    icon: '🤝',
    color: theme.primary
  },
  {
    num: '02',
    title: '看见贡献',
    quote: '"我记得你去年做了XXX"',
    effect: '让员工知道你在关注',
    icon: '👁️',
    color: theme.accent
  },
  {
    num: '03',
    title: '表达期待',
    quote: '"我对你的下一步发展有期待"',
    effect: '让员工看到未来',
    icon: '🚀',
    color: theme.primary
  },
  {
    num: '04',
    title: '开放对话',
    quote: '"你有什么想问的，或者有什么想法"',
    effect: '邀请员工参与',
    icon: '💬',
    color: theme.accent
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('三步信任重建法：第三步——情感连接', {
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

  // ========== 核心概念标签 ==========
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: 0.98,
    w: 3.2,
    h: 0.35,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 0 },
    rectRadius: 0.08
  });

  slide.addText('核心理念：承认局限，表达关心，建立关系', {
    x: 0.6,
    y: 0.98,
    w: 3.1,
    h: 0.35,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.4,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== "为什么情感连接重要" 区域 ==========
  slide.addText('为什么情感连接重要', {
    x: 0.5,
    y: 1.55,
    w: 9,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 三个要点横向排列
  const whyPoints = [
    '薪酬对话不只是谈数字，是谈关系',
    '员工要的不只是"公平"，还要"被看见"',
    '数字讲完了，关系才刚刚开始'
  ];

  const whyStartX = 0.5;
  const whyY = 1.92;
  const whyItemWidth = 3.0;
  const whyItemGap = 0.15;

  whyPoints.forEach((point, idx) => {
    const itemX = whyStartX + idx * (whyItemWidth + whyItemGap);

    // 小圆点
    slide.addShape(pres.ShapeType.ellipse, {
      x: itemX,
      y: whyY + 0.12,
      w: 0.1,
      h: 0.1,
      fill: { color: theme.accent }
    });

    // 文字
    slide.addText(point, {
      x: itemX + 0.18,
      y: whyY,
      w: whyItemWidth - 0.2,
      h: 0.4,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 四个情感连接表达卡片 ==========
  const cardStartY = 2.45;
  const cardWidth = 2.15;
  const cardHeight = 1.85;
  const cardGap = 0.2;
  const cardStartX = 0.5;

  // 标题
  slide.addText('情感连接的四个表达', {
    x: 0.5,
    y: cardStartY - 0.15,
    w: 9,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  expressions.forEach((expr, idx) => {
    const cardX = cardStartX + idx * (cardWidth + cardGap);
    const cardY = cardStartY + 0.25;

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: cardY,
      w: cardWidth,
      h: cardHeight,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1,
      shadow: {
        type: 'outer',
        color: '000000',
        blur: 4,
        offset: 2,
        angle: 135,
        opacity: 0.06
      }
    });

    // 顶部色条
    slide.addShape(pres.ShapeType.rect, {
      x: cardX,
      y: cardY,
      w: cardWidth,
      h: 0.08,
      fill: { color: expr.color }
    });

    // 序号圆形
    slide.addShape(pres.ShapeType.ellipse, {
      x: cardX + 0.15,
      y: cardY + 0.2,
      w: 0.32,
      h: 0.32,
      fill: { color: expr.color }
    });

    slide.addText(expr.num, {
      x: cardX + 0.15,
      y: cardY + 0.2,
      w: 0.32,
      h: 0.32,
      fontSize: 11,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 表达标题
    slide.addText(expr.title, {
      x: cardX + 0.55,
      y: cardY + 0.2,
      w: cardWidth - 0.7,
      h: 0.32,
      fontSize: 14,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 引言框
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX + 0.12,
      y: cardY + 0.62,
      w: cardWidth - 0.24,
      h: 0.65,
      fill: { color: theme.light, transparency: 70 },
      line: { color: theme.light, width: 0.5 },
      rectRadius: 0.06
    });

    // 引言文字
    slide.addText(expr.quote, {
      x: cardX + 0.18,
      y: cardY + 0.65,
      w: cardWidth - 0.36,
      h: 0.6,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      italic: true,
      bold: false,
      align: 'center',
      valign: 'middle'
    });

    // 效果标签
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX + 0.12,
      y: cardY + 1.38,
      w: cardWidth - 0.24,
      h: 0.35,
      fill: { color: expr.color, transparency: 85 },
      line: { color: expr.color, width: 0.5 },
      rectRadius: 0.06
    });

    // 效果文字
    slide.addText([
      { text: '→ ', options: { fontSize: 10, color: expr.color, bold: true } },
      { text: expr.effect, options: { fontSize: 10, color: theme.secondary, bold: false } }
    ], {
      x: cardX + 0.18,
      y: cardY + 1.38,
      w: cardWidth - 0.36,
      h: 0.35,
      fontFace: 'Microsoft YaHei',
      align: 'center',
      valign: 'middle'
    });
  });

  // ========== 三步法总览流程 ==========
  const flowY = 4.72;
  const flowHeight = 0.65;

  // 背景框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: flowY,
    w: 9,
    h: flowHeight,
    fill: { color: theme.primary, transparency: 95 },
    line: { color: theme.primary, width: 1 },
    rectRadius: 0.1
  });

  // 左侧标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.65,
    y: flowY + 0.15,
    w: 1.0,
    h: 0.35,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 },
    rectRadius: 0.06
  });

  slide.addText('三步法', {
    x: 0.65,
    y: flowY + 0.15,
    w: 1.0,
    h: 0.35,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 流程步骤
  const steps = [
    { label: '透明披露', sub: '讲清楚' },
    { label: '逻辑呈现', sub: '说服' },
    { label: '情感连接', sub: '连接' }
  ];

  const stepStartX = 1.9;
  const stepWidth = 2.0;
  const stepGap = 0.35;

  steps.forEach((step, idx) => {
    const stepX = stepStartX + idx * (stepWidth + stepGap);
    const isLast = idx === steps.length - 1;

    // 步骤框
    slide.addShape(pres.ShapeType.roundRect, {
      x: stepX,
      y: flowY + 0.12,
      w: stepWidth,
      h: 0.42,
      fill: { color: isLast ? theme.primary : 'FFFFFF' },
      line: { color: isLast ? theme.primary : theme.light, width: 1 },
      rectRadius: 0.08
    });

    // 步骤文字
    slide.addText(step.label, {
      x: stepX,
      y: flowY + 0.1,
      w: stepWidth,
      h: 0.28,
      fontSize: 13,
      fontFace: 'Microsoft YaHei',
      color: isLast ? 'FFFFFF' : theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 副标题
    slide.addText('(' + step.sub + ')', {
      x: stepX,
      y: flowY + 0.32,
      w: stepWidth,
      h: 0.22,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: isLast ? 'FFFFFF' : theme.secondary,
      bold: false,
      align: 'center',
      valign: 'middle',
      transparency: isLast ? 0 : 40
    });

    // 箭头（除最后一个）
    if (!isLast) {
      slide.addText('→', {
        x: stepX + stepWidth,
        y: flowY + 0.12,
        w: stepGap,
        h: 0.42,
        fontSize: 18,
        fontFace: 'Arial',
        color: theme.accent,
        bold: true,
        align: 'center',
        valign: 'middle'
      });
    }
  });

  // ========== 底部装饰元素 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.68,
    y: 5.4,
    w: 0.07,
    h: 0.07,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.86,
    y: 5.4,
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

  const outputPath = 'D:/CC/新课开发/HR/薪酬/07.管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任/08-PPT/slides/output/slide-24-preview.pptx';
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
