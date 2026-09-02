// 页 31: 表格 - 四种天花板对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '第一章 四种天花板对比'
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
  slide.addText("整合视图  /  COMPARISON", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("四种天花板的整合视图", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格 - 4列
  const headers = ["", "天花板一", "天花板二", "天花板三", "天花板四"];
  const colWidths = [0.05, 2.2, 2.2, 2.2, 2.2];
  const tableX = 0.5;
  const headerY = 1.55;
  const rowH = 0.5;

  // 表头
  headers.forEach((h, i) => {
    const x = tableX + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
    if (i > 0) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: headerY, w: colWidths[i], h: 0.5,
        fill: { color: theme.primary }, line: { color: theme.bg, width: 1 }
      });
      slide.addText(h, {
        x: x, y: headerY, w: colWidths[i], h: 0.5,
        fontSize: 13, fontFace: "Microsoft YaHei",
        color: "FFFFFF", bold: true,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 行 1 - 来源
  const r1Y = headerY + 0.5;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: tableX, y: r1Y, w: colWidths[0], h: rowH,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  const r1 = ["", "问题定义范围", "被假设限制", "熟悉的解法空间", "点方案未触系统"];
  r1.forEach((c, i) => {
    if (i > 0) {
      const x = tableX + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
      slide.addText(c, {
        x: x, y: r1Y, w: colWidths[i], h: rowH,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: true,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 行 2 - 特征
  const r2Y = r1Y + rowH;
  const r2 = ["", "方案都问「如何做更好」", "判断「做不到」未测试", "全部是行业已知做法", "短期有效，停止就回来"];
  r2.forEach((c, i) => {
    if (i > 0) {
      const x = tableX + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
      slide.addText(c, {
        x: x, y: r2Y, w: colWidths[i], h: rowH,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 行 3 - 案例
  const r3Y = r2Y + rowH;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: tableX + colWidths[0], y: r3Y, w: 9 - colWidths[0], h: rowH,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  const r3 = ["", "投诉 / 员工流失", "IT 部门不配合", "制造业 vs 航空", "跨部门协作会议"];
  r3.forEach((c, i) => {
    if (i > 0) {
      const x = tableX + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
      slide.addText(c, {
        x: x, y: r3Y, w: colWidths[i], h: rowH,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.accent, italic: true,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 行 4 - 突破口
  const r4Y = r3Y + rowH;
  const r4 = ["", "重构问题", "测试假设", "跨行业迁移", "动系统条件"];
  r4.forEach((c, i) => {
    if (i > 0) {
      const x = tableX + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
      slide.addText(c, {
        x: x, y: r4Y, w: colWidths[i], h: rowH,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        align: "center", valign: "middle", margin: 0
      });
    }
  });

  // 表格外框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: tableX, y: r1Y, w: 9, h: rowH * 4,
    fill: { type: 'none' }, line: { color: theme.light, width: 1 }
  });

  // 底部说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 9, h: 0.85,
    fill: { color: "FFFFFF" }, line: { color: theme.primary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.3, w: 0.1, h: 0.85,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("使用方法", {
    x: 0.8, y: 4.35, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("拿出你的方案清单，对每条方案用 4 个问题打勾 —— 知道它在哪个类型卡住，才能定向补充。", {
    x: 0.8, y: 4.65, w: 8.5, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "31", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "31_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
