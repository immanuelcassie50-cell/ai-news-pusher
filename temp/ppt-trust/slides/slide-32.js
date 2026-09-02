// slide-32.js - 鹅腿阿姨信用外溢
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("鹅腿阿姨 · 信用外溢", {
    x: 0.5, y: 0.25, w: 6, h: 0.55,
    fontSize: 26,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Case card
  slide.addShape("roundRect", {
    x: 0.5, y: 0.95, w: 9, h: 1.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("案例", {
    x: 0.7, y: 1.1, w: 0.8, h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true
  });

  slide.addText("清华北大周边摆摊攒下草根人设，后被发现卖的其实是鸭腿", {
    x: 0.7, y: 1.5, w: 8.5, h: 0.4,
    fontSize: 15,
    fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("核心问题", {
    x: 0.7, y: 1.95, w: 1.5, h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true
  });

  slide.addText("不是草根创业翻车了，是情感信用替代了交易信用", {
    x: 2.0, y: 1.95, w: 7.3, h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Hard boundary section
  slide.addShape("roundRect", {
    x: 0.5, y: 2.6, w: 9, h: 1.1,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.08
  });

  slide.addText("交易硬边界", {
    x: 0.7, y: 2.7, w: 1.5, h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  slide.addText("食品名称、食材来源、消费者知情权，不能用情怀替代", {
    x: 0.7, y: 3.1, w: 8.5, h: 0.5,
    fontSize: 15,
    fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Key quote
  slide.addShape("roundRect", {
    x: 0.5, y: 3.9, w: 9, h: 1.3,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("人格魅力不是产品说明书", {
    x: 0.7, y: 4.05, w: 8.6, h: 0.5,
    fontSize: 22,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true
  });

  slide.addText("草根故事不是交易透明的豁免权", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.5,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  return slide;
}

module.exports = { createSlide };
