// 页 34: 表格 - 诊断记录表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 34,
  title: '第一章 诊断记录表'
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
  slide.addText("工作表模板  /  TEMPLATE", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("诊断记录表", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("对每条方案用 4 个问题打勾 —— 一条方案可以属于多种类型。", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格
  const tableX = 0.5;
  const tableY = 1.85;
  const colW = [3.6, 1.35, 1.35, 1.35, 1.35];
  const rowH = 0.45;

  // 表头
  const headers = ["方案简述", "天花板一", "天花板二", "天花板三", "天花板四"];
  headers.forEach((h, i) => {
    const x = tableX + colW.slice(0, i).reduce((a, b) => a + b, 0);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: tableY, w: colW[i], h: rowH,
      fill: { color: theme.primary }, line: { color: "FFFFFF", width: 1 }
    });
    slide.addText(h, {
      x: x, y: tableY, w: colW[i], h: rowH,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 示例行
  const exampleRow = ["（示例）增设周末客服班次", "✓", "", "✓", "✓"];
  exampleRow.forEach((c, i) => {
    const x = tableX + colW.slice(0, i).reduce((a, b) => a + b, 0);
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: tableY + rowH, w: colW[i], h: rowH,
      fill: { color: theme.bg }, line: { color: theme.light, width: 1 }
    });
    slide.addText(c, {
      x: x, y: tableY + rowH, w: colW[i], h: rowH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: i === 0 ? theme.secondary : theme.accent,
      bold: i > 0,
      italic: i === 0,
      align: i === 0 ? "left" : "center", valign: "middle",
      margin: i === 0 ? 5 : 0
    });
  });

  // 空行 (5行)
  for (let r = 0; r < 5; r++) {
    const y = tableY + (r + 2) * rowH;
    for (let i = 0; i < 5; i++) {
      const x = tableX + colW.slice(0, i).reduce((a, b) => a + b, 0);
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: y, w: colW[i], h: rowH,
        fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
      });
    }
  }

  // 表格外框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: tableX, y: tableY, w: 9, h: rowH * 7,
    fill: { type: 'none' }, line: { color: theme.primary, width: 1 }
  });

  // 底部提醒
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 0.06, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("示例解读见下一页 —— 标注三个一点也不丢人，这恰恰说明这个方向需要深化或补充。", {
    x: 0.8, y: 5.05, w: 8.7, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "34", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "34_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
