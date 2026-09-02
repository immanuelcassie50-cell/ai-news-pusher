// slide-06.js - Content: 常见错误
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '常见的工具选择错误'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("常见的工具选择错误", {
    x: 0.5, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Error cards
  const errors = [
    {
      wrong: "把准确信息步骤给千问",
      problem: "千问知识有截止日期，给不了最新数据",
      right: "用秘塔查准确信息"
    },
    {
      wrong: "把音频处理给千问",
      problem: "千问不接受音频文件",
      right: "只有豆包能做"
    },
    {
      wrong: "把所有信息一次性全丢给千问",
      problem: "上下文限制，会[遗忘]早期内容",
      right: "分步骤，知识库管理"
    },
    {
      wrong: "批量文件用手动复制粘贴",
      problem: "手动操作费时不值得",
      right: "WorkBuddy几分钟完成"
    }
  ];

  errors.forEach((err, i) => {
    const yPos = 1.0 + i * 1.1;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: yPos, w: 9.0, h: 0.95,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // X mark
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.22, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText("X", {
      x: 0.7, y: yPos + 0.22, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Wrong choice
    slide.addText(err.wrong, {
      x: 1.4, y: yPos + 0.15, w: 3.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Problem
    slide.addText(err.problem, {
      x: 1.4, y: yPos + 0.5, w: 3.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Arrow
    slide.addText("→", {
      x: 5.0, y: yPos + 0.22, w: 0.5, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Check mark
    slide.addShape(pres.shapes.OVAL, {
      x: 5.6, y: yPos + 0.22, w: 0.5, h: 0.5,
      fill: { color: "4CAF50" }
    });
    slide.addText("✓", {
      x: 5.6, y: yPos + 0.22, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Right solution
    slide.addText(err.right, {
      x: 6.3, y: yPos + 0.3, w: 3.0, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "4CAF50", bold: true
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };