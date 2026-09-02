// 页 107: 第三步 提取原理 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 107,
  title: '第三步 提取原理'
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
  slide.addText("跨行业迁移  ·  STEP 03", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第三步 · 提取原理", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("不是复制方案，而是问\"它为什么有效\"", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个核心问题
  const questions = [
    {
      n: "01",
      title: "为什么有效？",
      desc: "提取这个外部方案的底层逻辑 —— 它背后的作用原理是什么"
    },
    {
      n: "02",
      title: "在我的场景里是否成立？",
      desc: "原理是否依赖于某些我这里没有的先决条件"
    },
    {
      n: "03",
      title: "如何在我的资源约束下重建？",
      desc: "用我的资源和约束条件，实现同样逻辑的具体路径"
    }
  ];

  questions.forEach((q, i) => {
    const x = 0.5 + i * 3.15;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.15, w: 2.9, h: 2.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.15, w: 2.9, h: 0.08,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(q.n, {
      x: x + 0.2, y: 2.3, w: 2.5, h: 0.7,
      fontSize: 40, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(q.title, {
      x: x + 0.2, y: 3.05, w: 2.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: 3.6, w: 0.3, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(q.desc, {
      x: x + 0.2, y: 3.7, w: 2.5, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("从这里产出的不是\"直接抄方案\"，而是\"从原理出发，找到在自己场景里实现同样逻辑的具体路径\"。", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "107", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "107_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
