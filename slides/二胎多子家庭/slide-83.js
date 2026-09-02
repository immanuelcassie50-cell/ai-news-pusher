// slide-83.js - 课程回顾第3页 - 核心理念回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 83,
  title: '核心理念回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("核心理念回顾", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key concepts
  const concepts = [
    "公平感≠平均",
    "每个孩子都是独特的星辰",
    "质量胜于数量的专属时间",
    "冲突是成长的机会",
    "改变语言改变关系"
  ];

  const startY = 1.4;
  const itemHeight = 0.75;
  const startX = 0.75;

  concepts.forEach((concept, idx) => {
    const y = startY + idx * itemHeight;

    // Quote mark decoration
    slide.addText(""", {
      x: startX, y: y - 0.1, w: 0.5, h: 0.5,
      fontSize: 36, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "top"
    });

    // Concept text
    slide.addText(concept, {
      x: startX + 0.5, y: y, w: 8, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Separator line
    if (idx < concepts.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: startX + 0.5, y: y + 0.65, w: 8, h: 0,
        line: { color: theme.light, width: 0.5, transparency: 50 }
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
  pres.writeFile({ fileName: "slide-83-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
