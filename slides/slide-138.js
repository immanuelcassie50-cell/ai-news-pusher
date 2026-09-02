// slide-138.js - 证书信息
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 138,
  title: '证书信息'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("证书信息", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Certificate preview placeholder
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9, h: 3.0,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Certificate placeholder text
  slide.addText("证书预览区域", {
    x: 0.5, y: 1.2, w: 9, h: 3.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center", valign: "middle"
  });

  // Certificate details
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.65,
    fill: { color: theme.primary }
  });
  slide.addText("课程编号：SC-AI-03 | 完成状态：已完成 | 证书获取条件：完成全部学习", {
    x: 0.5, y: 4.4, w: 9, h: 0.65,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "ffffff", align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("138", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-138-preview.pptx" });
}
