// 页 116: 反转一 目标反转 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 116,
  title: '反转一 目标反转'
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
  slide.addText("反转一  ·  GOAL REVERSAL", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("目标反转", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("把\"我们怎么解决 X\"，反转成\"我们怎么让 X 更严重\"", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 反转示例
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.1, w: 0.08, h: 0.85,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("正向", {
    x: 0.75, y: 2.2, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("\"我们怎么解决 X 问题？\"", {
    x: 0.75, y: 2.5, w: 4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("→", {
    x: 4.7, y: 2.4, w: 0.6, h: 0.4,
    fontSize: 24, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("反向", {
    x: 5.3, y: 2.2, w: 1.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("\"我们怎么让 X 问题更严重？\"", {
    x: 5.3, y: 2.5, w: 4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 两步操作
  const steps = [
    {
      x: 0.5,
      n: "01",
      title: "检查当前实际",
      desc: "对照列出的\"让问题更严重的做法\"，看你们当前正在做哪些。\n这种发现非常有价值 —— 它往往揭示了当前努力\"事倍功半\"的原因。"
    },
    {
      x: 5.1,
      n: "02",
      title: "反转成改善方向",
      desc: "把\"让问题更严重\"的做法反过来，就是改善的方向。\n反转之后的方向，有时候会指向一些在正向思考里完全不会出现的行动。"
    }
  ];

  steps.forEach((s) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 3.15, w: 4.4, h: 1.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 3.15, w: 4.4, h: 0.5,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.n, {
      x: s.x + 0.2, y: 3.15, w: 0.6, h: 0.5,
      fontSize: 14, fontFace: "Georgia",
      color: theme.light, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.title, {
      x: s.x + 0.8, y: 3.15, w: 3.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.desc, {
      x: s.x + 0.2, y: 3.75, w: 4, h: 1.25,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "116", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "116_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
