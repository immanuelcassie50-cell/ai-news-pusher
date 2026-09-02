// slide-124.js - 进阶：多轮谈判策略
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 124,
  title: '进阶：多轮谈判策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("进阶：多轮谈判策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("Negotiations as a repeated game", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });

  // Two key concepts
  const concepts = [
    {
      num: "1",
      title: "Signal consistency",
      desc: "保持言行一致，让对手能预测你的行为"
    },
    {
      num: "2",
      title: "Build reputation across interactions",
      desc: "通过多轮互动建立可信的声誉"
    }
  ];

  concepts.forEach((c, idx) => {
    const y = 1.75 + idx * 1.3;

    // Number circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.7, h: 0.7,
      fill: { color: idx === 0 ? theme.primary : theme.accent }
    });
    slide.addText(c.num, {
      x: 0.7, y: y + 0.1, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(c.title, {
      x: 1.6, y: y, w: 7.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description (body text NOT bold)
    slide.addText(c.desc, {
      x: 1.6, y: y + 0.5, w: 7.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Key takeaway bar
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 8.5, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("声誉是在每一次互动中积累的无形资产", {
    x: 0.5, y: 4.7, w: 8.5, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("124", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-124-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
