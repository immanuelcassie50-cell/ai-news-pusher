// slide-25.js - 三步信任重建法：完整话术模板（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 25,
  title: '三步信任重建法：完整话术模板'
};

// 对话步骤数据
const dialogueSteps = [
  {
    step: '1',
    title: '透明披露',
    content: '"小李，先说一下今年的调薪结果——你的调薪幅度是12%。\n\n这个数字是怎么来的？我跟你拆开说：\n第一，市场数据。你现在拿的薪资，比市场上同类岗位的中位数低了15%左右。这是我们通过第三方薪酬调研平台拉的数据。\n第二，你的绩效。去年你的绩效是A。\n第三，我自己的判断。数据是一方面，我看你去年带队做了两个关键项目……"'
  },
  {
    step: '2',
    title: '逻辑呈现',
    content: '"系统里调薪建议是先看绩效等级，再对市场偏差做修正。所以这个数字是这样来的……"'
  },
  {
    step: '3',
    title: '情感连接',
    content: '"当然，这个数字也不只是我一个人定的——它是系统建议加我的上报，最终是CEO办公室审批的。我能调整的空间确实有限，但我争取过。\n\n你有没有什么想问的？"'
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('三步信任重建法：完整话术模板', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 28,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 0.88,
    w: 0.8,
    h: 0.03,
    fill: { color: theme.accent }
  });

  // ========== 副标题 ==========
  slide.addText('完整对话示例', {
    x: 0.5,
    y: 0.98,
    w: 3,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== 开场白卡片 ==========
  const openingY = 1.4;
  const openingHeight = 0.75;

  // 开场背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: openingY,
    w: 9,
    h: openingHeight,
    fill: { color: theme.primary, transparency: 8 },
    line: { color: theme.primary, width: 1.5, transparency: 40 },
    rectRadius: 0.08
  });

  // 开场标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.65,
    y: openingY + 0.12,
    w: 0.6,
    h: 0.24,
    fill: { color: theme.primary },
    line: { width: 0 },
    rectRadius: 0.05
  });

  slide.addText('开场', {
    x: 0.65,
    y: openingY + 0.12,
    w: 0.6,
    h: 0.24,
    fontSize: 10,
    fontFace: 'Microsoft YaHei',
    color: 'FFFFFF',
    bold: true,
    align: 'center',
    valign: 'middle'
  });

  // 开场内容
  slide.addText('"小李，先说一下今年的调薪结果——你的调薪幅度是12%。"', {
    x: 1.4,
    y: openingY + 0.08,
    w: 7.9,
    h: 0.6,
    fontSize: 14,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: false,
    italic: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 三步对话卡片 ==========
  const cardStartY = 2.3;
  const cardWidth = 2.85;
  const cardHeight = 2.95;
  const cardGap = 0.225;
  const cardStartX = 0.5;

  dialogueSteps.forEach((step, idx) => {
    const cardX = cardStartX + idx * (cardWidth + cardGap);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: cardStartY,
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

    // 顶部步骤标签栏
    const stepColor = idx === 0 ? theme.primary : (idx === 1 ? theme.accent : theme.secondary);

    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: cardStartY,
      w: cardWidth,
      h: 0.45,
      fill: { color: stepColor },
      line: { width: 0 },
      rectRadius: 0.1
    });

    // 覆盖底部圆角
    slide.addShape(pres.ShapeType.rect, {
      x: cardX,
      y: cardStartY + 0.25,
      w: cardWidth,
      h: 0.2,
      fill: { color: stepColor },
      line: { width: 0 }
    });

    // 步骤编号圆圈
    slide.addShape(pres.ShapeType.ellipse, {
      x: cardX + 0.15,
      y: cardStartY + 0.08,
      w: 0.3,
      h: 0.3,
      fill: { color: 'FFFFFF' }
    });

    slide.addText(step.step, {
      x: cardX + 0.15,
      y: cardStartY + 0.08,
      w: 0.3,
      h: 0.3,
      fontSize: 14,
      fontFace: 'Microsoft YaHei',
      color: stepColor,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 步骤标题
    slide.addText('第' + step.step + '步：' + step.title, {
      x: cardX + 0.5,
      y: cardStartY + 0.08,
      w: cardWidth - 0.65,
      h: 0.3,
      fontSize: 13,
      fontFace: 'Microsoft YaHei',
      color: 'FFFFFF',
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 对话内容区域 - 模拟气泡样式
    const bubbleY = cardStartY + 0.55;
    const bubbleHeight = cardHeight - 0.7;

    // 气泡背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX + 0.12,
      y: bubbleY,
      w: cardWidth - 0.24,
      h: bubbleHeight,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 0.5 },
      rectRadius: 0.06
    });

    // 对话文字
    slide.addText(step.content, {
      x: cardX + 0.2,
      y: bubbleY + 0.1,
      w: cardWidth - 0.4,
      h: bubbleHeight - 0.2,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'top',
      lineSpacingMultiple: 1.15
    });
  });

  // ========== 底部装饰元素 ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.35,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.65,
    y: 5.35,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.8,
    y: 5.35,
    w: 0.06,
    h: 0.06,
    fill: { color: theme.light }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
