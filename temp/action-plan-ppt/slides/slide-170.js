// slide-170.js - 致谢/结束页
const pptxgen = require("pptxgenjs");

const slideConfig = { type: "ending", index: 170, title: "课程结束" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 大色块 - 左侧
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.0, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧红色块上的小字
  slide.addText("THANK YOU", {
    x: 0.5, y: 0.6, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 8, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 0.5, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  // 大字「谢谢」
  slide.addText("谢", {
    x: 0.5, y: 1.6, w: 3, h: 1.5,
    fontSize: 160, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("谢", {
    x: 0.5, y: 2.6, w: 3, h: 1.5,
    fontSize: 160, fontFace: "Microsoft YaHei",
    color: theme.redLight, bold: true
  });

  // 左侧底部
  slide.addText("Q & A", {
    x: 0.5, y: 4.5, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 6
  });

  slide.addText("欢迎提出你的问题", {
    x: 0.5, y: 4.85, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // 右侧主标题
  slide.addText("让正确的计划", {
    x: 4.4, y: 1.4, w: 5.4, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("真正发生。", {
    x: 4.4, y: 2.0, w: 5.4, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 装饰线
  slide.addShape("rect", {
    x: 4.4, y: 2.85, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 课程信息
  slide.addText("行动计划·执行设计", {
    x: 4.4, y: 3.0, w: 5.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("MODULE 04", {
    x: 4.4, y: 3.4, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 4
  });

  // 副金句
  slide.addShape("rect", {
    x: 4.4, y: 3.9, w: 5.1, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 4.4, y: 3.9, w: 0.08, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("我们相信：", {
    x: 4.6, y: 3.95, w: 4.8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  slide.addText("好的计划不需要意志力去执行，", {
    x: 4.6, y: 4.2, w: 4.8, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("它是为真实状态的自己而设计的。", {
    x: 4.6, y: 4.5, w: 4.8, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 底部小标识
  slide.addText("行动学习·2026", {
    x: 4.4, y: 5.0, w: 5.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
