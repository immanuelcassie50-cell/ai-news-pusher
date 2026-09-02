// slide-55.js - 八步详解 5-8
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 55, title: '八步详解 5-8' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 八步详解：5-8 步", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("\"看对方\"的四个步骤", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("从\"估对方\"到\"备方案\"——后半场", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const steps = [
    {
      n: "5", t: "估对方",
      q: "对方的目标/底线/BATNA 可能是什么？",
      d: "无法精确，但要有区间估计。\n用\"我如果是对方会怎么想\"代入。",
      tip: "有依据的猜测比\"猜不到\"强 10 倍。"
    },
    {
      n: "6", t: "挖利益",
      q: "对方真正想要什么？实/程/关/原？",
      d: "从对方立场反推利益。\n利益挖得越透，方案空间越大。",
      tip: "问 3 个\"为什么\"能挖到深层利益。"
    },
    {
      n: "7", t: "列筹码",
      q: "我手里有哪几张牌？怎么用？",
      d: "六张牌：时间/信息/关系/退路/灵活/专业。\n每张牌标\"强/弱\"和\"出牌时机\"。",
      tip: "强牌不要一次打完。"
    },
    {
      n: "8", t: "备方案",
      q: "如果对方不接受，我能换什么方案？",
      d: "至少 3 个备选方案，差距大。\n准备 A/B/C 方案应对不同反应。",
      tip: "方案越多，越不会陷入\"接受/拒绝\"二元。"
    }
  ];

  steps.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.7 + row * 1.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.5, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.15, w: 0.55, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.n, {
      x: x + 0.15, y: y + 0.15, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.t, {
      x: x + 0.8, y: y + 0.15, w: 3.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(s.q, {
      x: x + 0.8, y: y + 0.45, w: 3.5, h: 0.3,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
    slide.addText(s.d, {
      x: x + 0.15, y: y + 0.8, w: 4.2, h: 0.4,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 12
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 1.18, w: 4.2, h: 0.22,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText("提示：" + s.tip, {
      x: x + 0.25, y: y + 1.18, w: 4.0, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("55", {
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
  pres.writeFile({ fileName: "slide-55-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
