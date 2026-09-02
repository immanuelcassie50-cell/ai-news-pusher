// slide-165.js - 三个洞见概览
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-insights", index: 165, title: "三个洞见概览" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("THREE INSIGHTS", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("这个模块的三条核心洞见", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("理解这三件事，你的行为设计就有了支柱。", {
    x: 0.5, y: 1.15, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 三卡片
  const insights = [
    {
      num: "01",
      tag: "问题",
      title: "正确 vs 可执行",
      desc: "正确的计划回答「做什么 / 为什么」。\n可执行的计划回答「在现实中怎么让它真的发生」。",
      color: theme.primary
    },
    {
      num: "02",
      tag: "框架",
      title: "B=MAP",
      desc: "行为发生的三个必要条件，缺一不可。\n动机必要但不充分；A 和 P 最易被忽视。",
      color: theme.accent
    },
    {
      num: "03",
      tag: "原则",
      title: "顺人性",
      desc: "不是让人更努力，\n而是让环境设计与人的真实行为规律对齐。",
      color: theme.primary
    }
  ];

  const cardW = 2.9;
  const gap = 0.2;
  const startX = 0.5;
  const cardY = 1.85;
  const cardH = 3.15;

  insights.forEach((s, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片底
    slide.addShape("rect", {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部大色块
    slide.addShape("rect", {
      x: x, y: cardY, w: cardW, h: 1.0,
      fill: { color: s.color }, line: { color: s.color }
    });

    // 数字
    slide.addText(s.num, {
      x: x + 0.2, y: cardY + 0.1, w: cardW - 0.4, h: 0.55,
      fontSize: 32, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });

    // 标签
    slide.addText(s.tag, {
      x: x + 0.2, y: cardY + 0.65, w: cardW - 0.4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // 标题
    slide.addText(s.title, {
      x: x + 0.2, y: cardY + 1.2, w: cardW - 0.4, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + 0.2, y: cardY + 1.75, w: 0.4, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // 描述
    slide.addText(s.desc, {
      x: x + 0.2, y: cardY + 1.9, w: cardW - 0.4, h: 1.15,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 18
    });
  });

  // 底部金句
  slide.addText("下一页：每条洞见的详细展开", {
    x: 0.5, y: 5.1, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
