// slide-07_导言_你会产出什么 - 图标行展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '你会产出什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("LEARNING OUTCOMES", {
    x: 0.7, y: 0.4, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("完成课程后，你将能够", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 四个产出物 - 2x2网格
  const outcomes = [
    { icon: "01", title: "诊断企业创新现状", desc: "识别自身企业在AI创新中的位置与瓶颈" },
    { icon: "02", title: "掌握五种创新方法", desc: "产品智能化、流程自动化、数据驱动、商业重构、平台化" },
    { icon: "03", title: "制定落地路线图", desc: "将创新想法转化为可执行的实施方案" },
    { icon: "04", title: "构建竞争优势", desc: "在细分领域建立可持续的AI驱动竞争力" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.5;
  const startX = 0.5;
  const gap = 0.35;
  const row1Y = 1.7;
  const row2Y = 3.4;

  // 第一行
  for (let i = 0; i < 2; i++) {
    const x = startX + i * (cardWidth + gap);
    const item = outcomes[i];

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: row1Y, w: cardWidth, h: cardHeight,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 左侧图标区
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: row1Y, w: 0.8, h: cardHeight,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(item.icon, {
      x: x, y: row1Y, w: 0.8, h: cardHeight,
      fontSize: 24, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(item.title, {
      x: x + 1.0, y: row1Y + 0.25, w: cardWidth - 1.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(item.desc, {
      x: x + 1.0, y: row1Y + 0.8, w: cardWidth - 1.2, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "top", margin: 0
    });
  }

  // 第二行
  for (let i = 0; i < 2; i++) {
    const x = startX + i * (cardWidth + gap);
    const item = outcomes[i + 2];

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: row2Y, w: cardWidth, h: cardHeight,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 左侧图标区
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: row2Y, w: 0.8, h: cardHeight,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(item.icon, {
      x: x, y: row2Y, w: 0.8, h: cardHeight,
      fontSize: 24, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(item.title, {
      x: x + 1.0, y: row2Y + 0.25, w: cardWidth - 1.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(item.desc, {
      x: x + 1.0, y: row2Y + 0.8, w: cardWidth - 1.2, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "top", margin: 0
    });
  }

  // 页码
  slide.addText("7", {
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
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
