// slide-12.js - 管理者最常踩的三个坑（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 12,
  title: '管理者最常踩的三个坑'
};

const traps = [
  {
    number: '01',
    title: '把AI建议当成挡箭牌',
    managerSays: '管理者说："这是系统算的，我也改不了。"',
    employeeFeels: '员工感受："所以你只是个传声筒？那我要你干嘛？"',
    analysis: '双重伤害——① 让员工觉得管理者没有裁量权（无能）；② 让员工觉得管理者不愿意为他说话（无义）'
  },
  {
    number: '02',
    title: '把数字解释当成对话的全部',
    managerSays: '管理者说："你的调薪是12%，市场数据是P50分位，你的绩效是A，这个数字已经很好了。"',
    employeeFeels: '员工感受："你说的是数字，我想知道的是你怎么看我。"',
    analysis: '数字讲完了，对话就结束了？员工真正想问的藏在数字背后'
  },
  {
    number: '03',
    title: '回避"为什么别人比我多"的问题',
    managerSays: '管理者说："薪酬是保密的，我不能告诉你别人的具体情况。"',
    employeeFeels: '员工感受："你不告诉我，是不是说明我的确比别人少？你在捂着盖子。"',
    analysis: '"薪酬保密"堵住了问题，没有解决问题'
  }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('管理者最常踩的三个坑', {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.6,
    fontSize: 30,
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
    w: 1.0,
    h: 0.03,
    fill: { color: theme.accent }
  });

  // ========== 副标题说明 ==========
  slide.addText('这三个误区，分别从不同角度破坏了员工对管理者的信任', {
    x: 0.5,
    y: 0.98,
    w: 9,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== 三张警告卡片 ==========
  const cardStartY = 1.45;
  const cardWidth = 9.0;
  const cardHeight = 1.25;
  const cardGap = 0.18;
  const cardX = 0.5;

  traps.forEach((trap, idx) => {
    const cardY = cardStartY + idx * (cardHeight + cardGap);

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

    // 左侧警告色块
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: cardY,
      w: 0.65,
      h: cardHeight,
      fill: { color: theme.accent, transparency: 12 },
      line: { width: 0 },
      rectRadius: 0.1
    });

    // 警告数字
    slide.addText(trap.number, {
      x: cardX,
      y: cardY,
      w: 0.65,
      h: cardHeight,
      fontSize: 26,
      fontFace: 'Arial',
      color: theme.accent,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 坑标题
    slide.addText('坑' + (idx + 1) + '：' + trap.title, {
      x: cardX + 0.8,
      y: cardY + 0.1,
      w: 4.5,
      h: 0.4,
      fontSize: 16,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 管理者说 - 标签
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX + 0.8,
      y: cardY + 0.52,
      w: 0.7,
      h: 0.28,
      fill: { color: theme.secondary, transparency: 85 },
      line: { width: 0 },
      rectRadius: 0.04
    });

    slide.addText('管理者', {
      x: cardX + 0.8,
      y: cardY + 0.52,
      w: 0.7,
      h: 0.28,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 管理者说的话
    slide.addText(trap.managerSays, {
      x: cardX + 1.6,
      y: cardY + 0.5,
      w: 3.5,
      h: 0.35,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      italic: true,
      align: 'left',
      valign: 'middle'
    });

    // 员工感受 - 标签
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX + 0.8,
      y: cardY + 0.85,
      w: 0.7,
      h: 0.28,
      fill: { color: theme.accent, transparency: 80 },
      line: { width: 0 },
      rectRadius: 0.04
    });

    slide.addText('员工', {
      x: cardX + 0.8,
      y: cardY + 0.85,
      w: 0.7,
      h: 0.28,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 员工感受
    slide.addText(trap.employeeFeels, {
      x: cardX + 1.6,
      y: cardY + 0.83,
      w: 3.5,
      h: 0.35,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      italic: true,
      align: 'left',
      valign: 'middle'
    });

    // 右侧分析区域背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX + 5.3,
      y: cardY + 0.15,
      w: 4.0,
      h: 0.95,
      fill: { color: theme.primary, transparency: 95 },
      line: { color: theme.primary, width: 0.5, transparency: 70 },
      rectRadius: 0.06
    });

    // 分析标签
    slide.addText('伤害分析', {
      x: cardX + 5.45,
      y: cardY + 0.2,
      w: 1.0,
      h: 0.28,
      fontSize: 10,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 分析内容
    slide.addText(trap.analysis, {
      x: cardX + 5.45,
      y: cardY + 0.48,
      w: 3.7,
      h: 0.6,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'top'
    });
  });

  // ========== 底部装饰点 ==========
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

module.exports = {
  createSlide,
  slideConfig
};
