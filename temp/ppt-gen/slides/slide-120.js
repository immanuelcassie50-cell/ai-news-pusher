// slide-120.js - Course Conclusion and Call to Action
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 120,
  title: '课程结语'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("结语", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Main message
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 2.5,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 0.12, h: 2.5,
    fill: { color: theme.accent }
  });

  slide.addText(""数字化转型的真正挑战，\n从来不是技术，而是人心。"", {
    x: 0.8, y: 1.5, w: 8.5, h: 1,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("当我们真正理解了员工为什么抵触，\n当我们建立了真正的信任，\n当我们让每一个人都愿意参与进来——\n变革，就成功了。", {
    x: 0.8, y: 2.6, w: 8.5, h: 1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Call to action
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.2,
    fill: { color: theme.accent }
  });
  slide.addText("从今天开始，用信任去赢得变革", {
    x: 0.7, y: 4.3, w: 8.6, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-120-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
