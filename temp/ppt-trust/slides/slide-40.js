// slide-40.js - 表达前六问04-06
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("表达前六问（续）", {
    x: 0.5, y: 0.3, w: 6, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  // 问题4
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 0.6, h: 0.6,
    fill: { color: theme.accent },
  });

  slide.addText("04", {
    x: 0.5, y: 1.0, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  slide.addText("我的真实利益关系说清楚了吗？", {
    x: 1.3, y: 1.0, w: 8, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("商业、朋友、合作、资源交换关系有没有说明？隐瞒不一定违法，但很伤信任。", {
    x: 1.3, y: 1.35, w: 8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 问题5
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.0, w: 0.6, h: 0.6,
    fill: { color: theme.accent },
  });

  slide.addText("05", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  slide.addText("把镜头撤掉，这件事还成立吗？", {
    x: 1.3, y: 2.0, w: 8, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("如果不拍、不发、不上热搜，我还会不会做这件事？识别表演型真实最好用的一问。", {
    x: 1.3, y: 2.35, w: 8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 问题6
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.0, w: 0.6, h: 0.6,
    fill: { color: theme.accent },
  });

  slide.addText("06", {
    x: 0.5, y: 3.0, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  slide.addText("三个月后被截出来，我还站得住吗？", {
    x: 1.3, y: 3.0, w: 8, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("假设它脱离上下文、被截取最刺耳的一句、被最不喜欢你的人解读，你还愿意说吗？", {
    x: 1.3, y: 3.35, w: 8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.1, w: 9, h: 1.2,
    fill: { color: theme.primary },
  });

  slide.addText("六个问题里，有没有哪一问让你在写的时候，笔停了一下？", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center",
  });

  slide.addText("这个停顿很重要，往往就是这次表达最该留意的点", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center",
  });

  return slide;
}

module.exports = { createSlide };
