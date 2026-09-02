const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Deep dark background
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 7,
    fill: { color: theme.primary }
  });

  // Red decorative line (diagonal)
  slide.addShape("rect", {
    x: -0.5, y: 2.5, w: 11, h: 0.08,
    fill: { color: theme.accent },
    rotate: -5
  });

  // Big chapter number "04"
  slide.addText("04", {
    x: 0.8, y: 1.2, w: 3, h: 2.5,
    fontSize: 120, fontFace: "Arial",
    color: theme.bg, bold: true
  });

  // Chapter title
  slide.addText("综合应用与认证", {
    x: 0.8, y: 3.5, w: 8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true
  });

  // Subtitle
  slide.addText("第四天", {
    x: 0.8, y: 4.4, w: 3, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Decorative dots
  const dots = [
    { x: 8.5, y: 1.5 },
    { x: 9.0, y: 1.8 },
    { x: 8.8, y: 2.3 }
  ];
  dots.forEach(d => {
    slide.addShape("ellipse", {
      x: d.x, y: d.y, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });
  });

  // Bottom decorative line
  slide.addShape("rect", {
    x: 0.8, y: 5.2, w: 4, h: 0.03,
    fill: { color: theme.secondary }
  });

  // Course outline hint
  slide.addText("催化方案设计 · 模拟会议 · 认证考核", {
    x: 0.8, y: 5.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide };
