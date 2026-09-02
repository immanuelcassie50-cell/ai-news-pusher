// slide-33.js - 提示词模板 · 场景信息
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 33,
  title: '提示词模板 · 场景信息'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("提示词模板 · 场景信息", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Form fields - card style
  const fields = [
    { label: "场景名称", placeholder: "[填写场景定位表里的场景名称]" },
    { label: "适用情境", placeholder: "[什么时候、面对什么状态的客户，使用这个流程]" },
    { label: "服务方式", placeholder: "[电话 / 面谈 / 线上]" },
    { label: "预计处理时长", placeholder: "[这个服务场景通常需要多长时间]" }
  ];

  fields.forEach((field, i) => {
    const y = 1.4 + i * 1.0;

    // Field card
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Label area
    slide.addShape("rect", {
      x: 0.5, y: y, w: 2.2, h: 0.85,
      fill: { color: theme.light }
    });
    slide.addText(field.label, {
      x: 0.5, y: y, w: 2.2, h: 0.85,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Placeholder
    slide.addText(field.placeholder, {
      x: 2.9, y: y, w: 6.4, h: 0.85,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("33", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };