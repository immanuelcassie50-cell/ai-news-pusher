// 页 65: 第三章上 - 快速自检（表格）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '快速自检 - 5 个状态'
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
  slide.addText("开始之前  /  1 分钟自检", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("先做一个快速自检", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("勾选符合你当前状态的选项。勾选越多，越说明问题出在思维框架本身。", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 表格数据
  const tableRows = [
    [
      { text: "序", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "状态描述", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "left", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "符合？", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", fontFace: "Microsoft YaHei", fontSize: 12 } }
    ]
  ];

  const items = [
    "我手里有很多方案，但感觉它们「都差不多」，想不出真正不同的方向",
    "我能想到的解法，好像都是这个行业里已经有人在做的事",
    "有一些方向感觉很关键，但因为「做不到」，所以没有进入方案清单",
    "我的方案执行下去会有效果，但感觉只是短期改善，无法改变根本状况",
    "我们在这个问题上已经讨论了很久，大家的想法越来越趋同"
  ];

  items.forEach((it, i) => {
    tableRows.push([
      { text: String(i + 1).padStart(2, "0"), options: { color: theme.accent, bold: true, fontFace: "Georgia", fontSize: 14, align: "center", fill: { color: "FFFFFF" } } },
      { text: it, options: { color: theme.secondary, fontFace: "Microsoft YaHei", fontSize: 12, align: "left", valign: "middle", fill: { color: "FFFFFF" } } },
      { text: "□", options: { color: theme.primary, bold: true, fontFace: "Georgia", fontSize: 22, align: "center", valign: "middle", fill: { color: "FFFFFF" } } }
    ]);
  });

  slide.addTable(tableRows, {
    x: 0.5, y: 1.85, w: 9, h: 2.85,
    colW: [0.8, 7.0, 1.2],
    rowH: 0.5,
    border: { type: "solid", pt: 0.5, color: theme.light },
    fontFace: "Microsoft YaHei"
  });

  // 底部小色块
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 0.3, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 底部说明
  slide.addText("所有方案都来自同一套思考方式，自然也都被同一套假设所约束。", {
    x: 0.9, y: 4.85, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "65", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "65_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
