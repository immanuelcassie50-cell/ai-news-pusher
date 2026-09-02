// slide-30.js - Consensus Building Evolution
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 30,
  title: '从知情到承诺：沟通策略演变'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("从知情到承诺：沟通策略演变", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const strategies2 = [
    { from: "告知", to: "理解", method: "多渠道传播、FAQ文档、答疑会" },
    { from: "理解", to: "认同", method: "一对一沟通、案例分享、让员工提问" },
    { from: "认同", to: "承诺", method: "参与式规划、授权决策、表彰激励" }
  ];

  strategies2.forEach((s, i) => {
    const y = 1.2 + i * 1.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.5, h: 1.1,
      fill: { color: theme.accent }
    });
    slide.addText(s.from + " → " + s.to, {
      x: 0.5, y: y + 0.35, w: 2.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3, y: y, w: 6, h: 1.1,
      fill: { color: theme.light }
    });
    slide.addText("方法：" + s.method, {
      x: 3.2, y: y + 0.35, w: 5.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("关键：不能跳过层次，每个层次都需要时间和投入", {
    x: 0.5, y: 5.0, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
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
  pres.writeFile({ fileName: "slide-30-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
