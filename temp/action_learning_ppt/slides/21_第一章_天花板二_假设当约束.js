// 页 21: 解释 - 天花板二 把假设当约束 (引入)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '第一章 天花板二：把假设当成约束'
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
  slide.addText("天花板 02  /  CEILING", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("把假设当成约束", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 概念引入
  slide.addText("每个组织都有一批「大家都知道的事」", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 4个"常识" 框
  const wisdoms = [
    "这件事没法变",
    "那个部门不会配合",
    "上面不会批",
    "这个系统改起来太复杂"
  ];
  wisdoms.forEach((w, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5 + col * 4.55, y: 2.1 + row * 0.7, w: 4.4, h: 0.6,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5 + col * 4.55, y: 2.1 + row * 0.7, w: 0.08, h: 0.6,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });
    slide.addText(`「${w}」`, {
      x: 0.7 + col * 4.55, y: 2.1 + row * 0.7, w: 4.1, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 隐藏的隐患
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.65, w: 9, h: 1.45,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("隐患", {
    x: 0.7, y: 3.75, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("这些「常识」在日常运作中节省了大量的沟通成本 ——", {
    x: 0.7, y: 4.05, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("但其中很多是历史形成的假设，早就不一定成立了，但", {
    x: 0.7, y: 4.4, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("没有人去验证过。", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "21", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "21_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
