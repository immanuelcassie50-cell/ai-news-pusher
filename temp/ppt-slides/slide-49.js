// slide-49.js - 练习二 · 工具链路设计
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "练习二 · 工具链路设计",
  pageNumber: 49,
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

  // 练习标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 2.5, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("练习二 · 工具链路设计", {
    x: 0.5, y: 0.3, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("工具链路设计", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 任务说明
  slide.addText("为下面这个任务设计完整的工具链路", {
    x: 0.5, y: 1.7, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 任务描述框
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 2.15, w: 9, h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });

  slide.addText("任务：要把20篇行业文章整理成一份PPT汇报材料", {
    x: 0.5, y: 2.15, w: 9, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 步骤卡片
  const steps = [
    { step: "步骤1", action: "信息收集", tool: "秘塔AI", detail: "搜索并保存相关文章" },
    { step: "步骤2", action: "整理消化", tool: "得到大脑", detail: "提炼核心观点" },
    { step: "步骤3", action: "生成PPT", tool: "WorkBuddy", detail: "自动生成演示文稿" }
  ];

  const stepWidth = 2.8;
  const stepHeight = 1.6;
  const stepY = 3.15;
  const startX = 0.7;
  const gap = 0.35;

  steps.forEach((s, i) => {
    const x = startX + i * (stepWidth + gap);

    // 步骤卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: stepY, w: stepWidth, h: stepHeight,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // 步骤标签
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.15, y: stepY + 0.15, w: 0.8, h: 0.35,
      fill: { color: theme.accent },
      rectRadius: 0.05
    });

    slide.addText(s.step, {
      x: x + 0.15, y: stepY + 0.15, w: 0.8, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 动作
    slide.addText(s.action, {
      x: x + 0.15, y: stepY + 0.6, w: stepWidth - 0.3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 工具
    slide.addText("工具：" + s.tool, {
      x: x + 0.15, y: stepY + 0.95, w: stepWidth - 0.3, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // 详情
    slide.addText(s.detail, {
      x: x + 0.15, y: stepY + 1.25, w: stepWidth - 0.3, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent
    });

    // 箭头
    if (i < 2) {
      slide.addText("→", {
        x: x + stepWidth + 0.05, y: stepY + 0.6, w: gap - 0.1, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }
  });

  // 底部提示
  slide.addText("你有更好的方案吗？画出来！", {
    x: 0.5, y: 5.1, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-49-output.pptx" })
    .then(() => console.log("Created: slide-49-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };