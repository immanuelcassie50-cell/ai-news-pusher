// slide-82.js - Resistance Handling Strategies
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 82,
  title: '员工抵触处理策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("员工抵触处理策略", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const strategies = [
    { level: "轻度抵触", strategy: "主动沟通，了解担忧；提供更多信息和支持" },
    { level: "中度抵触", strategy: "一对一深入交流；邀请参与决策；展示成功案例" },
    { level: "重度抵触", strategy: "寻求可信中间人帮助；渐进式变革；高层介入支持" },
    { level: "集体抵触", strategy: "暂停推进，重新评估；全员座谈会；利益相关方协同处理" }
  ];

  strategies.forEach((s, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2, h: 0.85,
      fill: { color: theme.accent }
    });
    slide.addText(s.level, {
      x: 0.5, y: y + 0.25, w: 2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.5, y: y, w: 7, h: 0.85,
      fill: { color: theme.light }
    });
    slide.addText(s.strategy, {
      x: 2.7, y: y + 0.25, w: 6.6, h: 0.35,
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
  pres.writeFile({ fileName: "slide-82-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
