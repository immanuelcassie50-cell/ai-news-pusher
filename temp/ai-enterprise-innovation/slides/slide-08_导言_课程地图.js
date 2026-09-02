// slide-08_导言_课程地图 - 章节卡片
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 8,
  title: '课程地图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("课程地图", {
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

  // 五个章节卡片 - 横向排列
  const chapters = [
    { num: "01", title: "创新背景", pages: "P11-35", color: theme.accent },
    { num: "02", title: "六大挑战", pages: "P36-65", color: theme.light },
    { num: "03", title: "创新方法论", pages: "P66-102", color: theme.accent },
    { num: "04", title: "行业实践", pages: "P103-130", color: theme.light },
    { num: "05", title: "创新战略", pages: "P131-149", color: theme.accent }
  ];

  const cardWidth = 1.7;
  const cardHeight = 2.8;
  const startX = 0.5;
  const gap = 0.2;
  const y = 1.4;

  chapters.forEach((ch, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 0.5,
      fill: { color: ch.color }, line: { type: 'none' }
    });

    // 章节号
    slide.addText(ch.num, {
      x: x, y: y + 0.55, w: cardWidth, h: 0.7,
      fontSize: 36, fontFace: "Georgia",
      color: ch.color, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(ch.title, {
      x: x, y: y + 1.3, w: cardWidth, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 页码范围
    slide.addText(ch.pages, {
      x: x, y: y + 1.9, w: cardWidth, h: 0.4,
      fontSize: 10, fontFace: "Arial",
      color: "90e0ef",
      align: "center", valign: "middle", margin: 0
    });

    // 底部箭头
    if (i < chapters.length - 1) {
      slide.addText("→", {
        x: x + cardWidth, y: y + cardHeight / 2 - 0.2, w: gap, h: 0.4,
        fontSize: 16, fontFace: "Arial",
        color: theme.light,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 底部总时长信息
  slide.addText("课程总时长：约 8 小时    |    建议分 5 次学习完成", {
    x: 0.5, y: 4.6, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("8", {
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
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
