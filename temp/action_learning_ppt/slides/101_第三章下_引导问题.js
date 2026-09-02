// 页 101: 引导问题 - 4个问题
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 101,
  title: '陌生人审计 引导问题'
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
  slide.addText("陌生人审计  ·  四个引导问题", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("用这四个问题引导你的记录", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("每一个都值得认真想一想", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 四个问题
  const questions = [
    {
      n: "Q1",
      q: "一个完全不懂这个行业的人，走进来之后，会对哪些流程环节感到困惑？"
    },
    {
      n: "Q2",
      q: "哪些步骤，当你用\"我来解释给你听\"的方式说出来时，听起来其实有点荒谬？"
    },
    {
      n: "Q3",
      q: "如果重新设计，从零开始，有哪些当前的做法你不会保留？"
    },
    {
      n: "Q4",
      q: "哪些问题，外部人会立刻问出来，而内部人早就停止问了？"
    }
  ];

  questions.forEach((q, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 2.0 + row * 1.5;

    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.3,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 左侧编号色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.6, h: 1.3,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    // 编号
    slide.addText(q.n, {
      x: x, y: y, w: 0.6, h: 1.3,
      fontSize: 18, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 问题
    slide.addText(q.q, {
      x: x + 0.75, y: y + 0.1, w: 3.55, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "101", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "101_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
