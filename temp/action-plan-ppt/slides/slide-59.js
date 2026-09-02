// slide-59.js - B=MAP 公式：大字居中
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "formula", index: 59, title: "B=MAP 公式" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部小标签
  slide.addText("BJ FOGG · 行为模型", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true, align: "center"
  });

  // 大公式
  slide.addText("B  =  M  ×  A  ×  P", {
    x: 0.5, y: 0.85, w: 9, h: 1.5,
    fontSize: 96, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  // 装饰线
  slide.addShape("rect", {
    x: 4.4, y: 2.5, w: 1.2, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 三个要素详细说明
  const items = [
    { letter: "B", word: "Behavior", cn: "行为", desc: "想让其发生的那件事" },
    { letter: "M", word: "Motivation", cn: "动机", desc: "有没有想做的意愿" },
    { letter: "A", word: "Ability", cn: "能力", desc: "此刻做起来有多容易" },
    { letter: "P", word: "Prompt", cn: "提示", desc: "在正确时机触发行为" }
  ];

  const itemW = 2.15;
  const itemH = 1.95;
  const itemGap = 0.15;
  const startX = 0.5;
  const startY = 2.85;

  items.forEach((it, i) => {
    const x = startX + i * (itemW + itemGap);
    const isB = i === 0;
    const cardColor = isB ? theme.ink : theme.paper;
    const textColor = isB ? "FFFFFF" : theme.ink;
    const subColor = isB ? theme.redLight : theme.inkSoft;

    // 卡片
    slide.addShape("rect", {
      x: x, y: startY, w: itemW, h: itemH,
      fill: { color: cardColor }, line: { color: isB ? theme.ink : theme.paperLine, width: 1 }
    });

    // 顶部字母
    slide.addText(it.letter, {
      x: x, y: startY + 0.05, w: itemW, h: 0.7,
      fontSize: 56, fontFace: "Arial",
      color: isB ? "FFFFFF" : theme.primary, bold: true, align: "center"
    });

    // 英文
    slide.addText(it.word, {
      x: x, y: startY + 0.85, w: itemW, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: isB ? theme.redLight : theme.accent, charSpacing: 4, bold: true, align: "center"
    });

    // 中文
    slide.addText(it.cn, {
      x: x, y: startY + 1.15, w: itemW, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: textColor, bold: true, align: "center"
    });

    // 描述
    slide.addText(it.desc, {
      x: x + 0.1, y: startY + 1.55, w: itemW - 0.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: subColor, align: "center"
    });
  });

  // 底部金句
  slide.addText("行为  =  动机  ×  容易度  ×  提示", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
