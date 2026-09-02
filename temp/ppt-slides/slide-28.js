// slide-28.js - 整理消化 → 分析思考 → 形成输出
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "整理消化 → 分析思考 → 形成输出",
  pageNumber: 28,
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

  slide.addText("第一节 · 信息流框架", {
    x: 0.5, y: 0.3, w: 2.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("信息处理的三个关键节点", {
    x: 0.5, y: 0.85, w: 9, h: 0.7,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 三个阶段流程
  const phases = [
    {
      title: "整理消化",
      desc: "信息分类、去重、提炼要点、形成结构",
      example: "\"帮我把30份会议纪要按主题分类\"",
      color: theme.accent
    },
    {
      title: "分析思考",
      desc: "逻辑推理、数据分析、方案评估、风险判断",
      example: "\"分析这份报告的趋势，给出3个建议\"",
      color: theme.primary
    },
    {
      title: "形成输出",
      desc: "生成报告、文案、代码、方案、演示",
      example: "\"把这份数据变成PPT，要直观好看\"",
      color: theme.secondary
    }
  ];

  const phaseWidth = 2.8;
  const phaseHeight = 2.8;
  const phaseY = 1.8;
  const startX = 0.7;
  const gap = 0.45;

  phases.forEach((phase, i) => {
    const x = startX + i * (phaseWidth + gap);

    // 阶段背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: phaseY, w: phaseWidth, h: phaseHeight,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // 顶部色条
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: phaseY, w: phaseWidth, h: 0.12,
      fill: { color: phase.color }
    });

    // 阶段编号
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + phaseWidth / 2 - 0.25, y: phaseY + 0.35, w: 0.5, h: 0.5,
      fill: { color: phase.color }
    });

    slide.addText(String(i + 1), {
      x: x + phaseWidth / 2 - 0.25, y: phaseY + 0.35, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 阶段标题
    slide.addText(phase.title, {
      x: x + 0.15, y: phaseY + 1.0, w: phaseWidth - 0.3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // 阶段描述
    slide.addText(phase.desc, {
      x: x + 0.15, y: phaseY + 1.45, w: phaseWidth - 0.3, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // 示例提示
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.15, y: phaseY + 2.1, w: phaseWidth - 0.3, h: 0.55,
      fill: { color: "FFFFFF" },
      rectRadius: 0.06
    });

    slide.addText(phase.example, {
      x: x + 0.15, y: phaseY + 2.1, w: phaseWidth - 0.3, h: 0.55,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true,
      align: "center", valign: "middle"
    });

    // 箭头
    if (i < 2) {
      slide.addText("→", {
        x: x + phaseWidth + 0.05, y: phaseY + 1.1, w: gap - 0.1, h: 0.6,
        fontSize: 28, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // 底部总结
  slide.addText("每个节点有对应的AI工具支撑，串起来就是完整的工作流", {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
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
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-28-output.pptx" })
    .then(() => console.log("Created: slide-28-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };