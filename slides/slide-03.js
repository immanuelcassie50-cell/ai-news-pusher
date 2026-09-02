// slide-03.js - Knowledge Point 1: 注意力的本质
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '知识点一：注意力的本质'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("知识点一：注意力的本质", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Accent line under title
  slide.addShape("rect", {
    x: 0.5, y: 0.95, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // ===== LEFT COLUMN: Text Content =====

  // Definition Card
  slide.addShape("roundRect", {
    x: 0.5, y: 1.25, w: 5.6, h: 1.3,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // Definition label badge
  slide.addShape("roundRect", {
    x: 0.7, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });
  slide.addText("定义", {
    x: 0.7, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Definition text
  slide.addText('注意力是大脑对信息进行选择性加工的能力。它不是"抓取"更多，而是"筛选"更准。', {
    x: 0.7, y: 1.85, w: 5.2, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "top"
  });

  // Case Card
  slide.addShape("roundRect", {
    x: 0.5, y: 2.7, w: 5.6, h: 1.5,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // Case label badge
  slide.addShape("roundRect", {
    x: 0.7, y: 2.85, w: 0.8, h: 0.35,
    fill: { color: theme.secondary },
    rectRadius: 0.05
  });
  slide.addText("案例", {
    x: 0.7, y: 2.85, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Case text
  slide.addText('扎克伯格常年只穿灰色T恤。他说："我不希望每天早上为了穿什么浪费精力，因为真正的决策不在衣服上。"', {
    x: 0.7, y: 3.3, w: 5.2, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Practice Card
  slide.addShape("roundRect", {
    x: 0.5, y: 4.35, w: 5.6, h: 1.0,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // Practice label badge
  slide.addShape("roundRect", {
    x: 0.7, y: 4.5, w: 0.8, h: 0.35,
    fill: { color: theme.light },
    rectRadius: 0.05
  });
  slide.addText("练习", {
    x: 0.7, y: 4.5, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Practice text
  slide.addText('回顾你最近一周的工作/生活，找出3件"看似必要但实际浪费注意力"的事情。', {
    x: 1.6, y: 4.5, w: 4.3, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // ===== RIGHT COLUMN: Visual Element =====

  // Decorative shape area - large circle
  slide.addShape("ellipse", {
    x: 6.8, y: 1.5, w: 2.8, h: 2.8,
    fill: { color: theme.primary, transparency: 85 }
  });

  // Inner circle
  slide.addShape("ellipse", {
    x: 7.2, y: 1.9, w: 2.0, h: 2.0,
    fill: { color: theme.accent, transparency: 60 }
  });

  // Center accent
  slide.addShape("ellipse", {
    x: 7.6, y: 2.3, w: 1.2, h: 1.2,
    fill: { color: theme.light }
  });

  // Focus icon text in center
  slide.addText("专注", {
    x: 7.6, y: 2.3, w: 1.2, h: 1.2,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Decorative elements - bottom right
  slide.addShape("rect", {
    x: 6.5, y: 4.5, w: 1.2, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addShape("rect", {
    x: 7.9, y: 4.7, w: 0.8, h: 0.08,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 8.9, y: 4.5, w: 0.5, h: 0.08,
    fill: { color: theme.secondary, transparency: 50 }
  });

  // Page number badge (page 3)
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("3", {
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
  pres.writeFile({ fileName: "D:/CC/slides/slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
