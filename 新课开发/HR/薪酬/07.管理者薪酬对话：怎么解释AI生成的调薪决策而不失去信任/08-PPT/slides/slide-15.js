// slide-15.js - MODULE 2 SECTION DIVIDER
// 调薪决策的双轨结构

const slideConfig = {
  type: 'section',
  index: 15,
  title: '调薪决策的双轨结构'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // Subtle geometric decoration - diagonal lines in top right
  const decorColor = theme.light;
  for (let i = 0; i < 5; i++) {
    slide.addShape(pres.ShapeType.line, {
      x: 7.5 + i * 0.3,
      y: 0,
      w: 2.5,
      h: 2.5,
      line: { color: decorColor, width: 0.5, transparency: 60 + i * 8 }
    });
  }

  // Bottom decorative geometric shapes
  slide.addShape(pres.ShapeType.rect, {
    x: 8.5,
    y: 4.5,
    w: 1.5,
    h: 0.08,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 9.2,
    y: 4.7,
    w: 0.8,
    h: 0.08,
    fill: { color: theme.accent, transparency: 60 }
  });

  // Left vertical accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8,
    y: 1.2,
    w: 0.12,
    h: 3.2,
    fill: { color: theme.accent }
  });

  // Large section number "02" - bold and prominent
  slide.addText("02", {
    x: 1.2,
    y: 1.0,
    w: 3,
    h: 1.5,
    fontSize: 88,
    fontFace: 'Arial',
    color: theme.primary,
    bold: true,
    transparency: 15
  });

  // Section title
  slide.addText("调薪决策的双轨结构", {
    x: 1.2,
    y: 2.4,
    w: 7.5,
    h: 0.9,
    fontSize: 40,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true
  });

  // Subtitle / intro
  slide.addText("AI数据轨与人工判断轨，各自负责什么", {
    x: 1.2,
    y: 3.3,
    w: 7.5,
    h: 0.6,
    fontSize: 20,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary
  });

  // Soft decorative underline for subtitle
  slide.addShape(pres.ShapeType.rect, {
    x: 1.2,
    y: 3.95,
    w: 2.5,
    h: 0.04,
    fill: { color: theme.accent, transparency: 40 }
  });

  return slide;
}

module.exports = {
  createSlide,
  slideConfig
};
