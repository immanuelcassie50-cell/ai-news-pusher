// slide-73.js - 从"解释者"到"共建者"的升级路径（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 73,
  title: '从"解释者"到"共建者"的升级路径'
};

const stages = [
  {
    label: '第一阶段',
    role: '解释者',
    roleEn: 'Explainer',
    definition: '把系统的调薪结果"翻译"给员工',
    ability: '说明AI数据轨和人工判断轨的内容',
    limitation: '被动响应，员工问什么答什么',
    feeling: '"他告诉了我结果，但我不确定他站在谁那边"'
  },
  {
    label: '第二阶段',
    role: '引导者',
    roleEn: 'Guide',
    definition: '帮助员工理解薪酬决策的逻辑，并提前管理预期',
    ability: '主动披露、三步信任重建法、异议处理',
    limitation: '还是在"解释已经发生的决策"',
    feeling: '"他提前跟我打过招呼，我觉得被尊重了"'
  },
  {
    label: '第三阶段',
    role: '共建者',
    roleEn: 'Co-creator',
    definition: '与员工一起规划薪酬成长路径，把薪酬对话变成持续关系',
    ability: '日常信任维护、年度薪酬沟通计划、职业发展联动',
    limitation: '需要时间和持续投入',
    feeling: '"他不是只谈调薪，是在关心我的整体成长"'
  }
];

const upgradePoints = [
  '从"等员工问了再解释"变成"主动定期同步"',
  '从"只谈数字"变成"谈关系、谈发展、谈预期"',
  '从"一年一次的对话"变成"持续的关系经营"'
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('从"解释者"到"共建者"的升级路径', {
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
  slide.addText('管理者的三种角色演进', {
    x: 0.5,
    y: 0.9,
    w: 9,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.25,
    w: 0.9,
    h: 0.03,
    fill: { color: theme.accent }
  });

  // ========== 三阶段卡片布局 ==========
  const cardWidth = 2.85;
  const cardHeight = 2.55;
  const cardGap = 0.25;
  const startX = 0.5;
  const startY = 1.5;

  // 箭头连接线
  for (let i = 0; i < 2; i++) {
    const arrowX = startX + cardWidth + (i * (cardWidth + cardGap));
    slide.addShape(pres.ShapeType.rect, {
      x: arrowX,
      y: startY + cardHeight / 2 - 0.02,
      w: cardGap,
      h: 0.04,
      fill: { color: theme.accent }
    });
    // 箭头头部
    slide.addText('▶', {
      x: arrowX + cardGap - 0.15,
      y: startY + cardHeight / 2 - 0.15,
      w: 0.3,
      h: 0.3,
      fontSize: 12,
      color: theme.accent,
      align: 'center',
      valign: 'middle'
    });
  }

  stages.forEach((stage, idx) => {
    const cardX = startX + idx * (cardWidth + cardGap);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: startY,
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

    // 顶部色块
    slide.addShape(pres.ShapeType.rect, {
      x: cardX,
      y: startY,
      w: cardWidth,
      h: 0.45,
      fill: { color: idx === 2 ? theme.accent : theme.primary },
      line: { width: 0 }
    });

    // 阶段标签
    slide.addText(stage.label, {
      x: cardX,
      y: startY,
      w: cardWidth,
      h: 0.45,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: 'FFFFFF',
      bold: false,
      align: 'center',
      valign: 'middle'
    });

    // 角色名称
    slide.addText(stage.role, {
      x: cardX,
      y: startY + 0.55,
      w: cardWidth,
      h: 0.4,
      fontSize: 20,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 英文标签
    slide.addText(stage.roleEn, {
      x: cardX,
      y: startY + 0.9,
      w: cardWidth,
      h: 0.25,
      fontSize: 10,
      fontFace: 'Arial',
      color: theme.secondary,
      bold: false,
      align: 'center',
      valign: 'middle'
    });

    // 分隔线
    slide.addShape(pres.ShapeType.rect, {
      x: cardX + 0.2,
      y: startY + 1.2,
      w: cardWidth - 0.4,
      h: 0.01,
      fill: { color: theme.light }
    });

    // 定义
    slide.addText([
      { text: '角色定义：', options: { bold: true, color: theme.secondary } },
      { text: stage.definition, options: { bold: false, color: theme.secondary } }
    ], {
      x: cardX + 0.15,
      y: startY + 1.28,
      w: cardWidth - 0.3,
      h: 0.4,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'top'
    });

    // 能力
    slide.addText([
      { text: '能力：', options: { bold: true, color: theme.accent } },
      { text: stage.ability, options: { bold: false, color: theme.secondary } }
    ], {
      x: cardX + 0.15,
      y: startY + 1.65,
      w: cardWidth - 0.3,
      h: 0.4,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'top'
    });

    // 局限
    slide.addText([
      { text: '局限：', options: { bold: true, color: theme.secondary } },
      { text: stage.limitation, options: { bold: false, color: theme.secondary } }
    ], {
      x: cardX + 0.15,
      y: startY + 2.0,
      w: cardWidth - 0.3,
      h: 0.25,
      fontSize: 9,
      fontFace: 'Microsoft YaHei',
      align: 'left',
      valign: 'top'
    });
  });

  // ========== 员工感受区域 ==========
  const feelingY = startY + cardHeight + 0.2;

  // 左侧标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: feelingY,
    w: 0.9,
    h: 0.55,
    fill: { color: theme.primary },
    line: { width: 0 },
    rectRadius: 0.08
  });

  slide.addText('员工感受', {
    x: 0.5,
    y: feelingY,
    w: 0.9,
    h: 0.55,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 三阶段感受卡片
  const feelingCardWidth = 2.55;
  const feelingCardHeight = 0.55;

  stages.forEach((stage, idx) => {
    const feelX = 1.55 + idx * (feelingCardWidth + 0.15);

    slide.addShape(pres.ShapeType.roundRect, {
      x: feelX,
      y: feelingY,
      w: feelingCardWidth,
      h: feelingCardHeight,
      fill: { color: theme.light, transparency: 50 },
      line: { color: theme.light, width: 0.5 },
      rectRadius: 0.06
    });

    slide.addText(stage.feeling, {
      x: feelX,
      y: feelingY,
      w: feelingCardWidth,
      h: feelingCardHeight,
      fontSize: 9,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'center',
      valign: 'middle'
    });
  });

  // ========== 升级路径关键 ==========
  const upgradeY = feelingY + 0.75;

  slide.addText('升级路径的关键', {
    x: 0.5,
    y: upgradeY,
    w: 2.5,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 升级要点背景条
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: upgradeY + 0.4,
    w: 9,
    h: 0.7,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 0.5, transparency: 70 },
    rectRadius: 0.08
  });

  // 左侧强调条
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: upgradeY + 0.4,
    w: 0.06,
    h: 0.7,
    fill: { color: theme.accent }
  });

  // 升级要点内容
  upgradePoints.forEach((point, idx) => {
    const pointX = 0.7 + idx * 3;

    // 序号圆点
    slide.addShape(pres.ShapeType.ellipse, {
      x: pointX,
      y: upgradeY + 0.58,
      w: 0.18,
      h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(String(idx + 1), {
      x: pointX,
      y: upgradeY + 0.58,
      w: 0.18,
      h: 0.18,
      fontSize: 9,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    slide.addText(point, {
      x: pointX + 0.25,
      y: upgradeY + 0.45,
      w: 2.6,
      h: 0.6,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 底部装饰元素 ==========
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
