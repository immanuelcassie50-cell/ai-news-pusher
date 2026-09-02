// slide-36.js - 腾讯WorkBuddy - 形成输出
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "腾讯WorkBuddy - 形成输出",
  pageNumber: 36,
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

  // 工具图标标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 3.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("工具 4/7 · 形成输出", {
    x: 0.5, y: 0.3, w: 3.5, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 工具名称
  slide.addText("腾讯WorkBuddy", {
    x: 0.5, y: 1.0, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.75, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 核心功能
  const functions = [
    { icon: "📊", title: "PPT生成", desc: "输入大纲，自动生成精美演示文稿" },
    { icon: "📋", title: "报告撰写", desc: "根据数据和分析结果生成完整报告" },
    { icon: "📝", title: "文档优化", desc: "润色、修改、格式化现有文档" }
  ];

  const funcStartY = 2.0;
  const funcHeight = 1.0;
  const funcGap = 0.15;

  functions.forEach((func, i) => {
    const y = funcStartY + i * (funcHeight + funcGap);

    // 功能卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9, h: funcHeight,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    // 图标
    slide.addText(func.icon, {
      x: 0.7, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 28,
      align: "center", valign: "middle"
    });

    // 功能标题
    slide.addText(func.title, {
      x: 1.5, y: y + 0.15, w: 2, h: 0.35,
      fontSize: 17, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 功能描述
    slide.addText(func.desc, {
      x: 1.5, y: y + 0.5, w: 7.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // 适用场景
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 5.05, w: 9, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });

  slide.addText("适用：需要快速生成正式文档、汇报材料时", {
    x: 0.5, y: 5.05, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-36-output.pptx" })
    .then(() => console.log("Created: slide-36-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };