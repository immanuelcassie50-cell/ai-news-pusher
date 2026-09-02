// slide-18.js - Content: 为任务链补全工具路由
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '为你的任务链补全工具路由'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section tag
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.35, w: 1.2, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("第三级难度", {
    x: 0.5, y: 0.35, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("为你的任务链补全工具路由", {
    x: 1.85, y: 0.28, w: 7, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Instruction card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.9, w: 9.0, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("操作说明", {
    x: 0.7, y: 1.0, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("打开你在第三章完成的任务分解链，检查[使用工具]这一列。如果还有步骤没有填工具，现在补上。如果有步骤的工具选择你现在觉得不对，也可以修改。", {
    x: 0.7, y: 1.35, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Check questions
  slide.addText("检查问题", {
    x: 0.5, y: 2.2, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const questions = [
    "你的任务链里，哪个步骤的工具选择你最不确定？为什么？",
    "有没有哪个步骤，你本来写了[千问]，但现在觉得应该用其他工具？",
    "工具切换的时候，最关键的一次格式处理是哪里？你打算怎么处理？"
  ];

  questions.forEach((q, i) => {
    const yPos = 2.7 + i * 0.8;

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: yPos, w: 0.4, h: 0.4,
      fill: { color: theme.secondary }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: yPos, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(q, {
      x: 1.1, y: yPos, w: 8.4, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };