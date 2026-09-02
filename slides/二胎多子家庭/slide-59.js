// slide-59.js - 场景二：谁睡大床
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 59,
  title: '场景二：谁睡大床'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("场景二：谁睡大床", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("场景：两兄弟争要睡大床，说\"他凭什么睡大床我也要\"", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // STEA solution
  const steps = [
    { step: "S", title: "看见情绪", desc: "\"你们都很想睡大床，这很正常\"" },
    { step: "T", title: "翻译需求", desc: "\"你们想要的不只是大床，而是被公平对待的感觉\"" },
    { step: "E", title: "探索方案", desc: "轮流睡？大床加宽？还是找到其他公平方式？" },
    { step: "A", title: "达成协议", desc: "每周轮流，下周换人；或者周末是"大床日"" }
  ];

  const startY = 2.0;
  const itemHeight = 0.85;

  steps.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Step indicator
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.18, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.step, {
      x: 0.5, y: y + 0.18, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.15, y: y + 0.1, w: 1.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 1.15, y: y + 0.45, w: 8.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
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
  pres.writeFile({ fileName: "slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
