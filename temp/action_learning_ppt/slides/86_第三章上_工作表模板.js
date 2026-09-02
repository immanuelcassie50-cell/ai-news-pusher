// 页 86: 第三章上 - 工作表模板（表格）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 86,
  title: '问题重构工作表模板'
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
  slide.addText("练习  /  问题重构工作表", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("问题重构工作表", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格 - 工作表模板
  const headerStyle = { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontFace: "Microsoft YaHei", fontSize: 12, valign: "middle", align: "left" };
  const cellBase = { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 10, valign: "middle", align: "left", fill: { color: "FFFFFF" } };
  const labelStyle = { bold: true, color: theme.accent, fontFace: "Microsoft YaHei", fontSize: 11, valign: "middle", align: "left", fill: { color: "FFFFFF" } };

  const tableRows = [
    [
      { text: "模块", options: headerStyle },
      { text: "填写内容", options: headerStyle }
    ],
    [
      { text: "我的原始问题陈述", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "往深走  /  第一层为什么", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "往深走  /  第二层", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "往深走  /  更深一层（可选）", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "往上走  /  最终目标", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "往上走  /  从目标出发的问题", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "横向移动  /  改变对象/环节", options: labelStyle },
      { text: "_______________________________________", options: cellBase }
    ],
    [
      { text: "主问题陈述（用于方案探索）", options: { ...labelStyle, color: theme.primary } },
      { text: "_______________________________________", options: { ...cellBase, bold: true } }
    ]
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.55, w: 9, h: 3.5,
    colW: [3.2, 5.8],
    rowH: 0.39,
    border: { type: "solid", pt: 0.5, color: theme.light },
    fontFace: "Microsoft YaHei"
  });

  // 底部提示
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText("完成 9 个模块后，你会得到经过三个方向重构的新问题陈述", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "86", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "86_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
