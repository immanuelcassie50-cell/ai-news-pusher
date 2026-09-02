// slide-27.js - 第一部分章节扉页
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "divider", index: 27, title: "第一部分：可执行性标准" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧浅色大色块（半透明感）
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });

  // 左侧大数字（深红色）
  slide.addText("01", {
    x: 0.6, y: 1.4, w: 3.2, h: 2.0,
    fontSize: 180, fontFace: "Arial",
    color: theme.primary, bold: true
  });

  // 数字下方小标识
  slide.addShape("rect", {
    x: 0.6, y: 3.4, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("PART 01", {
    x: 0.6, y: 3.5, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, charSpacing: 6, bold: true
  });

  // 右侧主标题区
  slide.addText("第一部分", {
    x: 4.7, y: 1.5, w: 5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  slide.addText("可执行性标准", {
    x: 4.7, y: 2.0, w: 5, h: 0.9,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("怎么判断一个任务，是否真的会被执行", {
    x: 4.7, y: 3.0, w: 5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 装饰线
  slide.addShape("rect", {
    x: 4.7, y: 3.65, w: 0.6, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 关键产出提示
  slide.addText("三条标准 · 五种模式 · 一个检验方法", {
    x: 4.7, y: 3.8, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 右下英文标识
  slide.addText("EXECUTABILITY CRITERIA", {
    x: 4.7, y: 4.7, w: 5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
