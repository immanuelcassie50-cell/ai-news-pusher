// slide-14.js - Part 1 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 14,
  title: '第一部分小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第一部分小结", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const summary = [
    { title: "变革的本质", content: "技术升级只是表象，组织与人的转型才是核心" },
    { title: "失败的教训", content: "70%的变革失败，员工信任缺失是隐藏原因" },
    { title: "信任的脆弱", content: "信任建立需要时间，崩塌却在一瞬间" },
    { title: "员工的心理", content: "恐惧、困惑、抵触、失落——都是正常反应" }
  ];

  summary.forEach((s, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.5, h: 0.9,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.25, w: 2.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3, y: y, w: 6.5, h: 0.9,
      fill: { color: theme.light }
    });
    slide.addText(s.content, {
      x: 3.2, y: y + 0.25, w: 6, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("进入第二部分：员工变革心理画像", {
    x: 0.5, y: 5.2, w: 6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
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
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
