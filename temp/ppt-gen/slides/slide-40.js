// slide-40.js - Trust Repair Strategies
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 40,
  title: '变革挫折期的信任修复策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革挫折期的信任修复策略", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 8.5, h: 1.5,
    fill: { color: theme.light }
  });

  slide.addText("当变革遇到挫折时，员工最可能的反应是：", {
    x: 0.7, y: 1.2, w: 6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  slide.addText(""看吧，我就说不行"  |  "领导又吹牛了"  |  "还是算了吧"", {
    x: 0.7, y: 1.7, w: 8, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
  });

  slide.addText("修复策略：", {
    x: 0.5, y: 2.8, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const repairStrategies = [
    "承认挫折，不遮掩不找借口",
    "解释原因，说明学到了什么",
    "调整方案，展现灵活性",
    "重审承诺，必要时收回不切实际的承诺"
  ];

  repairStrategies.forEach((s, i) => {
    slide.addShape("rect", {
      x: 0.5, y: 3.3 + i * 0.5, w: 0.08, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(s, {
      x: 0.75, y: 3.3 + i * 0.5, w: 8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-40-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
