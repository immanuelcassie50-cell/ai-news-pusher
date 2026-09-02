// slide-33.js - 正反例子对比
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "compare", index: 33, title: "正反例子对比" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("EXAMPLE", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("正反例子：清晰 vs 不清晰", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("同一个目标，不同的描述方式，结果天差地别", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 左侧 反例卡片
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });

  // 红色X标记
  slide.addShape("ellipse", {
    x: 0.7, y: 2.05, w: 0.6, h: 0.6,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("X", {
    x: 0.7, y: 2.05, w: 0.6, h: 0.6,
    fontSize: 28, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("不清晰", {
    x: 1.4, y: 2.1, w: 2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("NOT CLEAR", {
    x: 3.0, y: 2.2, w: 1.8, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 2
  });

  // 任务描述
  slide.addShape("rect", {
    x: 0.7, y: 2.85, w: 4.0, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("\"改善团队内部沟通\"", {
    x: 0.7, y: 2.95, w: 4.0, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, align: "center", bold: true
  });

  // 问题列表
  const issues = [
    "什么叫\"改善\"？",
    "怎么做？",
    "谁来做？",
    "做到什么程度？"
  ];
  issues.forEach((q, i) => {
    slide.addText("· " + q, {
      x: 0.7, y: 3.7 + i * 0.32, w: 4.0, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 结论
  slide.addText("→ 看了不知道从哪下手", {
    x: 0.7, y: 5.0, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右侧 正例卡片
  slide.addShape("rect", {
    x: 5.1, y: 1.85, w: 4.4, h: 3.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });

  // 绿色对勾标记
  slide.addShape("ellipse", {
    x: 5.3, y: 2.05, w: 0.6, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("V", {
    x: 5.3, y: 2.05, w: 0.6, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("清晰", {
    x: 6.0, y: 2.1, w: 2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("CLEAR", {
    x: 7.6, y: 2.2, w: 1.8, h: 0.3,
    fontSize: 9, fontFace: "Arial",
    color: theme.accent, charSpacing: 2, bold: true
  });

  // 任务描述
  slide.addShape("rect", {
    x: 5.3, y: 2.85, w: 4.0, h: 0.7,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("\"每周五发200字总结\"", {
    x: 5.3, y: 2.95, w: 4.0, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.redDeep, align: "center", bold: true
  });

  // 明确要素
  const elements = [
    "时间：每周五",
    "动作：发总结",
    "对象：项目群",
    "完毕：200字以内"
  ];
  elements.forEach((e, i) => {
    slide.addText("· " + e, {
      x: 5.3, y: 3.7 + i * 0.32, w: 4.0, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  slide.addText("→ 看完即可行动，无需思考", {
    x: 5.3, y: 5.0, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
