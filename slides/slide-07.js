// slide-07.js - Interaction 2: Group Discussion
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '互动环节二：小组讨论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("互动环节二：小组讨论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Discussion prompt box - prominent centered
  slide.addShape("roundRect", {
    x: 0.8, y: 1.15, w: 8.4, h: 1.1,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("你在什么时候最容易分心？当时发生了什么？", {
    x: 1, y: 1.35, w: 8, h: 0.7,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Discussion questions section
  slide.addText("讨论问题", {
    x: 0.8, y: 2.5, w: 3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Questions with numbered circles
  const questions = [
    "分心前你在做什么？",
    "是什么触发了你的分心？",
    "分心后你花了多少时间才重新专注？",
    "如果重来一次，你可以怎样避免？"
  ];

  questions.forEach((q, idx) => {
    const y = 3.0 + idx * 0.55;

    // Number circle
    slide.addShape("ellipse", {
      x: 0.9, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(idx + 1), {
      x: 0.9, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(q, {
      x: 1.5, y: y, w: 7.5, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Time info box
  slide.addShape("roundRect", {
    x: 6.8, y: 2.45, w: 2.7, h: 0.5,
    fill: { color: theme.light },
    rectRadius: 0.08
  });
  slide.addText("3分钟个人思考 + 5分钟小组分享", {
    x: 6.9, y: 2.55, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Key insight accent box at bottom
  slide.addShape("roundRect", {
    x: 0.8, y: 5.0, w: 8.4, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("分心的成本不只是当下损失的时间，更包括重新进入深度工作状态所需的'启动时间'", {
    x: 1, y: 5.08, w: 8, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "22223b",
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
