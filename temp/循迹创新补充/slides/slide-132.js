// slide-132.js - 工具模板 | 用户旅程地图
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 132,
  title: '工具模板 | 用户旅程地图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("工具模板 | 用户旅程地图", {
    x: 0.5, y: 0.25, w: 7, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("附录参考资料", {
    x: 0.5, y: 0.6, w: 7, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Template explanation
  slide.addText("模板说明", {
    x: 0.5, y: 1.1, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("用户旅程地图用于可视化用户完成目标的完整过程，帮助发现痛点与机会点。", {
    x: 0.5, y: 1.4, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Template grid
  const stages = ["阶段1\n意识", "阶段2\n考虑", "阶段3\n决策", "阶段4\n购买", "阶段5\n使用", "阶段6\n售后"];
  const stageW = 1.4;
  const stageH = 0.7;
  const startX = 0.5;
  const startY = 1.9;

  stages.forEach((stage, i) => {
    const x = startX + i * (stageW + 0.1);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: stageW, h: stageH,
      fill: { color: theme.accent }
    });

    slide.addText(stage, {
      x: x, y: startY, w: stageW, h: stageH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Journey rows
  const rows = [
    { label: "用户行为", content: "做了什么动作？" },
    { label: "用户想法", content: "在想什么？" },
    { label: "用户情感", content: "感觉如何？" },
    { label: "痛点", content: "哪里不顺畅？" },
    { label: "机会点", content: "可以改进的地方？" }
  ];

  const rowH = 0.55;
  const rowStartY = startY + stageH + 0.1;

  rows.forEach((row, i) => {
    // Row label
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: rowStartY + i * (rowH + 0.05), w: 1.3, h: rowH,
      fill: { color: theme.light }
    });

    slide.addText(row.label, {
      x: 0.5, y: rowStartY + i * (rowH + 0.05), w: 1.3, h: rowH,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Row content cells
    for (let j = 0; j < 6; j++) {
      const cellX = 1.9 + j * (stageW + 0.1);

      slide.addShape(pres.shapes.RECTANGLE, {
        x: cellX, y: rowStartY + i * (rowH + 0.05), w: stageW, h: rowH,
        fill: { color: "FFFFFF" },
        line: { color: theme.light, width: 0.5 }
      });
    }
  });

  // Usage guide
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light }
  });

  slide.addText("使用建议：选择特定场景/产品，聚焦关键旅程阶段，详细填写每个触点", {
    x: 0.6, y: 5.08, w: 8.8, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("132", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
