// slide-40.js - 三条合一
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "big-quote", index: 40, title: "三条合一" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("ONE SENTENCE", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 主标题
  slide.addText("三条合一：一句检验", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 三大要素横排
  const elements = [
    { tag: "日常状态的人", en: "EVERYDAY PERSON" },
    { tag: "不依赖高意志力", en: "NO HEROIC WILL" },
    { tag: "可靠地完成", en: "RELIABLY DONE" }
  ];

  const cardW = 2.9;
  const startX = 0.5;
  const gap = 0.3;

  elements.forEach((e, i) => {
    const x = startX + i * (cardW + gap);
    const y = 1.85;

    slide.addShape("rect", {
      x, y, w: cardW, h: 1.2,
      fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
    });

    slide.addText(String(i + 1).padStart(2, "0"), {
      x: x + 0.2, y: y + 0.15, w: 1.0, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    slide.addText(e.tag, {
      x: x + 0.2, y: y + 0.45, w: cardW - 0.4, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });

    slide.addText(e.en, {
      x: x + 0.2, y: y + 0.92, w: cardW - 0.4, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: theme.inkMute, charSpacing: 2
    });
  });

  // 加号
  for (let i = 0; i < 2; i++) {
    const cx = startX + (i + 1) * cardW + i * gap + 0.08;
    slide.addText("+", {
      x: cx, y: 2.2, w: 0.2, h: 0.5,
      fontSize: 30, fontFace: "Arial",
      color: theme.primary, bold: true, align: "center"
    });
  }

  // 大金句卡片
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 9, h: 1.95,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大引号
  slide.addText('"', {
    x: 0.7, y: 3.35, w: 0.7, h: 0.7,
    fontSize: 60, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });

  // 主金句
  slide.addText("在普通的、有点忙但没有特别崩溃的工作日，", {
    x: 1.5, y: 3.45, w: 7.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("能够不依靠特别高的意志力，", {
    x: 1.5, y: 3.85, w: 7.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("或不依靠特别好的运气，", {
    x: 1.5, y: 4.25, w: 7.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });
  slide.addText("自然而然地发生吗？", {
    x: 1.5, y: 4.65, w: 7.5, h: 0.55,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
