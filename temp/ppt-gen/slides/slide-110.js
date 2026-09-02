// slide-110.js - Change Vision Story Template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 110,
  title: '变革愿景故事模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革愿景故事模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("一个好愿景 = 痛点共鸣 + 未来画面 + 行动号召", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const template = [
    { part: "痛点描述", content: "我们正面临[具体挑战]，如果不改变，[负面后果]", example: "我们每年在重复性数据录入上花费10000小时，这让我们没有时间做更有价值的工作" },
    { part: "未来画面", content: "通过[变革方案]，我们将实现[具体目标]", example: "通过自动化这套流程，我们将节省70%的时间，让每个人都能专注于需要思考的工作" },
    { part: "行动号召", content: "现在，我们需要你[具体行动]，一起迈向[美好未来]", example: "现在，我们需要你积极使用新系统，提出改进建议，一起打造更高效的工作方式" }
  ];

  template.forEach((t, i) => {
    const y = 1.5 + i * 1.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 1.15,
      fill: { color: theme.accent }
    });
    slide.addText(t.part, {
      x: 0.5, y: y + 0.4, w: 2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.5, y: y, w: 7, h: 1.15,
      fill: { color: theme.light }
    });
    slide.addText(t.content, {
      x: 2.7, y: y + 0.1, w: 6.6, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText("例：" + t.example, {
      x: 2.7, y: y + 0.55, w: 6.6, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true, align: "left"
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
  pres.writeFile({ fileName: "slide-110-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
