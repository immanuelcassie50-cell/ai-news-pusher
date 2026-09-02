// slide-90.js - 最后的思考
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '最后的思考'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("最后的思考", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Main message
  const messages = [
    "学习经济思想史不是寻找终极真理",
    "而是在多元视角中培养独立思考"
  ];

  messages.forEach((msg, idx) => {
    const y = 1.3 + idx * 0.6;

    // Card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 }
    });

    // Text
    slide.addText(msg, {
      x: 0.7, y: y + 0.05, w: 8.6, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Names section
  slide.addText("斯密、哈耶克、弗里德曼、科斯......", {
    x: 0.5, y: 2.7, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Central insight
  slide.addShape("rect", {
    x: 1.5, y: 3.3, w: 7, h: 0.7,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("每一种声音都在提醒我们：经济的本质是人", {
    x: 1.5, y: 3.3, w: 7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Closing wish
  slide.addShape("rect", {
    x: 2, y: 4.3, w: 6, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("愿你在思想的海洋中找到自己的方向", {
    x: 2, y: 4.3, w: 6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("90", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-90-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
