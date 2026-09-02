// slide-36.js - 战略性信息透明
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 36, title: '战略性信息透明' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 战略性信息透明", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("把黑箱变白箱：让对方放下防御的策略性坦白", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 19, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("最反直觉的谈判技术：主动暴露自己的某些信息，能换来对方的信息", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Three columns
  const cols = [
    {
      n: "01",
      t: "能透明的",
      items: [
        "你的非核心利益（次要目标）",
        "你的客观限制（预算上限、时间窗口）",
        "你对对方处境的理解",
        "你对方案的开放态度",
        "已经达成的内部共识"
      ],
      color: theme.accent
    },
    {
      n: "02",
      t: "能换的",
      items: [
        "对方的目标优先级",
        "对方的内部约束",
        "对方最在意的程序/关系利益",
        "对方对失败的恐惧",
        "对方的备选方案 BATNA"
      ],
      color: theme.secondary
    },
    {
      n: "03",
      t: "要保留的",
      items: [
        "你的 BATNA 全部细节",
        "你的真实底线",
        "你让步的最大空间",
        "你内部的分歧",
        "你没准备好的备选"
      ],
      color: theme.primary
    }
  ];

  cols.forEach((c, i) => {
    const x = 0.4 + i * 3.1;
    const y = 1.75;
    slide.addShape("rect", {
      x: x, y: y, w: 2.9, h: 3.0,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: y, w: 2.9, h: 0.55,
      fill: { color: c.color }, line: { color: c.color, width: 0 }
    });
    slide.addText(c.n, {
      x: x + 0.15, y: y, w: 0.7, h: 0.55,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    slide.addText(c.t, {
      x: x + 0.85, y: y, w: 1.9, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle", align: "right"
    });
    // List
    c.items.forEach((it, j) => {
      const ly = y + 0.7 + j * 0.4;
      slide.addShape("ellipse", {
        x: x + 0.15, y: ly + 0.1, w: 0.1, h: 0.1,
        fill: { color: c.color }, line: { color: c.color, width: 0 }
      });
      slide.addText(it, {
        x: x + 0.3, y: ly, w: 2.55, h: 0.4,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.primary, valign: "middle", lineSpacing: 12
      });
    });
  });

  // Bottom formula
  slide.addShape("rect", {
    x: 0.4, y: 4.9, w: 9.2, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("\"我先亮 1 张牌，目的是让你亮 1 张牌——然后我们才能一起做饼\"", {
    x: 0.5, y: 4.9, w: 8.5, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("36", {
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
  pres.writeFile({ fileName: "slide-36-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
