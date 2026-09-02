// slide-83.js - Organizational Culture (组织文化与合作)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 83,
  title: '组织文化与合作'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("组织文化与合作", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Culture diagram - iceberg model
  slide.addText("组织文化如同冰山", {
    x: 0.5, y: 1.1, w: 4.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Visible layer (above water)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 1.6, w: 4.1, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("可见层：行为、仪式、符号", {
    x: 0.7, y: 1.6, w: 4.1, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Water line
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 2.4, w: 4.5, h: 0,
    line: { color: theme.light, width: 2, dashType: "dash" }
  });

  // Invisible layer (below water)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.5, w: 4.1, h: 1.8,
    fill: { color: theme.primary, transparency: 70 }
  });
  slide.addText("隐藏层：价值观、信念\n假设、潜意识", {
    x: 0.7, y: 2.7, w: 4.1, h: 1.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Right side: Culture impact
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 1.1, w: 4.0, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addText("文化对合作的影响", {
    x: 5.7, y: 1.25, w: 3.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const impacts = [
    { title: "设定期望", desc: "文化规范告诉成员什么是可接受的行为" },
    { title: "塑造激励", desc: "合作行为得到文化认可和奖励" },
    { title: "领导示范", desc: "领导者以身作则，树立行为标准" }
  ];

  impacts.forEach((impact, idx) => {
    const y = 1.75 + idx * 0.8;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.7, y: y, w: 0.06, h: 0.65,
      fill: { color: theme.accent }
    });

    slide.addText(impact.title, {
      x: 5.9, y: y, w: 3.4, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(impact.desc, {
      x: 5.9, y: y + 0.32, w: 3.4, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("合作文化需要长期培育，但破坏只需一次负面事件", {
    x: 0.5, y: 4.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("83", {
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
  pres.writeFile({ fileName: "slide-83-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
