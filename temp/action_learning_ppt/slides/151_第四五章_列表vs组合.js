// 页 151: 对比 - 列表 vs 组合
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 151,
  title: '列表 vs 组合'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("核心区别  /  Difference", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("列表 ≠ 组合", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格化对比
  const headers = ["维度", "列表", "组合"];
  const colWidths = [2.0, 3.5, 3.5];
  const startX = 0.5;
  let cx = startX;

  // 表头
  headers.forEach((h, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 1.7, w: colWidths[i], h: 0.5,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(h, {
      x: cx, y: 1.7, w: colWidths[i], h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    cx += colWidths[i];
  });

  // 行数据
  const rows = [
    ["方案关系", "相互独立", "互相依赖"],
    ["时序安排", "无 / 同时推进", "有先后顺序"],
    ["合力方向", "各自指向不同", "指向同一目标"],
    ["变更风险", "改了这里坏了那里", "整体协同演进"]
  ];

  rows.forEach((row, r) => {
    cx = startX;
    row.forEach((v, c) => {
      const isLast = c === 2;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: cx, y: 2.2 + r * 0.55, w: colWidths[c], h: 0.55,
        fill: { color: c === 0 ? theme.bg : (isLast ? "FFFFFF" : "FFFFFF") },
        line: { color: theme.light, width: 0.5 }
      });
      slide.addText(v, {
        x: cx, y: 2.2 + r * 0.55, w: colWidths[c], h: 0.55,
        fontSize: c === 0 ? 12 : 13,
        fontFace: "Microsoft YaHei",
        color: c === 0 ? theme.accent : (isLast ? theme.primary : theme.secondary),
        bold: c === 0 || isLast,
        align: c === 0 ? "left" : "center",
        valign: "middle",
        margin: c === 0 ? 8 : 0
      });
      cx += colWidths[c];
    });
  });

  // 底部金句
  slide.addText("把方案放在一起做三个一致性检查 —— 把列表升级为组合。", {
    x: 0.5, y: 4.65, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "151", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "151_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
