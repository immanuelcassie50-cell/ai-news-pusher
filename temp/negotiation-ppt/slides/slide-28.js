// slide-28.js - 案例一：薪资谈判
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 28, title: '案例一：薪资谈判' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 案例一：薪资谈判", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("小林 vs 小李：同一个\"涨薪\"诉求，两种结局", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 19, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("\"涨 3000\"——看似相同的立场，背后是完全不同的利益世界", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // LEFT - 小林 (failed)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 4.5, h: 3.1,
    fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 4.5, h: 0.5,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("小林 · 失败版本", {
    x: 0.55, y: 1.75, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("立场", {
    x: 0.55, y: 2.35, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("\"我值得更高的工资。\"", {
    x: 0.55, y: 2.6, w: 4.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addText("策略", {
    x: 0.55, y: 2.95, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("反复强调自己能力强、加班多、压力大。", {
    x: 0.55, y: 3.2, w: 4.2, h: 0.45,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 13
  });
  slide.addText("结果", {
    x: 0.55, y: 3.7, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("老板觉得\"诉求不合理\"，没涨。", {
    x: 0.55, y: 3.95, w: 4.2, h: 0.4,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 4.4, w: 4.2, h: 0.35,
    fill: { color: theme.bg }, line: { color: theme.secondary, width: 1 }
  });
  slide.addText("问题：把饼做小了——只看见\"钱\"", {
    x: 0.65, y: 4.4, w: 4.0, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, valign: "middle"
  });

  // RIGHT - 小李 (succeeded)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.75, w: 4.5, h: 3.1,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.75, w: 4.5, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("小李 · 成功版本", {
    x: 5.25, y: 1.75, w: 4.2, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("挖老板的利益", {
    x: 5.25, y: 2.35, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("\"老板，您现在最希望团队稳定、还是有新动作？\"", {
    x: 5.25, y: 2.6, w: 4.2, h: 0.35,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addText("方案", {
    x: 5.25, y: 2.95, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("\"涨 1500 + 招人带新人 + 培训预算\"", {
    x: 5.25, y: 3.2, w: 4.2, h: 0.4,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 13
  });
  slide.addText("结果", {
    x: 5.25, y: 3.7, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("全部满足，工资涨了 1500，活少了。", {
    x: 5.25, y: 3.95, w: 4.2, h: 0.4,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 4.4, w: 4.2, h: 0.35,
    fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("关键：把饼做大了——对接老板的真正利益", {
    x: 5.35, y: 4.4, w: 4.0, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  // Bottom takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("同样的立场（涨 3000），对到不同的利益（自己价值 vs 团队稳定），打开完全不同的方案空间", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("28", {
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
  pres.writeFile({ fileName: "slide-28-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
