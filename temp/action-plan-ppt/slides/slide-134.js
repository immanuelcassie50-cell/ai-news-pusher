// slide-134.js - 工具选用指南：决策表
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "decision", index: 134, title: "工具选用指南" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("四个工具 · 选用指南", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("四个工具的选用指南", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("根据 B=MAP 诊断结果，对应选择工具", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 表头
  const headerY = 1.5;
  const colX = [0.5, 3.3, 4.9, 7.5];
  const colW = [2.8, 1.6, 2.6, 2.0];

  slide.addShape("rect", {
    x: 0.5, y: headerY, w: 9, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  const headers = ["B=MAP 诊断结果", "优先工具", "辅助工具", "组合逻辑"];
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i] + 0.1, y: headerY, w: colW[i] - 0.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
  });

  // 数据行
  const rows = [
    {
      diag: "A 弱（启动难 / 准备复杂）",
      primary: "工具一 最小启动动作",
      secondary: "工具三 降低摩擦",
      logic: "降低入口阻力 + 系统性消除摩擦"
    },
    {
      diag: "P 弱（没有可靠触发器）",
      primary: "工具二 锚定行为 或 工具四 执行意图",
      secondary: "工具一 最小启动动作",
      logic: "借力触发器 + 现场直接行动"
    },
    {
      diag: "A 和 P 都弱",
      primary: "工具三 + 工具四",
      secondary: "工具一 作为补充",
      logic: "双重优化（降低 + 触发）"
    },
    {
      diag: "M 低（负责人有顾虑）",
      primary: "先解决 M（沟通意义 / 处理顾虑）",
      secondary: "视具体情况",
      logic: "工具不解决动机问题"
    }
  ];

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.65;
    if (i % 2 === 0) {
      slide.addShape("rect", {
        x: 0.5, y: y, w: 9, h: 0.65,
        fill: { color: theme.paper }, line: { color: theme.paper }
      });
    }
    // 诊断
    slide.addText(r.diag, {
      x: colX[0] + 0.1, y: y, w: colW[0] - 0.2, h: 0.65,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, valign: "middle"
    });
    // 优先
    slide.addText(r.primary, {
      x: colX[1] + 0.1, y: y, w: colW[1] - 0.2, h: 0.65,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    // 辅助
    slide.addText(r.secondary, {
      x: colX[2] + 0.1, y: y, w: colW[2] - 0.2, h: 0.65,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    // 逻辑
    slide.addText(r.logic, {
      x: colX[3] + 0.1, y: y, w: colW[3] - 0.2, h: 0.65,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("多数情况下，真正\"顺人性\"的任务设计，会同时用到 2-3 个工具的组合", {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
