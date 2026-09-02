// slide-31.js - 标准一：行动清晰度
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "definition", index: 31, title: "标准一：行动清晰度" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 大数字
  slide.addText("01", {
    x: 0.6, y: 0.4, w: 2, h: 1.4,
    fontSize: 88, fontFace: "Arial",
    color: theme.redLight, bold: true
  });

  // STANDARD 01 标识
  slide.addText("STANDARD 01", {
    x: 0.6, y: 1.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 5, bold: true
  });

  // 主标题
  slide.addText("行动清晰度", {
    x: 0.6, y: 2.0, w: 5, h: 0.7,
    fontSize: 38, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 引导问题
  slide.addText("看完，能不能直接动手？", {
    x: 0.6, y: 2.7, w: 5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.6, y: 3.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 左侧定义
  slide.addText("不是\"看了能理解\"，而是\"看了知道第一个动作是什么\"。", {
    x: 0.6, y: 3.35, w: 4.0, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, paraSpaceAfter: 4
  });

  // 右侧检验方法卡片
  slide.addShape("rect", {
    x: 5.2, y: 0.5, w: 4.4, h: 4.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 0.5, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("检验方法", {
    x: 5.4, y: 0.55, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("CHECK METHOD", {
    x: 7.5, y: 0.6, w: 2, h: 0.35,
    fontSize: 9, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 3, align: "right"
  });

  // 检验问题
  slide.addText("把这条任务，念给一个完全不了解背景的人听。", {
    x: 5.4, y: 1.2, w: 4.0, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  // 三问
  const checks = [
    { q: "他能立刻知道做什么？", icon: "？" },
    { q: "他知道做到什么程度？", icon: "？" },
    { q: "他知道怎么算做完了？", icon: "？" }
  ];

  checks.forEach((c, i) => {
    const y = 1.85 + i * 0.65;
    slide.addShape("ellipse", {
      x: 5.4, y: y + 0.05, w: 0.4, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 5.4, y: y + 0.05, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(c.q, {
      x: 5.9, y: y, w: 3.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部结论
  slide.addShape("rect", {
    x: 5.4, y: 4.05, w: 4.0, h: 0.85,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("三个问题都答得清楚 → 高清晰度", {
    x: 5.4, y: 4.15, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("任何一个答不出 → 需要重新设计", {
    x: 5.4, y: 4.5, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
