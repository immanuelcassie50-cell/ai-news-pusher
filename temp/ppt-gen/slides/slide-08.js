// slide-08.js - Trust Erosion in Change
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '变革中的信任损耗'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中的信任损耗", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Trust erosion process
  const stages = [
    { stage: "观望期", action: "消息不明，员工猜测各种可能", y: 1.2 },
    { stage: "抵触期", action: "收到坏消息，怀疑管理层动机", y: 2.3 },
    { stage: "冷漠期", action: "反复失望，参与意愿下降", y: 3.4 },
    { stage: "失信期", action: "彻底不信任，所有信息被怀疑", y: 4.5 }
  ];

  stages.forEach((s, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: s.y, w: 1.8, h: 0.9,
      fill: { color: i < 2 ? theme.accent : (i === 2 ? theme.secondary : theme.primary) }
    });
    slide.addText(s.stage, {
      x: 0.5, y: s.y + 0.25, w: 1.8, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.3, y: s.y, w: 7.2, h: 0.9,
      fill: { color: theme.light }
    });
    slide.addText(s.action, {
      x: 2.5, y: s.y + 0.25, w: 6.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // Arrow down
  slide.addText("信任一旦崩塌，重建成本是建立时的3-5倍", {
    x: 0.5, y: 5.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
