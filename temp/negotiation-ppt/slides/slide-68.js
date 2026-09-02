// slide-68.js - 应对对方锚定
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 68, title: '应对对方锚定' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 应对对方的锚定", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("对方先开了离谱的价——怎么破？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("不是直接拒绝——是用更好的锚替换", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 4 strategies
  const strats = [
    {
      n: "01", t: "\"惊讶 + 重设锚\"",
      d: "不直接说\"不行\"，而是说\"这个数字超出我的想象\"",
      e: "\"涨 15%？这超出了我们对今年预算的考虑范围。\""
    },
    {
      n: "02", t: "\"反锚\"",
      d: "立即给出一个对自己有利的数字",
      e: "\"我们今年的目标是 -2%。\""
    },
    {
      n: "03", t: "\"拆解\"",
      d: "把对方一个数字拆成几个组成部分——找到水分",
      e: "\"15% 包含哪几项？材料？人工？我们一项一项看。\""
    },
    {
      n: "04", t: "\"换维度\"",
      d: "把数字博弈变成价值博弈",
      e: "\"我们更想谈的是：您能给我们什么增值服务？\""
    }
  ];

  strats.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.7 + row * 1.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.5, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.55, h: 1.45,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(s.n, {
      x: x, y: y, w: 0.55, h: 1.45,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.t, {
      x: x + 0.7, y: y + 0.1, w: 3.7, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(s.d, {
      x: x + 0.7, y: y + 0.45, w: 3.7, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.7, y: y + 0.95, w: 3.7, h: 0.4,
      fill: { color: theme.bg }, line: { color: theme.light, width: 0.5 }
    });
    slide.addText(s.e, {
      x: x + 0.8, y: y + 0.95, w: 3.5, h: 0.4,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("68", {
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
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
