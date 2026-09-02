// slide-117.js - 可用性测试
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 117,
  title: '可用性测试 | Usability Testing'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("可用性测试", {
    x: 0.5, y: 0.4, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Usability Testing", {
    x: 5.5, y: 0.5, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.secondary
  });
  slide.addText("观察用户真实使用行为", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 1.2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 5 content items in vertical list with icons
  const items = [
    { title: "测试类型", desc: " moderated vs unmoderated | 远程 vs 现场 | 实验室 vs 自然环境" },
    { title: "测试任务设计", desc: "典型任务场景 | 明确完成标准 | 控制任务复杂度 | 避免引导性" },
    { title: "观察要点", desc: "操作路径 | 错误频率 | 犹豫时间 | 求助行为 | 表情反应" },
    { title: "指标收集", desc: "任务完成率 | 完成时间 | 错误数 | NPS/CSAT评分 | 主观满意度" },
    { title: "结果分析", desc: "定量统计 | 定性归因 | 问题分级 | 优先级排序 | 改进建议" }
  ];

  const startY = 1.6;
  const itemH = 0.7;

  items.forEach((item, i) => {
    const y = startY + i * itemH;

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: itemH - 0.1,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.1, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y + 0.1, w: 0.35, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.2, y: y + 0.05, w: 2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: 1.2, y: y + 0.32, w: 8, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.0, w: 8.5, h: 0.45,
    fill: { color: theme.accent, transparency: 90 },
    rectRadius: 0.05
  });
  slide.addText("核心价值：发现可用性问题，验证设计假设，优化用户体验", {
    x: 0.7, y: 5.05, w: 8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("117", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-117-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
