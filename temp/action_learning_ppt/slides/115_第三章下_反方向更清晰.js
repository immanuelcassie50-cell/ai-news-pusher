// 页 115: 为什么反方向更清晰 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 115,
  title: '反方向更清晰'
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
  slide.addText("逆向思维  ·  认知事实", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("为什么反方向更清晰", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("不是\"反正统\"，而是利用了一个认知事实", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 中央大引述
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 9, h: 1.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("我们对\"什么会让事情更糟\"的判断，", {
    x: 0.7, y: 2.3, w: 8.6, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("往往比对\"什么会让事情更好\"的判断更清晰、更具体。", {
    x: 0.7, y: 2.8, w: 8.6, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 两个支撑
  const supports = [
    {
      x: 0.5,
      title: "更具体",
      desc: "列出让问题更严重的做法，思路是确定性的 —— 而\"怎么改善\"往往模糊"
    },
    {
      x: 5.1,
      title: "更有行动力",
      desc: "负面清单里每一条都指向一个明确的行为，反转之后立刻变成可执行的改善方向"
    }
  ];

  supports.forEach((s) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 3.8, w: 4.4, h: 1.3,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 3.8, w: 0.08, h: 1.3,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(s.title, {
      x: s.x + 0.2, y: 3.9, w: 4, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.desc, {
      x: s.x + 0.2, y: 4.35, w: 4, h: 0.75,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "115", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "115_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
