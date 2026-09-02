// slide-33.js - 谢娜：承诺错配
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary },
  });

  slide.addText("承诺错配——先用非商业语言取得信任", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 5.8, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, color: "000000", opacity: 8 },
  });

  slide.addText("案例", {
    x: 0.7, y: 1.2, w: 5.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
  });

  slide.addText("仅此一场、圆梦叙事变成全国巡演，引发割韭菜争议", {
    x: 0.7, y: 1.55, w: 5.4, h: 0.75,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 6.5, y: 1.1, w: 3.0, h: 1.3,
    fill: { color: theme.accent },
  });

  slide.addText("核心问题", {
    x: 6.5, y: 1.2, w: 3.0, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center",
  });

  slide.addText("先用非商业语言取得信任，再突然切换到最大化商业变现", {
    x: 6.7, y: 1.55, w: 2.6, h: 0.75,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle",
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.6, w: 9, h: 0.7,
    fill: { color: theme.secondary, transparency: 90 },
    line: { color: theme.secondary, width: 1 },
  });

  slide.addText("触发机制：稀缺性被当成促单工具——仅此一次、错过不再有、情怀限定", {
    x: 0.7, y: 2.75, w: 8.6, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.5, w: 4.4, h: 1.0,
    fill: { color: theme.light, transparency: 50 },
  });

  slide.addText("反面案例：papi酱2200万广告贴片——大大方方承认这是生意，商业和内容两条线从头到尾没打架", {
    x: 0.7, y: 3.6, w: 4.0, h: 0.8,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 3.5, w: 4.4, h: 1.0,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 },
  });

  slide.addText("警示：罗振宇/得到——知识付费、终身成长变成贩卖焦虑", {
    x: 5.3, y: 3.6, w: 4.0, h: 0.8,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary,
  });

  return slide;
}

module.exports = { createSlide };
