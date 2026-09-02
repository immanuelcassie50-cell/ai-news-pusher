// slide-14.js - 韩红：事件经过
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page title
  slide.addText("先把事情原原本本讲一遍", {
    x: 0.5, y: 0.3, w: 7, h: 0.6,
    fontSize: 26,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Timeline card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  // Time badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 1.15, w: 1.8, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("2026年6月", {
    x: 0.7, y: 1.15, w: 1.8, h: 0.4,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  // Event description
  slide.addText("冯小刚电影《抓特务》首映礼", {
    x: 2.7, y: 1.15, w: 6.5, h: 0.4,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  slide.addText("韩红用北京话喊：", {
    x: 0.7, y: 1.7, w: 8.5, h: 0.4,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: false
  });

  // Quote box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 2.1, w: 8.6, h: 0.6,
    fill: { color: theme.primary }
  });

  slide.addText("\"咱北京两千多万兄弟姐妹受累，走个面儿，把第一波票房带起来\"", {
    x: 0.9, y: 2.1, w: 8.2, h: 0.6,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: false,
    valign: "middle"
  });

  // Result section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.5, w: 9, h: 1.0,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  slide.addText("争议发酵后公开道歉", {
    x: 0.7, y: 2.6, w: 3, h: 0.35,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true
  });

  slide.addText("\"表述过于轻率随意，思虑不周，措辞失当\"", {
    x: 0.7, y: 2.95, w: 8.5, h: 0.45,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: false,
    italic: true
  });

  // Reflection question
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.7, w: 9, h: 1.0,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 2 }
  });

  slide.addText("引导思考", {
    x: 0.7, y: 3.8, w: 1.5, h: 0.3,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true
  });

  slide.addText("如果只从字面看，\"走个面儿\"这三个字，有什么问题吗？", {
    x: 0.7, y: 4.15, w: 8.5, h: 0.45,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true
  });

  return slide;
}

module.exports = { createSlide };
