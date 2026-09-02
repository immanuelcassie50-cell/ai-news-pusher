// slide-39.js - CONTENT PAGE - 应对"AI说了算，你也没权力改变？"
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 39,
  title: '应对"AI说了算，你也没权力改变？"'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

function createSlide(pres, slideTheme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  const t = slideTheme || theme;

  // ========== 页面标题 ==========
  slide.addText('应对"AI说了算，你也没权力改变？"', {
    x: 0.5,
    y: 0.25,
    w: 9,
    h: 0.5,
    fontSize: 24,
    fontFace: 'Microsoft YaHei',
    color: t.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 标题装饰线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 0.72,
    w: 0.8,
    h: 0.03,
    fill: { color: t.accent }
  });

  // ========== LEFT COLUMN: 员工真实想法 + 错误回应 ==========
  const leftX = 0.5;
  const leftW = 4.3;

  // ----- 员工这句话背后的意思 -----
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 0.9,
    w: leftW,
    h: 1.55,
    fill: { color: 'FFFFFF' },
    line: { color: t.light, width: 1 },
    rectRadius: 0.08,
    shadow: {
      type: 'outer',
      color: '000000',
      blur: 4,
      offset: 1,
      angle: 135,
      opacity: 0.06
    }
  });

  // 标签背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX + 0.12,
    y: 0.98,
    w: 1.6,
    h: 0.28,
    fill: { color: t.primary },
    rectRadius: 0.05
  });

  slide.addText('员工真实想法', {
    x: leftX + 0.12,
    y: 0.98,
    w: 1.6,
    h: 0.28,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 潜台词强调
  slide.addText('潜台词：我需要一个愿意为我争取的管理者', {
    x: leftX + 0.12,
    y: 1.3,
    w: leftW - 0.24,
    h: 0.28,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: t.accent,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // 具体表现
  slide.addText([
    { text: '"既然你说了不算，那我找你有什么用？"', options: { breakLine: true } },
    { text: '"你是不是不愿意为我说话？"' }
  ], {
    x: leftX + 0.12,
    y: 1.62,
    w: leftW - 0.24,
    h: 0.75,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: t.secondary,
    align: 'left',
    valign: 'top',
    italic: true
  });

  // ----- 错误的回应 -----
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 2.55,
    w: leftW,
    h: 1.2,
    fill: { color: 'FFFFFF' },
    line: { color: t.light, width: 1 },
    rectRadius: 0.08,
    shadow: {
      type: 'outer',
      color: '000000',
      blur: 4,
      offset: 1,
      angle: 135,
      opacity: 0.06
    }
  });

  // 错误标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX + 0.12,
    y: 2.63,
    w: 0.8,
    h: 0.26,
    fill: { color: t.primary, transparency: 15 },
    rectRadius: 0.05
  });

  slide.addText('错误回应', {
    x: leftX + 0.12,
    y: 2.63,
    w: 0.8,
    h: 0.26,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: t.primary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // X 符号
  slide.addText('✗', {
    x: leftX + 0.95,
    y: 2.58,
    w: 0.3,
    h: 0.3,
    fontSize: 14,
    fontFace: 'Arial',
    color: t.primary,
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 错误回应内容
  slide.addText([
    { text: '"是啊，我也改不了，系统定的。"', options: { breakLine: true, color: t.primary } },
    { text: '→ 甩锅给AI', options: { breakLine: true, color: t.secondary, fontSize: 9 } },
    { text: '"我只是个执行者，你找HR吧。"', options: { breakLine: true, color: t.primary } },
    { text: '→ 推脱责任', options: { color: t.secondary, fontSize: 9 } }
  ], {
    x: leftX + 0.12,
    y: 2.92,
    w: leftW - 0.24,
    h: 0.78,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    align: 'left',
    valign: 'top'
  });

  // ----- 关键点标签 -----
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: 3.88,
    w: leftW,
    h: 0.6,
    fill: { color: t.accent, transparency: 12 },
    line: { color: t.accent, width: 0.8 },
    rectRadius: 0.08
  });

  slide.addText('关键点', {
    x: leftX + 0.12,
    y: 3.95,
    w: 0.7,
    h: 0.22,
    fontSize: 9,
    fontFace: 'Microsoft YaHei',
    color: t.accent,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  slide.addText('承认权限有限，但证明自己"争取过"', {
    x: leftX + 0.12,
    y: 4.18,
    w: leftW - 0.24,
    h: 0.25,
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: t.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== RIGHT COLUMN: 四步法 ==========
  const rightX = 5.0;
  const rightW = 4.5;

  // 四步法标题
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightX,
    y: 0.9,
    w: rightW,
    h: 0.38,
    fill: { color: t.primary },
    rectRadius: 0.06
  });

  slide.addText('正确回应——四步法', {
    x: rightX,
    y: 0.9,
    w: rightW,
    h: 0.38,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 四步内容卡片
  const steps = [
    {
      num: '1',
      title: '倾听',
      content: '"我听到了，你对结果不满意，你觉得我的意见没有被体现。"',
      note: '不打断，复述确认'
    },
    {
      num: '2',
      title: '共情',
      content: '"换了是我，我也希望我的老板能多替我说话。"',
      note: '承认需求合理'
    },
    {
      num: '3',
      title: '解释',
      content: '"这个结果经过了AI计算和我的人工审核两个环节。..."',
      note: '说明实际权限'
    },
    {
      num: '4',
      title: '承诺',
      content: '"你说的调到P75分位这件事，我记下了。下次调薪季，我会把这个诉求作为优先级提交。"',
      note: '具体承诺'
    }
  ];

  const stepStartY = 1.38;
  const stepH = 0.88;
  const stepGap = 0.1;

  steps.forEach((step, idx) => {
    const stepY = stepStartY + idx * (stepH + stepGap);
    const isEven = idx % 2 === 0;
    const stepColor = isEven ? t.primary : t.accent;

    // 步骤卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: rightX,
      y: stepY,
      w: rightW,
      h: stepH,
      fill: { color: 'FFFFFF' },
      line: { color: t.light, width: 0.8 },
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

    // 左侧色条
    slide.addShape(pres.ShapeType.rect, {
      x: rightX,
      y: stepY,
      w: 0.06,
      h: stepH,
      fill: { color: stepColor }
    });

    // 覆盖左上圆角
    slide.addShape(pres.ShapeType.rect, {
      x: rightX,
      y: stepY,
      w: 0.08,
      h: 0.08,
      fill: { color: stepColor }
    });

    // 步骤数字圆圈
    slide.addShape(pres.ShapeType.ellipse, {
      x: rightX + 0.15,
      y: stepY + 0.12,
      w: 0.32,
      h: 0.32,
      fill: { color: stepColor }
    });

    slide.addText(step.num, {
      x: rightX + 0.15,
      y: stepY + 0.12,
      w: 0.32,
      h: 0.32,
      fontSize: 14,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 步骤标题
    slide.addText(step.title, {
      x: rightX + 0.52,
      y: stepY + 0.1,
      w: 0.8,
      h: 0.32,
      fontSize: 13,
      fontFace: 'Microsoft YaHei',
      color: stepColor,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 步骤内容
    slide.addText(step.content, {
      x: rightX + 0.52,
      y: stepY + 0.4,
      w: rightW - 0.68,
      h: 0.34,
      fontSize: 8.5,
      fontFace: 'Microsoft YaHei',
      color: t.secondary,
      align: 'left',
      valign: 'top'
    });

    // 步骤备注标签
    slide.addShape(pres.ShapeType.roundRect, {
      x: rightX + 0.52,
      y: stepY + 0.72,
      w: rightW - 0.68,
      h: 0.12,
      fill: { color: stepColor, transparency: 85 },
      rectRadius: 0.03
    });

    slide.addText(step.note, {
      x: rightX + 0.52,
      y: stepY + 0.72,
      w: rightW - 0.68,
      h: 0.12,
      fontSize: 8,
      fontFace: 'Microsoft YaHei',
      color: stepColor,
      bold: false,
      align: 'center',
      valign: 'middle'
    });
  });

  // ========== 底部装饰 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.2,
    w: 0.08,
    h: 0.08,
    fill: { color: t.light }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.65,
    y: 5.2,
    w: 0.08,
    h: 0.08,
    fill: { color: t.accent, transparency: 50 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.8,
    y: 5.2,
    w: 0.08,
    h: 0.08,
    fill: { color: t.primary, transparency: 70 }
  });

  // 右侧底部装饰线
  slide.addShape(pres.ShapeType.rect, {
    x: 8.5,
    y: 5.15,
    w: 1,
    h: 0.02,
    fill: { color: t.light, transparency: 50 }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig,
  theme
};
