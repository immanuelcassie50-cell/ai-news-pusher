// slide-26.js - 工作任务的底层信息流
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "工作任务的底层信息流",
  pageNumber: 26,
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
  slide.addText("工作任务的底层信息流", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 核心洞察框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.35, w: 9, h: 1.0,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("任何工作任务，本质上都是一条信息流", {
    x: 0.5, y: 1.35, w: 9, h: 1.0,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 信息流三阶段
  const stages = [
    { num: "1", title: "信息进来", desc: "获取、收集原始材料", color: theme.accent },
    { num: "2", title: "消化整理", desc: "理解、分类、结构化", color: theme.primary },
    { num: "3", title: "形成输出", desc: "生成方案、报告、方案", color: theme.secondary }
  ];

  const stageWidth = 2.6;
  const stageHeight = 2.4;
  const stageY = 2.6;
  const startX = 0.8;
  const gap = 0.5;

  stages.forEach((stage, i) => {
    const x = startX + i * (stageWidth + gap);

    // 阶段背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: stageY, w: stageWidth, h: stageHeight,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // 编号圆
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + stageWidth / 2 - 0.3, y: stageY + 0.25, w: 0.6, h: 0.6,
      fill: { color: stage.color }
    });

    slide.addText(stage.num, {
      x: x + stageWidth / 2 - 0.3, y: stageY + 0.25, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 标题
    slide.addText(stage.title, {
      x: x + 0.15, y: stageY + 1.0, w: stageWidth - 0.3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // 描述
    slide.addText(stage.desc, {
      x: x + 0.15, y: stageY + 1.5, w: stageWidth - 0.3, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // 箭头（除了最后一个）
    if (i < 2) {
      slide.addText("→", {
        x: x + stageWidth + 0.05, y: stageY + 0.9, w: gap - 0.1, h: 0.6,
        fontSize: 32, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // 底部提示
  slide.addText("每个阶段都有对应的AI工具，串起来就是完整的工作流", {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-26-output.pptx" })
    .then(() => console.log("Created: slide-26-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };