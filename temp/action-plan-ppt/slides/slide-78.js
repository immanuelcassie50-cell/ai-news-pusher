// slide-78.js - 现实问题：几乎所有P=记忆
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "key-insight", index: 78, title: "现实问题" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部小标签
  slide.addText("REALITY CHECK", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 巨大金句
  slide.addText("几乎所有任务的 P", {
    x: 0.5, y: 0.9, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  slide.addText("= 人的记忆", {
    x: 0.5, y: 1.6, w: 9, h: 0.7,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // 装饰
  slide.addShape("rect", {
    x: 4.0, y: 2.4, w: 2, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  // 引出最不可靠
  slide.addText("而人的记忆，是最不可靠的触发器", {
    x: 0.5, y: 2.6, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });

  // 三个问题
  const problems = [
    {
      title: "信息过载",
      desc: "日常工作要处理几十件事，记忆很快被冲掉"
    },
    {
      title: "状态波动",
      desc: "疲惫、忙碌、焦虑时，记忆首先失灵"
    },
    {
      title: "情境错位",
      desc: "想起要做这件事时，往往不是能做的时刻"
    }
  ];

  const startX = 0.5;
  const startY = 3.3;
  const cardW = 3.0;
  const cardH = 1.5;
  const gap = 0.25;

  problems.forEach((p, i) => {
    const x = startX + i * (cardW + gap);
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.08,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(p.title, {
      x: x + 0.2, y: startY + 0.25, w: cardW - 0.4, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addShape("rect", {
      x: x + 0.2, y: startY + 0.85, w: 0.3, h: 0.03,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(p.desc, {
      x: x + 0.2, y: startY + 0.95, w: cardW - 0.4, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("行动计划的设计者，必须把 P 从「记忆」变成「系统 + 环境」", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
