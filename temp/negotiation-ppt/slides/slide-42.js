// slide-42.js - 模块2小结
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 42, title: '模块2小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 模块小结", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("模块二 · 五个关键武器", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    { n: "01", t: "核心区分", d: "立场 (要什么) vs 利益 (为什么想要)" },
    { n: "02", t: "三件套提问", d: "探询 / 标签 / 假设——把对方从立场层拉到利益层" },
    { n: "03", t: "四维利益", d: "实 / 程 / 关 / 原——满足任何一维都可能撬动立场" },
    { n: "04", t: "四个心理机制", d: "承诺升级 / 信息茧房 / 损失厌恶 / 身份认同" },
    { n: "05", t: "战略性透明", d: "主动暴露非关键信息，换对方的真实信息" }
  ];

  items.forEach((it, i) => {
    const y = 1.55 + i * 0.65;
    slide.addShape("rect", {
      x: 0.4, y: y, w: 9.2, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape("rect", {
      x: 0.4, y: y, w: 0.7, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(it.n, {
      x: 0.4, y: y, w: 0.7, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(it.t, {
      x: 1.25, y: y, w: 3.0, h: 0.55,
      fontSize: 12.5, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(it.d, {
      x: 4.4, y: y, w: 5.1, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom box
  slide.addShape("rect", {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("工具：利益地图 + 三件套提问清单（带在身上，遇到谈判随时翻）", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("42", {
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
  pres.writeFile({ fileName: "slide-42-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
