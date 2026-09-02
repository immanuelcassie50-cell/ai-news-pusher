// slide-34.js - 场景四：市场偏低调薪解释（最难开口的对话）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 34,
  title: '场景四：市场偏低调薪解释'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('场景四：市场偏低调薪解释', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.55,
    fontSize: 26,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 副标题
  slide.addText('最难开口的对话', {
    x: 0.5,
    y: 0.82,
    w: 2.5,
    h: 0.3,
    fontSize: 12,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // 装饰线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.1,
    w: 0.6,
    h: 0.025,
    fill: { color: theme.accent }
  });

  // ========== 左侧：场景背景卡片 ==========
  const leftCardX = 0.5;
  const leftCardY = 1.35;
  const leftCardW = 3.6;
  const leftCardH = 1.55;

  // 背景卡片
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX,
    y: leftCardY,
    w: leftCardW,
    h: leftCardH,
    fill: { color: theme.primary, transparency: 6 },
    line: { color: theme.primary, width: 1, transparency: 50 },
    rectRadius: 0.1
  });

  // 背景标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX + 0.15,
    y: leftCardY + 0.12,
    w: 0.7,
    h: 0.26,
    fill: { color: theme.primary },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('场景背景', {
    x: leftCardX + 0.15,
    y: leftCardY + 0.12,
    w: 0.7,
    h: 0.26,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 难度星级
  slide.addText('难度：', {
    x: leftCardX + 0.15,
    y: leftCardY + 0.48,
    w: 0.5,
    h: 0.25,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // 星级显示
  for (let i = 0; i < 4; i++) {
    slide.addText('★', {
      x: leftCardX + 0.55 + i * 0.22,
      y: leftCardY + 0.48,
      w: 0.22,
      h: 0.25,
      fontSize: 11,
      fontFace: 'Arial',
      color: theme.accent,
      bold: true,
      align: 'center',
      valign: 'middle'
    });
  }

  slide.addText('☆', {
    x: leftCardX + 0.55 + 4 * 0.22,
    y: leftCardY + 0.48,
    w: 0.22,
    h: 0.25,
    fontSize: 11,
    fontFace: 'Arial',
    color: theme.light,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 情境说明
  slide.addText('员工薪资低于市场水平，本次调薪后仍低于市场', {
    x: leftCardX + 0.15,
    y: leftCardY + 0.78,
    w: leftCardW - 0.3,
    h: 0.3,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // 特点标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX + 0.15,
    y: leftCardY + 1.12,
    w: 3.3,
    h: 0.28,
    fill: { color: theme.accent, transparency: 85 },
    line: { color: theme.accent, width: 0.5, transparency: 60 },
    rectRadius: 0.05
  });

  slide.addText('特点：需要承认问题，同时给出解决方案', {
    x: leftCardX + 0.15,
    y: leftCardY + 1.12,
    w: 3.3,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: false,
    align: 'center',
    valign: 'middle'
  });

  // ========== 右侧：对话要点 ==========
  const rightCardX = 4.3;
  const rightCardY = 1.35;
  const rightCardW = 5.2;
  const rightCardH = 1.55;

  // 对话要点卡片
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX,
    y: rightCardY,
    w: rightCardW,
    h: rightCardH,
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

  // 对话要点标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX + 0.15,
    y: rightCardY + 0.12,
    w: 0.85,
    h: 0.26,
    fill: { color: theme.accent },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('对话要点', {
    x: rightCardX + 0.15,
    y: rightCardY + 0.12,
    w: 0.85,
    h: 0.26,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 对话要点内容
  const dialoguePoints = [
    { num: '1', text: '坦诚承认：你的薪资确实低于市场' },
    { num: '2', text: '解释原因：为什么存在这个差距' },
    { num: '3', text: '说明现状：这次调薪能改变多少' },
    { num: '4', text: '给出路径：未来怎么做才能追上来' }
  ];

  dialoguePoints.forEach((point, idx) => {
    const pointY = rightCardY + 0.48 + idx * 0.26;

    // 序号圆圈
    slide.addShape(pres.ShapeType.ellipse, {
      x: rightCardX + 0.2,
      y: pointY + 0.02,
      w: 0.2,
      h: 0.2,
      fill: { color: theme.primary, transparency: 15 }
    });

    slide.addText(point.num, {
      x: rightCardX + 0.2,
      y: pointY + 0.02,
      w: 0.2,
      h: 0.2,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 文字
    slide.addText(point.text, {
      x: rightCardX + 0.5,
      y: pointY,
      w: rightCardW - 0.7,
      h: 0.24,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 中间：话术模板 ==========
  const templateY = 3.05;
  const templateH = 2.2;

  // 模板外框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: templateY,
    w: 9,
    h: templateH,
    fill: { color: theme.primary, transparency: 4 },
    line: { color: theme.primary, width: 1.5, transparency: 40 },
    rectRadius: 0.12
  });

  // 顶部装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: templateY,
    w: 9,
    h: 0.08,
    fill: { color: theme.primary },
    line: { width: 0 }
  });

  // 覆盖顶部圆角
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: templateY + 0.03,
    w: 9,
    h: 0.05,
    fill: { color: theme.primary },
    line: { width: 0 }
  });

  // 模板标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.7,
    y: templateY + 0.2,
    w: 0.85,
    h: 0.28,
    fill: { color: theme.primary },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('话术模板', {
    x: 0.7,
    y: templateY + 0.2,
    w: 0.85,
    h: 0.28,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 模板内容
  const templateContent = [
    { text: '"小李，先说结果——你的调薪是5%。', style: 'normal' },
    { text: '我想跟你坦诚一件事：你现在的薪资，确实低于市场水平。大概低了15%左右。', style: 'highlight' },
    { text: '这个差距是怎么来的……（历史原因说明）', style: 'normal' },
    { text: '这次调薪5%，能缩小一部分差距，但还不足以完全追平。', style: 'normal' },
    { text: '我的建议是：……（未来路径）', style: 'highlight' },
    { text: '我会持续关注市场变化，如果有机会，我会第一时间为你争取。"', style: 'normal' }
  ];

  let textY = templateY + 0.58;
  templateContent.forEach((line) => {
    const isHighlight = line.style === 'highlight';
    slide.addText(line.text, {
      x: 0.7,
      y: textY,
      w: 8.6,
      h: 0.26,
      fontSize: 11.5,
      fontFace: 'Microsoft YaHei',
      color: isHighlight ? theme.accent : theme.secondary,
      bold: isHighlight,
      italic: !isHighlight,
      align: 'left',
      valign: 'middle'
    });
    textY += 0.26;
  });

  // ========== 底部：员工可能的反应 ==========
  const reactionY = 5.35;
  const reactionH = 0.5;

  // 反应区标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: reactionY,
    w: 1.2,
    h: 0.24,
    fill: { color: theme.secondary, transparency: 20 },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('员工可能的反应', {
    x: 0.5,
    y: reactionY,
    w: 1.2,
    h: 0.24,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 反应1
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.85,
    y: reactionY - 0.02,
    w: 1.6,
    h: 0.28,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 0.5 },
    rectRadius: 0.05
  });

  slide.addText('"那我不是一直亏了？"', {
    x: 1.85,
    y: reactionY - 0.02,
    w: 1.6,
    h: 0.28,
    fontSize: 9.5,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    italic: true,
    align: 'center',
    valign: 'middle'
  });

  slide.addText('→ 解释历史原因和未来路径', {
    x: 3.55,
    y: reactionY - 0.02,
    w: 2.2,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // 分隔点
  slide.addShape(pres.ShapeType.ellipse, {
    x: 5.85,
    y: reactionY + 0.08,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  // 反应2
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.05,
    y: reactionY - 0.02,
    w: 2.5,
    h: 0.28,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, width: 0.5 },
    rectRadius: 0.05
  });

  slide.addText('"公司为什么不直接调到市场水平？"', {
    x: 6.05,
    y: reactionY - 0.02,
    w: 2.5,
    h: 0.28,
    fontSize: 9.5,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    italic: true,
    align: 'center',
    valign: 'middle'
  });

  slide.addText('→ 解释公司预算限制', {
    x: 8.65,
    y: reactionY - 0.02,
    w: 1.3,
    h: 0.28,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
