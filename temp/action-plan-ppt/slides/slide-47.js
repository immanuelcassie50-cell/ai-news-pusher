// slide-47.js - 模式一：意图型
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "pattern", index: 47, title: "模式一：意图型" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("PATTERN 01", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 大数字
  slide.addText("01", {
    x: 8.0, y: 0.3, w: 1.5, h: 1.0,
    fontSize: 56, fontFace: "Arial",
    color: theme.redLight, bold: true, align: "right"
  });

  // 主标题
  slide.addText("模式一：意图型任务", {
    x: 0.5, y: 0.6, w: 7, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("描述了方向，但没有触发条件", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 关键词云
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("关键词", {
    x: 0.7, y: 1.95, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const words = ["定期", "适时", "适时沟通", "加强关注", "保持", "持续做好", "时常"];
  const wordColors = [theme.primary, theme.accent, theme.primary, theme.accent, theme.primary, theme.accent, theme.primary];
  const startWordX = 0.7;
  let currentX = startWordX;
  const wordY = 2.4;

  words.forEach((w, i) => {
    const wWidth = 0.2 + w.length * 0.18;
    if (currentX + wWidth > 9.4) {
      currentX = startWordX;
    }
    const yPos = currentX + wWidth > 9.4 ? wordY + 0.55 : wordY;

    slide.addShape("rect", {
      x: currentX, y: yPos, w: wWidth, h: 0.4,
      fill: { color: wordColors[i] }, line: { color: wordColors[i] }
    });
    slide.addText('"' + w + '"', {
      x: currentX, y: yPos, w: wWidth, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    currentX += wWidth + 0.1;
  });

  // 为什么不行
  slide.addText("为什么它不会发生？", {
    x: 0.5, y: 3.4, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 双栏对比
  slide.addShape("rect", {
    x: 0.5, y: 3.85, w: 4.4, h: 1.3,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.85, w: 0.12, h: 1.3,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("写任务时", {
    x: 0.7, y: 3.95, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("\"定期\"听起来很合理，", {
    x: 0.7, y: 4.25, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("大家都会点头。", {
    x: 0.7, y: 4.5, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 但这是\"意图\"，不是\"任务\"", {
    x: 0.7, y: 4.8, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addShape("rect", {
    x: 5.1, y: 3.85, w: 4.4, h: 1.3,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 2 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.85, w: 0.12, h: 1.3,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("执行时", {
    x: 5.3, y: 3.95, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("大脑无法识别\"适时\"到来的那个时刻，", {
    x: 5.3, y: 4.25, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("所以这件事很少在正确时机发生。", {
    x: 5.3, y: 4.5, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 缺少触发器 = 不会自动发生", {
    x: 5.3, y: 4.8, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
