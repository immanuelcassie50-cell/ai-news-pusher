// slide-78.js - 语言公约制定步骤
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 78,
  title: '制定家庭语言公约'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("制定家庭语言公约", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Steps
  const steps = [
    { num: "1", title: "全家参与", desc: "找一个轻松的时间，全家人坐在一起讨论" },
    { num: "2", title: "头脑风暴", desc: "每人说出哪些话让你感到受伤，哪些话让你感到被爱" },
    { num: "3", title: "共同制定", desc: '一起讨论制定"我们家的语言公约"，写下来' },
    { num: "4", title: "张贴出来", desc: "把公约张贴在显眼的地方，随时提醒" },
    { num: "5", title: "定期回顾", desc: "每月家庭会议回顾公约执行情况，适时调整" }
  ];

  const stepWidth = 1.7;
  const stepHeight = 3.6;
  const startX = 0.5;
  const stepY = 1.2;
  const gap = 0.25;

  steps.forEach((step, idx) => {
    const x = startX + idx * (stepWidth + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: stepY, w: stepWidth, h: stepHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + (stepWidth - 0.7) / 2, y: stepY + 0.25, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + (stepWidth - 0.7) / 2, y: stepY + 0.25, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: stepY + 1.1, w: stepWidth - 0.2, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: stepY + 1.65, w: stepWidth - 0.2, h: 1.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "top"
    });

    // Connecting line (except last)
    if (idx < steps.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + stepWidth + 0.05, y: stepY + 0.55, w: gap - 0.1, h: 0.04,
        fill: { color: theme.primary, transparency: 50 }
      });
    }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-78-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
