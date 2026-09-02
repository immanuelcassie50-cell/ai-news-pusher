// slide-20.js - 橙子实验
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 20, title: '橙子实验' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 哈佛经典活动：橙子实验", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("一个橙子，三种解法", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("\"两个人分一个橙子\"——这个看似简单的情境，藏着谈判的本质。", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Three rounds
  const rounds = [
    {
      n: "第一轮",
      title: "分饼模式",
      method: "一人一刀，切成两半",
      result: "一人一半",
      quality: "表面公平，但双方都只能得到 50% 的自己想要的部分"
    },
    {
      n: "第二轮",
      title: "挖利益模式",
      method: "先问：\"你要橙子做什么？\"",
      result: "发现：一人要橙子肉（榨汁），一人要橙子皮（做蛋糕）",
      quality: "利益完全错位——可以各取所需"
    },
    {
      n: "第三轮",
      title: "把饼做大模式",
      method: "问：\"有没有让双方都比切开分更好的方案？\"",
      result: "一个人拿走全部橙子肉，另一个人拿走全部橙子皮",
      quality: "双方都得到 100% 自己需要的部分——超出 50% 的上限"
    }
  ];

  rounds.forEach((r, i) => {
    const x = 0.4 + i * 3.1;
    const y = 1.75;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 2.9,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.5,
      fill: { color: i === 2 ? theme.primary : theme.secondary },
      line: { color: i === 2 ? theme.primary : theme.secondary, width: 0 }
    });
    slide.addText(r.n, {
      x: x + 0.15, y: y, w: 2.7, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(r.title, {
      x: x + 1.0, y: y, w: 1.9, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle", align: "right"
    });
    // Method
    slide.addText("方式", {
      x: x + 0.15, y: y + 0.6, w: 2.6, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(r.method, {
      x: x + 0.15, y: y + 0.85, w: 2.6, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 14
    });
    // Result
    slide.addText("结果", {
      x: x + 0.15, y: y + 1.4, w: 2.6, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(r.result, {
      x: x + 0.15, y: y + 1.65, w: 2.6, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    // Quality
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 2.25, w: 2.6, h: 0.55,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }
    });
    slide.addText(r.quality, {
      x: x + 0.25, y: y + 2.3, w: 2.4, h: 0.45,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: i === 2 ? theme.accent : theme.primary,
      bold: i === 2, valign: "middle", lineSpacing: 12
    });
  });

  // Bottom takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.8, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("\"立场冲突\"往往是\"利益误解\"造成的假象——挖到利益，正和空间就打开了", {
    x: 0.5, y: 4.8, w: 8.8, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("20", {
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
  pres.writeFile({ fileName: "slide-20-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
