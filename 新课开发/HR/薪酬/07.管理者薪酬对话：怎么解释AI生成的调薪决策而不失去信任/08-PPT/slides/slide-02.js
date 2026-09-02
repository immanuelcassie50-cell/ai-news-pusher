// slide-02.js - 六模块学习地图（目录页）
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '六模块学习地图'
};

const modules = [
  { num: '01', title: 'AI时代的薪酬对话新格局' },
  { num: '02', title: '调薪决策的双轨结构' },
  { num: '03', title: '三步信任重建法' },
  { num: '04', title: '薪酬对话场景实战' },
  { num: '05', title: '应对质疑与异议' },
  { num: '06', title: '持续信任维护机制' }
];

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // ========== 页面标题 ==========
  slide.addText('六模块学习地图', {
    x: 0.5,
    y: 0.4,
    w: 9,
    h: 0.8,
    fontSize: 36,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== 副标题/说明 ==========
  slide.addText('TABLE OF CONTENTS', {
    x: 0.5,
    y: 1.1,
    w: 9,
    h: 0.4,
    fontSize: 12,
    fontFace: 'Arial',
    color: theme.secondary,
    align: 'left',
    valign: 'middle',
    charSpacing: 4
  });

  // ========== 装饰线 ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.6,
    w: 1.2,
    h: 0.04,
    fill: { color: theme.accent }
  });

  // ========== 两列布局参数 ==========
  const startY = 2.1;
  const cardHeight = 0.95;
  const cardGap = 0.25;
  const col1X = 0.5;
  const col2X = 5.2;
  const cardWidth = 4.3;

  // ========== 绘制模块卡片 ==========
  modules.forEach((mod, idx) => {
    const col = idx < 3 ? 0 : 1;
    const row = idx % 3;
    const x = col === 0 ? col1X : col2X;
    const y = startY + row * (cardHeight + cardGap);

    // 卡片背景 - 浅粉灰带透明度
    slide.addShape(pres.ShapeType.roundRect, {
      x: x,
      y: y,
      w: cardWidth,
      h: cardHeight,
      fill: { color: theme.light, transparency: 60 },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    // 左侧红色数字区域背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x,
      y: y,
      w: 0.9,
      h: cardHeight,
      fill: { color: theme.primary, transparency: 10 },
      line: { color: theme.primary, width: 0 },
      rectRadius: 0.1
    });

    // 序号数字
    slide.addText(mod.num, {
      x: x,
      y: y,
      w: 0.9,
      h: cardHeight,
      fontSize: 28,
      fontFace: 'Arial',
      color: theme.primary,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // 模块标题
    slide.addText(mod.title, {
      x: x + 1.0,
      y: y,
      w: cardWidth - 1.1,
      h: cardHeight,
      fontSize: 16,
      fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      bold: false,
      align: 'left',
      valign: 'middle'
    });
  });

  // ========== 底部装饰元素 ==========
  // 左下角装饰点
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.5,
    y: 5.1,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.7,
    y: 5.1,
    w: 0.08,
    h: 0.08,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.9,
    y: 5.1,
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
