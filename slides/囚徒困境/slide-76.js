// slide-76.js - Third-party Verification (第三方验证)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '第三方验证'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("第三方验证", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Diagram: Third party as neutral intermediary
  // Left: Party A
  slide.addShape(pres.shapes.OVAL, {
    x: 1.2, y: 2.3, w: 1.6, h: 1.0,
    fill: { color: theme.secondary }
  });
  slide.addText("甲方", {
    x: 1.2, y: 2.55, w: 1.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Right: Party B
  slide.addShape(pres.shapes.OVAL, {
    x: 7.2, y: 2.3, w: 1.6, h: 1.0,
    fill: { color: theme.secondary }
  });
  slide.addText("乙方", {
    x: 7.2, y: 2.55, w: 1.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Center: Third party
  slide.addShape(pres.shapes.OVAL, {
    x: 4.0, y: 1.8, w: 2.0, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("第三方\n(中立)", {
    x: 4.0, y: 2.0, w: 2.0, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Lines to third party
  slide.addShape(pres.shapes.LINE, {
    x: 2.8, y: 2.8, w: 1.2, h: -0.5,
    line: { color: theme.primary, width: 2 }
  });
  slide.addShape(pres.shapes.LINE, {
    x: 6.0, y: 2.8, w: 1.2, h: -0.5,
    line: { color: theme.primary, width: 2 }
  });

  // Verifier types
  const verifiers = [
    { title: "审计师", desc: "财务审计、合规审查" },
    { title: "检测机构", desc: "质量检测、资质认证" },
    { title: "监理方", desc: "项目监理、进度监督" },
    { title: "认证机构", desc: "体系认证、资格认证" }
  ];

  const cardWidth = 2.15;
  const startX = 0.6;
  const startY = 3.7;
  const gapX = 0.2;

  verifiers.forEach((v, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 1.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: 0.06, h: 1.15,
      fill: { color: theme.accent }
    });

    slide.addText(v.title, {
      x: x + 0.15, y: startY + 0.15, w: cardWidth - 0.25, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(v.desc, {
      x: x + 0.15, y: startY + 0.55, w: cardWidth - 0.25, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("76", {
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
  pres.writeFile({ fileName: "slide-76-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
