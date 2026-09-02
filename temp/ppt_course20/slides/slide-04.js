const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("课程导入：你是否也这样？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  const questions = [
    "刷到一个\"不能错过\"的育儿文章，马上收藏，但再也没打开过",
    "两种截然相反的建议让你更加困惑：到底该听谁的？",
    "每次做决定前都要查很久，但越查越没底气",
    "听到别的孩子报了某个兴趣班，立刻焦虑自己孩子落后了"
  ];
  questions.forEach((q, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.4 + i * 0.95, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText("?", {
      x: 0.6, y: 1.4 + i * 0.95, w: 0.5, h: 0.5,
      fontSize: 20, fontFace: "Arial", bold: true,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(q, {
      x: 1.25, y: 1.4 + i * 0.95, w: 8, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("4", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
