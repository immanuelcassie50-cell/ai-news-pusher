// slide-153.js - 苏敏修订全景
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case-comparison-overview", index: 153, title: "苏敏修订全景" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("CASE / SUMIN / REVISION OVERVIEW", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("苏敏的完整计划修订", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("从 4 条任务 → 修订后 3 条任务", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 大数字对比
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.4, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("原计划", {
    x: 0.7, y: 1.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });
  slide.addText("4", {
    x: 0.7, y: 2.25, w: 1.5, h: 1.2,
    fontSize: 96, fontFace: "Arial",
    color: theme.inkMute, bold: true
  });
  slide.addText("条任务", {
    x: 2.3, y: 2.85, w: 2.4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.85, w: 4.4, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("修订后", {
    x: 5.3, y: 1.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addText("3", {
    x: 5.3, y: 2.25, w: 1.5, h: 1.2,
    fontSize: 96, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("条任务，每条都更可靠", {
    x: 6.9, y: 2.85, w: 2.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 箭头
  slide.addText("→", {
    x: 4.7, y: 2.5, w: 0.6, h: 0.5,
    fontSize: 36, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });

  // 四条修订对比
  slide.addText("四个修订方向", {
    x: 0.5, y: 3.7, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  const revisions = [
    { num: "01", task: "每周一对一辅导", action: "重做", color: theme.primary },
    { num: "02", task: "每月团队复盘", action: "重做", color: theme.primary },
    { num: "03", task: "双周跨部门交流", action: "移除", color: theme.inkMute },
    { num: "04", task: "季度发展计划", action: "重做", color: theme.primary }
  ];

  revisions.forEach((r, i) => {
    const x = 0.5 + i * 2.27;
    slide.addShape("rect", {
      x: x, y: 4.05, w: 2.15, h: 1.0,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 4.05, w: 2.15, h: 0.06,
      fill: { color: r.color }, line: { color: r.color }
    });
    slide.addText(r.num, {
      x: x, y: 4.15, w: 2.15, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: r.color, bold: true, align: "center"
    });
    slide.addText(r.task, {
      x: x, y: 4.42, w: 2.15, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, align: "center", bold: true
    });
    slide.addText(r.action, {
      x: x, y: 4.72, w: 2.15, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: r.color, bold: true, align: "center"
    });
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
