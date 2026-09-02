// slide-49.js - Learning Culture Building
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 49,
  title: '学习型变革文化建设的四个抓手'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("学习型变革文化建设的四个抓手", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const pillars = [
    { title: "反思机制", desc: "变革后有系统的复盘机制，不是追责而是找原因" },
    { title: "经验萃取", desc: "把个人经验转化为组织知识，可复制传承" },
    { title: "标杆学习", desc: "内部标杆案例的识别、宣传、推广" },
    { title: "持续改进", desc: "把改进变成日常工作习惯，而非运动式推进" }
  ];

  pillars.forEach((p, i) => {
    const y = 1.1 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.2, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(p.title, {
      x: 0.5, y: y + 0.27, w: 2.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.7, y: y, w: 6.3, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText(p.desc, {
      x: 2.9, y: y + 0.27, w: 5.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-49-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
