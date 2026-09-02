// slide-37.js - 摩擦力经典案例
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case", index: 37, title: "摩擦力经典案例" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("CASE STUDY", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("经典案例：健身房距离", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("同样的意愿，不同的物理摩擦，长期坚持率天差地别", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 左侧卡片：离家5分钟
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  // 顶部绿色标识
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("A 方案：离家 5 分钟", {
    x: 0.7, y: 1.95, w: 3.5, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("5 MIN", {
    x: 3.7, y: 2.0, w: 1.0, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 2, align: "right", bold: true
  });

  // 大数字
  slide.addText("85%", {
    x: 0.7, y: 2.5, w: 2.0, h: 1.0,
    fontSize: 64, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  // 标签
  slide.addText("长期坚持率", {
    x: 2.7, y: 2.95, w: 2.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 优点
  const prosA = [
    "· 出门就走，5 分钟到",
    "· 启动几乎无阻力",
    "· 临时起意就能去",
    "· 状态不好也能坚持"
  ];
  prosA.forEach((p, i) => {
    slide.addText(p, {
      x: 0.7, y: 3.7 + i * 0.32, w: 4.0, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  // 右侧卡片：离家45分钟
  slide.addShape("rect", {
    x: 5.1, y: 1.85, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  // 顶部红色标识
  slide.addShape("rect", {
    x: 5.1, y: 1.85, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("B 方案：离家 45 分钟", {
    x: 5.3, y: 1.95, w: 3.5, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("45 MIN", {
    x: 8.2, y: 2.0, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 2, align: "right", bold: true
  });

  // 大数字
  slide.addText("12%", {
    x: 5.3, y: 2.5, w: 2.0, h: 1.0,
    fontSize: 64, fontFace: "Arial",
    color: theme.inkSoft, bold: true
  });

  slide.addText("长期坚持率", {
    x: 7.3, y: 2.95, w: 2.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 缺点
  const consB = [
    "· 路上来回 1.5 小时",
    "· 需要提前计划",
    "· 状态不好直接放弃",
    "· 一个月去不了一两次"
  ];
  consB.forEach((p, i) => {
    slide.addText(p, {
      x: 5.3, y: 3.7 + i * 0.32, w: 4.0, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.3, w: 9, h: 0.3,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("同样的意愿，距离（物理的或认知的）会显著影响行为的发生概率。", {
    x: 0.5, y: 5.32, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, align: "center", italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
