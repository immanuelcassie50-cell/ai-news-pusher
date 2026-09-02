// slide-68.js - 惩罚机制设计
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '惩罚机制设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("惩罚机制设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("Effective punishment must be:", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Three cards with icons
  const items = [
    { keyword: "及时", english: "Timely", desc: "快速响应违规行为" },
    { keyword: "成比例", english: "Proportionate", desc: "惩罚与违规程度相匹配" },
    { keyword: "可执行", english: "Enforceable", desc: "惩罚机制能够真正执行" }
  ];

  items.forEach((item, idx) => {
    const x = 0.5 + idx * 3.1;

    // Card background
    slide.addShape("rect", {
      x: x, y: 1.7, w: 2.9, h: 3.2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent bar
    slide.addShape("rect", {
      x: x, y: 1.7, w: 2.9, h: 0.15,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape("ellipse", {
      x: x + 0.95, y: 2.0, w: 1.0, h: 1.0,
      fill: { color: theme.light }
    });

    // Icon text (Chinese character)
    slide.addText(item.keyword.charAt(0), {
      x: x + 0.95, y: 2.0, w: 1.0, h: 1.0,
      fontSize: 28, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Chinese keyword
    slide.addText(item.keyword, {
      x: x, y: 3.15, w: 2.9, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English
    slide.addText(item.english, {
      x: x, y: 3.6, w: 2.9, h: 0.4,
      fontSize: 14, fontFace: "Georgia",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: x + 0.15, y: 4.1, w: 2.6, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Page number badge
  slide.addText("68", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Georgia",
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
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
