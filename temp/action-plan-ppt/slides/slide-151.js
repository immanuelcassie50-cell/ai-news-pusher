// slide-151.js - 负荷检验方法
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "process-steps", index: 151, title: "负荷检验方法" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("LOAD CHECK", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("一个简单的负荷检验", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把单任务优化和全局平衡分开看", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 两个步骤
  // 步骤1
  slide.addShape("rect", {
    x: 0.5, y: 1.95, w: 4.4, h: 2.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.95, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("01 / 时间加总", {
    x: 0.7, y: 2.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("把所有任务的执行时间加总", {
    x: 0.7, y: 2.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("对应到每周需要额外投入的小时数。", {
    x: 0.7, y: 3.0, w: 4, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  // 算式
  slide.addText("4 个 30 分钟 + 1 个 1 小时 + ...", {
    x: 0.7, y: 3.55, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addText("= 每周 ? 小时", {
    x: 0.7, y: 3.95, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 步骤2
  slide.addShape("rect", {
    x: 5.1, y: 1.95, w: 4.4, h: 2.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.95, w: 4.4, h: 0.5,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("02 / 是否现实", {
    x: 5.3, y: 2.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("问：这个数字现实吗？", {
    x: 5.3, y: 2.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  const checks = [
    "对负责人来说可承受？",
    "已经包含正常的工作量？",
    "留有应急和休息空间？"
  ];
  checks.forEach((c, i) => {
    slide.addShape("ellipse", {
      x: 5.4, y: 3.1 + i * 0.32, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(c, {
      x: 5.55, y: 3.05 + i * 0.32, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部决策
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 9, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 0.08, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("如果过高：", {
    x: 0.8, y: 4.6, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("优化方向不是继续用工具让每件事更容易——而是减少任务数量。", {
    x: 0.8, y: 4.88, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
