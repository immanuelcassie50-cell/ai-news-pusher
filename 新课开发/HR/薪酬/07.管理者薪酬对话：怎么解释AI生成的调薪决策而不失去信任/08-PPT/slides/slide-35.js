// slide-35.js - 场景五：员工质疑AI决策（信任危机对话）

const slideConfig = {
  type: 'content',
  index: 35,
  title: '场景五：员工质疑AI决策（信任危机对话）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('场景五：员工质疑AI决策', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 26,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 副标题
  slide.addText('信任危机对话', {
    x: 0.5,
    y: 0.78,
    w: 2.2,
    h: 0.28,
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
    y: 1.05,
    w: 0.6,
    h: 0.025,
    fill: { color: theme.accent }
  });

  // ========== 左侧：场景背景卡片 ==========
  const leftCardX = 0.5;
  const leftCardY = 1.25;
  const leftCardW = 3.5;
  const leftCardH = 1.7;

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

  // 类型标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftCardX + 0.95,
    y: leftCardY + 0.12,
    w: 0.85,
    h: 0.26,
    fill: { color: theme.accent, transparency: 20 },
    line: { color: theme.accent, width: 0.5 },
    rectRadius: 0.05
  });

  slide.addText('信任危机', {
    x: leftCardX + 0.95,
    y: leftCardY + 0.12,
    w: 0.85,
    h: 0.26,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
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

  // 五星难度显示
  for (let i = 0; i < 5; i++) {
    slide.addText('★', {
      x: leftCardX + 0.55 + i * 0.2,
      y: leftCardY + 0.48,
      w: 0.2,
      h: 0.25,
      fontSize: 11,
      fontFace: 'Arial',
      color: theme.accent,
      bold: true,
      align: 'center',
      valign: 'middle'
    });
  }

  // 核心挑战说明
  slide.addText('核心挑战：', {
    x: leftCardX + 0.15,
    y: leftCardY + 0.8,
    w: 0.8,
    h: 0.25,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  slide.addText('员工不信任AI系统的公正性，认为管理者只是系统的"代言人"', {
    x: leftCardX + 0.15,
    y: leftCardY + 1.05,
    w: leftCardW - 0.3,
    h: 0.55,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'top'
  });

  // ========== 右侧：员工可能说的话 ==========
  const rightCardX = 4.2;
  const rightCardY = 1.25;
  const rightCardW = 5.3;
  const rightCardH = 1.7;

  // 员工话语卡片
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

  // 员工话语标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightCardX + 0.15,
    y: rightCardY + 0.12,
    w: 1.1,
    h: 0.26,
    fill: { color: theme.secondary },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('员工可能说的话', {
    x: rightCardX + 0.15,
    y: rightCardY + 0.12,
    w: 1.1,
    h: 0.26,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 员工话语内容
  const employeeQuotes = [
    '"这个数字是AI定的吧？你自己觉得合理吗？"',
    '"我怎么知道这个AI没有偏见？它用什么数据算的我都不知道。"',
    '"你们就是想把锅甩给机器，自己不用负责对吧？"'
  ];

  employeeQuotes.forEach((quote, idx) => {
    const quoteY = rightCardY + 0.48 + idx * 0.38;

    // 引号图标
    slide.addText('"', {
      x: rightCardX + 0.15,
      y: quoteY - 0.02,
      w: 0.2,
      h: 0.3,
      fontSize: 18,
      fontFace: 'Georgia',
      color: theme.accent,
      bold: true,
      align: 'left',
      valign: 'top'
    });

    // 话语内容
    slide.addText(quote, {
      x: rightCardX + 0.3,
      y: quoteY,
      w: rightCardW - 0.5,
      h: 0.35,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      italic: true,
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 中间：应对策略（4步） ==========
  const strategyY = 3.1;
  const stepW = 2.1;
  const stepH = 1.75;
  const stepGap = 0.2;
  const startX = 0.5;

  const strategies = [
    {
      step: '第一步',
      title: '承认AI的局限',
      content: '"你说得对，AI确实有它的局限性，它用的是历史数据和规则。"'
    },
    {
      step: '第二步',
      title: '说明人工审核',
      content: '"但这个结果不是我直接采用的，是我审核之后确认的。"'
    },
    {
      step: '第三步',
      title: '表达个人立场',
      content: '"如果我觉得这个结果不对，我会选择打回去重新走流程。"'
    },
    {
      step: '第四步',
      title: '邀请监督',
      content: '"你如果对过程有疑问，我可以把我的审核记录给你看。"'
    }
  ];

  strategies.forEach((strategy, idx) => {
    const stepX = startX + idx * (stepW + stepGap);

    // 步骤卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: stepX,
      y: strategyY,
      w: stepW,
      h: stepH,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08,
      shadow: {
        type: 'outer',
        color: '000000',
        blur: 3,
        offset: 1,
        angle: 135,
        opacity: 0.05
      }
    });

    // 步骤序号圆圈
    slide.addShape(pres.ShapeType.ellipse, {
      x: stepX + stepW / 2 - 0.18,
      y: strategyY + 0.12,
      w: 0.36,
      h: 0.36,
      fill: { color: theme.primary }
    });

    slide.addText(String(idx + 1), {
      x: stepX + stepW / 2 - 0.18,
      y: strategyY + 0.12,
      w: 0.36,
      h: 0.36,
      fontSize: 14,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 步骤标签
    slide.addText(strategy.step, {
      x: stepX,
      y: strategyY + 0.52,
      w: stepW,
      h: 0.22,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 步骤标题
    slide.addText(strategy.title, {
      x: stepX + 0.1,
      y: strategyY + 0.72,
      w: stepW - 0.2,
      h: 0.26,
      fontSize: 12,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 步骤内容
    slide.addText(strategy.content, {
      x: stepX + 0.1,
      y: strategyY + 0.98,
      w: stepW - 0.2,
      h: 0.7,
      fontSize: 9.5,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'center',
      valign: 'top'
    });

    // 连接箭头（除最后一个）
    if (idx < strategies.length - 1) {
      slide.addText('→', {
        x: stepX + stepW,
        y: strategyY + stepH / 2 - 0.15,
        w: stepGap,
        h: 0.3,
        fontSize: 16,
        fontFace: 'Arial',
        color: theme.light,
        bold: true,
        align: 'center',
        valign: 'middle'
      });
    }
  });

  // ========== 底部：关键心法 ==========
  const footerY = 5.0;

  // 心法背景条
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: footerY,
    w: 9,
    h: 0.55,
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 1, transparency: 50 },
    rectRadius: 0.08
  });

  // 心法标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.65,
    y: footerY + 0.1,
    w: 0.7,
    h: 0.35,
    fill: { color: theme.accent },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('关键心法', {
    x: 0.65,
    y: footerY + 0.1,
    w: 0.7,
    h: 0.35,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 心法内容
  slide.addText('先处理情绪，再处理事实；先承认局限性，再说明人工做了什么', {
    x: 1.5,
    y: footerY,
    w: 7.8,
    h: 0.55,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.accent,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
