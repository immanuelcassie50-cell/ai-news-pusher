// slide-132.js - 影响决策的认知偏差
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 132,
  title: '影响决策的认知偏差'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("影响决策的认知偏差", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Four biases in 2x2 grid
  const biases = [
    {
      title: "过度自信",
      desc: "90%的司机认为自己驾驶水平高于平均",
      impact: "在博弈中高估自己胜算，低估对手能力"
    },
    {
      title: "沉没成本谬误",
      desc: "已经投入的无法收回，但决策应面向未来",
      impact: "明知合作已无收益，却因投入太多而继续"
    },
    {
      title: "锚定效应",
      desc: "最先获得的信息成为心理锚点",
      impact: "先开价者主导谈判，后续让步被放大"
    },
    {
      title: "可得性启发",
      desc: "最近发生的事容易被高估概率",
      impact: "最近被背叛过，就觉得所有人都会背叛"
    }
  ];

  biases.forEach((b, i) => {
    const x = i % 2 === 0 ? 0.5 : 5.1;
    const y = i < 2 ? 1.15 : 3.15;

    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape("rect", {
      x: x, y: y, w: 0.08, h: 1.8,
      fill: { color: i < 2 ? theme.primary : theme.accent }
    });

    slide.addText(b.title, {
      x: x + 0.2, y: y + 0.1, w: 4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(b.desc, {
      x: x + 0.2, y: y + 0.5, w: 4, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    slide.addText("→ " + b.impact, {
      x: x + 0.2, y: y + 1.0, w: 4, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("132", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-132-preview.pptx" });
}
