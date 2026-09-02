// slide-99.js - 培训需求分析详解
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 99,
  title: '培训需求分析详解'
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
  slide.addText("培训需求分析详解", {
    x: 0.5, y: 0.35, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Backup label
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("备用", {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Process flow - 4 steps
  const steps = [
    {
      num: "1",
      title: "组织分析",
      desc: "明确公司战略、部门目标、绩效指标"
    },
    {
      num: "2",
      title: "任务分析",
      desc: "确定岗位关键任务、必备技能、知识要求"
    },
    {
      num: "3",
      title: "人员分析",
      desc: "评估现有人员能力差距、绩效表现"
    },
    {
      num: "4",
      title: "优先级排序",
      desc: "确定培训重点、投入产出比"
    }
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 2.35;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.1, w: 2.2, h: 1.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.8, y: 1.25, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + 0.8, y: 1.25, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: 1.95, w: 2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", margin: 0
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: 2.3, w: 2, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", margin: 0
    });

    // Arrow (except last)
    if (i < 3) {
      slide.addText("→", {
        x: x + 2.05, y: 1.7, w: 0.4, h: 0.4,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, align: "center", valign: "middle", margin: 0
      });
    }
  });

  // Templates section
  slide.addText("常用工具模板", {
    x: 0.5, y: 3.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const templates = [
    { name: "问卷调研", desc: "需求调研问卷设计" },
    { name: "访谈提纲", desc: "业务部门访谈" },
    { name: "绩效分析表", desc: "绩效差距分析" },
    { name: "培训计划表", desc: "年度培训计划" }
  ];

  templates.forEach((tpl, i) => {
    const x = 0.5 + i * 2.35;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.45, w: 2.2, h: 1.55,
      fill: { color: theme.light }
    });

    slide.addText(tpl.name, {
      x: x, y: 3.6, w: 2.2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", margin: 0
    });

    slide.addText(tpl.desc, {
      x: x + 0.1, y: 4.0, w: 2, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", margin: 0
    });

    // Download icon placeholder
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.75, y: 4.55, w: 0.7, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText("下载", {
      x: x + 0.75, y: 4.55, w: 0.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle", margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("99", {
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
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-99-preview.pptx" });
}

module.exports = { createSlide, slideConfig };