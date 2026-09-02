// slide-162.js - 模块总结章节扉页
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "divider-summary", index: 162, title: "模块总结" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 大色块（左侧）
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧 PART 标识
  slide.addText("MODULE SUMMARY", {
    x: 0.5, y: 0.6, w: 3.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 6, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 0.5, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  // 巨大「总结」标识
  slide.addText("05", {
    x: 0.5, y: 1.4, w: 3.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  slide.addText("WRAP UP", {
    x: 0.5, y: 4.2, w: 3.5, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.redLight, bold: true, charSpacing: 4
  });

  slide.addText("Module Conclusion", {
    x: 0.5, y: 4.6, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.redLight
  });

  // 右侧主标题
  slide.addText("模块总结", {
    x: 4.6, y: 1.5, w: 5.2, h: 0.9,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("执行设计的核心逻辑", {
    x: 4.6, y: 2.4, w: 5.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // 装饰线
  slide.addShape("rect", {
    x: 4.6, y: 3.05, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 三句话
  const points = [
    "一个核心思维转变",
    "三条核心洞见",
    "一个完整框架图"
  ];
  points.forEach((p, i) => {
    const y = 3.3 + i * 0.45;
    slide.addShape("ellipse", {
      x: 4.6, y: y + 0.08, w: 0.12, h: 0.12,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(p, {
      x: 4.85, y: y, w: 5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink
    });
  });

  // SECTION
  slide.addText("SECTION 05", {
    x: 4.6, y: 4.85, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
