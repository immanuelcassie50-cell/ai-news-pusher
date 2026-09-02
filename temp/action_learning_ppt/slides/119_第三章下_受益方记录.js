// 页 119: 受益方记录 - 表格 模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 119,
  title: '受益方反转 记录表'
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
  slide.addText("受益方反转  ·  记录模板", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("受益方反转记录", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("谁可能在无意中从\"问题持续存在\"的状态中获益？", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 记录表格
  const rows = [
    [
      { text: "姓名 / 角色", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "获益方式（哪怕很间接）", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "是否在利益相关方分析里？", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "处理策略", options: { bold: true, color: "FFFFFF", fill: { color: theme.primary }, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } }
    ],
    [
      { text: " ", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: " ", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "□ 是   □ 否", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "□ 纳入  □ 绕过", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } }
    ],
    [
      { text: " ", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } },
      { text: " ", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } },
      { text: "□ 是   □ 否", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } },
      { text: "□ 纳入  □ 绕过", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle", fill: { color: "FAF7F4" } } }
    ],
    [
      { text: " ", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: " ", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "□ 是   □ 否", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } },
      { text: "□ 纳入  □ 绕过", options: { color: theme.secondary, fontSize: 11, fontFace: "Microsoft YaHei", align: "left", valign: "middle" } }
    ]
  ];

  slide.addTable(rows, {
    x: 0.5, y: 2.05, w: 9, h: 2.6,
    colW: [1.6, 3.6, 1.8, 2.0],
    rowH: [0.5, 0.7, 0.7, 0.7],
    border: { type: "solid", pt: 1, color: theme.light },
    fontFace: "Microsoft YaHei"
  });

  // 底部注释
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 0.04, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("具体想法：针对这个人的策略思路 —— 把他/她的利益也纳入方案设计，或在推进策略上绕过他/她的影响范围。", {
    x: 0.7, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "119", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "119_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
