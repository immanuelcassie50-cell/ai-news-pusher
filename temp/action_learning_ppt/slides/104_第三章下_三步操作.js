// 页 104: 三步操作 - 流程
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 104,
  title: '跨行业迁移 三步操作'
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
  slide.addText("跨行业迁移  ·  三步操作", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("升级版跨行业迁移的三步", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("做好第一步，是整个跨行业借鉴能否有效的关键", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三步流程
  const steps = [
    {
      n: "1",
      title: "抽象化问题",
      desc: "把行业特定问题提炼为通用表述，去掉所有行业词汇，只保留本质结构。",
      tag: "关键步骤"
    },
    {
      n: "2",
      title: "寻找场景",
      desc: "哪些行业或领域在解决类似结构的问题？找 2~3 个\"结构相似\"的场景。",
      tag: ""
    },
    {
      n: "3",
      title: "提取原理",
      desc: "不是复制方案，而是问\"它为什么有效\"，然后在自己的场景里重建。",
      tag: ""
    }
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 3.15;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.15, w: 2.9, h: 2.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.15, w: 2.9, h: 0.08,
      fill: { color: i === 0 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    // 大数字
    slide.addText("STEP " + s.n, {
      x: x + 0.2, y: 2.3, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Georgia",
      color: theme.accent, charSpacing: 6, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 大数字
    slide.addText(s.n, {
      x: x + 0.2, y: 2.55, w: 2.5, h: 0.7,
      fontSize: 60, fontFace: "Georgia",
      color: i === 0 ? theme.accent : theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(s.title, {
      x: x + 0.2, y: 3.35, w: 2.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(s.desc, {
      x: x + 0.2, y: 3.8, w: 2.5, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 关键标记
  slide.addText("关键步骤 —— 抽象化做得不到位，后面找到的外部案例就无法真正迁移过来", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 连接箭头
  for (let i = 0; i < 2; i++) {
    const x = 3.4 + i * 3.15;
    slide.addText("→", {
      x: x, y: 3.2, w: 0.3, h: 0.4,
      fontSize: 20, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  }

  addFooter(slide, pres, theme, "104", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "104_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
