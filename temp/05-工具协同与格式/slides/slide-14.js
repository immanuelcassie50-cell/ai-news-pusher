// slide-14.js - Content: 为什么需要产出库
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '为什么需要个人AI产出库'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("为什么需要个人AI产出库", {
    x: 0.5, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Problem statement card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9.0, h: 1.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("问题", {
    x: 0.7, y: 1.1, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("如果AI协作的产出只存在对话框里，对话窗口关闭之后就消失了，下次遇到同类任务还得重新摸索。", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addText("AI协作的场景越来越多之后，每个场景摸索出来的细节会相互覆盖，半年后你可能完全记不住当初某个场景用了什么提示词、踩了什么坑。", {
    x: 0.7, y: 2.0, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.8, w: 9.0, h: 0.8,
    fill: { color: theme.primary }
  });

  slide.addText("以为自己[会了]，实际上每次还是在从60分的起点重新爬到80分", {
    x: 0.7, y: 2.8, w: 8.6, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Solution
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.85, w: 9.0, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("解决方案", {
    x: 0.7, y: 3.95, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("建立一个个人AI产出库，就是给这些有价值的东西一个家。这不是复杂的系统，是[随手保存]的固定动作，花5分钟，防止重复摸索。", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };