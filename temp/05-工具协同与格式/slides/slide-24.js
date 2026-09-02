// slide-24.js - Summary Page
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 24,
  title: '总结与预告'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("总结与预告", {
    x: 0.5, y: 0.3, w: 4, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.9, w: 1.5, h: 0.04,
    fill: { color: theme.primary }
  });

  // Key takeaways
  slide.addText("本章要点", {
    x: 0.5, y: 1.2, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const takeaways = [
    "工具路由：从步骤的核心需求出发，不是从顺手程度出发",
    "Markdown是AI和业务工具之间的桥梁格式",
    "个人AI产出库：每次积累5分钟，省去重复摸索的时间"
  ];

  takeaways.forEach((item, i) => {
    const yPos = 1.7 + i * 0.65;

    // Check icon
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText("✓", {
      x: 0.5, y: yPos, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item, {
      x: 1.0, y: yPos, w: 8.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Divider
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 3.8, w: 9.0, h: 0,
    line: { color: theme.secondary, width: 0.5, transparency: 70 }
  });

  // Preview box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9.0, h: 1.4,
    fill: { color: theme.primary }
  });

  slide.addText("第六章预告", {
    x: 0.7, y: 4.1, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("工具体系、场景定位、任务链、多轮对话、工具路由——前五章的所有产出，在第六章汇聚成一份可以带走的AI协作任务记录卡。", {
    x: 0.7, y: 4.5, w: 8.6, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };