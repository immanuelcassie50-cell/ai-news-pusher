// slide-04.js - Course Background & Problems (课程背景与问题)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '课程背景与问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程背景与问题", {
    x: 0.4, y: 0.35, w: 5, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.95, w: 2.0, h: 0.04,
    fill: { color: theme.primary }
  });

  // Problem cards - vertical layout
  const problems = [
    {
      num: "01",
      title: "客户流失",
      desc: "客户经理走了，客户关系跟着走了大半"
    },
    {
      num: "02",
      title: "知识断层",
      desc: "公司只留下了合同和邮件，没有留住判断力"
    },
    {
      num: "03",
      title: "隐性知识",
      desc: "客户知识是隐性知识，从未被系统萃取"
    }
  ];

  const cardX = 0.5;
  const cardWidth = 8.5;
  const cardHeight = 1.15;
  const startY = 1.4;
  const gap = 0.25;

  problems.forEach((problem, idx) => {
    const y = startY + idx * (cardHeight + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left number block
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX, y: y, w: 0.8, h: cardHeight,
      fill: { color: theme.primary }
    });
    slide.addText(problem.num, {
      x: cardX, y: y, w: 0.8, h: cardHeight,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Problem title
    slide.addText(problem.title, {
      x: cardX + 1.0, y: y + 0.15, w: 2, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Problem description
    slide.addText(problem.desc, {
      x: cardX + 1.0, y: y + 0.55, w: 6.5, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Right decorative element
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.5, y: 1.2, w: 0.5, h: 3.5,
    fill: { color: theme.light }
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("4", {
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
    primary: "C43C3A",
    secondary: "4A4E69",
    accent: "9A8C98",
    light: "E8E8E8",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
