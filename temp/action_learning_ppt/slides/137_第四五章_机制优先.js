// 页 137: 大字 - 机制优先 核心论断
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 137,
  title: '核心论断：机制优先'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("核心论断  /  Key Insight", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("从「做什么」到「形成什么机制」", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 大字论断 1
  slide.addText("机制型方案", {
    x: 0.5, y: 1.6, w: 9, h: 0.9,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 优先字
  slide.addText("优先于", {
    x: 0.5, y: 2.6, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大字论断 2
  slide.addText("行动型方案。", {
    x: 0.5, y: 3.25, w: 9, h: 0.9,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 0.6, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 补充解释
  slide.addText("能够形成持续运作机制的方案，比需要持续推动才能维持效果的方案，有效性更高。", {
    x: 0.5, y: 4.45, w: 9, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "top", margin: 0
  });

  addFooter(slide, pres, theme, "137", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "137_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
