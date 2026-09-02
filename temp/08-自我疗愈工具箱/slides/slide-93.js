const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "场景工具测试练习",
  type: "content",
  pageNumber: 93
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("93", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("场景工具测试练习", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Instruction
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.15, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("为期一周的练习：每天尝试一个场景的工具，记录效果", {
    x: 0.5, y: 1.15, w: 9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Table header
  const headers = ["场景", "工具", "日期", "时长", "效果(1-10)", "备注"];
  const colWidths = [1.4, 1.8, 1.0, 0.8, 1.1, 2.4];
  const colX = [0.5, 1.9, 3.7, 4.7, 5.5, 6.6];

  headers.forEach((h, i) => {
    slide.addShape(pres.ShapeType.rect, {
      x: colX[i], y: 2.0, w: colWidths[i], h: 0.45,
      fill: { color: theme.secondary }
    });

    slide.addText(h, {
      x: colX[i], y: 2.0, w: colWidths[i], h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Table rows - scenarios
  const scenarios = [
    { scene: "晨间激活", tools: "呼吸空间/感恩" },
    { scene: "工作间隙", tools: "3分钟呼吸/PMR" },
    { scene: "情绪低落", tools: "4-7-8呼吸" },
    { scene: "睡前放松", tools: "身体扫描/PMR" }
  ];

  scenarios.forEach((row, i) => {
    const y = 2.55 + i * 0.55;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 8.5, h: 0.5,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.bg },
      line: { color: theme.light, width: 0.5 }
    });

    // Scene
    slide.addText(row.scene, {
      x: colX[0], y: y, w: colWidths[0], h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Tools
    slide.addText(row.tools, {
      x: colX[1], y: y, w: colWidths[1], h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Empty cells for date, duration, effect, notes
    for (let j = 2; j < 6; j++) {
      slide.addShape(pres.ShapeType.rect, {
        x: colX[j], y: y, w: colWidths[j], h: 0.5,
        fill: { color: "FFFFFF" }
      });
    }
  });

  // Tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.45,
    fill: { color: theme.accent }
  });

  slide.addText("记录帮助你发现：哪个工具最适合你？在什么场景下最有效？", {
    x: 0.5, y: 4.8, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
