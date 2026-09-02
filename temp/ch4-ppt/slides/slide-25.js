// slide-25.js - 核心练习说明
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '核心练习：真实三轮对话'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("核心练习：真实三轮对话", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 练习说明
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.8,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1
  });
  slide.addText("练习要求", {
    x: 0.7, y: 1.35, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText([
    { text: "选择你任务分解链中\"AI负责\"的某一个步骤，在千问里完成一次至少3轮的完整对话", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "每轮对话结束后，先填一下对话记录表，再决定下一轮怎么走", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "注意：不是描述你\"会怎么做\"，是真的打开千问去做，把实际发出去的内容和实际收到的结果填进来", options: {} }
  ], {
    x: 0.7, y: 1.8, w: 8.6, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // 对话记录表
  slide.addText("多轮对话记录表", {
    x: 0.5, y: 3.2, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // 简化的表格示意
  const tableRows = [
    ["轮次", "我输入的核心要点", "AI输出的核心要点", "30秒验证", "下一轮调整计划"],
    ["第1轮", "", "", "方向：对/偏", ""],
    ["第2轮", "", "", "方向：对/偏", ""],
    ["第3轮", "", "", "可以收尾/还需继续", ""]
  ];

  tableRows.forEach((row, rowIdx) => {
    const y = 3.7 + rowIdx * 0.42;
    const bgColor = rowIdx === 0 ? theme.primary : (rowIdx % 2 === 0 ? "FFFFFF" : "F8F8F8");
    const textColor = rowIdx === 0 ? "FFFFFF" : theme.secondary;

    row.forEach((cell, colIdx) => {
      const widths = [0.8, 2.2, 2.2, 1.5, 2.3];
      let xPos = 0.5;
      for (let i = 0; i < colIdx; i++) {
        xPos += widths[i];
      }

      slide.addShape(pres.shapes.RECTANGLE, {
        x: xPos, y: y, w: widths[colIdx], h: 0.42,
        fill: { color: bgColor }
      });
      slide.addText(cell, {
        x: xPos, y: y, w: widths[colIdx], h: 0.42,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: textColor, bold: rowIdx === 0,
        align: "center", valign: "middle"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-25-preview.pptx" });
}

module.exports = { createSlide, slideConfig };