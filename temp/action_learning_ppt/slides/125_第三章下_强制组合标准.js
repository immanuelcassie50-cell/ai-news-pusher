// 页 125: 强制组合标准 - 3个标准
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 125,
  title: '强制组合的三个标准'
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
  slide.addText("强制组合  ·  三个判断标准", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("判断一个组合是否有价值", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("任意取两个来自完全不同类别的方案，强制问：1+1>2？", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个标准
  const standards = [
    {
      n: "01",
      title: "障碍消除",
      question: "组合后，有没有某个方案的障碍被另一个方案的推进消除了？",
      desc: "方案 A 创造了方案 B 成功的条件"
    },
    {
      n: "02",
      title: "效果持续",
      question: "组合后，有没有某个方案的效果变得更可持续了？",
      desc: "方案 B 让方案 A 的成果不会随着时间衰减"
    },
    {
      n: "03",
      title: "路径合并",
      question: "组合之后，是否能同时解决两个原本需要分别处理的子问题？",
      desc: "合并了解决路径"
    }
  ];

  standards.forEach((s, i) => {
    const y = 2.05 + i * 1.0;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.9,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 左侧编号色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.85, h: 0.9,
      fill: { color: i === 1 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.n, {
      x: 0.5, y: y, w: 0.85, h: 0.9,
      fontSize: 22, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(s.title, {
      x: 1.55, y: y + 0.05, w: 7.8, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 问题
    slide.addText(s.question, {
      x: 1.55, y: y + 0.32, w: 7.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(s.desc, {
      x: 1.55, y: y + 0.6, w: 7.8, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "125", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "125_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
