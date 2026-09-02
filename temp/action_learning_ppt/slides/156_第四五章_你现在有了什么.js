// 页 156: 解释 - 你现在有了什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 156,
  title: '你现在有了什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("写在最后  /  Closing", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("你现在有了什么", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引述开篇
  slide.addText("完成这套文档的工作之后，你有了一份不只是「事项清单」的方案组合。", {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 四个能力卡片 2x2
  const abilities = [
    {
      num: "01",
      title: "说清楚为什么进来",
      body: "它针对的是哪个影响因素，解决的是什么层次的问题，有什么依据支撑它会有效。"
    },
    {
      num: "02",
      title: "说清楚为什么这时做",
      body: "哪些要先做，哪些要后做，哪些需要某些前提条件 —— 顺序背后的逻辑。"
    },
    {
      num: "03",
      title: "说清楚哪些暂时不做",
      body: "以及什么情况下会重新考虑 —— 这不是失败，而是战略选择。"
    },
    {
      num: "04",
      title: "说清楚这组方案与你的分析之间的联系",
      body: "不是头脑风暴产出的感觉不错的想法，而是从对事分析的突破口出发。"
    }
  ];

  abilities.forEach((a, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6;
    const y = 2.25 + row * 1.35;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.2,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 数字
    slide.addText(a.num, {
      x: x + 0.2, y: y + 0.1, w: 0.8, h: 0.5,
      fontSize: 22, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(a.title, {
      x: x + 1.0, y: y + 0.1, w: 3.3, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(a.body, {
      x: x + 0.2, y: y + 0.55, w: 4.0, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部
  slide.addText("—— 这就是「做了会真正改变局面」的方案组合。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "156", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "156_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
