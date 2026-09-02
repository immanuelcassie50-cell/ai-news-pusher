// slide-101.js - Q&A Session
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 101,
  title: '问答与反思'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("问答与反思", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("在进入问答环节前，请先思考：", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const reflections = [
    "这门课中，哪一个概念或工具对你最有启发？",
    "在你的工作或生活中，是否有类似的变革经历？",
    "如果要用一句话总结你今天最大的收获，会是什么？",
    "接下来一周，你可以开始做的一件小事是什么？"
  ];

  reflections.forEach((r, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: 1.5 + i * 0.85, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: 1.6 + i * 0.85, w: 0.5, h: 0.3,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(r, {
      x: 1.2, y: 1.5 + i * 0.85, w: 8.3, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 9, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("💬 现在是提问时间——任何问题都可以，没有"傻问题"", {
    x: 0.7, y: 4.98, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "left"
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
  pres.writeFile({ fileName: "slide-101-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
