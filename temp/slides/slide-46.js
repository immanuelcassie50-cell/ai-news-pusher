// slide-46.js - What AI Does Well
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 46,
  title: 'AI擅长的'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("AI擅长的", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Main capability card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 1.0,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("输入明确、规则清晰、可以被结构化的计算", {
    x: 0.7, y: 1.0, w: 8.6, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Capability items
  const items = [
    { icon: "01", title: "分数 + 位次", desc: "给定考生分数和位次，结合历年录取数据" },
    { icon: "02", title: "精准计算", desc: "算出技术上合理的冲稳保梯度表" },
    { icon: "03", title: "高效规范", desc: "效率比人工高得多，比经验不足的新手同行更规范" }
  ];

  items.forEach((item, i) => {
    const y = 2.2 + i * 1.0;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.1
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.175, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(item.icon, {
      x: 0.7, y: y + 0.175, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.4, y: y + 0.1, w: 3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 1.4, y: y + 0.45, w: 7.9, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Key insight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.05, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 70 },
    rectRadius: 0.08
  });
  slide.addText("这是AI最擅长的事：把确定的东西算得又快又准", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("46", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-46-preview.pptx" })
    .then(() => console.log("Preview saved: slide-46-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
