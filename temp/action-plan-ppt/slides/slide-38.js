// slide-38.js - 标准三：日常稳健性
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "definition", index: 38, title: "标准三：日常稳健性" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大数字
  slide.addText("03", {
    x: 0.5, y: 0.4, w: 2, h: 1.4,
    fontSize: 88, fontFace: "Arial",
    color: theme.redLight, bold: true
  });

  // STANDARD 03 标识
  slide.addText("STANDARD 03", {
    x: 0.5, y: 1.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 5, bold: true
  });

  // 主标题
  slide.addText("日常稳健性", {
    x: 0.5, y: 2.0, w: 5, h: 0.7,
    fontSize: 38, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 引导问题
  slide.addText("在一个\"普通但不轻松\"的周，还会发生吗？", {
    x: 0.5, y: 2.7, w: 5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧定义
  slide.addText("不是问最好的情况，也不是问最坏的，是问：", {
    x: 0.5, y: 3.35, w: 5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("\"正常业务压力下、不是特别轻松也不是特别紧张\"，", {
    x: 0.5, y: 3.7, w: 5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("这件事还会可靠地发生吗？", {
    x: 0.5, y: 4.05, w: 5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 右侧关键问题块
  slide.addShape("rect", {
    x: 5.7, y: 0.5, w: 3.8, h: 4.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.7, y: 0.5, w: 3.8, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("检验问题", {
    x: 5.9, y: 0.55, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // 三个问题
  const questions = [
    {
      q: "这个任务依赖多少额外精力？",
      hint: "如果需要消耗超出正常水平的意志力——就是设计问题。"
    },
    {
      q: "状态一般的那天，它会被延后吗？",
      hint: "延后几次后，会被归类为\"等状态好时再做\"。"
    },
    {
      q: "等状态好时——那个时刻会来吗？",
      hint: "那个时刻可能永远不会来。"
    }
  ];

  questions.forEach((q, i) => {
    const y = 1.15 + i * 1.25;

    slide.addShape("ellipse", {
      x: 5.9, y: y + 0.05, w: 0.4, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 5.9, y: y + 0.05, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    slide.addText(q.q, {
      x: 6.4, y: y, w: 3.0, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    slide.addText(q.hint, {
      x: 6.4, y: y + 0.5, w: 3.0, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, italic: true
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.9, w: 4.7, h: 0.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("稳健性 ≠ 意志力问题，是设计问题", {
    x: 0.5, y: 5.0, w: 4.7, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
