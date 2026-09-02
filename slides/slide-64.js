// slide-64.js - Q&A session (问答环节)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 64,
  title: '问答环节'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Dark navy background
  slide.background = { color: theme.primary };

  // Gold accent bar on left
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Large decorative circle (top right)
  slide.addShape("ellipse", {
    x: 6.5, y: -1.5, w: 5, h: 5,
    fill: { color: theme.secondary, transparency: 70 }
  });

  // Smaller decorative circle
  slide.addShape("ellipse", {
    x: 7.8, y: 3.2, w: 2.5, h: 2.5,
    fill: { color: theme.accent, transparency: 60 }
  });

  // Main title
  slide.addText("Q & A", {
    x: 0.6, y: 1.5, w: 5, h: 1.0,
    fontSize: 72, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Chinese subtitle
  slide.addText("问答环节", {
    x: 0.6, y: 2.6, w: 5, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.6, y: 3.4, w: 3.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Invitation text
  slide.addText("欢迎提问地缘政治、海权陆权理论", {
    x: 0.6, y: 3.7, w: 6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });
  slide.addText("或一带一路项目分析相关问题", {
    x: 0.6, y: 4.1, w: 6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Contact/info area
  slide.addShape("rect", {
    x: 0.6, y: 4.8, w: 4, h: 0.55,
    fill: { color: theme.secondary, transparency: 50 }
  });
  slide.addText("扫码获取课程资料", {
    x: 0.8, y: 4.85, w: 3.6, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("64", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
