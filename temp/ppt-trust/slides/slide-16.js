// slide-16.js - 韩红：熟人vs陌生人
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page title
  slide.addText("熟人社会的语言，进了陌生人社会", {
    x: 0.5, y: 0.25, w: 8, h: 0.55,
    fontSize: 24,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Left card - 熟人社会
  const cardY = 0.95;
  const cardH = 2.2;
  const leftX = 0.5, rightX = 5.15;
  const cardW = 4.35;

  // Left card
  slide.addShape(pres.ShapeType.rect, {
    x: leftX, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  // Left header
  slide.addShape(pres.ShapeType.rect, {
    x: leftX, y: cardY, w: cardW, h: 0.5,
    fill: { color: theme.secondary }
  });

  slide.addText("熟人社会", {
    x: leftX, y: cardY, w: cardW, h: 0.5,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  // Left content
  const leftPoints = [
    "\"走个面儿\"是软性邀约",
    "长期关系，这次帮了，下次会还",
    "是情分，关系润滑剂"
  ];

  leftPoints.forEach((point, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: leftX + 0.25, y: cardY + 0.7 + i * 0.45, w: 0.12, h: 0.12,
      fill: { color: theme.secondary }
    });

    slide.addText(point, {
      x: leftX + 0.5, y: cardY + 0.6 + i * 0.45, w: cardW - 0.7, h: 0.4,
      fontSize: 13,
      fontFace: "Microsoft YaHei",
      color: theme.primary,
      bold: false,
      valign: "middle"
    });
  });

  // Right card - 陌生人社会
  slide.addShape(pres.ShapeType.rect, {
    x: rightX, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1 }
  });

  // Right header
  slide.addShape(pres.ShapeType.rect, {
    x: rightX, y: cardY, w: cardW, h: 0.5,
    fill: { color: theme.accent }
  });

  slide.addText("陌生人社会", {
    x: rightX, y: cardY, w: cardW, h: 0.5,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  // Right content
  const rightPoints = [
    "几千万个毫无私交的人",
    "\"给个面子\"被重新编码",
    "可能变成不对等的压力"
  ];

  rightPoints.forEach((point, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: rightX + 0.25, y: cardY + 0.7 + i * 0.45, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });

    slide.addText(point, {
      x: rightX + 0.5, y: cardY + 0.6 + i * 0.45, w: cardW - 0.7, h: 0.4,
      fontSize: 13,
      fontFace: "Microsoft YaHei",
      color: theme.primary,
      bold: false,
      valign: "middle"
    });
  });

  // Bottom quote box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.35, w: 9, h: 1.5,
    fill: { color: theme.primary }
  });

  slide.addText("韩红的问题，不是\"不该帮朋友\"，而是把", {
    x: 0.7, y: 3.5, w: 8.6, h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    bold: false,
    align: "center"
  });

  slide.addText("\"请支持一下这部作品\"", {
    x: 0.7, y: 3.9, w: 8.6, h: 0.4,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center"
  });

  slide.addText("说成了", {
    x: 0.7, y: 4.25, w: 8.6, h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    bold: false,
    align: "center"
  });

  slide.addText("\"请替我的关系网络，完成一次票房任务\"", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.35,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
