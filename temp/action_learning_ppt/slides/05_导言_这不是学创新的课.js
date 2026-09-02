// 05 导言 - 这不是学创新的课（图文混排 + 三件事）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '这不是一门"学创新"的课'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标识
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("导言  /  Introduction", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("04  这不是一门「学创新」的课", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引子
  slide.addText("你不需要想出什么前所未有的东西。突破性解法，大多来自三件事。", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大色块装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 2.6, h: 2.6,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 大字
  slide.addText("3", {
    x: 0.5, y: 2.25, w: 2.6, h: 1.8,
    fontSize: 150, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("THREE THINGS", {
    x: 0.5, y: 3.95, w: 2.6, h: 0.3,
    fontSize: 12, fontFace: "Georgia",
    color: theme.light, charSpacing: 6,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("突破性解法的三种来源", {
    x: 0.5, y: 4.25, w: 2.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右侧三件事
  const items = [
    {
      num: "01",
      title: "发现",
      desc: "一个被当成约束的假设其实不成立"
    },
    {
      num: "02",
      title: "移植",
      desc: "把其他领域已成熟的原理重新应用"
    },
    {
      num: "03",
      title: "组合",
      desc: "把现有的几种方向组合出新效果"
    }
  ];

  const itemX = 3.4;
  const itemW = 5.8;
  const itemH = 0.83;
  const itemGap = 0.06;
  const itemStartY = 2.15;

  items.forEach((item, i) => {
    const y = itemStartY + i * (itemH + itemGap);

    // 卡片底
    slide.addShape(pres.shapes.RECTANGLE, {
      x: itemX, y: y, w: itemW, h: itemH,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });

    // 左侧色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: itemX, y: y, w: 0.1, h: itemH,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    // 编号
    slide.addText(item.num, {
      x: itemX + 0.3, y: y + 0.15, w: 0.7, h: 0.55,
      fontSize: 28, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(item.title, {
      x: itemX + 1.0, y: y + 0.1, w: 1.0, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });

    // 分隔竖线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: itemX + 2.1, y: y + 0.2, w: 0.02, h: 0.45,
      fill: { color: theme.light }, line: { type: 'none' }
    });

    // 描述
    slide.addText(item.desc, {
      x: itemX + 2.3, y: y + 0.1, w: 3.3, h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部结语
  slide.addText("可学习  /  可操作  /  有结构  ——  不依赖灵感，不依赖天赋。", {
    x: 0.5, y: 4.9, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "05", "导言与课程地图");
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
  pres.writeFile({ fileName: "05_导言_这不是学创新的课_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
