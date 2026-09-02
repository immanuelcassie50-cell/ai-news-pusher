// slide-118.js - Digital Transformation Trends 2024-2025
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 118,
  title: '数字化转型趋势2024-2025'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("数字化转型趋势与变革管理启示", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const trends = [
    { trend: "AI全面渗透", change: "从"辅助工具"到"核心能力"，员工对AI替代的恐惧达到顶峰" },
    { trend: "敏捷常态化", change: "持续变化成为新常态，"变革疲劳"成为普遍问题" },
    { trend: "远程协作深化", change: "传统信任建立模式受挑战，需要新的沟通和信任建设方式" },
    { trend: "数据驱动文化", change: "员工需要理解为什么数据比经验更重要，观念转变是关键" }
  ];

  trends.forEach((t, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 3, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(t.trend, {
      x: 0.7, y: y + 0.3, w: 2.6, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3.5, y: y, w: 6, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText(t.change, {
      x: 3.7, y: y + 0.3, w: 5.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-118-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
