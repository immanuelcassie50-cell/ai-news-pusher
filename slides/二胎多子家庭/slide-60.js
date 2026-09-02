// slide-60.js - 场景三：告状大战
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 60,
  title: '场景三：告状大战'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("场景三：告状大战", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("场景：妹妹不停向父母告状\"哥哥欺负我\"", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // STEA solution
  const steps = [
    { step: "S", title: "看见情绪", desc: "\"妹妹很想被关注，哥哥很想有自主空间\"" },
    { step: "T", title: "翻译需求", desc: "\"妹妹告状是在求助，哥哥需要被信任\"" },
    { step: "E", title: "探索方案", desc: "给妹妹安排"小帮手"角色？给哥哥更多自主决定权？" },
    { step: "A", title: "达成协议", desc: "设立"家庭调解员"制度，小事自己解决，大事再求助" }
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
  pres.writeFile({ fileName: "slide-60-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
