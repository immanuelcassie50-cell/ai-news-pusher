// slide-94.js - Digital Transformation Trends 2024
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 94,
  title: '数字化转型趋势与变革管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("数字化转型趋势与变革管理", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const trends = [
    { trend: "AI渗透每个岗位", implication: "员工对AI替代的恐惧比以往任何技术变革都更强烈" },
    { trend: "敏捷转型常态化", implication: "持续变化成为新常态，员工需要适应"持续变革"" },
    { trend: "远程/混合办公", implication: "传统沟通方式和信任建立模式受到挑战" },
    { trend: "数据驱动决策", implication: "员工需要理解为什么数据比经验更重要" }
  ];

  trends.forEach((t, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 3.5, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(t.trend, {
      x: 0.7, y: y + 0.3, w: 3.1, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "left"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4, y: y, w: 5.5, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText("变革启示：" + t.implication, {
      x: 4.2, y: y + 0.3, w: 5.1, h: 0.35,
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
  pres.writeFile({ fileName: "slide-94-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
