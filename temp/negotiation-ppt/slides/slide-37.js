// slide-37.js - 信息透明演练
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 37, title: '信息透明演练' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 演练：透明一句换回什么？", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("三句话，请判断：透明 / 保留？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("每一条都是真话——区别在于它服务于什么", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Three statements
  const stmts = [
    {
      sit: "和供应商谈年度合同",
      s: "\"我们的预算是 80 万——这个数字我们其实有空间。\"",
      judge: "V  透明",
      why: "报价空间本身不是关键信息，暴露换来对方报出真实成本结构"
    },
    {
      sit: "和老板谈新项目",
      s: "\"坦白说，老板，我现在有 3 个备选方向，但都还在初步阶段。\"",
      judge: "X  保留",
      why: "暴露\"3 个备选\"让老板感觉你没在认真——保留具体内容，只说\"我还在选\""
    },
    {
      sit: "和伴侣谈春节回谁家",
      s: "\"我其实没那么想回我家，主要怕我妈伤心。\"",
      judge: "V  透明",
      why: "把\"立场\"（不想回）背后的\"利益\"（怕妈伤心）说清楚，让对方能帮你想方案"
    }
  ];

  stmts.forEach((s, i) => {
    const y = 1.7 + i * 1.1;
    // Situation
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.sit, {
      x: 0.55, y: y, w: 9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    // Statement
    slide.addShape("rect", {
      x: 0.4, y: y + 0.32, w: 9.2, h: 0.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addText(s.s, {
      x: 0.55, y: y + 0.32, w: 8.5, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, italic: true, valign: "middle"
    });
    // Judge + reason
    slide.addShape("rect", {
      x: 0.4, y: y + 0.78, w: 1.3, h: 0.3,
      fill: { color: s.judge.includes("V") ? theme.accent : theme.secondary },
      line: { color: s.judge.includes("V") ? theme.accent : theme.secondary, width: 0 }
    });
    slide.addText(s.judge, {
      x: 0.4, y: y + 0.78, w: 1.3, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.why, {
      x: 1.8, y: y + 0.78, w: 7.8, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom
  slide.addShape("rect", {
    x: 0.4, y: 5.0, w: 9.2, h: 0.35,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("透明的判断标准：暴露的，是对方需要知道的，且不伤害自己的核心利益", {
    x: 0.5, y: 5.0, w: 8.5, h: 0.35,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("37", {
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
  pres.writeFile({ fileName: "slide-37-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
