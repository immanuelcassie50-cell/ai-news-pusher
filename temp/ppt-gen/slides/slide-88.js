// slide-88.js - Change Champion Identification
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 88,
  title: '变革大使识别与培养'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革大使识别与培养", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Characteristics
  slide.addText("变革大使的特征：", {
    x: 0.5, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const chars = [
    ["在团队中有影响力", "受人尊重和信任"],
    ["对新事物开放", "愿意尝试和冒险"],
    ["沟通能力强", "善于表达和说服"],
    ["认可组织", "对组织有归属感"]
  ];

  chars.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.4 + row * 0.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 0.6,
      fill: { color: theme.light }
    });
    slide.addText("✓ " + c[0] + " | " + c[1], {
      x: x + 0.2, y: y + 0.15, w: 3.6, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  // Development steps
  slide.addText("培养步骤：", {
    x: 0.5, y: 3.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const steps = [
    "选择：对潜在大使进行观察和评估",
    "邀请：正式邀请他们担任变革大使角色",
    "培训：提供变革知识和沟通技巧培训",
    "授权：赋予他们一定的资源和决策权",
    "支持：持续提供信息、工具和支持"
  ];

  steps.forEach((s, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: 3.45 + i * 0.42, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: 3.5 + i * 0.42, w: 0.35, h: 0.25,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(s, {
      x: 1.0, y: 3.45 + i * 0.42, w: 8.5, h: 0.35,
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
  pres.writeFile({ fileName: "slide-88-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
