// 54_第二章_方案分类表 - 表格模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 54,
  title: '方案分类表（模板）'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("TEMPLATE  /  分类表", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("方案分类表 · 模板", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 提示条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("📌  逐条方案判断类型，填入下表；第三类要写明具体的空白是什么。", {
    x: 0.7, y: 1.55, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 分类表
  const tableData = [
    [
      { text: "方案简述", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "分类\n(一/二/三)", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "判断理由\n(方向是否对？深度是否够？能否持续？)", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } },
      { text: "下一步处理", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 } }
    ],
    [
      { text: "（示例）增设周末客服班次", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "二", options: { bold: true, color: theme.accent, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12, fill: { color: "F5F0EC" } } },
      { text: "方向对，提升响应速度，但未触及投诉产生根源，停止则衰减", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 10, fill: { color: "F5F0EC" } } },
      { text: "追问投诉主要来源，深化至根因", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 10, fill: { color: "F5F0EC" } } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11 } }
    ],
    [
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } },
      { text: "", options: { color: theme.secondary, align: "left", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 11, fill: { color: "F5F0EC" } } }
    ]
  ];

  slide.addTable(tableData, {
    x: 0.5, y: 2.05, w: 9, h: 2.9,
    colW: [2.2, 0.8, 3.5, 2.5],
    rowH: [0.5, 0.55, 0.45, 0.45, 0.45, 0.45],
    border: { type: "solid", color: theme.light, pt: 1 }
  });

  // 底部提示
  slide.addText("带 * 的空格为示例，可按自己的方案数复制。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "54", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "54_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
