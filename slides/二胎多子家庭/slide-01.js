// slide-01.js - Cover Page (封面)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '二胎/多子家庭：公平感与手足关系经营'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Top decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4, h: 0.03,
    fill: { color: theme.primary }
  });

  // Main title
  slide.addText("二胎/多子家庭", {
    x: 0.5, y: 1.7, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "top"
  });

  // Subtitle
  slide.addText("公平感与手足关系经营", {
    x: 0.5, y: 2.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top"
  });

  // Tagline
  slide.addText("构建和谐家庭关系，养育幸福手足", {
    x: 0.5, y: 3.5, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "left", valign: "top"
  });

  // Bottom decorative element
  slide.addShape("rect", {
    x: 0.5, y: 4.3, w: 2.5, h: 0.03,
    fill: { color: theme.accent }
  });

  // Target audience
  slide.addText("面向已有或正在考虑二胎/多子家庭的父母", {
    x: 0.5, y: 4.5, w: 6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false, align: "left", valign: "top"
  });

  // Duration badge
  slide.addShape("roundRect", {
    x: 0.5, y: 4.95, w: 1.8, h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("5小时精华课程", {
    x: 0.5, y: 4.95, w: 1.8, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Right side decorative block
  slide.addShape("rect", {
    x: 7.5, y: 0, w: 2.5, h: 5.625,
    fill: { color: theme.light, transparency: 60 }
  });

  // Decorative circles
  slide.addShape("ellipse", {
    x: 8.2, y: 1.5, w: 1.2, h: 1.2,
    fill: { color: theme.primary, transparency: 20 }
  });
  slide.addShape("ellipse", {
    x: 8.6, y: 3.0, w: 0.8, h: 0.8,
    fill: { color: theme.accent, transparency: 30 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
