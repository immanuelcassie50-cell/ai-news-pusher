// 页 126: 与利益相关方组合 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 126,
  title: '与利益相关方组合'
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
  slide.addText("组合创新  ·  特别有价值的一类", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("与利益相关方组合", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("一个技术方案 + 一个利益相关方的资源与影响力 = 组合创新", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("如果某个关键利益相关方的支持或参与，能让一个原本可行性有限的方案变得完全可行 —— 这本身就是一种组合创新。", {
    x: 0.7, y: 2.1, w: 8.6, h: 0.85,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 引导问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.15, w: 9, h: 1.95,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.15, w: 0.08, h: 1.95,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("从你的利益相关方分析里找：", {
    x: 0.75, y: 3.25, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  const questions = [
    "有没有一个利益相关方，他参与某个方案的推进，会让这个方案的可信度产生完全不同的结果？",
    "他的参与，是否会让资源获取变得更顺畅？",
    "他的参与，是否会让其他相关方的接受度发生明显变化？"
  ];

  questions.forEach((q, i) => {
    const y = 3.7 + i * 0.45;
    slide.addText("•", {
      x: 0.8, y: y, w: 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(q, {
      x: 1.1, y: y, w: 8.3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "126", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "126_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
