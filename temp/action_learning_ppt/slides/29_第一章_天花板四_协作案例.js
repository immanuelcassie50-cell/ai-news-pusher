// 页 29: 案例 - 跨部门协作
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 29,
  title: '第一章 天花板四 案例：跨部门协作'
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
  slide.addText("案例  /  CEILING 04", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("跨部门协作效率低 —— 会议的宿命", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 故事框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 3.55,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.1, h: 3.55,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 阶段 1 - 起点
  slide.addText("问题", {
    x: 0.85, y: 1.7, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("某部门跨部门协作效率低。", {
    x: 0.85, y: 2.0, w: 8.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 阶段 2 - 方案
  slide.addText("团队的解法（点方案）", {
    x: 0.85, y: 2.4, w: 8.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 2.7, w: 8.4, h: 0.55,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText("增加定期例会，建立沟通规范", {
    x: 1.0, y: 2.7, w: 8.1, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 阶段 3 - 半年后
  slide.addText("半年后", {
    x: 0.85, y: 3.4, w: 8.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("例会变成了走过场，协作效率又回到了原来。", {
    x: 0.85, y: 3.7, w: 8.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 根本原因
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 4.15, w: 8.4, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("根本原因（从未被触碰）", {
    x: 0.85, y: 4.3, w: 8.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("两个部门之间的绩效考核体系完全对立 —— 协作行为对任何一方都没有激励，甚至有惩罚。", {
    x: 0.85, y: 4.6, w: 8.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 启示
  slide.addText("启示  /  系统条件不改变，点方案无法持续", {
    x: 0.5, y: 5.18, w: 9, h: 0.22,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "29", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "29_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
