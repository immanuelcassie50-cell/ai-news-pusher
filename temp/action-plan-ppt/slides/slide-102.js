// slide-102.js - 常见误区：不是分拆
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 102, title: "常见误区" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("一个常见误区", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("不是分拆任务", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 大提示框
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("⚠", {
    x: 0.7, y: 1.6, w: 0.5, h: 0.5,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("最小启动动作 ≠ 把任务分拆成更小的任务", {
    x: 1.2, y: 1.65, w: 8, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("= 为整件任务设计一个极小的入口", {
    x: 1.2, y: 2.05, w: 8, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("整件任务的目标和完整性不变，只是加了一个几乎零阻力的开始方式。", {
    x: 1.2, y: 2.45, w: 8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  // 对比图
  // 左：错误理解
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 4.4, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 4.4, h: 0.4,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("✗ 任务分拆", {
    x: 0.7, y: 3.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText("把任务切成几块", {
    x: 0.7, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("月报 → 写月报 + 月报审批 + 月报分发", {
    x: 0.7, y: 3.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 任务变多了，不是阻力更小", {
    x: 0.7, y: 4.35, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  // 右：正确理解
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.4, h: 1.7,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.4, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("✓ 极小的入口", {
    x: 5.3, y: 3.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  slide.addText("给任务加一个开始动作", {
    x: 5.3, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("月报 → 第一步：打开模板，填日期和本周标题", {
    x: 5.3, y: 3.95, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 任务不变，启动阻力接近 0", {
    x: 5.3, y: 4.35, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // 底部
  slide.addText("任务是整件事，启动动作只是入口", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
