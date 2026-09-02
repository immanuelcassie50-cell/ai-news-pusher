// slide-113.js - Recommended Reading
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 113,
  title: '推荐阅读'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("推荐阅读", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three book recommendations
  const books = [
    {
      title: "《合作的进化》",
      author: "Robert Axelrod",
      desc: "通过计算机竞赛验证针锋相对策略的有效性，是重复博弈理论的经典之作",
      color: theme.primary
    },
    {
      title: "《博弈论与经济行为》",
      author: "von Neumann & Morgenstern",
      desc: "博弈论的开山之作，建立了博弈论的基本理论框架",
      color: theme.accent
    },
    {
      title: "《竞争与合作》",
      author: "Barry Nalebuff",
      desc: "商业策略中的博弈论应用，用案例解析竞争与合作的关系",
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.2;
  const startX = 0.5;
  const gap = 0.35;

  books.forEach((book, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("roundRect", {
      x: x, y: 1.2, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Top colored section
    slide.addShape("rect", {
      x: x, y: 1.2, w: cardWidth, h: 0.08,
      fill: { color: book.color }
    });

    // Book icon placeholder (decorative rectangle)
    slide.addShape("roundRect", {
      x: x + 0.9, y: 1.45, w: 1.1, h: 1.4,
      fill: { color: book.color, transparency: 85 },
      rectRadius: 0.05
    });
    slide.addShape("rect", {
      x: x + 0.95, y: 1.55, w: 1.0, h: 0.15,
      fill: { color: book.color }
    });
    slide.addShape("rect", {
      x: x + 0.95, y: 1.75, w: 1.0, h: 0.08,
      fill: { color: book.color, transparency: 50 }
    });
    slide.addShape("rect", {
      x: x + 0.95, y: 1.88, w: 0.6, h: 0.08,
      fill: { color: book.color, transparency: 50 }
    });

    // Title
    slide.addText(book.title, {
      x: x + 0.1, y: 2.95, w: cardWidth - 0.2, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Author
    slide.addText(book.author, {
      x: x + 0.1, y: 3.4, w: cardWidth - 0.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.3, y: 3.8, w: cardWidth - 0.6, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(book.desc, {
      x: x + 0.15, y: 3.9, w: cardWidth - 0.3, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom note
  slide.addShape("roundRect", {
    x: 0.5, y: 4.65, w: 9, h: 0.8,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("延伸阅读建议", {
    x: 0.7, y: 4.7, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("先读Axelrod的书入门，再读Nalebuff的案例，最后挑战经典理论", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("113", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-113-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
