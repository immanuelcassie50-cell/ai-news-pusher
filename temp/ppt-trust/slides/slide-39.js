// slide-39.js - 表达前六问01-03
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("工具三：表达前六问", {
    x: 0.5, y: 0.3, w: 6, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("不管是发朋友圈、上直播、做演讲、发布产品、回应争议——正式说出口之前，过这六个问题", {
    x: 0.5, y: 0.8, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 问题1
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 0.6, h: 0.6,
    fill: { color: theme.accent },
  });

  slide.addText("01", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  slide.addText("我现在是以谁的身份在说话？", {
    x: 1.3, y: 1.4, w: 8, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("朋友、专业人士、企业创始人、公益人士、行业代表，还是普通消费者？不要以朋友身份提请求，却借用公众人物影响力获得结果。", {
    x: 1.3, y: 1.75, w: 8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 问题2
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.4, w: 0.6, h: 0.6,
    fill: { color: theme.accent },
  });

  slide.addText("02", {
    x: 0.5, y: 2.4, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  slide.addText("这句话会让谁付出什么成本？", {
    x: 1.3, y: 2.4, w: 8, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("成本不只是钱，还包括时间、面子、情绪、隐私、职业风险、群体压力、消费决策。", {
    x: 1.3, y: 2.75, w: 8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 问题3
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.4, w: 0.6, h: 0.6,
    fill: { color: theme.accent },
  });

  slide.addText("03", {
    x: 0.5, y: 3.4, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  slide.addText("我在调动什么情绪？", {
    x: 1.3, y: 3.4, w: 8, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("提供信息、分享体验、提出建议，还是在调用内疚、焦虑、归属感、恐惧、稀缺感？", {
    x: 1.3, y: 3.75, w: 8, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.5, w: 9, h: 0.9,
    fill: { color: theme.light, transparency: 50 },
  });

  slide.addText("情绪动员越多，越要确保它没有替代掉事实和对方自由选择的权利", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle",
  });

  return slide;
}

module.exports = { createSlide };
