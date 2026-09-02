// slide-49.js - 第三部分学习地图回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 49,
  title: '第三部分学习地图回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("第三部分学习地图回顾", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Chapters as journey steps
  const chapters = [
    {
      num: "9",
      title: "AI生成的工作原理",
      desc: "理解AI在这里能做什么、不能做什么"
    },
    {
      num: "10",
      title: "服务话术模板的生成与优化",
      desc: "服务话术模板初稿（经验证）"
    },
    {
      num: "11",
      title: "服务SOP的生成与优化",
      desc: "服务SOP初稿（经验证）"
    }
  ];

  chapters.forEach((ch, i) => {
    const y = 1.4 + i * 1.3;

    // Chapter card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Chapter number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(ch.num, {
      x: 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Chapter title
    slide.addText("第" + ch.num + "章", {
      x: 1.4, y: y + 0.15, w: 1.2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent
    });
    slide.addText(ch.title, {
      x: 1.4, y: y + 0.45, w: 7.9, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(ch.desc, {
      x: 2.6, y: y + 0.15, w: 6.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent
    });

    // Connecting line (except last)
    if (i < 2) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.93, y: y + 0.8, w: 0.04, h: 0.5,
        fill: { color: theme.light }
      });
    }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("49", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-49-preview.pptx" });
}

module.exports = { createSlide, slideConfig };