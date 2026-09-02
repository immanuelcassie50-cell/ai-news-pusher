// slide-50.js - 关闭页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'closing',
  index: 50,
  title: 'AI辅助生成——话术与SOP'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.secondary }
  });

  // Top decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.35, y: 0, w: 9.65, h: 0.08,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("AI辅助生成", {
    x: 0.7, y: 1.5, w: 8.8, h: 0.9,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("——话术与SOP", {
    x: 0.7, y: 2.35, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Subtitle badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 3.3, w: 3.2, h: 0.55,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("第三部分 · 学习完成", {
    x: 0.7, y: 3.3, w: 3.2, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Bottom info
  slide.addText("招商证券 · 高净值客户服务经验萃取工作坊", {
    x: 0.7, y: 4.7, w: 8.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("50", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-50-preview.pptx" });
}

module.exports = { createSlide, slideConfig };