// slide-76.js - Case Sharing Session
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 76,
  title: '案例分享与点评'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("案例分享与点评", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("每组分享时间：5分钟", {
    x: 0.5, y: 1.0, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const sharingFormat = [
    { num: "1", title: "问题诊断", desc: "你们发现了哪些问题？运用了哪些理论？" },
    { num: "2", title: "策略设计", desc: "你们的解决方案是什么？为什么这样设计？" },
    { num: "3", title: "行动计划", desc: "你们的具体步骤是什么？时间线如何？" },
    { num: "4", title: "点评反馈", desc: "讲师和同学提问，优秀策略分享" }
  ];

  sharingFormat.forEach((s, i) => {
    const y = 1.5 + i * 0.95;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.05, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: 0.5, y: y + 0.13, w: 0.55, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(s.title, {
      x: 1.2, y: y, w: 2, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(s.desc, {
      x: 1.2, y: y + 0.4, w: 8, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-76-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
