// slide-70.js - Employee Mindset Identification Cards
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 70,
  title: '员工心态识别四象限'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("员工心态识别四象限", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Four quadrants
  const quadrants = [
    { x: 0.5, y: 1.1, label: "支持者", desc: "相信变革，理解原因\n积极参与，主动传播", color: "28A745", icon: "★" },
    { x: 5.0, y: 1.1, label: "观望者", desc: "理解变革，但有疑虑\n需要更多信息和证明", color: theme.accent, icon: "○" },
    { x: 0.5, y: 3.3, label: "抵触者", desc: "不相信变革，认为会失败\n需要重点关注和引导", color: "DC3545", icon: "✗" },
    { x: 5.0, y: 3.3, label: "沉默者", desc: "不理解变革，也不表达\n需要主动沟通和参与", color: "FFC107", icon: "●" }
  ];

  quadrants.forEach(q => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: q.x, y: q.y, w: 4.5, h: 2.0,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: q.x, y: q.y, w: 4.5, h: 0.5,
      fill: { color: q.color }
    });
    slide.addText(q.label, {
      x: q.x, y: q.y + 0.08, w: 4.5, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(q.desc, {
      x: q.x + 0.2, y: q.y + 0.6, w: 4, h: 1.2,
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
  pres.writeFile({ fileName: "slide-70-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
