// slide-40.js - 七个工具速查表
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "七个工具速查表",
  pageNumber: 40,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 标题
  slide.addText("七个工具速查表", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 表格数据
  const tools = [
    { name: "秘塔AI", stage: "信息进来", highlight: "全网搜索、文档解析" },
    { name: "得到大脑", stage: "整理消化", highlight: "知识整理、内容提炼" },
    { name: "千问3.7Max", stage: "分析思考", highlight: "深度分析、方案评估" },
    { name: "腾讯WorkBuddy", stage: "形成输出", highlight: "PPT生成、报告撰写" },
    { name: "办公小浣熊", stage: "数据输出", highlight: "数据分析、图表生成" },
    { name: "豆包", stage: "多媒体输出", highlight: "图片生成、视频剪辑" },
    { name: "DeepSeek", stage: "技术性输出", highlight: "代码生成、技术方案" }
  ];

  // 表头
  const headerY = 1.15;
  const col1X = 0.5;
  const col2X = 3.2;
  const col3X = 6.5;
  const rowHeight = 0.55;

  // 表头背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: col1X, y: headerY, w: 9, h: rowHeight,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText("工具", {
    x: col1X, y: headerY, w: 2.5, h: rowHeight,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("处理阶段", {
    x: col2X, y: headerY, w: 3, h: rowHeight,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("核心功能", {
    x: col3X, y: headerY, w: 3, h: rowHeight,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 表格行
  tools.forEach((tool, i) => {
    const y = headerY + rowHeight + i * rowHeight;
    const bgColor = i % 2 === 0 ? theme.light : "FFFFFF";

    // 行背景
    slide.addShape(pres.ShapeType.rect, {
      x: col1X, y: y, w: 9, h: rowHeight,
      fill: { color: bgColor }
    });

    // 工具名称
    slide.addText(tool.name, {
      x: col1X + 0.15, y: y, w: 2.3, h: rowHeight,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // 处理阶段
    slide.addText(tool.stage, {
      x: col2X, y: y, w: 3, h: rowHeight,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // 核心功能
    slide.addText(tool.highlight, {
      x: col3X, y: y, w: 3, h: rowHeight,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // 底部分隔线
    if (i < tools.length - 1) {
      slide.addShape(pres.ShapeType.rect, {
        x: col1X, y: y + rowHeight, w: 9, h: 0.01,
        fill: { color: theme.light }
      });
    }
  });

  // 底部提示
  slide.addText("按需使用，不需要全部掌握", {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-40-output.pptx" })
    .then(() => console.log("Created: slide-40-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };