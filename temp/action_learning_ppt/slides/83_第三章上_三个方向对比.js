// 页 83: 第三章上 - 三个方向对比（表格）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 83,
  title: '三个方向对比'
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
  slide.addText("整合视图  /  三个方向对比", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("三个重构方向对比", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格
  const headerStyle = { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontFace: "Microsoft YaHei", fontSize: 13, valign: "middle", align: "center" };

  const tableRows = [
    [
      { text: "方向", options: headerStyle },
      { text: "核心动作", options: headerStyle },
      { text: "追问的逻辑", options: headerStyle },
      { text: "工具", options: headerStyle }
    ],
    [
      { text: "往深走", options: { bold: true, color: theme.primary, fontFace: "Microsoft YaHei", fontSize: 14, valign: "middle", align: "center", fill: { color: "FFFFFF" } } },
      { text: "从表象到本质", options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "left", fill: { color: "FFFFFF" } } },
      { text: "「为什么这个问题会产生？原因背后是什么原因？」", options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 11, valign: "middle", align: "left", fill: { color: "FFFFFF" } } },
      { text: "五个为什么", options: { color: theme.accent, bold: true, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "center", fill: { color: "FFFFFF" } } }
    ],
    [
      { text: "往上走", options: { bold: true, color: theme.accent, fontFace: "Microsoft YaHei", fontSize: 14, valign: "middle", align: "center", fill: { color: "FFFFFF" } } },
      { text: "从解决问题到消除问题", options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "left", fill: { color: "FFFFFF" } } },
      { text: "「做这件事最终是为了什么更高层次的目标？」", options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 11, valign: "middle", align: "left", fill: { color: "FFFFFF" } } },
      { text: "目标层级拆解", options: { color: theme.accent, bold: true, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "center", fill: { color: "FFFFFF" } } }
    ],
    [
      { text: "横向移动", options: { bold: true, color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 14, valign: "middle", align: "center", fill: { color: "FFFFFF" } } },
      { text: "改变对象或切入点", options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "left", fill: { color: "FFFFFF" } } },
      { text: "「改变「谁在做」或在哪个环节，目标还能达成吗？」", options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 11, valign: "middle", align: "left", fill: { color: "FFFFFF" } } },
      { text: "对象/环节置换", options: { color: theme.accent, bold: true, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "center", fill: { color: "FFFFFF" } } }
    ]
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.55, w: 9, h: 3.0,
    colW: [1.3, 2.2, 3.6, 1.9],
    rowH: 0.6,
    border: { type: "solid", pt: 0.5, color: theme.light },
    fontFace: "Microsoft YaHei"
  });

  // 底部提示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("三个方向都改变的是问题的切入位置，目标本身没变", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "83", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "83_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
