// slide-18.js - 人工判断轨：四个考量维度（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 18,
  title: '人工判断轨：四个考量维度'
};

const dimensions = [
  {
    name: '业务考量',
    icon: '💼',
    content: '部门战略优先级、当前项目重要性、人员留存风险',
    role: '为组织关键人才倾斜资源',
    characteristic: '前瞻性、非标准化'
  },
  {
    name: '团队平衡',
    icon: '⚖️',
    content: '同级别员工的相对表现、团队内部公平性',
    role: '避免内部公平冲突',
    characteristic: '主观性、需要判断'
  },
  {
    name: '未来潜力',
    icon: '🚀',
    content: '尚未体现在绩效数据中的价值（主动性强、学习速度快）',
    role: '为高潜力人才预留增长空间',
    characteristic: '预测性、不确定性'
  },
  {
    name: '特殊贡献',
    icon: '🌟',
    content: '一次性重大贡献、创新项目、危机处理',
    role: '对不可量化价值的认可',
    characteristic: '例外情况、需要特批'
  }
];

// 人工判断轨特征
const humanTrackTraits = ['主观性', '灵活性', '情境相关', '需要解释'];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('人工判断轨：四个考量维度', {
    x: 0.5,
    y: 0.35,
    w: 9,
    h: 0.65,
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
    y: 0.95,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== 副标题 ==========
  slide.addText('人工判断轨的四个核心维度，每个维度都有其独特作用和特点', {
    x: 0.5,
    y: 1.05,
    w: 9,
    h: 0.4,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== 2x2 Grid Cards ==========
  const gridStartY = 1.55;
  const cardWidth = 4.3;
  const cardHeight = 1.55;
  const gapX = 0.4;
  const gapY = 0.25;
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

  dimensions.forEach((dim, idx) => {
    const pos = positions[idx];

    // Card background - soft warm style with rounded corners
    slide.addShape(pres.ShapeType.roundRect, {
      x: pos.x,
      y: pos.y,
      w: cardWidth,
      h: cardHeight,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.12,
      shadow: {
        type: 'outer',
        color: '000000',
        blur: 6,
        offset: 2,
        angle: 135,
        opacity: 0.08
      }
    });

    // Top accent bar - different from AI track (which uses primary color)
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x,
      y: pos.y,
      w: cardWidth,
      h: 0.08,
      fill: { color: theme.accent }
    });

    // Icon circle background
    slide.addShape(pres.ShapeType.ellipse, {
      x: pos.x + 0.2,
      y: pos.y + 0.2,
      w: 0.45,
      h: 0.45,
      fill: { color: theme.accent, transparency: 15 }
    });

    // Icon
    slide.addText(dim.icon, {
      x: pos.x + 0.2,
      y: pos.y + 0.2,
      w: 0.45,
      h: 0.45,
      fontSize: 18,
      align: 'center',
      valign: 'middle'
    });

    // Dimension name
    slide.addText(dim.name, {
      x: pos.x + 0.75,
      y: pos.y + 0.22,
      w: cardWidth - 0.95,
      h: 0.4,
      fontSize: 17,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // Content label + text
    slide.addText([
      { text: '内容：', options: { fontSize: 11, color: theme.secondary, bold: true } },
      { text: dim.content, options: { fontSize: 11, color: theme.secondary, bold: false } }
    ], {
      x: pos.x + 0.2,
      y: pos.y + 0.72,
      w: cardWidth - 0.4,
      h: 0.3,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'top'
    });

    // Role label + text
    slide.addText([
      { text: '作用：', options: { fontSize: 11, color: theme.accent, bold: true } },
      { text: dim.role, options: { fontSize: 11, color: theme.secondary, bold: false } }
    ], {
      x: pos.x + 0.2,
      y: pos.y + 1.0,
      w: cardWidth - 0.4,
      h: 0.25,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'top'
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x + 0.2,
      y: pos.y + 1.28,
      w: cardWidth - 0.4,
      h: 0.01,
      fill: { color: theme.light }
    });

    // Characteristic label + text
    slide.addText([
      { text: '特点：', options: { fontSize: 10, color: theme.primary, bold: true } },
      { text: dim.characteristic, options: { fontSize: 10, color: theme.secondary, bold: false } }
    ], {
      x: pos.x + 0.2,
      y: pos.y + 1.32,
      w: cardWidth - 0.4,
      h: 0.22,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 人工判断轨特征标签栏 ==========
  const traitsStartY = 4.65;

  // Background bar for traits
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: traitsStartY,
    w: 9,
    h: 0.55,
    fill: { color: theme.accent, transparency: 10 },
    line: { color: theme.accent, width: 0.5, transparency: 50 },
    rectRadius: 0.08
  });

  // Section label
  slide.addText('人工判断轨特征', {
    x: 0.7,
    y: traitsStartY,
    w: 1.8,
    h: 0.55,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // Vertical divider
  slide.addShape(pres.ShapeType.rect, {
    x: 2.55,
    y: traitsStartY + 0.12,
    w: 0.015,
    h: 0.32,
    fill: { color: theme.accent, transparency: 40 }
  });

  // Trait tags
  const traitStartX = 2.75;
  const traitGap = 1.55;

  humanTrackTraits.forEach((trait, idx) => {
    const tagX = traitStartX + idx * traitGap;

    // Trait pill background
    slide.addShape(pres.ShapeType.roundRect, {
      x: tagX,
      y: traitsStartY + 0.12,
      w: 1.35,
      h: 0.32,
      fill: { color: 'FFFFFF' },
      line: { color: theme.accent, width: 0.5 },
      rectRadius: 0.16
    });

    // Trait text
    slide.addText(trait, {
      x: tagX,
      y: traitsStartY + 0.12,
      w: 1.35,
      h: 0.32,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      bold: false,
      align: 'center',
      valign: 'middle'
    });
  });

  // ========== 底部装饰元素 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.2,
    y: 5.1,
    w: 0.1,
    h: 0.1,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.0,
    y: 5.1,
    w: 0.1,
    h: 0.1,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.8,
    y: 5.1,
    w: 0.1,
    h: 0.1,
    fill: { color: theme.light }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
