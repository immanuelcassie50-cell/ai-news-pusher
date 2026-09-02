// slide-90.js - 课后行动
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '课后行动'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课后行动", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Subtitle
  slide.addText("30-60-90天成长计划", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Timeline
  const phases = [
    {
      days: "30天",
      title: "入门期",
      color: theme.accent,
      tasks: [
        "完成一次30分钟微课开发",
        "录制自我练习视频并复盘",
        "阅读《培训师21项技能》"
      ]
    },
    {
      days: "60天",
      title: "提升期",
      color: theme.primary,
      tasks: [
        "开展一次部门内分享",
        "设计完整培训课件包",
        "观摩优秀讲师授课"
      ]
    },
    {
      days: "90天",
      title: "突破期",
      color: theme.secondary,
      tasks: [
        "独立讲授一场正式培训",
        "开发一门原创精品课程",
        "担任新员工导师"
      ]
    }
  ];

  phases.forEach((phase, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.5, w: 2.95, h: 3.55,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Days badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.85, y: 1.7, w: 1.25, h: 1.25,
      fill: { color: phase.color }
    });
    slide.addText(phase.days, {
      x: x + 0.85, y: 1.7, w: 1.25, h: 1.25,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Phase title
    slide.addText(phase.title, {
      x: x, y: 3.0, w: 2.95, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: phase.color, bold: true, align: "center", margin: 0
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.8, y: 3.5, w: 1.35, h: 0.03,
      fill: { color: phase.color }
    });

    // Tasks
    phase.tasks.forEach((task, j) => {
      slide.addText("• " + task, {
        x: x + 0.15, y: 3.65 + j * 0.5, w: 2.65, h: 0.45,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "top", margin: 0
      });
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fill: { color: theme.light }
  });
  slide.addText("关键：每个阶段结束前进行一次自我评估和同伴反馈", {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle", margin: 0
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("90", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-90-preview.pptx" });
}

module.exports = { createSlide, slideConfig };