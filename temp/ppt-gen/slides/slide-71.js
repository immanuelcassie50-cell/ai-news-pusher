// slide-71.js - Trust Maintenance Mechanisms
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 71,
  title: '信任维护机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("信任维护机制", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const mechanisms = [
    { title: "透明沟通", items: ["信息公开，不隐瞒问题", "及时通报进展和挑战", "承认不足，不粉饰太平"] },
    { title: "兑现承诺", items: ["说到做到，言出必行", "承诺要谨慎，承诺必履行", "无法兑现时主动说明原因"] },
    { title: "尊重员工", items: ["尊重员工的意见和感受", "认可员工的贡献和价值", "保护员工的尊严和权益"] },
    { title: "持续反馈", items: ["定期收集员工反馈", "反馈要有回应和行动", "持续改进沟通方式"] }
  ];

  mechanisms.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 1.9,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(m.title, {
      x: x, y: y + 0.1, w: 4, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    m.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.2, y: y + 0.6 + j * 0.4, w: 3.6, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "left"
      });
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
  pres.writeFile({ fileName: "slide-71-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
