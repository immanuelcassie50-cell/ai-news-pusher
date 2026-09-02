// slide-41.js - 工具分工总览图
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "工具分工总览图",
  pageNumber: 41,
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
  slide.addText("工具分工总览图", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 信息流三阶段背景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 9, h: 4.0,
    fill: { color: theme.light },
    rectRadius: 0.12
  });

  // 三阶段
  const stages = [
    {
      title: "信息进来",
      color: theme.accent,
      tools: ["秘塔AI"],
      desc: "搜索、解析、收藏"
    },
    {
      title: "消化整理",
      color: theme.primary,
      tools: ["得到大脑"],
      desc: "整理、提炼、关联"
    },
    {
      title: "分析思考",
      color: theme.secondary,
      tools: ["千问3.7Max"],
      desc: "分析、评估、预判"
    },
    {
      title: "形成输出",
      color: theme.accent,
      tools: ["腾讯WorkBuddy", "办公小浣熊", "豆包", "DeepSeek"],
      desc: "文档、数据、多媒体、代码"
    }
  ];

  const stageWidth = 2.1;
  const stageHeight = 3.6;
  const startX = 0.7;
  const stageY = 1.4;
  const gap = 0.2;

  stages.forEach((stage, i) => {
    const x = startX + i * (stageWidth + gap);

    // 阶段背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: stageY, w: stageWidth, h: stageHeight,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08
    });

    // 顶部色条
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: stageY, w: stageWidth, h: 0.1,
      fill: { color: stage.color }
    });

    // 阶段标题
    slide.addText(stage.title, {
      x: x, y: stageY + 0.2, w: stageWidth, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // 工具列表
    const toolStartY = stageY + 0.8;
    const toolHeight = 0.55;

    stage.tools.forEach((tool, j) => {
      const toolY = toolStartY + j * toolHeight;

      slide.addShape(pres.ShapeType.roundRect, {
        x: x + 0.15, y: toolY, w: stageWidth - 0.3, h: 0.45,
        fill: { color: stage.color },
        rectRadius: 0.05
      });

      slide.addText(tool, {
        x: x + 0.15, y: toolY, w: stageWidth - 0.3, h: 0.45,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: "FFFFFF", bold: true,
        align: "center", valign: "middle"
      });
    });

    // 描述
    slide.addText(stage.desc, {
      x: x + 0.1, y: stageY + stageHeight - 0.6, w: stageWidth - 0.2, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // 箭头（除了最后一个）
    if (i < stages.length - 1) {
      slide.addText("→", {
        x: x + stageWidth + 0.02, y: stageY + 1.5, w: gap - 0.04, h: 0.6,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-41-output.pptx" })
    .then(() => console.log("Created: slide-41-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };