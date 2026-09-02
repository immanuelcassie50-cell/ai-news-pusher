// slide-29.js - 三个关键问题
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-column", index: 29, title: "三个关键问题" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("THREE QUESTIONS", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("判断一个任务，能不能被执行的三个问题", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 副标题
  slide.addText("这三个问题，分别对应可执行性的三条标准", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 三栏卡片
  const questions = [
    {
      num: "Q1",
      title: "看完能动手吗？",
      sub: "行动清晰度",
      desc: "不需要思考\"这是什么意思\"，不需要先安排会议讨论如何执行。看完就知道第一个动作是什么。"
    },
    {
      num: "Q2",
      title: "要开始有多难？",
      sub: "启动摩擦力",
      desc: "从\"决定要做\"到\"开始第一个实际动作\"之间的阻力。距离、工具、协调，每一步都是摩擦。"
    },
    {
      num: "Q3",
      title: "普通日子还会发生吗？",
      sub: "日常稳健性",
      desc: "不是问最好或最坏的日子，是问\"普通但有点忙\"的那天。这件事还会可靠地发生吗？"
    }
  ];

  const cardW = 2.95;
  const startX = 0.5;
  const gap = 0.15;

  questions.forEach((q, i) => {
    const x = startX + i * (cardW + gap);
    const y = 1.85;

    // 卡片背景
    slide.addShape("rect", {
      x, y, w: cardW, h: 3.1,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部色条
    slide.addShape("rect", {
      x, y, w: cardW, h: 0.08,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 大问号数字
    slide.addText(q.num, {
      x: x + 0.2, y: y + 0.2, w: 1.5, h: 0.7,
      fontSize: 44, fontFace: "Arial",
      color: theme.redLight, bold: true
    });

    // 右上角小标
    slide.addShape("ellipse", {
      x: x + cardW - 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(String(i + 1), {
      x: x + cardW - 0.7, y: y + 0.32, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 问题标题
    slide.addText(q.title, {
      x: x + 0.2, y: y + 1.05, w: cardW - 0.4, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 副标
    slide.addText(q.sub, {
      x: x + 0.2, y: y + 1.65, w: cardW - 0.4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent
    });

    // 描述
    slide.addText(q.desc, {
      x: x + 0.2, y: y + 2.05, w: cardW - 0.4, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, paraSpaceAfter: 2
    });
  });

  // 底部金句
  slide.addText("问完这三个问题，你就知道这条任务是不是真的\"能跑\"。", {
    x: 0.5, y: 5.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
