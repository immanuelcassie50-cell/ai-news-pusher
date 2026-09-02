// slide-152.js - 少即是多
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-text-contrast", index: 152, title: "少即是多" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("LESS IS MORE", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("少即是多", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 对比区
  // 左 - 10条
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.4, h: 2.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("10 条高可执行", {
    x: 0.7, y: 1.85, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("10", {
    x: 0.7, y: 2.5, w: 4, h: 1.3,
    fontSize: 96, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("每条都具体、低摩擦、有可靠触发器", {
    x: 0.7, y: 3.9, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 右 - 30条
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.4, h: 2.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("30 条中等可执行", {
    x: 5.3, y: 1.85, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("30", {
    x: 5.3, y: 2.5, w: 4, h: 1.3,
    fontSize: 96, fontFace: "Arial",
    color: theme.inkMute, bold: true, align: "center"
  });

  slide.addText("听起来很丰富，实际多在拖延和妥协中执行", {
    x: 5.3, y: 3.9, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // VS
  slide.addShape("ellipse", {
    x: 4.75, y: 2.9, w: 0.5, h: 0.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addText("VS", {
    x: 4.75, y: 2.9, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 结论
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 9, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 0.08, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("10 条高可执行  >  30 条中等可执行  →  最终拿到更好的结果。", {
    x: 0.8, y: 4.55, w: 8.5, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
