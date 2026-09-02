// 页 100: 真实案例 - 物流公司三份表单
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 100,
  title: '真实案例 物流公司'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部标识
  slide.addText("真实案例  ·  CASE STUDY", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("一个物流公司的发现", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("陌生人审计练习中，有人记下了这一条", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 案例框 - 顶部色条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.05, w: 9, h: 0.06,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  // 案例框主体
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.11, w: 9, h: 2.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });

  // 案例文字
  slide.addText("奇怪的是，每批货物发出去之前", {
    x: 0.8, y: 2.3, w: 8.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("要填", {
    x: 0.8, y: 2.8, w: 1.0, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("三份格式几乎一样的表单", {
    x: 1.5, y: 2.8, w: 5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("，", {
    x: 5.8, y: 2.8, w: 0.4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("我做了两年从来没想过为什么是三份而不是一份。", {
    x: 0.8, y: 3.3, w: 8.4, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 启示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("启示", {
    x: 0.7, y: 4.4, w: 1, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: 4.5, w: 0.04, h: 0.45,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("三份表单是三个不同年代不同系统遗留的，早就可以合并。\n这个发现后来变成了一个节省大量重复人工的流程优化方案。", {
    x: 1.7, y: 4.35, w: 7.6, h: 0.75,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "100", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "100_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
