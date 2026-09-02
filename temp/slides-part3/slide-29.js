// slide-29.js - Content: 什么是好的服务SOP
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 29,
  title: "什么是好的服务SOP"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText("什么是好的服务SOP", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Three feature cards
  const features = [
    {
      num: "1",
      title: "动词开头",
      desc: '说的是"做什么"，而不是"注意什么"'
    },
    {
      num: "2",
      title: "含判断节点",
      desc: "明确标出关键时刻，判断依据是什么"
    },
    {
      num: "3",
      title: "覆盖常见失误",
      desc: "告诉读者最容易犯什么错、为什么"
    }
  ];

  features.forEach((f, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.1, w: 2.9, h: 3.8,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.8,
      fill: { color: theme.secondary }
    });
    slide.addText(f.num, {
      x: x + 1.05, y: 1.4, w: 0.8, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(f.title, {
      x: x + 0.2, y: 2.4, w: 2.5, h: 0.8,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(f.desc, {
      x: x + 0.2, y: 3.3, w: 2.5, h: 1.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "top"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("29", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };