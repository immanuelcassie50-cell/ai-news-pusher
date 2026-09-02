const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Dark background
  slide.background = { color: theme.primary };

  // Large "02" number - semi-transparent background element
  slide.addText("02", {
    x: -0.5, y: 0.5, w: 6, h: 4,
    fontSize: 200, fontFace: "Arial",
    color: "ffffff", bold: true,
    transparency: 90
  });

  // Red decorative vertical line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.5, w: 0.08, h: 3.5,
    fill: { color: theme.accent }
  });

  // Day label badge
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 1.5, w: 1.8, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("第二天", {
    x: 1.1, y: 1.5, w: 1.8, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Main title
  slide.addText("团队动力与提问技术", {
    x: 1.1, y: 2.2, w: 8, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("Team Dynamics & Questioning Techniques", {
    x: 1.1, y: 3.4, w: 8, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Decorative horizontal line
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 4.1, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // Bottom decorative circles
  slide.addShape(pres.ShapeType.ellipse, {
    x: 7.5, y: 4.5, w: 1.2, h: 1.2,
    fill: { color: theme.accent, transparency: 70 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.2, y: 5.0, w: 0.8, h: 0.8,
    fill: { color: theme.secondary, transparency: 60 }
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 6.8, y: 5.2, w: 0.5, h: 0.5,
    fill: { color: "ffffff", transparency: 80 }
  });

  return slide;
}

module.exports = { createSlide };
