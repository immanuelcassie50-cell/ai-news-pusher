// slide-76.js - 提示的三种类型：系统/环境/记忆
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-types", index: 76, title: "提示的三种类型" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("提示的三种类型", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("可靠性从高到低排列", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 可靠性图示（顶部）
  // 5颗星条
  for (let i = 0; i < 3; i++) {
    const x = 0.7 + i * 3.2;
    const colors = [theme.accent, theme.accent, theme.inkMute];
    const starCount = i === 0 ? 5 : (i === 1 ? 3 : 1);
    for (let j = 0; j < 5; j++) {
      const filled = j < starCount;
      slide.addText(filled ? "★" : "☆", {
        x: x + j * 0.25, y: 1.15, w: 0.25, h: 0.3,
        fontSize: 14, fontFace: "Arial",
        color: filled ? colors[i] : theme.paperLine, align: "center"
      });
    }
  }

  // 三个类型卡片
  const types = [
    {
      title: "系统提示",
      eng: "System Prompt",
      reliability: "最可靠",
      desc: "日历提醒、自动化通知、固定系统触发",
      example: "Google Calendar 提前 15 分钟弹窗\n每周一 9:00 自动生成的周报模板",
      features: ["不依赖人的记忆", "不依赖人的主动性", "可重复、零成本"]
    },
    {
      title: "环境提示",
      eng: "Contextual Prompt",
      reliability: "可靠",
      desc: "特定情境出现时，事情自然被想起",
      example: "每周例会最后 5 分钟 = 更新进度时间\n打开电脑看到便签 = 提醒要做什么",
      features: ["情境本身就是触发", "不需要记忆", "但需要稳定的情境"]
    },
    {
      title: "人的记忆",
      eng: "Memory Prompt",
      reliability: "最不可靠",
      desc: "「我记得要做这件事」",
      example: "「记得要做周报」\n「记得和团队成员一对一」",
      features: ["依赖记忆容量", "受信息过载干扰", "易被新事务冲掉"]
    }
  ];

  const cardW = 3.0;
  const cardH = 3.4;
  const startX = 0.5;
  const startY = 1.55;
  const gap = 0.25;

  types.forEach((t, i) => {
    const x = startX + i * (cardW + gap);
    const isBest = i === 0;
    const isWorst = i === 2;
    const headerColor = isBest ? theme.accent : (isWorst ? theme.redDeep : theme.inkSoft);

    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部色条
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.7,
      fill: { color: headerColor }, line: { color: headerColor }
    });
    slide.addText(t.title, {
      x: x, y: startY + 0.1, w: cardW, h: 0.35,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(t.reliability, {
      x: x, y: startY + 0.45, w: cardW, h: 0.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });

    // 描述
    slide.addText(t.desc, {
      x: x + 0.2, y: startY + 0.85, w: cardW - 0.4, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.ink, align: "center", valign: "middle"
    });

    // 例子框
    slide.addShape("rect", {
      x: x + 0.2, y: startY + 1.55, w: cardW - 0.4, h: 1.0,
      fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
    });
    slide.addText("例子", {
      x: x + 0.3, y: startY + 1.6, w: cardW - 0.6, h: 0.2,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.inkMute, bold: true
    });
    slide.addText(t.example, {
      x: x + 0.3, y: startY + 1.8, w: cardW - 0.6, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });

    // 特征
    t.features.forEach((f, j) => {
      const yPos = startY + 2.7 + j * 0.22;
      slide.addText("·", {
        x: x + 0.25, y: yPos, w: 0.15, h: 0.2,
        fontSize: 12, fontFace: "Arial",
        color: headerColor, bold: true
      });
      slide.addText(f, {
        x: x + 0.4, y: yPos, w: cardW - 0.5, h: 0.2,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.inkSoft
      });
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("大多数行动计划的 P = 人的记忆 = 最不可靠的触发器", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
