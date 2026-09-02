const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

const slideConfig = {
  title: "三层提问框架",
  pageNumber: "10"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("三层提问框架", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three cards layout
  const cardWidth = 2.9;
  const cardHeight = 3.8;
  const cardY = 1.2;
  const cardGap = 0.2;
  const startX = 0.5;

  // Card 1 - 新手易错点
  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: startX, y: cardY, w: cardWidth, h: 0.6,
    fill: { color: theme.secondary }
  });

  slide.addText("1", {
    x: startX, y: cardY + 0.05, w: cardWidth, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText("新手易错点", {
    x: startX + 0.15, y: cardY + 0.7, w: cardWidth - 0.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  slide.addText("踩过什么坑？\n绝对不能做的事？", {
    x: startX + 0.15, y: cardY + 1.4, w: cardWidth - 0.3, h: 2.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top",
    align: "center"
  });

  // Card 2 - 老手易忽视点
  const card2X = startX + cardWidth + cardGap;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: card2X, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: card2X, y: cardY, w: cardWidth, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText("2", {
    x: card2X, y: cardY + 0.05, w: cardWidth, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText("老手易忽视点", {
    x: card2X + 0.15, y: cardY + 0.7, w: cardWidth - 0.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  slide.addText("有意识在做的\nvs 下意识就做了的？\n感觉从哪里来？", {
    x: card2X + 0.15, y: cardY + 1.4, w: cardWidth - 0.3, h: 2.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top",
    align: "center"
  });

  // Card 3 - 致命点
  const card3X = card2X + cardWidth + cardGap;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: card3X, y: cardY, w: cardWidth, h: cardHeight,
    fill: { color: theme.light }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: card3X, y: cardY, w: cardWidth, h: 0.6,
    fill: { color: theme.primary }
  });

  slide.addText("3", {
    x: card3X, y: cardY + 0.05, w: cardWidth, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  slide.addText("致命点", {
    x: card3X + 0.15, y: cardY + 0.7, w: cardWidth - 0.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  slide.addText("什么话不能说？\n什么线不能踩？", {
    x: card3X + 0.15, y: cardY + 1.4, w: cardWidth - 0.3, h: 2.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top",
    align: "center"
  });

  // Page number
  slide.addText("10", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "right"
  });
}

module.exports = { createSlide, slideConfig };