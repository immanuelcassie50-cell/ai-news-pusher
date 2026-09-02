// slide-32.js - 清晰度检验方式
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "instruction", index: 32, title: "清晰度检验方式" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("STEP BY STEP", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("清晰度检验：念给陌生人听", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("这是检验\"行动清晰度\"最简单也最有效的方法", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 流程三步
  const steps = [
    {
      num: "1",
      title: "找一个人",
      desc: "找一个完全不了解你项目背景的人。同事、家人，甚至路人——关键是：他对这件事一无所知。"
    },
    {
      num: "2",
      title: "念给他听",
      desc: "原原本本念出你的任务描述，不要补充任何解释、不要铺垫背景。一字不差地念。"
    },
    {
      num: "3",
      title: "看他反应",
      desc: "如果他一脸茫然、需要反问\"什么意思\"——这就是低清晰度。任务需要重新写。"
    }
  ];

  const stepW = 2.95;
  const startX = 0.5;
  const gap = 0.15;

  steps.forEach((s, i) => {
    const x = startX + i * (stepW + gap);
    const y = 1.85;

    // 卡片
    slide.addShape("rect", {
      x, y, w: stepW, h: 2.7,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 数字圆
    slide.addShape("ellipse", {
      x: x + 0.3, y: y + 0.3, w: 0.8, h: 0.8,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x + 0.3, y: y + 0.32, w: 0.8, h: 0.8,
      fontSize: 32, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 步骤标题
    slide.addText(s.title, {
      x: x + 0.3, y: y + 1.2, w: stepW - 0.6, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 描述
    slide.addText(s.desc, {
      x: x + 0.3, y: y + 1.7, w: stepW - 0.6, h: 0.95,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, paraSpaceAfter: 2
    });
  });

  // 中间连接箭头
  for (let i = 0; i < 2; i++) {
    const ax = startX + (i + 1) * stepW + i * gap + 0.02;
    slide.addShape("right_triangle", {
      x: ax, y: 3.1, w: 0.12, h: 0.2,
      fill: { color: theme.primary }, line: { color: theme.primary }, rotate: 30
    });
  }

  // 底部关键问题块
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 0.1, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("三个问题：他知道做什么？做到什么程度？怎么算完成？", {
    x: 0.8, y: 4.78, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("任何一项需要反问 = 这条任务的描述不够清晰，需要重写。", {
    x: 0.8, y: 5.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
