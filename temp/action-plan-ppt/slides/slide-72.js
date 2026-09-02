// slide-72.js - A 的三个维度：时间/认知/物理
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-dimensions", index: 72, title: "A 的三个维度" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("A 的三个维度", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("「容易」可以从三个角度来衡量", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  const items = [
    {
      num: "01",
      title: "时间",
      eng: "Time",
      desc: "做这件事需要多少时间？",
      points: [
        "时间越长，执行概率越低",
        "启动动作越短，越容易发生",
        "需要预留大块时间的事是高摩擦"
      ]
    },
    {
      num: "02",
      title: "认知负荷",
      eng: "Cognitive",
      desc: "需要做多少思考才能开始？",
      points: [
        "决策越多，越容易拖延",
        "需要准备内容、想清楚要谈什么",
        "不确定的事情让人回避"
      ]
    },
    {
      num: "03",
      title: "物理阻力",
      eng: "Physical",
      desc: "需要做多少设置、寻找、协调？",
      points: [
        "需要切换工具、登录系统",
        "需要协调他人、找空间",
        "路途、等待、形式约束"
      ]
    }
  ];

  const cardW = 3.0;
  const cardH = 3.7;
  const startX = 0.5;
  const startY = 1.25;
  const gap = 0.25;

  items.forEach((it, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });

    // 顶部编号
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.7,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(it.num, {
      x: x + 0.2, y: startY + 0.1, w: 1, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    slide.addText(it.eng, {
      x: x + 1.0, y: startY + 0.2, w: cardW - 1.2, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.redLight, charSpacing: 4, bold: true, align: "right"
    });

    // 主标题
    slide.addText(it.title, {
      x: x, y: startY + 0.85, w: cardW, h: 0.5,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + cardW/2 - 0.2, y: startY + 1.4, w: 0.4, h: 0.02,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // 核心问题
    slide.addText(it.desc, {
      x: x + 0.2, y: startY + 1.5, w: cardW - 0.4, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // 要点
    it.points.forEach((p, j) => {
      const yPos = startY + 2.15 + j * 0.45;
      slide.addShape("rect", {
        x: x + 0.2, y: yPos + 0.1, w: 0.08, h: 0.08,
        fill: { color: theme.accent }, line: { color: theme.accent }
      });
      slide.addText(p, {
        x: x + 0.35, y: yPos, w: cardW - 0.5, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.inkSoft
      });
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("三维度都低 = 真的容易；任一维度偏高 = 真实阻力", {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
