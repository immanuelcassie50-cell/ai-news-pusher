// slide-54.js - 校验真实风险承受力
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 54,
  title: '校验真实风险承受力'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("校验真实风险承受力", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Problem statement card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.9,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.1
  });
  slide.addText("问题：十七八岁的孩子容易在谈话情境里说出连自己都未必确认过的话", {
    x: 0.7, y: 1.0, w: 8.6, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Sub-problem
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.0, w: 9, h: 0.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 2, offset: 1, angle: 135, opacity: 0.06 },
    rectRadius: 0.08
  });
  slide.addText("尤其父母在场时，容易说出让大家都满意的答案", {
    x: 0.7, y: 2.0, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Solution section
  const solutionY = 2.9;

  // Solution header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: solutionY, w: 2.0, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("解决方案", {
    x: 0.5, y: solutionY, w: 2.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Solution content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: solutionY + 0.5, w: 9, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Solution text
  slide.addText("用间接方式校验", {
    x: 0.7, y: solutionY + 0.6, w: 8.6, h: 0.35,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  slide.addText("问过去有没有经历过明显失败/挫折，怎么走出来的，走出来花了多久", {
    x: 0.7, y: solutionY + 0.95, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("这段真实经历比“我能接受”更能反映实际抗压能力", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.8,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("54", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-54-preview.pptx" })
    .then(() => console.log("Created: slide-54-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
