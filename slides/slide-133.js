// slide-133.js - 实践智慧
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 133,
  title: '实践智慧'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("实践智慧", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("来自课程的实用建议", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Advice cards
  const advice = [
    {
      num: "01",
      title: "假设对方也是理性的",
      desc: "理解对手也有利益诉求，找到共赢点"
    },
    {
      num: "02",
      title: "思考他们看到了什么",
      desc: "换位思考，理解对方的信息和判断"
    },
    {
      num: "03",
      title: "考虑关系的重复性",
      desc: "一次性博弈 vs 长期关系，策略不同"
    },
    {
      num: "04",
      title: "投资你的声誉",
      desc: "每一次合作都在积累别人对你的信任"
    }
  ];

  advice.forEach((a, i) => {
    const y = 1.5 + i * 0.95;

    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Number badge
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(a.num, {
      x: 0.7, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(a.title, {
      x: 1.4, y: y + 0.1, w: 4, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(a.desc, {
      x: 1.4, y: y + 0.45, w: 7.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("133", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-133-preview.pptx" });
}
