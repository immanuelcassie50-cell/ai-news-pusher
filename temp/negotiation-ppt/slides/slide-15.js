// slide-15.js - 错误认知 3+4+5
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 15, title: '错误认知 3+4+5' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 错误认知 ③ + ④ + ⑤", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // 3 cards
  const errs = [
    {
      n: "③",
      title: "开价高了会得罪人",
      err: "\"我直接说底线，关系更好\"",
      why: "适度偏高的开价设定了心理锚点。哈佛研究：开价高的一方最终比开价低的一方好 15-20%。",
      right: "开价应该设定在你能合理主张的最高位置——\"高得有道理\"。"
    },
    {
      n: "④",
      title: "开价要高，态度要硬",
      err: "\"谈判就是压垮对方\"",
      why: "强硬策略在长期关系中会让你付出代价。研究：被强硬对待的谈判者会减少合作意愿、增加报复行为。",
      right: "\"善意 + 坚定\"才是谈判高手的标志：尊重对方需求 + 保护自己利益。"
    },
    {
      n: "⑤",
      title: "谈判 = 对立，关系会僵",
      err: "\"和熟人朋友不谈利益\"",
      why: "不谈的代价是接受了对方默认的方案——那个方案通常对你不利。委屈积累会以更具破坏性的方式爆发。",
      right: "好的谈判让关系变强——传递\"我尊重你的利益，也希望你尊重我的利益\"。"
    }
  ];

  errs.forEach((e, i) => {
    const x = 0.4 + i * 3.1;
    const y = 0.85;
    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 4.05,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(e.n + "  " + e.title, {
      x: x + 0.15, y: y, w: 2.7, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    // Error
    slide.addText("错误认知：", {
      x: x + 0.15, y: y + 0.6, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(e.err, {
      x: x + 0.15, y: y + 0.85, w: 2.6, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true
    });
    // Why wrong
    slide.addText("为什么错：", {
      x: x + 0.15, y: y + 1.3, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(e.why, {
      x: x + 0.15, y: y + 1.55, w: 2.6, h: 1.0,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 13
    });
    // Right
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 2.65, w: 2.6, h: 1.3,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }
    });
    slide.addText("✓  正确认知", {
      x: x + 0.3, y: y + 2.7, w: 2.4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(e.right, {
      x: x + 0.3, y: y + 3.0, w: 2.4, h: 0.95,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 14
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("15", {
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
  pres.writeFile({ fileName: "slide-15-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
