// slide-09.js - Content: 支持部门的真实价值
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '支持部门的真实价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("支持部门的真实价值", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.2,
    fill: { color: theme.accent }
  });

  slide.addText("支持型部门的真实价值，不在于它产出了什么，", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  slide.addText("而在于——它如果做慢了、做错了，整个链条损失了什么。", {
    x: 0.7, y: 1.65, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Loss examples
  const losses = [
    { text: "风控审批慢", result: "客户流失，贷款收益跑掉了" },
    { text: "理赔复核卡顿", result: "投诉率飙升，口碑一年比一年差" },
    { text: "研发需求理解偏差", result: "上线推迟三个月，市场窗口错过了" }
  ];

  losses.forEach((loss, i) => {
    const y = 2.6 + i * 0.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 3.0, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(loss.text, {
      x: 0.5, y: y, w: 3.0, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(loss.result, {
      x: 3.7, y: y, w: 5.8, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Bottom message
  slide.addText("这些损失是真实存在的，只是通常没有人去算它、说它、展示它。", {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };