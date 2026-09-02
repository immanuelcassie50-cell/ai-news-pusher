// slide-57.js - 现场演练：准备一次谈判
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 57, title: '准备一次谈判' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 演练：现场准备一次谈判", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("20 分钟小组演练 · 4 人一组", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("每人拿出一个真实谈判场景，小组共同用八步法走一遍", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Process
  const steps = [
    { n: "0-5min", t: "场景分享", d: "每人说一个你最近要面对的谈判" },
    { n: "5-12min", t: "小组共备", d: "互相用八步法准备这个谈判" },
    { n: "12-17min", t: "汇报与反馈", d: "每人 1 分钟分享你的准备表" },
    { n: "17-20min", t: "共同改进", d: "小组给建议 + 讲师点评" }
  ];

  steps.forEach((s, i) => {
    const x = 0.4 + i * 2.32;
    const y = 1.75;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 1.6,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Time bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.n, {
      x: x, y: y, w: 2.2, h: 0.4,
      fontSize: 11, fontFace: "Arial",
      color: theme.accent, bold: true, valign: "middle", align: "center"
    });
    // Title
    slide.addText(s.t, {
      x: x + 0.1, y: y + 0.5, w: 2.0, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    // Description
    slide.addText(s.d, {
      x: x + 0.15, y: y + 0.95, w: 1.9, h: 0.55,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", lineSpacing: 12
    });
  });

  // Group rules
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.55, w: 9.2, h: 1.4,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("小组规则", {
    x: 0.55, y: 3.6, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  用真问题练习——不编故事\n·  互相挖对方的利益——演练 M2 学到的提问技术\n·  给出可执行的建议——而非\"你想得对/错\"\n·  准备表至少填到第 6 项\n·  不评判——只提问、给方案", {
    x: 0.55, y: 3.9, w: 9, h: 1.0,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 18
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("57", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-57-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
