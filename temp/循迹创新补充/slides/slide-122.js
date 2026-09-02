// slide-122.js - 模块四总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 122,
  title: '模块四总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("模块四总结", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("试真的关键要点", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // 2x2 grid layout
  const sections = [
    {
      title: "核心工具",
      icon: "01",
      items: ["A/B测试：数据驱动的方案选择", "可用性测试：观察真实用户行为", "焦点小组：深入挖掘用户想法"],
      color: theme.accent
    },
    {
      title: "核心思维",
      icon: "02",
      items: ["数据驱动：用证据而非直觉决策", "快速迭代：小步快跑持续优化", "假设验证：先验假设后证真伪"],
      color: theme.primary
    },
    {
      title: "关键成功因素",
      icon: "03",
      items: ["明确验证目标", "选择合适方法", "保证样本质量", "深入分析洞察"],
      color: theme.primary
    },
    {
      title: "学习成果",
      icon: "04",
      items: ["掌握用户验证全流程", "能设计有效的验证实验", "建立数据驱动决策习惯", "培养持续优化思维"],
      color: theme.accent
    }
  ];

  const cardW = 4.3;
  const cardH = 1.5;
  const startX = 0.5;
  const startY = 1.8;
  const gapX = 0.4;
  const gapY = 0.3;

  sections.forEach((section, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Icon badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45,
      fill: { color: section.color }
    });
    slide.addText(section.icon, {
      x: x + 0.15, y: y + 0.15, w: 0.45, h: 0.45,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(section.title, {
      x: x + 0.7, y: y + 0.2, w: 3.4, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Items
    section.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.2, y: y + 0.65 + j * 0.22, w: cardW - 0.4, h: 0.22,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.05, w: 8.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("122", {
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
  pres.writeFile({ fileName: "slide-122-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
