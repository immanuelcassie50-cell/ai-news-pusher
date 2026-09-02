// slide-85.js - 苏敏诊断：综合
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "summary", index: 85, title: "苏敏诊断：综合" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("苏敏诊断的综合结论", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("三要素综合评估 —— 找出最薄弱的那一项", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三栏评分卡
  const scores = [
    {
      letter: "M",
      label: "动机",
      score: "7",
      level: "大致够",
      color: theme.accent,
      detail: "团队认可一对一价值，苏敏也有内在动力",
      rank: "次要问题"
    },
    {
      letter: "A",
      label: "容易度",
      score: "4",
      level: "中等偏低",
      color: theme.inkSoft,
      detail: "时间协调、提前准备、找空间 —— 摩擦偏高",
      rank: "次要问题"
    },
    {
      letter: "P",
      label: "提示",
      score: "1",
      level: "基本缺失",
      color: theme.redDeep,
      detail: "完全依赖记忆，没有任何触发机制",
      rank: "★ 主要问题"
    }
  ];

  const cardW = 3.0;
  const cardH = 2.7;
  const startX = 0.5;
  const startY = 1.25;
  const gap = 0.25;

  scores.forEach((s, i) => {
    const x = startX + i * (cardW + gap);
    const isMain = s.rank.includes("主要");

    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: isMain ? theme.paperWarm : theme.paper },
      line: { color: isMain ? s.color : theme.paperLine, width: isMain ? 2 : 1 }
    });

    // 顶部色条
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.5,
      fill: { color: s.color }, line: { color: s.color }
    });
    slide.addText(s.letter, {
      x: x + 0.2, y: startY + 0.05, w: 0.8, h: 0.4,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    slide.addText(s.label, {
      x: x + 1.0, y: startY + 0.1, w: cardW - 1.2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });

    // 评分
    slide.addText(s.score, {
      x: x, y: startY + 0.6, w: cardW, h: 0.9,
      fontSize: 60, fontFace: "Arial",
      color: s.color, bold: true, align: "center"
    });
    slide.addText(s.level, {
      x: x, y: startY + 1.5, w: cardW, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });

    // 分隔
    slide.addShape("rect", {
      x: x + cardW/2 - 0.2, y: startY + 1.85, w: 0.4, h: 0.02,
      fill: { color: theme.paperLine }, line: { color: theme.paperLine }
    });

    // 详细
    slide.addText(s.detail, {
      x: x + 0.2, y: startY + 1.95, w: cardW - 0.4, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });

    // 等级标签
    slide.addText(s.rank, {
      x: x, y: startY + 2.4, w: cardW, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: s.color, bold: true, align: "center"
    });
  });

  // 核心结论
  slide.addShape("rect", {
    x: 0.5, y: 4.15, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("核心结论", {
    x: 0.7, y: 4.2, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.redLight, bold: true
  });
  slide.addText("P 的缺失是最主要的问题，其次是 A 的摩擦偏高", {
    x: 0.5, y: 4.45, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // 行动指引
  slide.addText("仅靠「提醒大家这件事很重要」（提升 M）不能解决根本问题", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
