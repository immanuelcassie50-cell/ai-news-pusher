// slide-69.js - 让步的三个维度
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 69, title: '让步的三个维度' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 让步：大小、快慢、类型", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("让一步，输三分——怎么让才不亏？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("让步不是\"退让\"，是\"用最小成本换对方最大价值\"", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 3 columns
  const dims = [
    {
      n: "01", t: "让步大小",
      icon: "SIZE",
      sub: "幅度怎么定？",
      items: [
        "先大后小——逐步递减",
        "每一次让步都要比上一次小",
        "微小让步 = 让对方以为你到极限",
        "让步幅度 = 你\"还愿意付出多少\"的信号"
      ]
    },
    {
      n: "02", t: "让步快慢",
      icon: "SPEED",
      sub: "节奏怎么控？",
      items: [
        "前几次让得快——建立\"诚意\"",
        "后几次让得慢——建\"门槛感\"",
        "总让步次数不超过 4-5 次",
        "每一次让步都伴随一个理由"
      ]
    },
    {
      n: "03", t: "让步类型",
      icon: "TYPE",
      sub: "让什么不亏？",
      items: [
        "低成本让：高价值回报",
        "非货币让：时间、灵活度、关系",
        "换让步：让一步必须换回一步",
        "避免让：核心利益、底线、原则"
      ]
    }
  ];

  dims.forEach((d, i) => {
    const x = 0.4 + i * 3.1;
    const y = 1.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 3.0,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(d.icon, {
      x: x + 0.15, y: y, w: 0.8, h: 0.5,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(d.n + " · " + d.t, {
      x: x + 0.95, y: y, w: 1.85, h: 0.5,
      fontSize: 11.5, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle", align: "right"
    });
    slide.addText(d.sub, {
      x: x + 0.15, y: y + 0.55, w: 2.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    d.items.forEach((it, j) => {
      const ly = y + 0.9 + j * 0.5;
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.15, y: ly + 0.1, w: 0.1, h: 0.1,
        fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
      });
      slide.addText(it, {
        x: x + 0.3, y: ly, w: 2.55, h: 0.5,
        fontSize: 9.5, fontFace: "Microsoft YaHei",
        color: theme.primary, valign: "middle", lineSpacing: 12
      });
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.85, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("让一步换一步——让步不是\"付出\"，是\"交换\"", {
    x: 0.5, y: 4.85, w: 8.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("69", {
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
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
