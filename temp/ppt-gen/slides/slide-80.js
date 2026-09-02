// slide-80.js - Trust Measurement Indicators
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 80,
  title: '信任度评估指标体系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("信任度评估指标体系", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const indicators = [
    { category: "沟通信任", items: ["信息透明度评分", "沟通及时性评分", "反馈响应度评分"] },
    { category: "能力信任", items: ["专业能力认可度", "决策质量评分", "问题解决能力"] },
    { category: "善意信任", items: ["关心员工程度", "利益保护评分", "承诺兑现率"] },
    { category: "整体信任", items: ["总体信任度评分", "愿意追随程度", "推荐给他人意愿"] }
  ];

  indicators.forEach((ind, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 1.9,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(ind.category, {
      x: x, y: y + 0.1, w: 4, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    ind.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.2, y: y + 0.6 + j * 0.4, w: 3.6, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "left"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-80-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
