// slide-78.js - Core Concept: 案例不是拿来炫耀
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 78, title: '案例不是拿来炫耀' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("案例不是拿来炫耀", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Big quote card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    rectRadius: 0.12,
    shadow: { type: `outer`, color: `000000`, blur: 6, offset: 3, angle: 135, opacity: 0.1 }
  });

  // Quote mark (left)
  slide.addText("“", {
    x: 0.7, y: 1.1, w: 0.8, h: 0.8,
    fontSize: 72, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  // Main quote text
  slide.addText("讲案例不是为了证明我很厉害，是为了让对面的人有机会当场推翻我，推翻不了，他才真的信。", {
    x: 1.0, y: 1.6, w: 8.0, h: 1.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Explanation cards
  const explanations = [
    {
      title: "证明 vs 证伪",
      desc: "讲案例是为了让对方质疑、挑战、甚至推翻。推翻不了，他才真的信。"
    },
    {
      title: "扎实信任的来源",
      desc: "真正让人产生扎实信任的案例，是用来让对方质疑的，而不是滴水不漏的成功故事。"
    }
  ];

  explanations.forEach((item, idx) => {
    const y = 3.85 + idx * 0.75;

    // Small card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.65,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Bullet
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.22, w: 0.22, h: 0.22,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(item.title, {
      x: 1.05, y: y + 0.08, w: 2.0, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 3.0, y: y + 0.08, w: 6.3, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("78", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-78-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
