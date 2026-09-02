// slide-54.js - 八步详解 1-4
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 54, title: '八步详解 1-4' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 八步详解：1-4 步", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("\"算清楚\"的四个步骤", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("从\"我要什么\"到\"我必须有几个数字\"——前半场", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const steps = [
    {
      n: "1", t: "定目标",
      q: "这次谈判最希望拿到什么？",
      d: "把目标写下来，一句话能说完。\n模糊的目标 = 模糊的策略。",
      tip: "好的目标具体到数字、时间、形式。"
    },
    {
      n: "2", t: "算 BATNA",
      q: "如果这次谈崩，我具体能去哪？",
      d: "BATNA 越真实，议价力越强。\nBATNA 越模糊，越容易接受不利条款。",
      tip: "至少准备 2 个具体备选方案。"
    },
    {
      n: "3", t: "算底线",
      q: "低于这个数字，无论如何不接受？",
      d: "必须基于成本 + 必要利润。\n过低 = 自欺；过高 = 容易走人。",
      tip: "底线 = 签了不难受的最低线。"
    },
    {
      n: "4", t: "算期望",
      q: "理想结果是多少？怎么开口？",
      d: "期望可以比底线高 30-50%。\n报价要高于期望，为让步留空间。",
      tip: "期望是手段，底线是目的。"
    }
  ];

  // 2x2 grid
  steps.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.7 + row * 1.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.5, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.15, w: 0.55, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.n, {
      x: x + 0.15, y: y + 0.15, w: 0.55, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    // Title
    slide.addText(s.t, {
      x: x + 0.8, y: y + 0.15, w: 3.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // Question
    slide.addText(s.q, {
      x: x + 0.8, y: y + 0.45, w: 3.5, h: 0.3,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
    // Description
    slide.addText(s.d, {
      x: x + 0.15, y: y + 0.8, w: 4.2, h: 0.4,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 12
    });
    // Tip
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
  slide.addText("54", {
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
  pres.writeFile({ fileName: "slide-54-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
