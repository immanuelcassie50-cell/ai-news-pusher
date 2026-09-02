// slide-115.js - 用户验证方法概述
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 115,
  title: '用户验证方法概述'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("用户验证方法", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("用数据说话，而非直觉", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // 4 method cards in horizontal layout
  const methods = [
    { title: "定性研究", items: ["用户访谈", "焦点小组", "实地观察", "案例研究"] },
    { title: "定量研究", items: ["问卷调查", "A/B测试", "数据分析", "行为追踪"] },
    { title: "混合方法", items: ["三角验证", "先定性后定量", "定量验证定性", "迭代深化"] },
    { title: "方法选择", items: ["资源评估", "场景匹配", "精度要求", "时间约束"] }
  ];

  const cardW = 2.15;
  const cardH = 2.6;
  const startX = 0.5;
  const startY = 1.9;
  const gapX = 0.2;

  methods.forEach((method, i) => {
    const x = startX + i * (cardW + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: 0.08,
      fill: { color: theme.accent }
    });

    // Card title
    slide.addText(method.title, {
      x: x + 0.1, y: startY + 0.2, w: cardW - 0.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 0.65, w: cardW - 0.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Items
    method.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.15, y: startY + 0.8 + j * 0.42, w: cardW - 0.3, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Bottom note
  slide.addText("方法选择矩阵：根据研究目标、资源条件、时间约束选择最适合的验证方法组合", {
    x: 0.5, y: 4.85, w: 8.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("115", {
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
  pres.writeFile({ fileName: "slide-115-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
