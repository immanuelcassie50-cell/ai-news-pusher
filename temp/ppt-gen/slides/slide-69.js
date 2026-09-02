// slide-69.js - Change Consensus Checklist (Detail)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 69,
  title: '变革共识检查表详解'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革共识检查表", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const items = [
    { check: "□", item: "员工能清晰说明为什么要进行这次变革" },
    { check: "□", item: "员工理解变革后的未来愿景" },
    { check: "□", item: "员工相信变革对组织有利" },
    { check: "□", item: "员工相信变革对自己有利" },
    { check: "□", item: "员工知道自己在变革中的角色" },
    { check: "□", item: "员工认同变革的时间安排" }
  ];

  items.forEach((it, i) => {
    const y = 1.1 + i * 0.7;
    slide.addText(it.check, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: theme.accent, bold: true, align: "left"
    });
    slide.addText(it.item, {
      x: 1.0, y: y + 0.08, w: 8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("使用建议：每项打分1-5分，低于3分的需要重点加强沟通", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, align: "left"
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
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
