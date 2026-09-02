// slide-50.js - 练习三 · 我的工具速查表
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "练习三 · 我的工具速查表",
  pageNumber: 50,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 练习标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 2.5, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("练习三 · 我的工具速查表", {
    x: 0.5, y: 0.3, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("制作你的个人工具速查表", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 说明文字
  slide.addText("根据你的工作场景，选择你最常用的3-4个工具，填入下表", {
    x: 0.5, y: 1.7, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 表格
  const tableX = 0.5;
  const tableY = 2.15;
  const colWidths = [2.5, 2.0, 4.0];
  const headerHeight = 0.55;
  const rowHeight = 0.7;

  // 表头
  slide.addShape(pres.ShapeType.roundRect, {
    x: tableX, y: tableY, w: colWidths[0] + colWidths[1] + colWidths[2], h: headerHeight,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText("工具名称", {
    x: tableX, y: tableY, w: colWidths[0], h: headerHeight,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("使用场景", {
    x: tableX + colWidths[0], y: tableY, w: colWidths[1], h: headerHeight,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("我用它做什么", {
    x: tableX + colWidths[0] + colWidths[1], y: tableY, w: colWidths[2], h: headerHeight,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 表格行（4行空白填写）
  for (let i = 0; i < 4; i++) {
    const rowY = tableY + headerHeight + rowHeight * i;
    const bgColor = i % 2 === 0 ? theme.light : "FFFFFF";

    // 行背景
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: rowY, w: colWidths[0] + colWidths[1] + colWidths[2], h: rowHeight,
      fill: { color: bgColor },
      line: { color: theme.light, width: 0.5 }
    });

    // 工具名称列（空白）
    slide.addShape(pres.ShapeType.rect, {
      x: tableX, y: rowY, w: colWidths[0], h: rowHeight,
      fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" },
      line: { color: theme.light, width: 0.5 }
    });

    // 使用场景列（空白）
    slide.addShape(pres.ShapeType.rect, {
      x: tableX + colWidths[0], y: rowY, w: colWidths[1], h: rowHeight,
      fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" },
      line: { color: theme.light, width: 0.5 }
    });

    // 我用它做什么列（空白）
    slide.addShape(pres.ShapeType.rect, {
      x: tableX + colWidths[0] + colWidths[1], y: rowY, w: colWidths[2], h: rowHeight,
      fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" },
      line: { color: theme.light, width: 0.5 }
    });
  }

  // 底部提示
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.06
  });

  slide.addText("完成表格后，思考：你的工具链里有没有缺失的环节？", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-50-output.pptx" })
    .then(() => console.log("Created: slide-50-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };