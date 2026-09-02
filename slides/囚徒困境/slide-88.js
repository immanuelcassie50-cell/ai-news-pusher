// slide-88.js - Case: Supplier Development (案例：供应商发展计划)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '案例：供应商发展计划'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例：供应商发展计划", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Case context
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("场景：某大型制造企业投资供应商的能力建设", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Investment areas
  slide.addText("投资领域", {
    x: 0.5, y: 1.95, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const investments = [
    "设备采购支持",
    "技术培训与指导",
    "质量管理体系建立",
    "信息化系统对接"
  ];

  investments.forEach((inv, idx) => {
    const y = 2.4 + idx * 0.45;

    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });

    slide.addText(inv, {
      x: 1.0, y: y, w: 3.8, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Effects diagram
  slide.addText("双重效应", {
    x: 5.2, y: 1.95, w: 4.3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Dependency effect (left arrow)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.4, w: 1.8, h: 1.2,
    fill: { color: theme.secondary }
  });
  slide.addText("供应商\n依赖度增加", {
    x: 5.2, y: 2.55, w: 1.8, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Arrow
  slide.addText("→", {
    x: 7.0, y: 2.8, w: 0.5, h: 0.4,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Value increase (right box)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.5, y: 2.4, w: 1.8, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("供应商\n价值提升", {
    x: 7.5, y: 2.55, w: 1.8, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Win-win result
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("双赢结果：企业获得稳定供应，供应商获得成长机会", {
    x: 0.5, y: 4.2, w: 9, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("88", {
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
  pres.writeFile({ fileName: "slide-88-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
