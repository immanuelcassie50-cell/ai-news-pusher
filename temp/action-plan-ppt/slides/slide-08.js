// slide-08.js - 一个私人的问题
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "quote", index: 8, title: "一个私人的问题" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深红色大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 3.0, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧大字
  slide.addText("Q.", {
    x: 0.5, y: 0.6, w: 2, h: 1.0,
    fontSize: 72, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });
  slide.addText("ONE", {
    x: 0.5, y: 1.5, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 8
  });
  slide.addText("PRIVATE", {
    x: 0.5, y: 1.85, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 8
  });
  slide.addText("QUESTION", {
    x: 0.5, y: 2.2, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, charSpacing: 8
  });

  // 左侧底部装饰
  slide.addShape("rect", {
    x: 0.5, y: 4.6, w: 0.6, h: 0.04,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });
  slide.addText("先从一件很私人的事说起", {
    x: 0.5, y: 4.7, w: 2.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });

  // 右侧引号
  slide.addText('"', {
    x: 3.3, y: 0.3, w: 1.2, h: 1.2,
    fontSize: 100, fontFace: "Arial",
    color: theme.light, bold: true
  });

  // 右侧主问题
  slide.addText("你有没有给自己设定过一个目标", {
    x: 3.3, y: 1.4, w: 6.5, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("坚持了一段时间，", {
    x: 3.3, y: 2.15, w: 6.5, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("最终断掉了？", {
    x: 3.3, y: 2.75, w: 6.5, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 解释
  slide.addShape("rect", {
    x: 3.3, y: 3.7, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("不是因为不在乎，也不是因为不知道怎么做——\n而是生活里的某一天它就没发生，\n然后又一天，然后\"等忙完这段再捡起来\"，\n然后再也没有捡起来过。", {
    x: 3.3, y: 3.85, w: 6.5, h: 1.2,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
