// 页 122: 练习 目标反转 - 解释+模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 122,
  title: '练习 目标反转'
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
  slide.addText("练习  ·  对你的课题应用目标反转", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("练习：目标反转", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("建议从目标反转开始 —— 它最容易上手，通常也最快出结果", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 模板结构
  const sections = [
    {
      y: 2.0,
      title: "我的目标问题（正向）",
      lines: ["____________________________________________________"]
    },
    {
      y: 2.65,
      title: "反转成：怎么让这个问题更严重？",
      lines: [
        "让问题更严重的做法（尽量多列，不加评判）：",
        "1. ____________________________________________________",
        "2. ____________________________________________________",
        "3. ____________________________________________________",
        "4. ____________________________________________________",
        "5. ____________________________________________________"
      ]
    }
  ];

  sections.forEach((s) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: s.y, w: 9, h: s.y === 2.0 ? 0.6 : 0.65 * s.lines.length + 0.1
    });
  });

  // 重写 - 使用更精确的高度
  // 第一个section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 9, h: 0.6,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 0.08, h: 0.6,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("我的目标问题（正向）", {
    x: 0.7, y: 2.0, w: 8.7, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, charSpacing: 2, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("____________________________________________________________", {
    x: 0.7, y: 2.25, w: 8.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 第二个section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.7, w: 9, h: 2.3,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.7, w: 0.08, h: 2.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("反转成：怎么让这个问题更严重？", {
    x: 0.7, y: 2.75, w: 8.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 2, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 列表
  slide.addText("让问题更严重的做法（尽量多列，不加评判）：", {
    x: 0.7, y: 3.05, w: 8.7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  for (let i = 1; i <= 5; i++) {
    slide.addText(`${i}. ` + "____________________________________________________".padEnd(60, '_'), {
      x: 0.7, y: 3.35 + (i - 1) * 0.3, w: 8.7, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  }

  addFooter(slide, pres, theme, "122", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "122_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
