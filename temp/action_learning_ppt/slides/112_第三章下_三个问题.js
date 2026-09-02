// 页 112: 三个问题 - 列表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 112,
  title: '极端用户 · 三个问题'
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
  slide.addText("极端用户  ·  三个引导问题", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("找到你的极端用户", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("用这三个问题找出你课题里被忽视的群体", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个问题
  const questions = [
    {
      n: "Q1",
      title: "谁是体验最差的群体？",
      desc: "他们面对的困境是其他人感受不到的，还是其他人也有但程度更轻？"
    },
    {
      n: "Q2",
      title: "当前方案为谁设计？",
      desc: "谁被完全排除在设计考量之外？"
    },
    {
      n: "Q3",
      title: "满足他们会顺带解决什么？",
      desc: "有没有一个群体的需求被满足后，会顺带解决其他大多数人的某个隐性痛点？"
    }
  ];

  questions.forEach((q, i) => {
    const y = 2.05 + i * 1.05;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 左侧编号色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.85, h: 0.95,
      fill: { color: i === 1 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    // 编号
    slide.addText(q.n, {
      x: 0.5, y: y, w: 0.85, h: 0.95,
      fontSize: 24, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(q.title, {
      x: 1.55, y: y + 0.1, w: 7.8, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(q.desc, {
      x: 1.55, y: y + 0.5, w: 7.8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "112", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "112_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
