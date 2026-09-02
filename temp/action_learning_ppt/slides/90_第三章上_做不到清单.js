// 页 90: 第三章上 - 做不到清单（解释）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '做不到清单 - 隐形的「不可能清单」'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("方法二  /  隐形的「不可能清单」", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("每个组织里都有的「不可能清单」", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("这些判断在日常工作中运作得如此顺畅，以至于大家把它们当成了事实", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 6 个常见「做不到」图标行
  const items = [
    { icon: "1", text: "某部门", sub: "不会配合" },
    { icon: "2", text: "资源", sub: "争取不到" },
    { icon: "3", text: "上面", sub: "不会批" },
    { icon: "4", text: "这个系统", sub: "改不了" },
    { icon: "5", text: "合规要求", sub: "不允许" },
    { icon: "6", text: "时间框架", sub: "来不及" }
  ];

  items.forEach((it, i) => {
    const xPos = 0.5 + i * 1.55;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 2.0, w: 1.45, h: 1.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // 顶部圆
    slide.addShape(pres.shapes.OVAL, {
      x: xPos + 0.5, y: 2.2, w: 0.45, h: 0.45,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(it.icon, {
      x: xPos + 0.5, y: 2.2, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 文字
    slide.addText(it.text, {
      x: xPos + 0.05, y: 2.75, w: 1.35, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(it.sub, {
      x: xPos + 0.05, y: 3.05, w: 1.35, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 底部说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.85, w: 9, h: 1.1,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  slide.addText("假设挑战要做的事：", {
    x: 0.7, y: 3.95, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("把这些隐含的假设显性化，", {
    x: 0.7, y: 4.25, w: 8.6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("然后系统地问：哪些是真的不能动？哪些只是看起来不能动？", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "90", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "90_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
