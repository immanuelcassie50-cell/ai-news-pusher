// slide-02_目录 - 课程目录
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '课程目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("课程目录", {
    x: 0.5, y: 0.4, w: 4, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.03,
    fill: { color: theme.light }, line: { type: 'none' }
  });

  // 五个章节卡片 - 2行布局
  const chapters = [
    { num: "01", title: "AI时代的创新背景", desc: "理解AI技术演进与创新范式转移" },
    { num: "02", title: "企业创新的六大挑战", desc: "数据、人才、组织、ROI、伦理、锁定" },
    { num: "03", title: "AI驱动的创新方法论", desc: "五种创新模式与实施路径" },
    { num: "04", title: "行业实践与案例", desc: "制造、金融、零售、医疗、教育" },
    { num: "05", title: "AI时代的创新战略", desc: "组织、文化、投资与风险管理" }
  ];

  // 第一行3个卡片
  const cardWidth = 2.8;
  const cardHeight = 1.4;
  const startX = 0.5;
  const gap = 0.25;
  const row1Y = 1.4;
  const row2Y = 3.0;

  // 第一行
  for (let i = 0; i < 3; i++) {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: row1Y, w: cardWidth, h: cardHeight,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 章节号
    slide.addText(chapters[i].num, {
      x: x + 0.15, y: row1Y + 0.15, w: 0.6, h: 0.4,
      fontSize: 24, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(chapters[i].title, {
      x: x + 0.15, y: row1Y + 0.55, w: cardWidth - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(chapters[i].desc, {
      x: x + 0.15, y: row1Y + 0.95, w: cardWidth - 0.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "top", margin: 0
    });
  }

  // 第二行2个卡片（居中）
  const row2StartX = startX + (cardWidth + gap) * 0.5;
  for (let i = 0; i < 2; i++) {
    const x = row2StartX + i * (cardWidth + gap);
    const ch = chapters[i + 3];

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: row2Y, w: cardWidth, h: cardHeight,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 章节号
    slide.addText(ch.num, {
      x: x + 0.15, y: row2Y + 0.15, w: 0.6, h: 0.4,
      fontSize: 24, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(ch.title, {
      x: x + 0.15, y: row2Y + 0.55, w: cardWidth - 0.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(ch.desc, {
      x: x + 0.15, y: row2Y + 0.95, w: cardWidth - 0.3, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "90e0ef",
      align: "left", valign: "top", margin: 0
    });
  }

  // 页码
  slide.addText("2", {
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
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
