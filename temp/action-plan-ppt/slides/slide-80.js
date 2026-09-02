// slide-80.js - 诊断三问详解：M/A/P 各自问什么
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-columns-detail", index: 80, title: "诊断三问详解" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("诊断三问详解", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("M / A / P 各自要追问什么", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  const questions = [
    {
      letter: "M",
      label: "动机",
      color: theme.accent,
      questions: [
        "他理解为什么要做这件事吗？",
        "这件事对他自己有什么意义？",
        "他有顾虑或抵触吗？"
      ],
      lowAction: "如果 M 低 —— 先建立意义感，连接到对方真实在乎的东西",
      note: "讲道理 ≠ 提升 M"
    },
    {
      letter: "A",
      label: "容易度",
      color: theme.accent,
      questions: [
        "从开始到完成有多少阻力？",
        "需要多少时间、思考、协调？",
        "状态差的时候能完成吗？"
      ],
      lowAction: "如果 A 低 —— 用设计工具降低阻力（拆步骤、预设、减决策）",
      note: "让事情变更容易 >> 让人更努力"
    },
    {
      letter: "P",
      label: "提示",
      color: theme.primary,
      questions: [
        "有什么在合适的时机触发？",
        "这个触发器可靠吗？",
        "依赖谁的记忆？"
      ],
      lowAction: "如果 P 弱/无 —— 重新设计触发器（系统提醒 / 环境嵌入）",
      note: "P = 记忆 是最大的隐患"
    }
  ];

  const cardW = 3.0;
  const cardH = 3.8;
  const startX = 0.5;
  const startY = 1.25;
  const gap = 0.25;

  questions.forEach((q, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部色条
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.85,
      fill: { color: q.color }, line: { color: q.color }
    });
    slide.addText(q.letter, {
      x: x + 0.2, y: startY + 0.1, w: 0.9, h: 0.7,
      fontSize: 36, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    slide.addText(q.label, {
      x: x + 1.1, y: startY + 0.2, w: cardW - 1.3, h: 0.3,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });
    slide.addText("问什么", {
      x: x + 1.1, y: startY + 0.5, w: cardW - 1.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.redLight
    });

    // 三个具体问题
    q.questions.forEach((qq, j) => {
      const yPos = startY + 1.0 + j * 0.5;
      slide.addText("?", {
        x: x + 0.2, y: yPos, w: 0.3, h: 0.3,
        fontSize: 13, fontFace: "Arial",
        color: q.color, bold: true
      });
      slide.addText(qq, {
        x: x + 0.5, y: yPos, w: cardW - 0.7, h: 0.45,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.ink
      });
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + 0.2, y: startY + 2.65, w: cardW - 0.4, h: 0.02,
      fill: { color: theme.paperLine }, line: { color: theme.paperLine }
    });

    // 低时行动
    slide.addText(q.lowAction, {
      x: x + 0.2, y: startY + 2.75, w: cardW - 0.4, h: 0.75,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });

    // 提示
    slide.addShape("rect", {
      x: x + 0.2, y: startY + 3.5, w: cardW - 0.4, h: 0.25,
      fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
    });
    slide.addText(q.note, {
      x: x + 0.2, y: startY + 3.5, w: cardW - 0.4, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.redDeep, bold: true, align: "center", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.15, w: 9, h: 0.3,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("下一页：为什么这是「乘法」而不是「加法」", {
    x: 0.5, y: 5.15, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", valign: "middle", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
