// slide-32.js - 提问技术演练
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 32, title: '提问技术演练' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 演练：错误问法 vs 正确问法", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("同样是\"了解对方\"，问法决定你能挖到多深", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const pairs = [
    {
      scene: "场景 A · 客户对价格犹豫",
      bad: "\"您觉得多少钱合理？\"",
      badNote: "诱导性 / 封闭性 / 逼对方报数",
      good: "\"您说贵了，能告诉我您是和什么比觉得贵吗？\"",
      goodNote: "探询 / 打开信息 / 了解参照系"
    },
    {
      scene: "场景 B · 同事在会议上反对你的方案",
      bad: "\"您为什么不同意？\"",
      badNote: "对方会进入防御 / 找理由",
      good: "\"我猜您担心的是上线时间太紧，对吗？\"",
      goodNote: "标签 / 猜对对方放下警惕 / 猜错对方纠正"
    },
    {
      scene: "场景 C · 老板压你接额外项目",
      bad: "\"这个项目真的做不了。\"",
      badNote: "直接说立场 / 引发对抗",
      good: "\"如果接这个项目，您觉得我应该先暂停哪一项？\"",
      goodNote: "假设 / 让对方帮你做取舍 / 暴露真实优先级"
    }
  ];

  pairs.forEach((p, i) => {
    const y = 1.55 + i * 1.15;
    // Scene label
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(p.scene, {
      x: 0.55, y: y, w: 9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    // Bad
    slide.addShape("rect", {
      x: 0.4, y: y + 0.3, w: 4.5, h: 0.8,
      fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
    });
    slide.addText("X  错", {
      x: 0.5, y: y + 0.32, w: 0.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(p.bad, {
      x: 0.5, y: y + 0.55, w: 4.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(p.badNote, {
      x: 0.5, y: y + 0.83, w: 4.3, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true
    });
    // Good
    slide.addShape("rect", {
      x: 5.1, y: y + 0.3, w: 4.5, h: 0.8,
      fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
    });
    slide.addText("V  对", {
      x: 5.2, y: y + 0.32, w: 0.7, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(p.good, {
      x: 5.2, y: y + 0.55, w: 4.3, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(p.goodNote, {
      x: 5.2, y: y + 0.83, w: 4.3, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("32", {
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
  pres.writeFile({ fileName: "slide-32-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
