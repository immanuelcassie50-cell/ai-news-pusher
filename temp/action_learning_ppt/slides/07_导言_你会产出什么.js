// 07 导言 - 你会产出什么（图标行布局）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '你会产出什么'
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
  slide.addText("06  你会产出什么", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标题
  slide.addText("完成这套课程的工作之后，你会有四样具体的东西。", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 4 个产出物
  const items = [
    {
      num: "01",
      title: "方案分类表",
      desc: "标记哪些可直接保留、哪些需深化、哪些关键领域完全空白",
      color: theme.primary
    },
    {
      num: "02",
      title: "突破性方向",
      desc: '通过结构化方法找到的，有明确理由相信「做了会有真正不同」',
      color: theme.accent
    },
    {
      num: "03",
      title: "方案组合",
      desc: "包含保留的常规方案和新突破方向，有先后顺序与可行性路径",
      color: theme.secondary
    },
    {
      num: "04",
      title: "依据说明",
      desc: '能说清楚「这些方案为什么会有效」，而不只是「感觉不错」',
      color: theme.primary
    }
  ];

  const startX = 0.5;
  const cardW = 2.18;
  const cardH = 2.6;
  const gap = 0.13;
  const cardY = 2.1;

  items.forEach((item, i) => {
    const x = startX + i * (cardW + gap);

    // 卡片底
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });

    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: 0.4,
      fill: { color: item.color }, line: { type: 'none' }
    });

    // 编号（白色在色条上）
    slide.addText(item.num, {
      x: x, y: cardY, w: cardW, h: 0.4,
      fontSize: 16, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 圆点装饰
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW / 2 - 0.18, y: cardY + 0.6, w: 0.36, h: 0.36,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 1.5 }
    });
    slide.addText("●", {
      x: x + cardW / 2 - 0.18, y: cardY + 0.6, w: 0.36, h: 0.36,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 标题
    slide.addText(item.title, {
      x: x + 0.15, y: cardY + 1.1, w: cardW - 0.3, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + cardW / 2 - 0.2, y: cardY + 1.6, w: 0.4, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    // 描述
    slide.addText(item.desc, {
      x: x + 0.18, y: cardY + 1.75, w: cardW - 0.36, h: 0.75,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addText('可能最重要的是 —— 你能说出「为什么有效」，而不只是「感觉不错」。', {
    x: 0.5, y: 4.9, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "07", "导言与课程地图");
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
  pres.writeFile({ fileName: "07_导言_你会产出什么_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
