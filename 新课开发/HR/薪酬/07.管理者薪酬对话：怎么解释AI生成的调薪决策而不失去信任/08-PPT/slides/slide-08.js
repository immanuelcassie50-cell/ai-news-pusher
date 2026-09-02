// slide-08.js - 员工对"AI调薪"的典型担忧（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 8,
  title: '员工对"AI调薪"的典型担忧'
};

const concerns = [
  {
    type: '算法黑箱担忧',
    voice: '"我不知道系统怎么想我的"',
    need: '我想知道标准是什么'
  },
  {
    type: '尊严担忧',
    voice: '"我被当成数据而不是人了"',
    need: '我的贡献被看见了吗'
  },
  {
    type: '公平担忧',
    voice: '"算法会不会歧视我"',
    need: '我有没有被公正对待'
  },
  {
    type: '无能为力担忧',
    voice: '"既然是算法定的，我还能做什么"',
    need: '我还有争取的空间吗'
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('员工对"AI调薪"的典型担忧', {
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
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== Opening Statement ==========
  slide.addText('员工担忧的不是笼统的"我不信任AI"，而是可以细分为四个类型', {
    x: 0.5,
    y: 1.15,
    w: 9,
    h: 0.45,
    fontSize: 15,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== Key Quote Accent Box ==========
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: 1.7,
    w: 9,
    h: 0.7,
    fill: { color: theme.accent, transparency: 12 },
    line: { color: theme.accent, width: 0 },
    rectRadius: 0.08
  });

  slide.addText([
    { text: '"', options: { fontSize: 24, color: theme.accent, bold: true } },
    { text: '管理者最常见的误区，是用\'讲道理\'的方式回应员工情感层面的担忧', options: { fontSize: 14, color: theme.secondary, bold: false } },
    { text: '"', options: { fontSize: 24, color: theme.accent, bold: true } }
  ], {
    x: 0.7,
    y: 1.7,
    w: 8.6,
    h: 0.7,
    fontFace: 'Microsoft YaHei',
    align: 'center',
    valign: 'middle'
  });

  // ========== 2x2 Grid Cards ==========
  const gridStartY = 2.6;
  const cardWidth = 4.3;
  const cardHeight = 1.35;
  const gapX = 0.4;
  const gapY = 0.3;
  const col1X = 0.5;
  const col2X = col1X + cardWidth + gapX;
  const row1Y = gridStartY;
  const row2Y = gridStartY + cardHeight + gapY;

  const positions = [
    { x: col1X, y: row1Y },
    { x: col2X, y: row1Y },
    { x: col1X, y: row2Y },
    { x: col2X, y: row2Y }
  ];

  concerns.forEach((concern, idx) => {
    const pos = positions[idx];

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: pos.x,
      y: pos.y,
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

    // Left accent strip
    slide.addShape(pres.ShapeType.roundRect, {
      x: pos.x,
      y: pos.y,
      w: 0.12,
      h: cardHeight,
      fill: { color: theme.accent },
      line: { width: 0 },
      rectRadius: 0.1
    });

    // Concern type header
    slide.addText(concern.type, {
      x: pos.x + 0.25,
      y: pos.y + 0.12,
      w: cardWidth - 0.4,
      h: 0.4,
      fontSize: 16,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // Hidden voice (员工心里的潜台词)
    slide.addText(concern.voice, {
      x: pos.x + 0.25,
      y: pos.y + 0.52,
      w: cardWidth - 0.4,
      h: 0.35,
      fontSize: 13,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      italic: true,
      align: 'left',
      valign: 'middle'
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x + 0.25,
      y: pos.y + 0.9,
      w: cardWidth - 0.5,
      h: 0.01,
      fill: { color: theme.light }
    });

    // True need (背后真正的诉求)
    slide.addText([
      { text: '→ ', options: { fontSize: 12, color: theme.accent, bold: true } },
      { text: concern.need, options: { fontSize: 13, color: theme.secondary, bold: false } }
    ], {
      x: pos.x + 0.25,
      y: pos.y + 0.95,
      w: cardWidth - 0.4,
      h: 0.35,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== Bottom decorative elements ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.2,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.7,
    y: 5.2,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.9,
    y: 5.2,
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
