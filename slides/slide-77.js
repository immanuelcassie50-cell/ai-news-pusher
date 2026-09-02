// slide-77.js - 练习：判断对错
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 77,
  title: '练习：判断对错'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：判断对错", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Instruction
  slide.addText("判断以下说法是否正确，并说明理由：", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Statements
  const statements = [
    "\"斯密认为个人自利会自动促进公共利益\"（ ）",
    "\"奥地利学派和新古典经济学都接受均衡分析方法\"（ ）",
    "\"科斯定理意味着政府不应该干预产权纠纷\"（ ）",
    "\"行为经济学完全推翻了对理性人的假设\"（ ）"
  ];

  const startY = 1.6;
  const itemHeight = 0.85;

  statements.forEach((stmt, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Number badge
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.15, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y + 0.15, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Statement text
    slide.addText(stmt, {
      x: 1.3, y: y + 0.1, w: 7.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("77", {
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
  pres.writeFile({ fileName: "slide-77-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
