// slide-106.js - 锚定公式：在[已有行为]之后，做[新任务]
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "formula", index: 106, title: "锚定公式" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具二 · 锚定行为", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("锚定公式", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("一个标准格式 · 让触发器变得明确", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 大公式
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });

  slide.addText("\"在我完成", {
    x: 0.7, y: 1.7, w: 2.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 已有行为 框
  slide.addShape("rect", {
    x: 3.2, y: 1.75, w: 2.5, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("[已有固定行为]", {
    x: 3.2, y: 1.75, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("之后，", {
    x: 5.8, y: 1.7, w: 1.2, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("我会做", {
    x: 0.7, y: 2.3, w: 1.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 新任务 框
  slide.addShape("rect", {
    x: 2.2, y: 2.35, w: 2.5, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("[新任务]", {
    x: 2.2, y: 2.35, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  slide.addText("。\"", {
    x: 4.8, y: 2.3, w: 1, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 两个角色解释
  slide.addShape("rect", {
    x: 7.0, y: 1.75, w: 0.04, h: 1.0,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("已有行为", {
    x: 7.15, y: 1.7, w: 2.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("稳定的触发器", {
    x: 7.15, y: 2.0, w: 2.3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("新任务", {
    x: 7.15, y: 2.3, w: 2.3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("被借力的执行项", {
    x: 7.15, y: 2.6, w: 2.3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
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
  slide.addText("\"在我完成", {
    x: 0.7, y: 3.75, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("周一站会", {
    x: 2.0, y: 3.8, w: 1.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
    fill: { color: theme.accent }
  });
  slide.addText("之后，我会", {
    x: 3.2, y: 3.75, w: 1.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("花 5 分钟更新进展看板", {
    x: 4.5, y: 3.8, w: 2.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
    fill: { color: theme.primary }
  });
  slide.addText("。\"", {
    x: 7.0, y: 3.75, w: 0.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  slide.addText("→ 时间点变得明确：周一站会结束后的 5 分钟", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 底部
  slide.addText("关键：把\"定期\"变成\"在 X 之后\"，时间点立刻明确", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
