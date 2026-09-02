// slide-36.js - 三种摩擦
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-column", index: 36, title: "三种摩擦" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("THREE TYPES", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("三种摩擦：物理 / 认知 / 协调", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("每一种摩擦，都会消耗启动能量", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 三种摩擦卡片
  const frictions = [
    {
      tag: "物理",
      en: "PHYSICAL",
      desc: "距离、工具、资源的障碍",
      examples: [
        "· 需要找特定的人",
        "· 打开特定的系统",
        "· 准备特定的材料"
      ],
      tip: "每一步都是一道门"
    },
    {
      tag: "认知",
      en: "COGNITIVE",
      desc: "执行前需要先决定或规划",
      examples: [
        "· \"下周复盘讨论什么\"",
        "· \"什么时候合适\"",
        "· \"先做什么后做什么\""
      ],
      tip: "决策疲劳的根源"
    },
    {
      tag: "协调",
      en: "COORDINATION",
      desc: "依赖多人配合才能启动",
      examples: [
        "· 需要对方有空",
        "· 多日历对齐",
        "· 等待他人反馈"
      ],
      tip: "启动权不在自己"
    }
  ];

  const cardW = 2.95;
  const startX = 0.5;
  const gap = 0.15;

  frictions.forEach((f, i) => {
    const x = startX + i * (cardW + gap);
    const y = 1.85;

    // 卡片
    slide.addShape("rect", {
      x, y, w: cardW, h: 3.3,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部色块
    slide.addShape("rect", {
      x, y, w: cardW, h: 0.7,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    slide.addText(f.tag, {
      x: x + 0.3, y: y + 0.1, w: cardW - 0.6, h: 0.4,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    slide.addText(f.en, {
      x: x + 0.3, y: y + 0.45, w: cardW - 0.6, h: 0.25,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", charSpacing: 3
    });

    // 描述
    slide.addText(f.desc, {
      x: x + 0.3, y: y + 0.85, w: cardW - 0.6, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    // 分割线
    slide.addShape("rect", {
      x: x + 0.3, y: y + 1.4, w: 0.4, h: 0.02,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });

    // 例子
    f.examples.forEach((e, j) => {
      slide.addText(e, {
        x: x + 0.3, y: y + 1.55 + j * 0.32, w: cardW - 0.6, h: 0.3,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.inkSoft
      });
    });

    // 底部tip
    slide.addShape("rect", {
      x: x + 0.3, y: y + 2.85, w: cardW - 0.6, h: 0.35,
      fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
    });
    slide.addText(f.tip, {
      x: x + 0.3, y: y + 2.9, w: cardW - 0.6, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.redDeep, bold: true, align: "center"
    });
  });

  // 底部金句
  slide.addText("设计行动计划时，要逐一检查：每条任务的摩擦，是哪一种？", {
    x: 0.5, y: 5.25, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
