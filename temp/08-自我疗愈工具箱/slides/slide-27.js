const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "练习：呼吸体验日记",
  type: "content",
  pageNumber: 27
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("练习：呼吸体验日记", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Exercise instructions card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.25, w: 5.0, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("练习说明", {
    x: 0.8, y: 1.35, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const instructions = [
    "每天选择至少一次呼吸练习",
    "记录：日期、时间、时长、技巧类型",
    "观察并记录：练习前后的情绪状态（1-10分）",
    "记录：身体感受、头脑变化",
    "持续一周，观察自己的模式"
  ];

  slide.addText(
    instructions.map((s, i) => ({
      text: s,
      options: { bullet: true, breakLine: i < instructions.length - 1 }
    })),
    {
      x: 0.8, y: 1.8, w: 4.6, h: 1.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      paraSpaceAfter: 6
    }
  );

  // Recording table template
  slide.addShape(pres.ShapeType.rect, {
    x: 5.8, y: 1.25, w: 3.6, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("记录表示例", {
    x: 6.0, y: 1.35, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Mini table
  const tableData = [
    ["日期", "技巧", "情绪前", "情绪后"],
    ["周一", "腹式", "5", "7"],
    ["周二", "4-7-8", "4", "8"],
    ["周三", "身体扫描", "6", "8"]
  ];

  const tColW = 0.85;
  const tRowH = 0.35;
  let tX = 5.95;
  let tY = 1.8;

  tableData.forEach((row, rowIdx) => {
    tX = 5.95;
    row.forEach((cell, colIdx) => {
      slide.addShape(pres.ShapeType.rect, {
        x: tX, y: tY, w: tColW, h: tRowH,
        fill: { color: rowIdx === 0 ? theme.accent : theme.bg },
        line: { color: "E0E0E0", width: 0.5 }
      });
      slide.addText(cell, {
        x: tX, y: tY, w: tColW, h: tRowH,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: rowIdx === 0 ? "FFFFFF" : theme.secondary,
        bold: rowIdx === 0,
        align: "center", valign: "middle"
      });
      tX += tColW;
    });
    tY += tRowH;
  });

  // Reflection questions card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.7, w: 8.8, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("反思问题", {
    x: 0.8, y: 3.8, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const questions = [
    "哪种呼吸技巧最适合你？为什么？",
    "在什么场景下你最容易坚持练习？",
    "练习后情绪分数通常提升多少？"
  ];

  slide.addText(
    questions.map((q, i) => ({
      text: q,
      options: { bullet: true, breakLine: i < questions.length - 1 }
    })),
    {
      x: 0.8, y: 4.25, w: 8.4, h: 0.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    }
  );

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("27", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
