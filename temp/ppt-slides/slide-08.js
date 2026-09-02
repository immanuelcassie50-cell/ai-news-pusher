const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

const slideConfig = {
  title: "访谈提问框架",
  pageNumber: "08"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Chapter number
  slide.addText("06", {
    x: 0.8, y: 1.5, w: 2, h: 1,
    fontSize: 72, fontFace: "Arial",
    color: theme.light, bold: true
  });

  // Horizontal divider line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.6, w: 8.4, h: 0.03,
    fill: { color: theme.accent }
  });

  // Chapter title
  slide.addText("访谈提问框架", {
    x: 0.8, y: 2.9, w: 8.4, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("一套三层经验导向的提问工具", {
    x: 0.8, y: 3.9, w: 8.4, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Page number
  slide.addText("08", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.light, align: "right"
  });
}

module.exports = { createSlide, slideConfig };