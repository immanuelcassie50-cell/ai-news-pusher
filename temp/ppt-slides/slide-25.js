// slide-25.js - 你可能已经走过的弯路
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "你可能已经走过的弯路",
  pageNumber: 25,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 标题
  slide.addText("你可能已经走过的弯路", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 弯路卡片
  const wrongWays = [
    { icon: "×", title: "工具选择迷茫", desc: "装了十几个AI工具，不知道该用哪个" },
    { icon: "×", title: "信息碎片化", desc: "搜到的资料散落各处，找不到就重复搜" },
    { icon: "×", title: "输出质量不稳", desc: "AI生成的结果时好时坏，不知如何优化" },
    { icon: "×", title: "效率反而降低", desc: "花更多时间在调试AI，而不是实际工作" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.1;
  const startX = 0.5;
  const startY = 1.4;
  const gapX = 0.35;
  const gapY = 0.25;

  wrongWays.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // X图标
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.3, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(item.icon, {
      x: x + 0.15, y: y + 0.3, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 标题
    slide.addText(item.title, {
      x: x + 0.8, y: y + 0.15, w: cardWidth - 1.0, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 描述
    slide.addText(item.desc, {
      x: x + 0.8, y: y + 0.55, w: cardWidth - 1.0, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 底部引导语
  slide.addText("如果你有同感，接下来的内容正是你需要的", {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-25-output.pptx" })
    .then(() => console.log("Created: slide-25-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };