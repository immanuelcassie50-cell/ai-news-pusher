// 页 133: 案例框 - 常见陷阱：创意感不等于有效
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 133,
  title: '常见陷阱：创意感不等于有效'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("常见陷阱  /  Trap", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("创意感 ≠ 有效", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 2.6,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 0.1, h: 2.6,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("场景", {
    x: 0.85, y: 1.7, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("一个团队经历了一整天的方案探索，产出了很多有意思的候选方向。", {
    x: 0.85, y: 2.0, w: 8.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  slide.addText("会发生什么", {
    x: 0.85, y: 2.55, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("大家最兴奋地讨论那个最有创意感的方案，花了大量时间在「听起来很酷」的方向上 ——", {
    x: 0.85, y: 2.85, w: 8.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 高亮结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 3.4, w: 8.4, h: 0.7,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText([
    { text: "最后发现：", options: { color: theme.secondary, fontSize: 13 } },
    { text: "这个方向有效性最难验证，可行性也存疑。", options: { color: theme.accent, fontSize: 15, bold: true } }
  ], {
    x: 1, y: 3.4, w: 8.2, h: 0.7,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 启示卡片 - 反转
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.4, w: 4.4, h: 0.7,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText([
    { text: "真正能改变局面的：", options: { color: theme.secondary, fontSize: 11 } },
    { text: "那个「看起来不够有趣」的方向", options: { color: theme.accent, fontSize: 13, bold: true } }
  ], {
    x: 0.7, y: 4.4, w: 4.0, h: 0.7,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 4.4, w: 4.4, h: 0.7,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("评估框架：让决策基于依据，而不是感觉。", {
    x: 5.1, y: 4.4, w: 4.4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "133", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "133_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
