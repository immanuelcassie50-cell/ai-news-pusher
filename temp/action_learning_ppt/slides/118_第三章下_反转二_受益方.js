// 页 118: 反转二 受益方 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 118,
  title: '反转二 受益方反转'
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
  slide.addText("反转二  ·  BENEFICIARY REVERSAL", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("受益方反转", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("在当前这个有问题的状态里，谁在获益？", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("哪怕是无意识地、间接地获益 —— 这个人往往是你推进方案路上真正的阻力来源。", {
    x: 0.7, y: 2.1, w: 8.6, h: 0.85,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 解释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.15, w: 9, h: 1.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.15, w: 0.08, h: 1.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("这个阻力在常规的利益相关方分析里很容易被忽视 —— 他不会公开反对，而是以各种方式让推进变慢。", {
    x: 0.75, y: 3.25, w: 8.6, h: 0.85,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 两种处理方式
  const strategies = [
    {
      x: 0.5,
      n: "01",
      title: "把他的利益也纳入方案",
      desc: "找到一个对他也有利的解法方式"
    },
    {
      x: 5.1,
      n: "02",
      title: "在策略设计上绕过他",
      desc: "在推进路径上规避他的影响范围"
    }
  ];

  strategies.forEach((s) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 4.35, w: 4.4, h: 0.75,
      fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
    });
    slide.addText(s.n, {
      x: s.x + 0.2, y: 4.35, w: 0.5, h: 0.75,
      fontSize: 16, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.title, {
      x: s.x + 0.7, y: 4.4, w: 3.6, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.desc, {
      x: s.x + 0.7, y: 4.7, w: 3.6, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "118", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "118_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
