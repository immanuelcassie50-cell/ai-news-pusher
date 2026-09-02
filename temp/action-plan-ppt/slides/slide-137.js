// slide-137.js - 优化效果：40% → 92%
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case-result", index: 137, title: "优化效果" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("苏敏的优化实践 · 优化效果", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("重新设计后的效果", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("三个月后 · 一对一辅导的执行率", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 大数字对比
  // 左：原
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.5, h: 2.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 3.5, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("优化前", {
    x: 0.7, y: 1.55, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("40%", {
    x: 0.5, y: 2.0, w: 3.5, h: 1.0,
    fontSize: 72, fontFace: "Arial",
    color: theme.inkMute, bold: true, align: "center"
  });
  slide.addText("执行率", {
    x: 0.5, y: 3.0, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });
  slide.addText("靠协调 · 靠记忆 · 经常推迟", {
    x: 0.5, y: 3.4, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true, align: "center"
  });

  // 箭头
  slide.addShape("rightArrow", {
    x: 4.1, y: 2.5, w: 0.7, h: 0.5,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("3 个月", {
    x: 4.0, y: 2.05, w: 0.9, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  // 右：现
  slide.addShape("rect", {
    x: 5.0, y: 1.5, w: 4.5, h: 2.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addShape("rect", {
    x: 5.0, y: 1.5, w: 4.5, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("优化后", {
    x: 5.2, y: 1.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("92%", {
    x: 5.0, y: 2.0, w: 4.5, h: 1.0,
    fontSize: 80, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("执行率", {
    x: 5.0, y: 3.0, w: 4.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("固定时间 + 模板化 + 格式固定", {
    x: 5.0, y: 3.4, w: 4.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  // 关键变化
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.65,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("M 反而因为\"真的有效\"而提升 · 形式简单带来效果，效果反哺动机", {
    x: 0.5, y: 4.2, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("P 高可靠（固定时间 + 自动提醒）+ A 大幅下降（模板化 + 格式固定）", {
    x: 0.5, y: 4.5, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true, align: "center", valign: "middle"
  });

  // 底部
  slide.addText("多工具组合的力量 · 不止解决单一弱点", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
