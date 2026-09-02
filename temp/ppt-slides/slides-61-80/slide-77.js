// slide-77.js - 行动计划模板
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 77,
  title: '行动计划模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("行动计划模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Template table
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Table header
  const headers = ["序号", "行动项", "负责人", "完成时间", "衡量标准", "状态"];
  const colWidths = [0.6, 2.8, 1.2, 1.2, 2.2, 0.8];
  let xPos = 0.5;

  headers.forEach((header, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.2, w: colWidths[i], h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(header, {
      x: xPos, y: 1.2, w: colWidths[i], h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    xPos += colWidths[i];
  });

  // Sample rows
  const sampleData = [
    { num: "1", action: "完成方案细化设计", owner: "张明", deadline: "7月25日", metric: "输出完整方案文档", status: "待启动" },
    { num: "2", action: "协调资源支持", owner: "李华", deadline: "7月28日", metric: "资源到位确认", status: "进行中" },
    { num: "3", action: "试点实施", owner: "王芳", deadline: "8月5日", metric: "完成2个试点", status: "待启动" }
  ];

  sampleData.forEach((row, i) => {
    const y = 1.75 + i * 0.65;
    const bgColor = i % 2 === 0 ? theme.light : "FFFFFF";
    xPos = 0.5;

    const rowData = [row.num, row.action, row.owner, row.deadline, row.metric, row.status];
    rowData.forEach((cell, j) => {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: xPos, y: y, w: colWidths[j], h: 0.6,
        fill: { color: bgColor }
      });
      slide.addText(cell, {
        x: xPos, y: y, w: colWidths[j], h: 0.6,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: j === 5 ? (cell === "进行中" ? theme.accent : theme.secondary) : theme.primary,
        align: "center", valign: "middle"
      });
      xPos += colWidths[j];
    });
  });

  // Tips box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.05, w: 9, h: 0.8,
    fill: { color: theme.light }
  });

  slide.addText("行动项撰写要点", {
    x: 0.7, y: 4.1, w: 2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("具体可执行 · 有明确责任人 · 有完成期限 · 有可衡量的成果", {
    x: 0.7, y: 4.45, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("77", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };