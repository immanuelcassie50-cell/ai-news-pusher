// slide-22.js - Part 2 Summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 22,
  title: '第二部分小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("第二部分小结", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const summary = [
    { title: "四类心态", content: "开拓者、跟随者、抵触者、观望者——各类有不同特征" },
    { title: "差异化管理", content: "不能用同一套策略应对所有人，需要差异化沟通" },
    { title: "抵触有因", content: "大多数抵触源于合理担忧，先理解再引导" },
    { title: "观望可转", content: "观望者是最容易被转化的群体，树立标杆是关键" }
  ];

  summary.forEach((s, i) => {
    const y = 1.1 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.2, h: 0.85,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.5, y: y + 0.22, w: 2.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.7, y: y, w: 6.8, h: 0.85,
      fill: { color: theme.light }
    });
    slide.addText(s.content, {
      x: 2.9, y: y + 0.22, w: 6.3, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  slide.addText("进入第三部分：变革共识建立策略", {
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
  pres.writeFile({ fileName: "slide-22-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
