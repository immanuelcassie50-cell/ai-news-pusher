// slide-114.js - Case Discussion 1: Supplier Price Reduction Request
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 114,
  title: '案例讨论：供应商降价要求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例讨论：供应商降价要求", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Scenario recap box
  slide.addShape("roundRect", {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });

  slide.addText("场景回顾", {
    x: 0.7, y: 1.15, w: 1.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("某供应商要求你降低采购价格20%，否则将终止合作。\n这是典型的囚徒困境：你（买方）vs 供应商（卖方）。", {
    x: 0.7, y: 1.5, w: 8.6, h: 0.9,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "top"
  });

  // Discussion questions
  slide.addText("讨论问题", {
    x: 0.5, y: 2.65, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  const questions = [
    "如果接受降价，供应商会认为你软弱可欺，下次会提出更多要求",
    "如果拒绝降价，供应商可能真的终止合作，你能否承受这个后果",
    "这是单次博弈还是重复博弈？你和这个供应商的关系会持续多久？"
  ];

  questions.forEach((q, idx) => {
    const y = 3.05 + idx * 0.6;

    // Bullet point
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.12, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });

    // Question
    slide.addText(q, {
      x: 1.05, y: y, w: 8.45, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Action prompt
  slide.addShape("roundRect", {
    x: 0.5, y: 4.9, w: 9, h: 0.55,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("学完本课程后，你会如何应对这个供应商的降价要求？", {
    x: 0.7, y: 4.9, w: 8.6, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("114", {
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
  pres.writeFile({ fileName: "slide-114-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
