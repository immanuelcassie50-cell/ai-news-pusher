// slide-53.js - 设计原则
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-quote", index: 53, title: "设计原则" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("DESIGN PRINCIPLE", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("核心设计原则", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大金句卡片（满屏主视觉）
  slide.addShape("rect", {
    x: 0, y: 1.7, w: 10, h: 2.6,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大引号
  slide.addText('"', {
    x: 0.5, y: 1.7, w: 1.0, h: 1.0,
    fontSize: 100, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  // 主金句
  slide.addText("好的行动计划，", {
    x: 1.0, y: 2.0, w: 8.5, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("应该为", {
    x: 1.0, y: 2.55, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });
  slide.addText("\"日常状态的人\"", {
    x: 1.0, y: 3.0, w: 8.5, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("而设计。", {
    x: 1.0, y: 3.6, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // 底部对比
  slide.addText("而不是为\"状态最好的那天\"的自己设计。", {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 双栏对比
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 4.4, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("为\"最好状态\"设计 → 失败率高", {
    x: 0.5, y: 5.02, w: 4.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center", italic: true
  });

  slide.addShape("rect", {
    x: 5.1, y: 4.95, w: 4.4, h: 0.5,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("为\"日常状态\"设计 → 真正可执行", {
    x: 5.1, y: 5.02, w: 4.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, align: "center", italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
