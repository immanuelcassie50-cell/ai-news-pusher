// slide-74.js - Change Leadership Self-Assessment
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 74,
  title: '变革领导力自我评估'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革领导力自我评估", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const dimensions = [
    { dim: "沟通能力", desc: "清晰表达变革愿景，积极倾听员工声音" },
    { dim: "信任建设", desc: "言行一致，兑现承诺，保护员工利益" },
    { dim: "冲突管理", desc: "有效处理变革中的矛盾和分歧" },
    { dim: "团队激励", desc: "调动团队积极性，认可和鼓励进步" },
    { dim: "适应能力", desc: "灵活调整策略应对变化" }
  ];

  dimensions.forEach((d, i) => {
    const y = 1.0 + i * 0.85;
    slide.addText(d.dim, {
      x: 0.5, y: y, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(d.desc, {
      x: 2.5, y: y, w: 5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    // Rating scale
    for (let j = 1; j <= 5; j++) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 7.5 + j * 0.3, y: y + 0.05, w: 0.25, h: 0.3,
        fill: { color: j <= 3 ? theme.light : theme.accent }
      });
    }
  });

  slide.addText("评分标准：1=完全不符合，5=完全符合", {
    x: 0.5, y: 5.1, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true, align: "left"
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
  pres.writeFile({ fileName: "slide-74-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
