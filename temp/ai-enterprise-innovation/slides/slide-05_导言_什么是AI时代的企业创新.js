// slide-05_导言_什么是AI时代的企业创新 - 概念定义
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '什么是AI时代的企业创新'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("CORE CONCEPT", {
    x: 0.7, y: 0.4, w: 3, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("什么是AI时代的企业创新", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心定义框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 9, h: 1.3,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 2 }
  });

  slide.addText("AI时代的企业创新，不是追风口、炒概念，\n而是用AI技术重新思考价值创造的方式，实现持续、可积累的竞争优势。", {
    x: 0.7, y: 1.85, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 三个关键词卡片
  const keywords = [
    { title: "持续", desc: "不是一次性项目，而是持续迭代的能力建设" },
    { title: "可积累", desc: "每一项投入都能形成资产，沉淀为组织能力" },
    { title: "竞争优势", desc: "在细分领域建立难以复制的护城河" }
  ];

  const cardWidth = 2.8;
  const startX = 0.7;
  const gap = 0.3;
  const y = 3.3;

  keywords.forEach((kw, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 1.5,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 顶部强调条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    // 关键词标题
    slide.addText(kw.title, {
      x: x, y: y + 0.2, w: cardWidth, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 说明
    slide.addText(kw.desc, {
      x: x + 0.15, y: y + 0.75, w: cardWidth - 0.3, h: 0.65,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "top", margin: 0
    });
  });

  // 页码
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
