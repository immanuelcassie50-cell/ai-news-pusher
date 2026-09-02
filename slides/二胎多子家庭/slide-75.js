// slide-75.js - 竞争vs合作对比
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 75,
  title: '竞争vs合作框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("竞争vs合作框架", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // VS in the middle
  slide.addShape(pres.shapes.OVAL, {
    x: 4.5, y: 2.5, w: 1, h: 1,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.5, y: 2.5, w: 1, h: 1,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Competition side (left)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 3.8, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 3.8, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("竞争框架", {
    x: 0.5, y: 1.2, w: 3.8, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const competitionItems = [
    "你输我赢的思维",
    '"你要超过他"',
    '"你怎么不如别人"',
    "比较和排名",
    "嫉妒和怨恨"
  ];
  competitionItems.forEach((item, idx) => {
    slide.addText("• " + item, {
      x: 0.7, y: 1.95 + idx * 0.55, w: 3.4, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Cooperation side (right)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.7, y: 1.2, w: 3.8, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.7, y: 1.2, w: 3.8, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("合作框架", {
    x: 5.7, y: 1.2, w: 3.8, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const cooperationItems = [
    "共赢的思维",
    '"我们一起"',
    '"你能帮帮他吗"',
    "互相支持和鼓励",
    "团队荣誉感"
  ];
  cooperationItems.forEach((item, idx) => {
    slide.addText("• " + item, {
      x: 5.9, y: 1.95 + idx * 0.55, w: 3.4, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-75-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
