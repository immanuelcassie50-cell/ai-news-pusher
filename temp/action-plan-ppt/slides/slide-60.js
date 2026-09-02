// slide-60.js - 三个要素图解：M/A/P 三栏图标
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "three-column", index: 60, title: "三个要素图解" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("三个要素图解", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("B = M × A × P —— 行为发生的三个条件", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  const items = [
    {
      letter: "M", color: theme.primary,
      title: "动机", eng: "Motivation",
      icon: "heart",
      desc: "这个人有没有想做这件事的意愿",
      points: ["对意义的认可", "对结果的期待", "情感上的在乎"]
    },
    {
      letter: "A", color: theme.accent,
      title: "能力", eng: "Ability",
      icon: "path",
      desc: "在那个具体的时刻，做起来有多容易",
      points: ["需要多少时间", "认知负荷大小", "物理访问阻力"]
    },
    {
      letter: "P", color: theme.ink,
      title: "提示", eng: "Prompt",
      icon: "bell",
      desc: "有没有东西在正确时机触发行为",
      points: ["系统自动提醒", "环境情境触发", "人的记忆提示"]
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

    // 顶部色块
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 1.2,
      fill: { color: it.color }, line: { color: it.color }
    });

    // 图标 - 用形状组合
    if (it.icon === "heart") {
      slide.addShape("heart", {
        x: x + cardW/2 - 0.35, y: startY + 0.2, w: 0.7, h: 0.6,
        fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
      });
    } else if (it.icon === "path") {
      // 路径用矩形堆叠表示阶梯
      slide.addShape("rect", {
        x: x + cardW/2 - 0.3, y: startY + 0.3, w: 0.6, h: 0.15,
        fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
      });
      slide.addShape("rect", {
        x: x + cardW/2 - 0.2, y: startY + 0.5, w: 0.4, h: 0.15,
        fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
      });
      slide.addShape("rect", {
        x: x + cardW/2 - 0.1, y: startY + 0.7, w: 0.2, h: 0.1,
        fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
      });
    } else if (it.icon === "bell") {
      slide.addShape("rect", {
        x: x + cardW/2 - 0.25, y: startY + 0.3, w: 0.5, h: 0.45,
        fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
      });
      slide.addShape("ellipse", {
        x: x + cardW/2 - 0.08, y: startY + 0.78, w: 0.16, h: 0.1,
        fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
      });
    }

    // 大字母
    slide.addText(it.letter, {
      x: x, y: startY + 0.95, w: cardW, h: 0.4,
      fontSize: 26, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 中文标题
    slide.addText(it.title, {
      x: x, y: startY + 1.4, w: cardW, h: 0.4,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: it.color, bold: true, align: "center"
    });

    // 英文
    slide.addText(it.eng, {
      x: x, y: startY + 1.85, w: cardW, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.inkMute, charSpacing: 4, align: "center"
    });

    // 分隔线
    slide.addShape("rect", {
      x: x + cardW/2 - 0.2, y: startY + 2.18, w: 0.4, h: 0.02,
      fill: { color: theme.paperLine }, line: { color: theme.paperLine }
    });

    // 描述
    slide.addText(it.desc, {
      x: x + 0.2, y: startY + 2.25, w: cardW - 0.4, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });

    // 要点
    it.points.forEach((p, j) => {
      slide.addShape("rect", {
        x: x + 0.4, y: startY + 2.95 + j * 0.22, w: 0.06, h: 0.06,
        fill: { color: it.color }, line: { color: it.color }
      });
      slide.addText(p, {
        x: x + 0.55, y: startY + 2.88 + j * 0.22, w: cardW - 0.7, h: 0.22,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.ink
      });
    });
  });

  // 底部连接
  slide.addText("三者同时具备 → 行为可靠发生", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
