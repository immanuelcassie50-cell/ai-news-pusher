// slide-26.js - 核心练习：多轮对话记录表（续）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '核心练习：多轮对话记录表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("核心练习：多轮对话记录表", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 提示语
  slide.addText("我选择执行的步骤是（从任务分解链里复制）：", {
    x: 0.5, y: 1.15, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 0.55,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 }
  });

  // 模式选择
  slide.addText("我选用的对话模式是：", {
    x: 0.5, y: 2.25, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
  });

  const modes = [
    { label: "A逐步收敛型", x: 3.3 },
    { label: "B分步执行型", x: 5.2 },
    { label: "C角色锁定型", x: 7.1 },
    { label: "D检验驱动型", x: 8.7 }
  ];
  modes.forEach(mode => {
    slide.addShape(pres.shapes.OVAL, {
      x: mode.x, y: 2.32, w: 0.2, h: 0.2,
      fill: { color: "FFFFFF" },
      line: { color: theme.primary, width: 1.5 }
    });
    slide.addText(mode.label, {
      x: mode.x + 0.28, y: 2.25, w: 1.5, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 记录表标题
  slide.addText("多轮对话记录表", {
    x: 0.5, y: 2.8, w: 3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 表格
  const tableRows = [
    ["轮次", "我输入的核心要点", "AI输出的核心要点", "30秒验证", "下一轮调整计划"],
    ["第1轮", "", "", "方向：对/偏/错\n完整：是/否", ""],
    ["第2轮", "", "", "方向：对/偏/错\n完整：是/否", ""],
    ["第3轮", "", "", "可以收尾/还需继续", ""],
    ["第4轮（如需要）", "", "", "", ""]
  ];

  const colWidths = [1.1, 2.1, 2.1, 1.5, 2.2];
  const startX = 0.5;
  const startY = 3.25;
  const rowHeight = 0.42;

  tableRows.forEach((row, rowIdx) => {
    const y = startY + rowIdx * rowHeight;
    const bgColor = rowIdx === 0 ? theme.primary : (rowIdx % 2 === 0 ? "FFFFFF" : "F8F8F8");
    const textColor = rowIdx === 0 ? "FFFFFF" : theme.secondary;

    let xPos = startX;
    row.forEach((cell, colIdx) => {
      const cellWidth = colWidths[colIdx] || 2;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: xPos, y: y, w: cellWidth, h: rowHeight,
        fill: { color: bgColor },
        line: { color: "E0E0E0", width: 0.5 }
      });
      slide.addText(cell, {
        x: xPos, y: y, w: cellWidth, h: rowHeight,
        fontSize: 8, fontFace: "Microsoft YaHei",
        color: textColor, bold: rowIdx === 0,
        align: "center", valign: "middle"
      });
      xPos += cellWidth;
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-26-preview.pptx" });
}

module.exports = { createSlide, slideConfig };