function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Center content area
  const centerY = 1.8;

  // Main concept text
  slide.addText("私人情感×公共身份×商业交易", {
    x: 0.5, y: centerY - 0.8, w: 9, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, color: theme.secondary,
    align: "center"
  });

  slide.addText("核心观点", {
    x: 0.5, y: centerY - 0.15, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.light,
    align: "center"
  });

  // Arrow down
  slide.addText("▼", {
    x: 4.5, y: centerY + 0.2, w: 1, h: 0.4,
    fontFace: "Arial", fontSize: 20, color: theme.accent,
    align: "center"
  });

  // Question highlight box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1, y: centerY + 0.6, w: 8, h: 1.2,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("把这三样东西捆在一起，公众会问——", {
    x: 1.2, y: centerY + 0.7, w: 7.6, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: "FFFFFF",
    align: "center"
  });

  slide.addText("这张票我到底是因为电影真的好才买，还是因为我不买就显得不给你面子？", {
    x: 1.2, y: centerY + 1.1, w: 7.6, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 20, color: theme.accent,
    bold: true, align: "center"
  });

  // Bottom insight
  slide.addText("这不只是关于票价的问题，这是关于我的选择到底是不是我自己的选择", {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.secondary,
    align: "center", italic: true
  });

  return slide;
}
module.exports = { createSlide };
