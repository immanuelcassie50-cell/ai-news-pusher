// slide-77.js - Key Takeaways Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 77,
  title: '课程核心收获'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("课程核心收获", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const takeaways = [
    { title: "认知升级", content: "理解数字化转型不仅是技术升级，更是人的变革" },
    { title: "方法工具", content: "掌握变革共识建立、信任维护、心态识别的具体方法" },
    { title: "实战能力", content: "能够诊断变革问题，设计解决方案，制定行动计划" },
    { title: "领导力提升", content: "理解变革领导者的六种角色，提升综合领导力" }
  ];

  takeaways.forEach((t, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.9,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.9,
      fill: { color: theme.accent }
    });
    slide.addText(t.title, {
      x: 0.75, y: y + 0.15, w: 2, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(t.content, {
      x: 0.75, y: y + 0.5, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
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
  pres.writeFile({ fileName: "slide-77-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
