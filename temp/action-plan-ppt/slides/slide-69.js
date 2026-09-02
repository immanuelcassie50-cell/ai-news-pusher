// slide-69.js - 容易度的语境：状态影响能力
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "context", index: 69, title: "容易度的语境" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("容易度的关键语境", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("「那个时刻」是什么意思？状态会改变能力", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 核心观察
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 1.0,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
  });
  slide.addText("能力不是静态的 —— 它随着当下的状态而变化", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("疲惫、压力、分心都会让「能力」降低", {
    x: 0.5, y: 1.8, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center", valign: "middle"
  });

  // 对比案例
  // 高状态
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 4.4, h: 2.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 0.15, h: 2.3,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("高状态时刻", {
    x: 0.85, y: 2.7, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("专注的周二上午", {
    x: 0.85, y: 3.0, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("精力充沛，思路清晰", {
    x: 0.85, y: 3.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 写出优秀的周报，毫不费力", {
    x: 0.85, y: 3.95, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("A = 高", {
    x: 0.85, y: 4.4, w: 4, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  // 低状态
  slide.addShape("rect", {
    x: 5.1, y: 2.6, w: 4.4, h: 2.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.6, w: 0.15, h: 2.3,
    fill: { color: theme.redDeep }, line: { color: theme.redDeep }
  });
  slide.addText("低状态时刻", {
    x: 5.45, y: 2.7, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true
  });
  slide.addText("下午三点开完一上午会", {
    x: 5.45, y: 3.0, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("疲惫、分心、决策疲劳", {
    x: 5.45, y: 3.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 打开周报模板就已经是极限", {
    x: 5.45, y: 3.95, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("A = 低", {
    x: 5.45, y: 4.4, w: 4, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: theme.redDeep, bold: true
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("同一个人、同一个任务 —— 不同的时刻，A 可能差 5 倍", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
