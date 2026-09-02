// slide-05.js - Content: 决策树
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '工具路由的核心判断逻辑'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("工具路由的核心判断逻辑", {
    x: 0.5, y: 0.3, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Core question
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 9.0, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("这个步骤的核心需求是什么？", {
    x: 0.5, y: 0.95, w: 9.0, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Decision tree items
  const treeItems = [
    { icon: "L0", title: "专项成熟工具", desc: "写公文/辅导学习/特定业务系统", tool: "直接用专项工具", color: theme.secondary },
    { icon: "A", title: "音视频/图片处理", desc: "需要处理音频、视频、图片", tool: "豆包", color: theme.primary },
    { icon: "B", title: "准确信息查询", desc: "需要查准确信息，或核实AI数据", tool: "秘塔", color: theme.primary },
    { icon: "C", title: "素材存储检索", desc: "整理素材、建知识库、存可检索信息", tool: "Get笔记", color: theme.primary },
    { icon: "D", title: "推理写作分析", desc: "多步推理、写作、内容生成", tool: "千问", color: theme.primary },
    { icon: "E", title: "批量本地处理", desc: "批量处理本地文件，跑可复用脚本", tool: "WorkBuddy", color: theme.primary }
  ];

  treeItems.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = 0.5 + col * 4.7;
    const yPos = 1.75 + row * 1.2;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: yPos, w: 4.4, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left icon bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: yPos, w: 0.5, h: 1.0,
      fill: { color: item.color }
    });

    // Icon text
    slide.addText(item.icon, {
      x: xPos, y: yPos, w: 0.5, h: 1.0,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: xPos + 0.65, y: yPos + 0.1, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: xPos + 0.65, y: yPos + 0.45, w: 2.5, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Tool badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos + 3.2, y: yPos + 0.3, w: 1.0, h: 0.4,
      fill: { color: item.color, transparency: 85 }
    });
    slide.addText(item.tool, {
      x: xPos + 3.2, y: yPos + 0.3, w: 1.0, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: item.color, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("路由判断核心：先判断需求类型，再选工具。", {
    x: 0.5, y: 5.15, w: 9.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };