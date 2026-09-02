// slide-89.js - 资源推荐第1页 - 推荐阅读
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '推荐阅读'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("推荐阅读", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Books
  const books = [
    { title: "正面管教", desc: "简·尼尔森" },
    { title: "如何说孩子才会听", desc: "阿黛尔·法伯" },
    { title: "Siblings Without Rivalry", desc: "Elaine Mazlish" },
    { title: "情感依附", desc: "约翰·鲍尔比" }
  ];

  const cardWidth = 4.2;
  const cardHeight = 1.6;
  const startX = 0.55;
  const startY = 1.3;
  const gapX = 0.35;
  const gapY = 0.3;

  books.forEach((book, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Book icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.4, w: 0.8, h: 0.8,
      fill: { color: theme.accent, transparency: 20 }
    });
    slide.addText("📚", {
      x: x + 0.25, y: y + 0.4, w: 0.8, h: 0.8,
      fontSize: 24,
      align: "center", valign: "middle"
    });

    // Book title
    slide.addText(book.title, {
      x: x + 1.2, y: y + 0.35, w: 2.8, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Author
    slide.addText(book.desc, {
      x: x + 1.2, y: y + 0.9, w: 2.8, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-89-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
