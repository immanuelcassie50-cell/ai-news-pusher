// slide-121.js - 试真案例
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 121,
  title: '试真实战案例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("试真实战案例", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("某创新产品的验证全过程", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Timeline layout
  const steps = [
    {
      num: "01",
      title: "案例背景",
      content: "某B2B SaaS产品，用户反馈使用复杂，新用户注册后30日留存率仅15%"
    },
    {
      num: "02",
      title: "验证方法选择",
      content: "通过用户访谈发现核心问题 → 设计可用性测试验证 → 定量问卷确认范围"
    },
    {
      num: "03",
      title: "测试过程",
      content: "15场可用性测试 | 3轮A/B测试 | 200+份问卷 | 100+条行为数据"
    },
    {
      num: "04",
      title: "数据分析",
      content: "导航结构问题(60%) | 术语理解困难(45%) | 缺少引导(40%) | 功能冗余(30%)"
    },
    {
      num: "05",
      title: "决策与结果",
      content: "简化导航 | 重构术语 | 新增引导流程 | 优化后留存率提升至38%"
    }
  ];

  const timelineX = 0.8;
  const startY = 1.7;
  const stepH = 0.7;
  const gap = 0.05;

  // Vertical timeline line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: timelineX + 0.12, y: startY + 0.25, w: 0.04, h: stepH * 5 + gap * 4 - 0.3,
    fill: { color: theme.light }
  });

  steps.forEach((step, i) => {
    const y = startY + i * (stepH + gap);

    // Timeline node
    slide.addShape(pres.shapes.OVAL, {
      x: timelineX, y: y + 0.15, w: 0.28, h: 0.28,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: timelineX, y: y + 0.15, w: 0.28, h: 0.28,
      fontSize: 8, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.3, y: y, w: 8.2, h: stepH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Step title
    slide.addText(step.title, {
      x: 1.5, y: y + 0.1, w: 1.8, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Content
    slide.addText(step.content, {
      x: 3.4, y: y + 0.1, w: 5.9, h: stepH - 0.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });

    // Left accent line on card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.3, y: y, w: 0.05, h: stepH,
      fill: { color: theme.accent }
    });
  });

  // Key metrics highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.1, w: 8.5, h: 0.0,
    fill: { color: theme.accent, transparency: 95 },
    rectRadius: 0.05
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("121", {
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
  pres.writeFile({ fileName: "slide-121-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
