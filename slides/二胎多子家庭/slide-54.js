// slide-54.js - STEA案例演示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 54,
  title: 'STEA案例演示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("STEA案例演示", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fill: { color: theme.light }
  });
  slide.addText("场景：哥哥（8岁）因为妹妹（5岁）弄坏了自己的玩具而大发雷霆", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // STEA steps for this case
  const steps = [
    { step: "S", action: "暂停，先不批评哥哥，观察他的情绪状态" },
    { step: "T", action: "提问：你这么生气，是因为玩具被弄坏感到伤心吗？" },
    { step: "E", action: "一起想解决方案：修好、买新的、或者让妹妹用别的方式补偿" },
    { step: "A", action: "约定：以后玩玩具前先问哥哥，妹妹要道歉并帮忙修" }
  ];

  const startY = 2.2;
  const itemHeight = 0.8;

  steps.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Step indicator
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.step, {
      x: 0.5, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Action text
    slide.addText(item.action, {
      x: 1.2, y: y, w: 8.3, h: 0.8,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
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
  pres.writeFile({ fileName: "slide-54-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
