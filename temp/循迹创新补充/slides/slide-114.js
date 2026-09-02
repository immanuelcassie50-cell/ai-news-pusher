// slide-114.js - 模块四学习目标
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 114,
  title: '模块四学习目标'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("模块四学习目标", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("试真：验证创新的真实价值", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // 4 learning objectives in 2x2 grid
  const objectives = [
    { num: "01", title: "掌握用户验证方法", desc: "学习定性、定量、混合研究方法，根据场景选择最优验证策略" },
    { num: "02", title: "学会设计验证实验", desc: "掌握A/B测试、可用性测试等实验设计要点，确保数据可靠" },
    { num: "03", title: "建立数据驱动思维", desc: "从数据中发现真相，用证据说话而非凭直觉做决策" },
    { num: "04", title: "培养迭代优化能力", desc: "理解Build-Measure-Learn循环，快速验证持续改进" }
  ];

  const cardW = 4.3;
  const cardH = 1.4;
  const startX = 0.5;
  const startY = 2.0;
  const gapX = 0.4;
  const gapY = 0.35;

  objectives.forEach((obj, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(obj.num, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Card title
    slide.addText(obj.title, {
      x: x + 0.85, y: y + 0.25, w: cardW - 1.0, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Card description
    slide.addText(obj.desc, {
      x: x + 0.2, y: y + 0.8, w: cardW - 0.4, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.1, w: 8.5, h: 0.06,
    fill: { color: theme.accent }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("114", {
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
  pres.writeFile({ fileName: "slide-114-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
