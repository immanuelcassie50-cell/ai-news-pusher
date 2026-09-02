// slide-75.js - 为什么 P 最关键：缺乏提示 = 不发生
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "key-insight", index: 75, title: "为什么 P 最关键" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("为什么 P 最关键", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("一个直接的因果关系", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 大字金句
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 1.4,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });

  slide.addText("缺乏提示", {
    x: 0.5, y: 1.4, w: 4.5, h: 0.7,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true, align: "center", valign: "middle"
  });

  slide.addText("=", {
    x: 4.5, y: 1.4, w: 1, h: 0.7,
    fontSize: 36, fontFace: "Arial",
    color: theme.inkMute, bold: true, align: "center", valign: "middle"
  });

  slide.addText("不发生", {
    x: 5.5, y: 1.4, w: 4, h: 0.7,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  slide.addText("即使 M 很高，A 也不难 —— 没有触发，行为就是不发生", {
    x: 0.5, y: 2.15, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center", valign: "middle", italic: true
  });

  // 三个生活化场景
  slide.addText("想一想你有多少次：", {
    x: 0.5, y: 2.95, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  const cases = [
    "完全有能力做",
    "也完全愿意做",
    "但没有被提醒",
    "或者提醒来得不是时候"
  ];

  cases.forEach((c, i) => {
    const x = 0.5 + i * 2.3;
    slide.addShape("rect", {
      x: x, y: 3.4, w: 2.15, h: 0.9,
      fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
    });
    slide.addText(String(i + 1).padStart(2, '0'), {
      x: x, y: 3.45, w: 2.15, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center"
    });
    slide.addText(c, {
      x: x, y: 3.7, w: 2.15, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center", valign: "middle"
    });
  });

  // 结论
  slide.addShape("rect", {
      x: 0.5, y: 4.55, w: 9, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText("结果：M 和 A 都没产生稳定的行为", {
      x: 0.5, y: 4.55, w: 9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

  // 底部
  slide.addText("下一节看 P 的三种类型 —— 可靠性差别巨大", {
    x: 0.5, y: 5.15, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
