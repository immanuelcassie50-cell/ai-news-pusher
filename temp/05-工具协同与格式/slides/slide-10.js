// slide-10.js - Content: 格式处理路径表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '常见的格式处理路径'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("常见的格式处理路径", {
    x: 0.5, y: 0.3, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 9.0, h: 0.45,
    fill: { color: theme.primary }
  });

  const headers = ["从哪里来", "怎么处理", "到哪里去"];
  const colWidths = [2.8, 3.4, 2.8];
  let xPos = 0.5;

  headers.forEach((header, i) => {
    slide.addText(header, {
      x: xPos, y: 0.85, w: colWidths[i], h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    xPos += colWidths[i];
  });

  // Table rows
  const rows = [
    ["豆包转写的音频文字", "下载为txt格式，或全选复制；先核查专业术语再用", "粘贴进千问输入框"],
    ["秘塔的搜索结果", "把关键内容手动复制，或用导出功能", "粘贴进Get笔记存档"],
    ["千问的分析输出(Markdown)", "全选复制", "粘贴进Word，或按标题层级转PPT"],
    ["WorkBuddy处理的表格数据", "导出为CSV或txt格式", "给千问分析，或整理进Word报告"],
    ["千问生成的提示词/任务链", "复制，加上场景名+步骤名标注", "存进Get笔记，下次直接调用"]
  ];

  rows.forEach((row, rowIndex) => {
    const yPos = 1.3 + rowIndex * 0.72;
    const bgColor = rowIndex % 2 === 0 ? "FFFFFF" : "F8F8F8";

    // Row background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 9.0, h: 0.65,
      fill: { color: bgColor }
    });

    // Row stripes
    xPos = 0.5;
    row.forEach((cell, colIndex) => {
      slide.addText(cell, {
        x: xPos + 0.1, y: yPos, w: colWidths[colIndex] - 0.2, h: 0.65,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: colIndex === 1 ? theme.primary : theme.secondary,
        valign: "middle"
      });
      xPos += colWidths[colIndex];
    });
  });

  // Warning box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9.0, h: 0.6,
    fill: { color: "FFF3CD" }
  });

  slide.addText("⚠ 豆包转写专业术语，必须人工核查！错误有迷惑性，如[量程]→[梁程]，[防护等级]→[防护等极]", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "856404",
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };