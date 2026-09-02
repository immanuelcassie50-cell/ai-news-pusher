// slide-87.js - 资源推荐：书籍
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 87,
  title: '资源推荐：书籍'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("资源推荐：书籍", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Books
  const books = [
    {
      title: "《培训师21项技能》",
      author: "庞涛 著",
      desc: "系统介绍培训师必备的核心技能，从课程设计到现场呈现，适合初学者入门"
    },
    {
      title: "《交互式培训》",
      author: "Harold J. Stolovitch 著",
      desc: "强调以学员为中心的培训理念，提供大量互动方法和工具"
    },
    {
      title: "《金字塔原理》",
      author: "芭芭拉·明托 著",
      desc: "麦肯锡经典，讲解逻辑表达与思考方法，对课程结构设计很有帮助"
    }
  ];

  books.forEach((book, i) => {
    const y = 1.2 + i * 1.35;

    // Book card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Book icon placeholder
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: y + 0.2, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText("书", {
      x: 0.7, y: y + 0.2, w: 0.8, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(book.title, {
      x: 1.7, y: y + 0.15, w: 7.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Author
    slide.addText(book.author, {
      x: 1.7, y: y + 0.5, w: 7.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, margin: 0
    });

    // Description
    slide.addText(book.desc, {
      x: 1.7, y: y + 0.75, w: 7.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("87", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-87-preview.pptx" });
}

module.exports = { createSlide, slideConfig };