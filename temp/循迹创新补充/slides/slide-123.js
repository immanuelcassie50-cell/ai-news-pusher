// slide-123.js - 课程总结过渡页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 123,
  title: '课程总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large title
  slide.addText("课程总结", {
    x: 0.5, y: 0.8, w: 9, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  // Subtitle
  slide.addText("从循迹到试真的创新闭环", {
    x: 0.5, y: 1.8, w: 9, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.4, y: 2.4, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Three module review cards
  const modules = [
    { num: "01", title: "循迹", subtitle: "发现创新线索", desc: "用户行为分析、市场洞察、需求挖掘" },
    { num: "02", title: "验证", subtitle: "验证创新方向", desc: "原型测试、概念验证、最小可行产品" },
    { num: "03", title: "试真", subtitle: "验证真实价值", desc: "A/B测试、可用性测试、数据驱动决策" }
  ];

  const cardW = 2.8;
  const cardH = 1.6;
  const startX = 0.75;
  const startY = 2.8;
  const gapX = 0.35;

  modules.forEach((mod, i) => {
    const x = startX + i * (cardW + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW / 2 - 0.25, y: startY - 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(mod.num, {
      x: x + cardW / 2 - 0.25, y: startY - 0.25, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(mod.title, {
      x: x + 0.1, y: startY + 0.35, w: cardW - 0.2, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Subtitle
    slide.addText(mod.subtitle, {
      x: x + 0.1, y: startY + 0.75, w: cardW - 0.2, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, align: "center"
    });

    // Description
    slide.addText(mod.desc, {
      x: x + 0.1, y: startY + 1.05, w: cardW - 0.2, h: 0.45,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Arrows between cards
    if (i < modules.length - 1) {
      slide.addText("→", {
        x: x + cardW, y: startY + cardH / 2 - 0.2, w: gapX, h: 0.4,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, align: "center", valign: "middle"
      });
    }
  });

  // Core value proposition
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 4.6, w: 7, h: 0.55,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("核心价值：以用户为圆心，循迹发现 → 验证优化 → 试真落地", {
    x: 1.5, y: 4.6, w: 7, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("123", {
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
  pres.writeFile({ fileName: "slide-123-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
