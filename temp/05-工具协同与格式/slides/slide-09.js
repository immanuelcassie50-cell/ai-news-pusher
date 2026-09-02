// slide-09.js - Content: Markdown是桥梁
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 9,
  title: 'Markdown：AI与业务工具之间的桥梁'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("Markdown：AI与业务工具之间的桥梁", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left section - What is Markdown
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 4.2, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("Markdown是什么？", {
    x: 0.7, y: 1.1, w: 3.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "一种轻量级的纯文字格式", options: { bullet: true, breakLine: true } },
    { text: "#号表示标题", options: { bullet: true, breakLine: true } },
    { text: "**表示加粗", options: { bullet: true, breakLine: true } },
    { text: "|表示表格", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.5, w: 3.8, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right section - Why bridge
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 1.0, w: 4.5, h: 2.0,
    fill: { color: theme.primary }
  });

  slide.addText("为什么是桥梁？", {
    x: 5.2, y: 1.1, w: 4.1, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText([
    { text: "AI最擅长生成Markdown", options: { bullet: true, breakLine: true } },
    { text: "纯文字，结构清晰", options: { bullet: true, breakLine: true } },
    { text: "AI不容易出错", options: { bullet: true, breakLine: true } },
    { text: "Word/PPT/邮件直接生成质量不稳定", options: { bullet: true } }
  ], {
    x: 5.2, y: 1.5, w: 4.1, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Bottom - Process flow
  slide.addText("正确流程", {
    x: 0.5, y: 3.2, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Flow boxes
  const flowItems = [
    { text: "AI输出\nMarkdown", color: theme.primary },
    { text: "你判断\n内容", color: theme.secondary },
    { text: "手动整理\n进Word", color: theme.accent }
  ];

  flowItems.forEach((item, i) => {
    const xPos = 0.5 + i * 3.2;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 3.65, w: 2.5, h: 1.0,
      fill: { color: item.color }
    });

    slide.addText(item.text, {
      x: xPos, y: 3.65, w: 2.5, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Arrow between boxes
    if (i < 2) {
      slide.addText("→", {
        x: xPos + 2.5, y: 3.85, w: 0.6, h: 0.6,
        fontSize: 24, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // Insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 9.0, h: 0.6,
    fill: { color: theme.secondary, transparency: 90 }
  });

  slide.addText("AI负责内容，你负责最终格式 —— 分工明确，效率更高", {
    x: 0.5, y: 4.85, w: 9.0, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };