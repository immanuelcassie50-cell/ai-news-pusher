// 09 导言 - 开始之前记住（收尾金句引述）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: '开始之前记住'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Final Word", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 小标识
  slide.addText("07  在开始之前记住", {
    x: 0.5, y: 0.85, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大引号
  slide.addText("“", {
    x: 0.6, y: 1.4, w: 1.4, h: 1.4,
    fontSize: 180, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 主金句上半
  slide.addText("不因为思维的局限，", {
    x: 1.6, y: 1.8, w: 7.5, h: 0.8,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle", margin: 0
  });

  // 主金句下半
  slide.addText("错过真正有效的解法。", {
    x: 1.6, y: 2.6, w: 7.5, h: 0.9,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.6, y: 3.7, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 副说明
  slide.addText('这套文档的目标不是「一定要产出创新方案」，', {
    x: 2.3, y: 3.62, w: 6.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText('而是「不因为思维的局限，错过真正有效的解法」。', {
    x: 1.6, y: 3.95, w: 7.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 底部提醒
  slide.addText("走完之后，最终方案里可能绝大多数仍是优化版常规方案，少数才是真正的新方向 —— 这完全没问题。", {
    x: 0.5, y: 4.55, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 2,
    align: "center", valign: "middle", margin: 0
  });

  // 目的强调
  slide.addText("目的始终是解决问题，不是创新而创新。", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "09", "导言与课程地图");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "09_导言_开始之前记住_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
