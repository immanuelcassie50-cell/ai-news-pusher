// slide-84.js - Q&A: When Not Confident
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 84, title: 'Q&A：没把握时要不要说实话' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("Q&A：没把握时要不要说实话", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Q section
  slide.addShape("roundRect", {
    x: 0.5, y: 1.0, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // Q badge
  slide.addShape("roundRect", {
    x: 0.7, y: 1.15, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });
  slide.addText("Q", {
    x: 0.7, y: 1.15, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Q text
  slide.addText("遇到孩子和家长都很配合、聊得也很顺，但自己心里其实没底，判断依据不够扎实，这种时候要不要说实话？", {
    x: 1.35, y: 1.1, w: 7.95, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // A section
  slide.addShape("roundRect", {
    x: 0.5, y: 2.25, w: 9, h: 2.6,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  // A badge
  slide.addShape("roundRect", {
    x: 0.7, y: 2.4, w: 0.5, h: 0.35,
    fill: { color: theme.primary },
    rectRadius: 0.05
  });
  slide.addText("A", {
    x: 0.7, y: 2.4, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // A content - key answer
  slide.addText("要说。", {
    x: 1.35, y: 2.35, w: 7.95, h: 0.5,
    fontSize: 17, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    valign: "middle"
  });

  // A content - what to say
  const points = [
    "把我心里的不确定直接告诉客户",
    "\"这块信息我目前掌握得还不够扎实\',
    "\"给您的是一个基于现有信息的判断，建议您再找一到两个信息源交叉验证一下\'
  ];

  points.forEach((point, idx) => {
    const y = 2.9 + idx * 0.5;

    // Bullet
    slide.addShape("ellipse", {
      x: 1.35, y: y + 0.12, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });

    // Text
    slide.addText(point, {
      x: 1.6, y: y, w: 7.7, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Insight box
  slide.addShape("roundRect", {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("短期内可能觉得不够权威，但长期看，这种坦诚才是真正的专业", {
    x: 0.5, y: 4.95, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("84", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-84-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
