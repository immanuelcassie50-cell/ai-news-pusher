// slide-07.js - AI带来的三个新问题（内容页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 7,
  title: 'AI带来的三个新问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('AI带来的三个新问题', {
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

  // ========== 副标题装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.0,
    w: 1.0,
    h: 0.035,
    fill: { color: theme.accent }
  });

  // ========== 问题数据 ==========
  const problems = [
    {
      num: '01',
      title: '责任归属模糊了',
      before: '传统：调薪结果 → 员工质疑 → 老板承担',
      after: 'AI介入后：调薪结果 → 员工质疑 → "是系统算的" → 责任稀释',
      key: '员工找不到真正负责的人'
    },
    {
      num: '02',
      title: '员工感知从"静态档案"变成"动态数据"',
      before: '以前：薪资就是HR系统里的一个数字，每年调一次',
      after: '现在：薪酬仪表盘实时显示市场价值、绩效关联、内部排名',
      key: '从"一年一次的惊喜/惊吓"变成"随时可见的焦虑/期待"'
    },
    {
      num: '03',
      title: '跨文化管理的薪酬对话难度增加',
      before: '欧盟2023年Pay Transparency Directive实施；英国要求250人以上雇主披露性别薪酬差距；美国部分州要求薪酬范围透明',
      after: '',
      key: '同样调薪决定，对不同国家员工解释方式不同'
    }
  ];

  // ========== 布局参数 ==========
  const startY = 1.3;
  const cardWidth = 9.0;
  const cardHeight = 1.3;
  const cardGap = 0.2;
  const leftMargin = 0.5;

  // ========== 绘制问题卡片 ==========
  problems.forEach((problem, idx) => {
    const y = startY + idx * (cardHeight + cardGap);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: leftMargin,
      y: y,
      w: cardWidth,
      h: cardHeight,
      fill: { color: 'FFFFFF' },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08,
      shadow: {
        type: 'outer',
        blur: 3,
        offset: 1,
        angle: 45,
        color: '000000',
        opacity: 0.08
      }
    });

    // 左侧序号区域背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: leftMargin,
      y: y,
      w: 0.75,
      h: cardHeight,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 },
      rectRadius: 0.08
    });

    // 左侧遮盖右侧圆角
    slide.addShape(pres.ShapeType.rect, {
      x: leftMargin + 0.5,
      y: y,
      w: 0.3,
      h: cardHeight,
      fill: { color: theme.primary },
      line: { width: 0 }
    });

    // 序号数字
    slide.addText(problem.num, {
      x: leftMargin,
      y: y,
      w: 0.75,
      h: cardHeight,
      fontSize: 24,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 问题标题
    slide.addText(problem.title, {
      x: leftMargin + 0.95,
      y: y + 0.12,
      w: cardWidth - 1.2,
      h: 0.4,
      fontSize: 16,
      fontFace: 'Microsoft YaHei',
      color: theme.primary,
      bold: true,
      align: 'left',
      valign: 'middle'
    });

    // 问题描述 - 两行对比
    if (problem.after) {
      // 有before和after的情况
      slide.addText(problem.before, {
        x: leftMargin + 0.95,
        y: y + 0.5,
        w: cardWidth - 1.2,
        h: 0.28,
        fontSize: 11,
        fontFace: 'Microsoft YaHei',
        color: theme.secondary,
        bold: false,
        align: 'left',
        valign: 'middle'
      });

      slide.addText(problem.after, {
        x: leftMargin + 0.95,
        y: y + 0.78,
        w: cardWidth - 1.2,
        h: 0.28,
        fontSize: 11,
        fontFace: 'Microsoft YaHei',
        color: theme.secondary,
        bold: false,
        align: 'left',
        valign: 'middle'
      });
    } else {
      // 只有before的情况（问题三）
      slide.addText(problem.before, {
        x: leftMargin + 0.95,
        y: y + 0.5,
        w: cardWidth - 1.2,
        h: 0.5,
        fontSize: 11,
        fontFace: 'Microsoft YaHei',
        color: theme.secondary,
        bold: false,
        align: 'left',
        valign: 'top'
      });
    }

    // 关键洞察标签
    slide.addShape(pres.ShapeType.roundRect, {
      x: leftMargin + 0.95,
      y: y + cardHeight - 0.42,
      w: 0.5,
      h: 0.26,
      fill: { color: theme.accent },
      line: { width: 0 },
      rectRadius: 0.04
    });

    slide.addText('关键', {
      x: leftMargin + 0.95,
      y: y + cardHeight - 0.42,
      w: 0.5,
      h: 0.26,
      fontSize: 9,
      fontFace: 'Microsoft YaHei',
      color: 'FFFFFF',
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 关键洞察内容
    slide.addText(problem.key, {
      x: leftMargin + 1.55,
      y: y + cardHeight - 0.42,
      w: cardWidth - 1.8,
      h: 0.26,
      fontSize: 11,
      fontFace: 'Microsoft YaHei',
      color: theme.accent,
      bold: true,
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 底部装饰元素 ==========
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
