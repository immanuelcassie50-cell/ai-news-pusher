// slide-11.js - 数据冲击
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-number", index: 11, title: "数据冲击" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("THE UNCOMFORTABLE TRUTH", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 顶部
  slide.addText("数据冲击", {
    x: 0.5, y: 0.6, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("研究和实践观察告诉我们一件不太令人舒服的事：", {
    x: 0.5, y: 1.1, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 巨型数字
  slide.addText("30-50%", {
    x: 0.5, y: 1.7, w: 9, h: 1.6,
    fontSize: 150, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center", charSpacing: -4
  });

  // 数字下方的标识
  slide.addShape("rect", {
    x: 4.0, y: 3.4, w: 2.0, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 时间
  slide.addText("3-6 个月后", {
    x: 0.5, y: 3.6, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  // 主描述
  slide.addText("行动计划在 3-6 个月后的实际完成率", {
    x: 0.5, y: 4.15, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 底部说明
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.45,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("不是因为这些计划写得不好，也不是因为这些人不努力——\n更令人困惑的是：有时候计划越认真、越详细，失败来得越彻底。", {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center", lineSpacing: 14
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
