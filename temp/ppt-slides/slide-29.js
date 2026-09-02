// slide-29.js - 七个工具的分工地图
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "七个工具的分工地图",
  pageNumber: 29,
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

  // 章节标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 2.2, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });

  slide.addText("第二节 · 七个工具", {
    x: 0.5, y: 0.3, w: 2.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("七个工具的分工地图", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 工具列表 - 分三行展示
  const tools = [
    { name: "秘塔AI", func: "信息进来", color: theme.accent },
    { name: "得到大脑", func: "整理消化", color: theme.primary },
    { name: "千问3.7Max", func: "分析思考", color: theme.secondary },
    { name: "腾讯WorkBuddy", func: "形成输出", color: theme.accent },
    { name: "办公小浣熊", func: "数据输出", color: theme.primary },
    { name: "豆包", func: "多媒体输出", color: theme.secondary },
    { name: "DeepSeek", func: "技术性输出", color: theme.accent }
  ];

  const boxWidth = 2.6;
  const boxHeight = 0.9;
  const startX = 0.5;
  const gapX = 0.35;
  const gapY = 0.25;

  tools.forEach((tool, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (boxWidth + gapX);
    const y = 1.8 + row * (boxHeight + gapY);

    // 工具卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: boxWidth, h: boxHeight,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    // 左侧色条
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.1, h: boxHeight,
      fill: { color: tool.color }
    });

    // 工具名称
    slide.addText(tool.name, {
      x: x + 0.25, y: y + 0.15, w: boxWidth - 0.4, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 功能标签
    slide.addText(tool.func, {
      x: x + 0.25, y: y + 0.5, w: boxWidth - 0.4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: tool.color
    });
  });

  // 底部说明
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.85, w: 9, h: 0.04,
    fill: { color: theme.light }
  });

  slide.addText("七个工具，覆盖信息流全流程", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-29-output.pptx" })
    .then(() => console.log("Created: slide-29-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };