// slide-53.js - 八步准备法 总览
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 53, title: '八步准备法' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 八步准备法", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("坐下谈判前的 8 个动作", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("一个都不能省——准备充分的人永远比对手多一层", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 4x2 grid
  const steps = [
    { n: "1", t: "定目标", d: "明确自己这次要什么" },
    { n: "2", t: "算 BATNA", d: "如果谈崩，我去哪" },
    { n: "3", t: "算底线", d: "低于这个我走人" },
    { n: "4", t: "算期望", d: "理想结果是多少" },
    { n: "5", t: "估对方", d: "对方的目标/底线/BATNA" },
    { n: "6", t: "挖利益", d: "对方的实/程/关/原" },
    { n: "7", t: "列筹码", d: "六张牌各能怎么用" },
    { n: "8", t: "备方案", d: "至少 3 个备选方案" }
  ];

  steps.forEach((s, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.4 + col * 2.32;
    const y = 1.75 + row * 1.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.85, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(s.n, {
      x: x + 0.85, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // Title
    slide.addText(s.t, {
      x: x, y: y + 0.75, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    // Description
    slide.addText(s.d, {
      x: x + 0.1, y: y + 1.1, w: 2.0, h: 0.3,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", lineSpacing: 12
    });
  });

  // Bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("8 步走完一遍 30-60 分钟——永远在谈判前完成", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("53", {
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
  pres.writeFile({ fileName: "slide-53-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
