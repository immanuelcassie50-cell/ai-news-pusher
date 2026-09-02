// slide-12.js - Content: 跨工具链路演示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '跨工具链路演示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Section tag
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.35, w: 1.2, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("现场展示", {
    x: 0.5, y: 0.35, w: 1.2, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("跨工具链路演示", {
    x: 1.85, y: 0.28, w: 6, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Scenario description
  slide.addText("录音 → 文字 → 知识库 → 分析报告", {
    x: 0.5, y: 0.85, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Flow diagram
  const tools = [
    { name: "豆包", desc: "转文字", action: "录音转文字" },
    { name: "导出", desc: "txt格式", action: "导出格式选择" },
    { name: "Get笔记", desc: "知识库", action: "文字导入" },
    { name: "千问", desc: "分析", action: "Markdown报告" },
    { name: "Word", desc: "交付", action: "整理进文档" }
  ];

  tools.forEach((tool, i) => {
    const xPos = 0.3 + i * 1.95;

    // Tool box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.45, w: 1.6, h: 1.8,
      fill: { color: i % 2 === 0 ? theme.primary : theme.secondary }
    });

    // Tool name
    slide.addText(tool.name, {
      x: xPos, y: 1.6, w: 1.6, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Tool desc
    slide.addText(tool.desc, {
      x: xPos, y: 2.1, w: 1.6, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", transparency: 30,
      align: "center"
    });

    // Action text
    slide.addText(tool.action, {
      x: xPos, y: 2.5, w: 1.6, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", transparency: 50,
      align: "center"
    });

    // Arrow
    if (i < 4) {
      slide.addText("→", {
        x: xPos + 1.5, y: 2.0, w: 0.5, h: 0.6,
        fontSize: 24, fontFace: "Arial",
        color: theme.secondary,
        align: "center", valign: "middle"
      });
    }
  });

  // Key observation box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 9.0, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("重点观察", {
    x: 0.7, y: 3.6, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.0, w: 8.6, h: 0.4,
    fill: { color: theme.primary, transparency: 90 }
  });

  slide.addText("工具切换节点", {
    x: 0.9, y: 4.0, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  slide.addText("格式处理动作", {
    x: 3.5, y: 4.0, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  slide.addText("为什么", {
    x: 6.5, y: 4.0, w: 2.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Table rows
  const tableRows = [
    ["豆包 → 千问", "", ""],
    ["秘塔 → Get笔记", "", ""],
    ["千问 → Word", "", ""]
  ];

  tableRows.forEach((row, i) => {
    const yPos = 4.4 + i * 0.45;

    slide.addText(row[0], {
      x: 0.9, y: yPos, w: 2.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    slide.addText(row[1], {
      x: 3.5, y: yPos, w: 2.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    slide.addText(row[2], {
      x: 6.5, y: yPos, w: 2.6, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Dashed line
    slide.addShape(pres.shapes.LINE, {
      x: 0.7, y: yPos + 0.4, w: 8.6, h: 0,
      line: { color: theme.secondary, width: 0.3, dashType: "dash", transparency: 70 }
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };