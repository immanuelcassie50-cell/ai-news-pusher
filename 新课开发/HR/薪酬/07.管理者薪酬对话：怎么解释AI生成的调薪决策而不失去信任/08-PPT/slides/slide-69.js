// slide-69.js - MODULE 6 SECTION DIVIDER
// 持续信任维护机制

const slideConfig = {
  type: 'section',
  index: 69,
  title: '持续信任维护机制'
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

  // Large section number "06" - bold and prominent
  slide.addText("06", {
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
  slide.addText("持续信任维护机制", {
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
  slide.addText("从\"一次性对话\"升级为持续关系经营", {
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
