// slide-30.js - 案例三：价格谈判
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 30, title: '案例三：价格谈判' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 案例三：价格谈判", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("客户要降价 20%：为什么不能直接答应也不能直接拒绝", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("价格是表面——客户真正想要的可能不只是\"便宜\"", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Layer cake
  // Surface layer
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 9.2, h: 0.55,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("Layer 1 · 表面立场", {
    x: 0.55, y: 1.75, w: 4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"要降价 20%\"", {
    x: 4.5, y: 1.75, w: 5, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle", align: "right"
  });

  // Layer 2 - explicit interest
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.35, w: 9.2, h: 0.55,
    fill: { color: theme.light }, line: { color: theme.light, width: 0 }
  });
  slide.addText("Layer 2 · 直接利益", {
    x: 0.55, y: 2.35, w: 4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });
  slide.addText("\"想压缩预算 / 季度成本压力\"", {
    x: 4.5, y: 2.35, w: 5, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle", align: "right"
  });

  // Layer 3 - deep interest
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.95, w: 9.2, h: 0.55,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("Layer 3 · 深层利益", {
    x: 0.55, y: 2.95, w: 4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("\"想保住在老板面前的预算守门人形象\"", {
    x: 4.5, y: 2.95, w: 5, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle", align: "right"
  });

  // Layer 4 - hidden interest
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.55, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("Layer 4 · 隐藏利益", {
    x: 0.55, y: 3.55, w: 4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("\"想和老板证明：选了我这家供应商是个英明决定\"", {
    x: 4.5, y: 3.55, w: 5, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle", align: "right"
  });

  // Solution box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.25, w: 9.2, h: 1.05,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("创造性解", {
    x: 0.55, y: 4.3, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("价格不动 + 帮客户做一份\"成本节约报告\"(让他能向老板汇报省了多少)\n+ 联合署名一份\"行业最佳实践\"白皮书(让他的判断显得有远见)", {
    x: 0.55, y: 4.6, w: 9, h: 0.7,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 14
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("30", {
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
  pres.writeFile({ fileName: "slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
