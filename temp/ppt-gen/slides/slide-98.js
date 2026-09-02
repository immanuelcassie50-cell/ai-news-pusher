// slide-98.js - Recommended Reading
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 98,
  title: '推荐阅读与资源'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("推荐阅读与资源", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const books = [
    { title: "《变革之心》", author: "John Kotter", desc: "变革管理的经典之作，强调情感因素" },
    { title: "《Leading Change》", author: "John Kotter", desc: "变革管理的八步法模型" },
    { title: "《The Psychology of Change》", author: "Harvard Business Review", desc: "理解员工变革心理的必读 collection" },
    { title: "《Switch: How to Change Things》", author: "Chip & Dan Heath", desc: "如何克服变革中的理性与情感障碍" }
  ];

  books.forEach((b, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 1.0,
      fill: { color: theme.accent }
    });
    slide.addText(b.title, {
      x: 0.75, y: y + 0.15, w: 4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(b.author, {
      x: 4.75, y: y + 0.15, w: 2.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, align: "left"
    });
    slide.addText(b.desc, {
      x: 0.75, y: y + 0.55, w: 8.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-98-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
