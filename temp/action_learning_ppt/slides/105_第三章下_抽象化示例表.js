// 页 105: 抽象化示例表 - 表格 4个例子
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 105,
  title: '抽象化示例表'
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
  slide.addText("第一步  ·  抽象化示例", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("从具体到通用 —— 四个例子", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("去掉所有行业特定的词汇，只保留问题的本质结构", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 真实表格
  const rows = [
    [
      { text: "原始的具体问题", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontSize: 12, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "抽象化后的通用问题", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontSize: 12, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } }
    ],
    [
      { text: "如何在高峰期提升轨道交通的运载效率", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "如何在固定基础设施容量下，在需求峰值时期最大化吞吐量", options: { color: theme.primary, bold: true, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } }
    ],
    [
      { text: "如何提高员工对新系统的使用率", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } },
      { text: "如何推动大规模人群采纳一种对他们来说陌生的新行为", options: { color: theme.primary, bold: true, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } }
    ],
    [
      { text: "如何降低客服人员处理复杂问题的出错率", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "如何在高认知负荷的决策场景中系统性地减少人为错误", options: { color: theme.primary, bold: true, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } }
    ],
    [
      { text: "如何减少设备意外停机导致的生产损失", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } },
      { text: "如何提前识别系统故障信号并在失效发生前介入", options: { color: theme.primary, bold: true, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } }
    ]
  ];

  slide.addTable(rows, {
    x: 0.5, y: 2.05, w: 9, h: 2.85,
    colW: [3.6, 5.4],
    rowH: [0.5, 0.58, 0.58, 0.58, 0.58],
    border: { type: "solid", pt: 1, color: theme.light },
    fontFace: "Microsoft YaHei"
  });

  // 底部注释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 0.04, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("做好这一步，是整个跨行业借鉴能否有效的关键。", {
    x: 0.7, y: 4.95, w: 8.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "105", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "105_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
