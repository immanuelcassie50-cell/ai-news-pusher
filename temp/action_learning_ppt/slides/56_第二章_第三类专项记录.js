// 56_第二章_第三类专项记录 - 表格模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 56,
  title: '第三类覆盖空白专项记录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("TEMPLATE  /  专项记录", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第三类覆盖空白 · 专项记录", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 提示条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("对事分析中明确标出的突破口，在现有方案里完全没有覆盖的，单独列在这里。", {
    x: 0.7, y: 1.55, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 表格
  const tableData = [
    [
      { text: "未覆盖的关键突破口", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } },
      { text: "为什么没有对应方案（原因）", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } },
      { text: "需要通过什么方法探索", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 13 } }
    ],
    [
      { text: "如：产品使用门槛过高导致用户流失", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "感觉做不到 · 不敢挑战", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "假设挑战：验证『做不到』是否成立", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } }
    ]
  ];

  slide.addTable(tableData, {
    x: 0.5, y: 2.05, w: 9, h: 2.95,
    colW: [3.2, 3, 2.8],
    rowH: [0.5, 0.7, 0.6, 0.6, 0.55],
    border: { type: "solid", color: theme.light, pt: 1 }
  });

  // 底部强调
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.07, w: 0.06, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("这是第三章的工作重心。", {
    x: 0.7, y: 5.05, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "56", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "56_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
