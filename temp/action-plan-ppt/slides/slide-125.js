// slide-125.js - 核心原则：预先决定 if-then
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 125, title: "核心原则" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具四 · 执行意图", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("核心原则：预先决定 if-then", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把\"何时做\"从现场决定，挪到计划设计阶段", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 大公式
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });

  slide.addText("\"当", {
    x: 0.7, y: 1.7, w: 1, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 情境
  slide.addShape("rect", {
    x: 1.5, y: 1.75, w: 3, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("[具体情境/时间]", {
    x: 1.5, y: 1.75, w: 3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("，我将", {
    x: 4.6, y: 1.7, w: 1.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 行为
  slide.addShape("rect", {
    x: 5.85, y: 1.75, w: 3.4, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("[具体行为]", {
    x: 5.85, y: 1.75, w: 3.4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("。\"", {
    x: 9.2, y: 1.7, w: 0.3, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 角色说明
  slide.addText("触发情境", {
    x: 1.5, y: 2.3, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  slide.addText("高频率 / 可识别", {
    x: 1.5, y: 2.6, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("具体行为", {
    x: 5.85, y: 2.3, w: 3.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("明确 / 可执行", {
    x: 5.85, y: 2.6, w: 3.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 例子
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 9, h: 1.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("举例", {
    x: 0.7, y: 3.4, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("\"当", {
    x: 0.7, y: 3.75, w: 0.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("周三进展会议结束后", {
    x: 1.15, y: 3.8, w: 2.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
    fill: { color: theme.accent }
  });
  slide.addText("，我会在 10 分钟内", {
    x: 3.7, y: 3.75, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("更新行动项到项目跟踪表", {
    x: 0.7, y: 4.15, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
    fill: { color: theme.primary }
  });
  slide.addText("。\"", {
    x: 4.7, y: 4.15, w: 0.3, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("→ 情境明确 · 行为具体 · 时间边界清晰", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 底部
  slide.addText("关键：把决策从执行时刻，挪到设计时刻", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
