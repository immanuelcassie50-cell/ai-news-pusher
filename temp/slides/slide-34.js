// slide-34.js - 招聘网站JD分析法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 34,
  title: '招聘网站JD分析法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("招聘网站JD分析法", {
    x: 0.4, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle
  slide.addText("通过追踪招聘需求变化，判断行业趋势", {
    x: 0.4, y: 0.85, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Timeline steps
  const steps = [
    { num: "1", text: "每年花时间看几个具体行业的招聘网站" },
    { num: "2", text: "看真实岗位的JD在这三年里怎么变" },
    { num: "3", text: "要求变严了还是变松了" },
    { num: "4", text: "薪资中位数在涨还是在跌" },
    { num: "5", text: "岗位数量在增还是在减" },
    { num: "6", text: "五年前入行的人现在在干什么" }
  ];

  const startY = 1.4;
  const stepH = 0.6;
  const stepGap = 0.15;

  steps.forEach((step, i) => {
    const y = startY + i * (stepH + stepGap);

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.1, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: 0.5, y: y + 0.1, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Connector line (except for last step)
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.68, y: y + 0.5, w: 0.04, h: stepGap + 0.1,
        fill: { color: theme.light }
      });
    }

    // Step text card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.1, y: y, w: 8.4, h: stepH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Left accent on card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.1, y: y, w: 0.06, h: stepH,
      fill: { color: theme.primary }
    });

    // Step text
    slide.addText(step.text, {
      x: 1.35, y: y, w: 7.95, h: stepH,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Bottom insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.0, w: 8.8, h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("核心：用历史数据预判未来行业走向", {
    x: 0.6, y: 5.0, w: 8.4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("34", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-34-preview.pptx" })
    .then(() => console.log("Created slide-34-preview.pptx"));
}

module.exports = { createSlide, slideConfig };
