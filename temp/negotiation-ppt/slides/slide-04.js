// slide-04.js - 三个核心痛点
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 4, title: '三个核心痛点' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("三个核心痛点  ·  THREE PAIN POINTS", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Title
  slide.addText("这门课要解决什么问题？", {
    x: 0.4, y: 0.85, w: 9.2, h: 0.55,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three pain point rows
  const pains = [
    {
      num: "01",
      title: "把谈判当成特殊场合的特殊技能",
      desc: "谈薪资、争取资源、处理客诉、和伴侣讨论周末安排——每一个都是谈判。",
      truth: "真相：每一天你都在谈判，只是谈得不够好。"
    },
    {
      num: "02",
      title: "把\"谈成\"当成唯一目标",
      desc: "要么过于强硬（变成争吵），要么过于柔软（让步过多）。",
      truth: "真相：正确的目标是\"创造双方都比不谈更好的结果\"。"
    },
    {
      num: "03",
      title: "在谈判中没有框架，靠本能",
      desc: "被情绪带着走，事后才知道哪里做错了。",
      truth: "真相：谈判是一套可学习的框架性技能——掌握框架和没有框架的人是系统性差距。"
    }
  ];

  pains.forEach((p, i) => {
    const y = 1.6 + i * 1.2;

    // Background card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 1.05,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Number block
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 1.05, h: 1.05,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(p.num, {
      x: 0.4, y: y, w: 1.05, h: 1.05,
      fontSize: 32, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    // Title
    slide.addText(p.title, {
      x: 1.65, y: y + 0.1, w: 7.8, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // Description
    slide.addText(p.desc, {
      x: 1.65, y: y + 0.45, w: 7.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // Truth highlight
    slide.addText(p.truth, {
      x: 1.65, y: y + 0.72, w: 7.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, italic: true
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("04", {
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
