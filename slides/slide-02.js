// slide-02.js - Table of Contents: 课程导览
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '课程导览'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("课程导览", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Accent line under title
  slide.addShape("rect", {
    x: 0.5, y: 1.0, w: 1.0, h: 0.05,
    fill: { color: theme.accent }
  });

  // 3 main sections
  const sections = [
    { num: "01", title: "注意力是什么", desc: "本质与机制" },
    { num: "02", title: "管理注意力三步法", desc: "聚焦、保持、切换" },
    { num: "03", title: "日常训练技巧", desc: "随时随地练专注" }
  ];

  const startY = 1.4;
  const itemHeight = 1.1;

  sections.forEach((sec, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 5.8, h: 0.95,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
    });

    // Number badge
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.175, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(sec.num, {
      x: 0.7, y: y + 0.175, w: 0.6, h: 0.6,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(sec.title, {
      x: 1.5, y: y + 0.15, w: 4.5, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(sec.desc, {
      x: 1.5, y: y + 0.52, w: 4.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right side - additional info card
  slide.addShape("roundRect", {
    x: 6.6, y: 1.4, w: 2.9, h: 2.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("额外内容", {
    x: 6.8, y: 1.6, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText([
    { text: "2个互动环节", options: { breakLine: true } },
    { text: "+", options: { breakLine: true } },
    { text: "课程转化" }
  ], {
    x: 6.8, y: 2.1, w: 2.5, h: 1.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "top"
  });

  // Decorative elements - right side
  slide.addShape("ellipse", {
    x: 8.0, y: 4.2, w: 1.5, h: 1.5,
    fill: { color: theme.light, transparency: 50 }
  });

  slide.addShape("ellipse", {
    x: 7.2, y: 4.5, w: 0.8, h: 0.8,
    fill: { color: theme.accent, transparency: 40 }
  });

  // Page number badge at x:9.3, y:5.1
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
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
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
