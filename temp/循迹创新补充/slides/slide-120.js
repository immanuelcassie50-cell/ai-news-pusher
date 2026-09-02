// slide-120.js - 试真迭代
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 120,
  title: '试真迭代 | Build-Measure-Learn'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("试真迭代", {
    x: 0.5, y: 0.4, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Build-Measure-Learn", {
    x: 5.0, y: 0.5, w: 4.5, h: 0.4,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary
  });
  slide.addText("快速验证，持续优化", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Central cycle diagram
  const centerX = 3.5;
  const centerY = 3.2;
  const radius = 1.6;

  // Draw cycle circle background
  slide.addShape(pres.shapes.OVAL, {
    x: centerX - radius, y: centerY - radius, w: radius * 2, h: radius * 2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // B-M-L labels on the cycle
  const cycleItems = [
    { label: "Build", x: centerX - 0.5, y: centerY - radius - 0.15 },
    { label: "Measure", x: centerX + radius - 0.6, y: centerY - 0.2 },
    { label: "Learn", x: centerX - radius + 0.15, y: centerY - 0.2 }
  ];

  // Draw arrows and labels around circle
  slide.addText("Build", {
    x: centerX - 0.5, y: centerY - radius + 0.1, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center"
  });
  slide.addText("→", {
    x: centerX + 0.3, y: centerY - radius + 0.15, w: 0.5, h: 0.3,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
  slide.addText("Measure", {
    x: centerX + radius - 0.5, y: centerY - 0.2, w: 1.2, h: 0.4,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center"
  });
  slide.addText("→", {
    x: centerX + 0.2, y: centerY + radius - 0.4, w: 0.5, h: 0.3,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
  slide.addText("Learn", {
    x: centerX - radius + 0.15, y: centerY - 0.2, w: 1, h: 0.4,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: theme.accent, align: "center"
  });
  slide.addText("→", {
    x: centerX - radius + 0.05, y: centerY - 0.4, w: 0.5, h: 0.3,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });

  // Center text
  slide.addText("精益\n创业\n循环", {
    x: centerX - 0.6, y: centerY - 0.5, w: 1.2, h: 1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle"
  });

  // Right side content
  const rightX = 5.5;

  // Left side content
  const leftContent = [
    { title: "假设验证", items: ["明确待验证假设", "设计验证实验", "收集关键数据", "判断假设成立/推翻"] },
    { title: "快速迭代", items: ["小步快跑", "频繁发布", "快速试错", "持续优化"] }
  ];

  // Left cards
  leftContent.forEach((section, i) => {
    const y = 1.6 + i * 1.7;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.2, h: 1.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 1.5,
      fill: { color: theme.accent }
    });

    slide.addText(section.title, {
      x: 0.7, y: y + 0.1, w: 3.8, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    section.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: 0.7, y: y + 0.5 + j * 0.25, w: 3.8, h: 0.25,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Right side cards
  const rightContent = [
    { title: "何时停止", items: ["达到预设样本量", "统计显著性达标", "发现明确结论", "资源耗尽"] },
    { title: "风险控制", items: ["设置止损点", "控制实验时长", "监控异常指标", "准备回滚方案"] }
  ];

  rightContent.forEach((section, i) => {
    const y = 1.6 + i * 1.7;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: rightX, y: y, w: 4.0, h: 1.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: rightX, y: y, w: 0.06, h: 1.5,
      fill: { color: theme.primary }
    });

    slide.addText(section.title, {
      x: rightX + 0.2, y: y + 0.1, w: 3.6, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    section.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: rightX + 0.2, y: y + 0.5 + j * 0.25, w: 3.6, h: 0.25,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("120", {
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
  pres.writeFile({ fileName: "slide-120-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
