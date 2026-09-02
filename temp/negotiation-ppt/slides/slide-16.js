// slide-16.js - 故事 1：小林小李薪资
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 16, title: '故事 1：薪资' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 故事 1：薪资谈判", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("小林 vs 小李：同一个 offer，两种结果", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Background setup
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.4, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("背景：小林和小李同一年毕业，岗位相同、能力相当，三年后被另一家公司看中，offer 几乎一致——基础年薪 25 万", {
    x: 0.5, y: 1.4, w: 9.0, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, valign: "middle"
  });

  // Two columns
  // LEFT: 小林
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.1, w: 4.5, h: 2.7,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.1, w: 4.5, h: 0.45,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("小林  ·  当成\"通知\"", {
    x: 0.55, y: 2.1, w: 4.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("动作：", {
    x: 0.55, y: 2.65, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true
  });
  slide.addText("直接转发给老板，邮件里说\"我准备走了，感谢公司这三年的培养\"。", {
    x: 0.55, y: 2.95, w: 4.2, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 16
  });
  slide.addText("结果：", {
    x: 0.55, y: 3.7, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true
  });
  slide.addText("老板没挽留。一周后离职，薪资 25 万。", {
    x: 0.55, y: 4.0, w: 4.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary
  });
  slide.addText("年收入 25 万，丢掉所有可能的筹码", {
    x: 0.55, y: 4.4, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true
  });

  // RIGHT: 小李
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.5, h: 2.7,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.1, w: 4.5, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("小李  ·  当成\"谈判筹码\"", {
    x: 5.25, y: 2.1, w: 4.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("动作：", {
    x: 5.25, y: 2.65, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true
  });
  slide.addText("·  在其他公司推进面试，拿到 23 万的对比 offer\n·  约老板面谈，摆出新 offer 整体方案\n·  说\"如果能给接近方案我倾向于留下\"", {
    x: 5.25, y: 2.95, w: 4.2, h: 0.95,
    fontSize: 10.5, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 15
  });
  slide.addText("结果：", {
    x: 5.25, y: 3.95, w: 1.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, bold: true
  });
  slide.addText("24 万底薪 + 9 万签字费 + 晋升评审机会", {
    x: 5.25, y: 4.25, w: 4.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true
  });
  slide.addText("年收入 27 万 + 熟悉环境无适应成本", {
    x: 5.25, y: 4.5, w: 4.2, h: 0.3,
    fontSize: 10.5, fontFace: "Microsoft YaHei", color: theme.accent, italic: true, bold: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("16", {
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
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
