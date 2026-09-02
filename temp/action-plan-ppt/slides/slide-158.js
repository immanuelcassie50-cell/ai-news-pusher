// slide-158.js - 修订后效果
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-text-result", index: 158, title: "修订后效果" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("RESULT", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("修订后的计划", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 中央大字
  slide.addText("每一条任务", {
    x: 0.5, y: 1.7, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  slide.addText("都有可靠的触发器", {
    x: 0.5, y: 2.3, w: 9, h: 0.95,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 三条特征
  const features = [
    "更低的摩擦",
    "清晰的最小启动动作",
    "可靠的触发机制"
  ];

  features.forEach((f, i) => {
    const x = 0.5 + i * 3.07;
    slide.addShape("rect", {
      x: x, y: 3.55, w: 2.95, h: 0.7,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 3.55, w: 0.08, h: 0.7,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(f, {
      x: x, y: 3.55, w: 2.95, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 9, h: 0.8,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.5, w: 0.08, h: 0.8,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("苏敏对这份修订版计划的执行更有信心——", {
    x: 0.8, y: 4.6, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("不是因为「我会更努力」，而是因为「这份计划考虑了真实状态下的自己」。", {
    x: 0.8, y: 4.9, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
