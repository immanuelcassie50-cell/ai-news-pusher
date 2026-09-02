// slide-140.js - 章节扉页「第四部分：综合优化」
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "divider", index: 140, title: "第四部分 综合优化" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 右侧深红色大色块
  slide.addShape("rect", {
    x: 5.8, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧顶部小字
  slide.addText("PART", {
    x: 0.5, y: 0.6, w: 2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 8, bold: true
  });

  // 左侧装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 巨大数字
  slide.addText("04", {
    x: 0.5, y: 1.4, w: 4.5, h: 2.5,
    fontSize: 200, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  // 左侧英文小标
  slide.addText("INTEGRATION", {
    x: 0.5, y: 4.2, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 4
  });

  slide.addText("Comprehensive Optimization", {
    x: 0.5, y: 4.6, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.inkMute
  });

  // 右侧主标题
  slide.addText("综合优化", {
    x: 6.0, y: 1.7, w: 3.8, h: 0.9,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // 副标题
  slide.addText("把整份计划过一遍", {
    x: 6.0, y: 2.7, w: 3.8, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.redLight
  });

  // 装饰线
  slide.addShape("rect", {
    x: 6.0, y: 3.2, w: 0.5, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  // 引言
  slide.addText("从「能用」到「可靠」", {
    x: 6.0, y: 3.4, w: 3.8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", italic: true
  });

  // 底部 SECTION 标识
  slide.addText("SECTION 04", {
    x: 6.0, y: 4.6, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.redLight, charSpacing: 6, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
