// slide-79.js - 练习：案例分析
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 79,
  title: '练习：案例分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：案例分析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Case title
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 0.6,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("案例：中国改革开放与斯密思想", {
    x: 0.7, y: 1.15, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Questions
  slide.addText("问题：", {
    x: 0.5, y: 1.95, w: 2, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const questions = [
    "改革开放如何体现了对市场的重新认识？",
    "制度建设在改革中扮演了什么角色？",
    "斯密思想对中国改革有什么启示和局限？"
  ];

  questions.forEach((q, idx) => {
    const y = 2.4 + idx * 0.55;
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.3, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText((idx + 1).toString(), {
      x: 0.7, y: y + 0.1, w: 0.3, h: 0.3,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(q, {
      x: 1.15, y: y, w: 8.3, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Hint box
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 9, h: 0.6,
    fill: { color: theme.light, transparency: 80 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.2, w: 0.05, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("提示：结合制度经济学和科斯定理分析", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("79", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-79-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
