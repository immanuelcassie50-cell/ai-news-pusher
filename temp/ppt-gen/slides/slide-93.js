// slide-93.js - Change Communication Script
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 93,
  title: '变革沟通话术模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革沟通话术模板", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const scenarios = [
    {
      scenario: "回应"为什么要变？"",
      script: ""我理解你的疑问。事实上，我们面临的市场环境正在快速变化，如果保持现状，18个月后我们的竞争力将明显下降。这次变革不是选择题，而是生存题。但我们不是盲目变，而是在充分评估后做出的战略决策。""
    },
    {
      scenario: "回应"担心被裁员"",
      script: ""我理解你的担忧，这种担心是真实的，我能感受到你的压力。我们的目标不是裁员，而是通过效率提升，让每个人都能做更有价值的工作。对于愿意学习、愿意成长的同事，我们会提供充分的培训和发展机会。""
    },
    {
      scenario: "回应"以前也变过，没用"",
      script: ""你说得对，过去的变革确实有过不成功的时候，这让我们更加谨慎。这次变革我们会做得不一样——我们会把员工参与放在第一位，每一个重要决定都会充分听取大家的意见。""
    }
  ];

  scenarios.forEach((s, i) => {
    const y = 1.0 + i * 1.45;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.35,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 1.35,
      fill: { color: theme.accent }
    });
    slide.addText("场景：" + s.scenario, {
      x: 0.7, y: y + 0.1, w: 8.6, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(s.script, {
      x: 0.7, y: y + 0.5, w: 8.6, h: 0.75,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", italic: true
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
  pres.writeFile({ fileName: "slide-93-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
