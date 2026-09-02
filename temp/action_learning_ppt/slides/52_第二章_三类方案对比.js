// 52_第二章_三类方案对比 - 表格
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 52,
  title: '三类方案对比'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("OVERVIEW  /  整合视图", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("三类方案对比表", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格
  const tableData = [
    [
      { text: "类型", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 14 } },
      { text: "判定", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 14 } },
      { text: "处理方式", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 14 } },
      { text: "下一步", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 14 } }
    ],
    [
      { text: "第一类", options: { bold: true, color: theme.primary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } },
      { text: "有效、依据扎实", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "直接保留", options: { bold: true, color: theme.accent, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } },
      { text: "推进执行", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } }
    ],
    [
      { text: "第二类", options: { bold: true, color: theme.primary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13, fill: { color: "F5F0EC" } } },
      { text: "方向对，深度不足", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12, fill: { color: "F5F0EC" } } },
      { text: "在原方向上深化", options: { bold: true, color: theme.accent, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13, fill: { color: "F5F0EC" } } },
      { text: "问题重构 / 假设挑战", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12, fill: { color: "F5F0EC" } } }
    ],
    [
      { text: "第三类", options: { bold: true, color: theme.primary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } },
      { text: "关键突破口是空白", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "结构化创新填补", options: { bold: true, color: theme.accent, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } },
      { text: "分清原因，选方法", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } }
    ]
  ];

  slide.addTable(tableData, {
    x: 0.5, y: 1.7, w: 9, h: 2.6,
    colW: [1.4, 3, 2.2, 2.4],
    rowH: [0.5, 0.7, 0.7, 0.7],
    border: { type: "solid", color: theme.light, pt: 1 }
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.55, w: 0.06, h: 0.5,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("分类结果决定你在第三章里应该重点用哪些方法、往哪个方向发力。", {
    x: 0.7, y: 4.55, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "52", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "52_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
