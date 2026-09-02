// slide-06.js - Change Fails: Data
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '变革失败的普遍数据'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革失败不是小概率事件", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Large stat
  slide.addText("70%", {
    x: 0.5, y: 1.2, w: 3.5, h: 1.5,
    fontSize: 96, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center"
  });

  slide.addText("的数字化转型项目\n未能实现预期目标", {
    x: 0.5, y: 2.7, w: 3.5, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Right side reasons
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.2, y: 1.2, w: 5.3, h: 3.8,
    fill: { color: theme.light }
  });

  slide.addText("主要原因（员工视角）：", {
    x: 4.4, y: 1.4, w: 5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const reasons = [
    "缺乏清晰的变革愿景与意义",
    "员工不理解为什么要变",
    "信任缺失，沟通不足",
    "变革疲劳，参与感低",
    "领导言行不一致"
  ];

  reasons.forEach((r, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 4.4, y: 2.0 + i * 0.6, w: 0.08, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(r, {
      x: 4.65, y: 2.0 + i * 0.6, w: 4.6, h: 0.45,
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
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
