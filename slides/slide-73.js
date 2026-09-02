// slide-73.js - Most Favored Nation Clauses (最惠待遇条款)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 73,
  title: '最惠待遇条款'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("最惠待遇条款", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // English subtitle
  slide.addText("Most Favored Nation (MFN) Clause", {
    x: 0.5, y: 1.1, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Definition box
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 9, h: 0.8,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("定义：如果你给第三方更好的条件，我自动享有同等条件", {
    x: 0.7, y: 1.55, w: 8.6, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Diagram: Three parties
  // Party A at top
  slide.addShape("ellipse", {
    x: 4.25, y: 2.6, w: 1.5, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("甲方", {
    x: 4.25, y: 2.75, w: 1.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Party B at bottom left
  slide.addShape("ellipse", {
    x: 2, y: 4.0, w: 1.5, h: 0.9,
    fill: { color: theme.secondary }
  });
  slide.addText("乙方", {
    x: 2, y: 4.15, w: 1.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Party C at bottom right
  slide.addShape("ellipse", {
    x: 6.5, y: 4.0, w: 1.5, h: 0.9,
    fill: { color: theme.secondary }
  });
  slide.addText("丙方", {
    x: 6.5, y: 4.15, w: 1.5, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Lines from A to B and C
  slide.addShape(pres.shapes.LINE, {
    x: 3.75, y: 3.5, w: -0.5, h: 0.5,
    line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 6.25, y: 3.5, w: 0.5, h: 0.5,
    line: { color: theme.accent, width: 2 }
  });

  // MFN label
  slide.addText("MFN", {
    x: 4.4, y: 3.3, w: 1.2, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Key benefit box
  slide.addShape("rect", {
    x: 0.5, y: 2.5, w: 3.2, h: 0.7,
    fill: { color: theme.accent }
  });
  slide.addText("防止秘密优惠\n稳定合作关系", {
    x: 0.5, y: 2.5, w: 3.2, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Right side: Application scenarios
  slide.addText("应用场景", {
    x: 6.8, y: 2.5, w: 2.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const scenarios = ["供应商合同", "经销商协议", "战略合作", "合资条款"];
  scenarios.forEach((s, idx) => {
    slide.addShape("ellipse", {
      x: 6.8, y: 2.95 + idx * 0.35, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(s, {
      x: 7.0, y: 2.85 + idx * 0.35, w: 2.5, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("73", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
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
  pres.writeFile({ fileName: "slide-73-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
