// 页 157: 列表 - 能说清楚为什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 157,
  title: '能说清楚为什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("能说清楚  /  Clarity", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("一份好的方案组合，「暂时不做」与「要做」同样重要", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 大字开篇
  slide.addText("你能说清楚 ——", {
    x: 0.5, y: 1.55, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个能说清楚
  const points = [
    {
      num: "1",
      label: "每条方案为什么进来",
      body: "针对哪个影响因素 / 解决什么层次 / 有什么依据"
    },
    {
      num: "2",
      label: "每条方案为什么这时做",
      body: "哪些先 / 哪些后 / 哪些需要什么前提条件"
    },
    {
      num: "3",
      label: "哪些暂时不做 + 什么情况会重新考虑",
      body: "战略选择，不是失败 —— 记录条件的变化"
    }
  ];

  points.forEach((p, i) => {
    const y = 2.2 + i * 0.85;
    // 大数字
    slide.addText(p.num, {
      x: 0.5, y: y, w: 1.0, h: 0.7,
      fontSize: 60, fontFace: "Georgia",
      color: theme.light, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标签
    slide.addText(p.label, {
      x: 1.6, y: y - 0.05, w: 7.9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(p.body, {
      x: 1.6, y: y + 0.32, w: 7.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("最重要的是 —— 这组方案和你的分析之间的联系。", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "157", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "157_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
