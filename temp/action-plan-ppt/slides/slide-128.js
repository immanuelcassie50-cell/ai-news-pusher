// slide-128.js - 为什么有效 (2)：条件性提示
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 128, title: "为什么有效 (2)" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具四 · 执行意图", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("为什么有效 · 机制 2", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("机制二 · 创造条件性的提示", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 大金句
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("\"当[情境]\"部分把特定情境和特定行为绑定。", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("当那个情境出现时，行为被自动激活。", {
    x: 0.7, y: 1.9, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, valign: "middle"
  });

  // 图示：情境 → 行为
  // 情境
  slide.addShape("rect", {
    x: 0.7, y: 2.7, w: 3.0, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.accent, width: 2 }
  });
  slide.addText("情境", {
    x: 0.7, y: 2.8, w: 3.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  slide.addText("\"周三进展会议结束\"", {
    x: 0.7, y: 3.1, w: 3.0, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });
  slide.addText("具体 · 可识别", {
    x: 0.7, y: 3.5, w: 3.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("高频率发生", {
    x: 0.7, y: 3.8, w: 3.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 箭头 + 自动激活
  slide.addShape("rightArrow", {
    x: 3.9, y: 3.3, w: 0.6, h: 0.3,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("自动激活", {
    x: 3.8, y: 2.9, w: 0.8, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 行为
  slide.addShape("rect", {
    x: 4.7, y: 2.7, w: 3.0, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addText("行为", {
    x: 4.7, y: 2.8, w: 3.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("\"10 分钟内更新跟踪表\"", {
    x: 4.7, y: 3.1, w: 3.0, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });
  slide.addText("明确 · 可执行", {
    x: 4.7, y: 3.5, w: 3.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("时间边界清晰", {
    x: 4.7, y: 3.8, w: 3.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 关键优势
  slide.addShape("rect", {
    x: 7.9, y: 2.7, w: 1.6, h: 1.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("优势", {
    x: 7.9, y: 2.8, w: 1.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("不靠", {
    x: 7.9, y: 3.1, w: 1.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("记忆", {
    x: 7.9, y: 3.35, w: 1.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("不靠", {
    x: 7.9, y: 3.75, w: 1.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("意志", {
    x: 7.9, y: 4.0, w: 1.6, h: 0.3,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 底部
  slide.addText("条件性提示 = 把\"记忆 + 意志\"的负担，转化为\"情境自动激活\"", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
