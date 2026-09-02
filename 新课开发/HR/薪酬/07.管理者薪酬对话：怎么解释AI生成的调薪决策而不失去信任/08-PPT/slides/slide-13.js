// slide-13.js - 管理者需要的"新基本功"（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 13,
  title: '管理者需要的"新基本功"'
};

const capabilities = [
  {
    num: '01',
    name: 'AI逻辑解读能力',
    definition: '能向员工解释清楚，哪些是AI数据，哪些是人工判断，两个轨道之间是什么关系',
    why: '这是"翻译者"角色的基础'
  },
  {
    num: '02',
    name: '透明披露习惯',
    definition: '主动说明AI数据轨的内容，而不是等员工问了才挤牙膏式地透露一点',
    why: '透明是信任的第一块砖'
  },
  {
    num: '03',
    name: '逻辑叙事能力',
    definition: '能把调薪决策用"因为…所以…"的结构讲清楚，让员工看到决策的逻辑链',
    why: '让员工从"被通知"变成"被说服"'
  },
  {
    num: '04',
    name: '情感连接能力',
    definition: '在理性解释之外，表达对员工个人贡献的认可、对员工感受的关心',
    why: '薪酬对话不只是谈数字，是谈关系'
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('管理者需要的"新基本功"', {
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

  // ========== 副标题说明 ==========
  slide.addText('面对AI调薪决策，管理者需要四项新能力来重建信任', {
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

  // ========== 2x2 Grid Cards ==========
  const gridStartY = 1.75;
  const cardWidth = 4.3;
  const cardHeight = 1.7;
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

  capabilities.forEach((cap, idx) => {
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

    // Left accent strip with number
    slide.addShape(pres.ShapeType.roundRect, {
      x: pos.x,
      y: pos.y,
      w: 0.5,
      h: cardHeight,
      fill: { color: theme.primary },
      line: { width: 0 },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: pos.x + 0.12,
      y: pos.y + 0.15,
      w: 0.26,
      h: 0.26,
      fill: { color: 'FFFFFF' }
    });

    // Number text
    slide.addText(cap.num, {
      x: pos.x + 0.12,
      y: pos.y + 0.15,
      w: 0.26,
      h: 0.26,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // Capability name header
    slide.addText(cap.name, {
      x: pos.x + 0.6,
      y: pos.y + 0.12,
      w: cardWidth - 0.75,
      h: 0.4,
      fontSize: 16,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // Definition text
    slide.addText(cap.definition, {
      x: pos.x + 0.6,
      y: pos.y + 0.52,
      w: cardWidth - 0.75,
      h: 0.65,
      fontSize: 12,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'top'
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x + 0.6,
      y: pos.y + 1.2,
      w: cardWidth - 0.85,
      h: 0.01,
      fill: { color: theme.light }
    });

    // Why important section
    slide.addText([
      { text: '→ ', options: { fontSize: 11, color: theme.accent, bold: true } },
      { text: '为什么重要：', options: { fontSize: 11, color: theme.secondary, bold: false } },
      { text: cap.why, options: { fontSize: 11, color: theme.accent, bold: true } }
    ], {
      x: pos.x + 0.6,
      y: pos.y + 1.25,
      w: cardWidth - 0.75,
      h: 0.4,
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
