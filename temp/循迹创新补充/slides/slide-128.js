// slide-128.js - 行动计划制定
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 128,
  title: '制定你的行动计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("制定你的行动计划", {
    x: 0.5, y: 0.25, w: 6, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("将学习转化为行动", {
    x: 0.5, y: 0.7, w: 6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // 5 action items in horizontal flow
  const actions = [
    { num: "1", title: "目标设定", desc: "明确你的创新方向" },
    { num: "2", title: "行动步骤", desc: "拆解具体行动" },
    { num: "3", title: "时间节点", desc: "设定里程碑" },
    { num: "4", title: "资源需求", desc: "准备所需资源" },
    { num: "5", title: "成功标准", desc: "定义衡量指标" }
  ];

  const arrowW = 1.5;
  const startX = 0.5;
  const startY = 1.5;

  actions.forEach((action, i) => {
    const x = startX + i * 1.9;

    // Circle with number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.55, y: startY, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });

    slide.addText(action.num, {
      x: x + 0.55, y: startY, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(action.title, {
      x: x, y: startY + 0.75, w: 1.7, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Description
    slide.addText(action.desc, {
      x: x, y: startY + 1.05, w: 1.7, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Arrow between items (except last)
    if (i < actions.length - 1) {
      slide.addText("→", {
        x: x + 1.5, y: startY + 0.1, w: 0.5, h: 0.4,
        fontSize: 20, fontFace: "Arial",
        color: theme.light, align: "center"
      });
    }
  });

  // Template area
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 9, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  // Template title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.2, w: 0.08, h: 2.0,
    fill: { color: theme.accent }
  });

  slide.addText("行动计划模板", {
    x: 0.75, y: 3.3, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Template content - table-like layout
  const templateItems = [
    ["我的创新目标：", "在_____个月内，实现_____的改善"],
    ["第一个行动：", "具体要做的第一件事"],
    ["完成时间：", "____年____月____日"],
    ["需要的支持：", "人 / 资金 / 工具 / 其他"]
  ];

  templateItems.forEach((item, i) => {
    const y = 3.7 + i * 0.35;

    slide.addText(item[0], {
      x: 0.75, y: y, w: 1.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(item[1], {
      x: 2.5, y: y, w: 6.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("128", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
