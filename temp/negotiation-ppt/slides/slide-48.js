// slide-48.js - 三个数字
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 48, title: '三个数字' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 三个数字：决定你的牌局", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("坐下来之前，必须想清的三条线", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("三个数字之间是有顺序的——必须先算 BATNA，再定底线，最后定期望", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 3 columns
  const nums = [
    {
      n: "01",
      t: "BATNA 值",
      en: "Best Alternative",
      d: "如果谈崩了，我能拿到什么",
      role: "你的安全网——低于这个，走人",
      ex: "10 万",
      color: theme.secondary
    },
    {
      n: "02",
      t: "底线值",
      en: "Walk-away",
      d: "低于这个，无论如何不接受",
      role: "你的尊严线——必须略高于 BATNA",
      ex: "12 万",
      color: theme.accent
    },
    {
      n: "03",
      t: "期望值",
      en: "Target",
      d: "理想结果 / 开盘报价",
      role: "你的目标——可以比底线高很多",
      ex: "18 万",
      color: theme.primary
    }
  ];

  nums.forEach((nm, i) => {
    const x = 0.4 + i * 3.1;
    const y = 1.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 3.0,
      fill: { color: "FFFFFF" }, line: { color: nm.color, width: 1.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.5,
      fill: { color: nm.color }, line: { color: nm.color, width: 0 }
    });
    slide.addText(nm.n, {
      x: x + 0.15, y: y, w: 0.6, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    slide.addText(nm.t, {
      x: x + 0.75, y: y, w: 2.05, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle", align: "right"
    });
    // Big number
    slide.addText(nm.ex, {
      x: x + 0.15, y: y + 0.65, w: 2.6, h: 0.7,
      fontSize: 36, fontFace: "Arial",
      color: nm.color, bold: true, align: "center"
    });
    // EN
    slide.addText(nm.en, {
      x: x + 0.15, y: y + 1.35, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: theme.secondary, italic: true, align: "center"
    });
    // Definition
    slide.addText(nm.d, {
      x: x + 0.15, y: y + 1.7, w: 2.6, h: 0.45,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", lineSpacing: 14
    });
    // Role
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 2.2, w: 2.6, h: 0.7,
      fill: { color: theme.bg }, line: { color: theme.light, width: 0.5 }
    });
    slide.addText(nm.role, {
      x: x + 0.25, y: y + 2.25, w: 2.4, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: nm.color, bold: true, valign: "middle", lineSpacing: 13
    });
  });

  // Bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.85, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("顺序永远是：先有 BATNA → 再定底线 → 最后定期望。任何顺序错乱 = 准备失败", {
    x: 0.5, y: 4.85, w: 8.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("48", {
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
  pres.writeFile({ fileName: "slide-48-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
