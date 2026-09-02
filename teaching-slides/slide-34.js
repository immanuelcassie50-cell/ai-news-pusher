const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Dark background
  slide.background = { color: theme.primary };

  // Large "03" background number
  slide.addText("03", {
    x: -1, y: -0.5, w: 7, h: 5,
    fontSize: 250, fontFace: "Arial",
    color: "ffffff", bold: true,
    transparency: 92
  });

  // Red decorative vertical line
  slide.addShape("rect", {
    x: 0.8, y: 1.2, w: 0.1, h: 3.8,
    fill: { color: theme.accent }
  });

  // Day badge
  slide.addShape("rect", {
    x: 1.1, y: 1.2, w: 1.8, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("第三天", {
    x: 1.1, y: 1.2, w: 1.8, h: 0.55,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  // Main title
  slide.addText("复杂情境应对", {
    x: 1.1, y: 2.0, w: 8, h: 1.3,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("Complex Situation Management", {
    x: 1.1, y: 3.3, w: 8, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  // Decorative horizontal line
  slide.addShape("rect", {
    x: 1.1, y: 4.0, w: 3.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Decorative circles - bottom right
  slide.addShape("ellipse", {
    x: 7.2, y: 4.2, w: 1.5, h: 1.5,
    fill: { color: theme.accent, transparency: 75 }
  });
  slide.addShape("ellipse", {
    x: 8.0, y: 4.8, w: 1.0, h: 1.0,
    fill: { color: theme.secondary, transparency: 70 }
  });
  slide.addShape("ellipse", {
    x: 6.5, y: 5.0, w: 0.6, h: 0.6,
    fill: { color: "ffffff", transparency: 85 }
  });

  return slide;
}

module.exports = { createSlide };
