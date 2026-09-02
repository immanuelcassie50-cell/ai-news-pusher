// slide-84.js - Change Success Factors Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 84,
  title: '变革成功关键因素'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革成功关键因素", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const factors = [
    { num: "01", title: "高层坚定支持", desc: "领导层对变革的承诺和参与是成功的第一推动力" },
    { num: "02", title: "清晰变革愿景", desc: "让每个人都理解为什么要变、变向何方" },
    { num: "03", title: "充分沟通参与", desc: "持续的、双向的沟通，让员工参与进来" },
    { num: "04", title: "信任文化基础", desc: "建立在信任上的变革才能持久" },
    { num: "05", title: "能力建设跟上", desc: "培训和发展帮助员工适应新要求" },
    { num: "06", title: "及时认可激励", desc: "庆祝进步，认可贡献，维持变革动力" }
  ];

  factors.forEach((f, i) => {
    const y = 1.0 + i * 0.72;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.0, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(f.num, {
      x: 0.5, y: y + 0.12, w: 1.0, h: 0.35,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(f.title, {
      x: 1.7, y: y + 0.05, w: 2.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(f.desc, {
      x: 1.7, y: y + 0.35, w: 7.5, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-84-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
