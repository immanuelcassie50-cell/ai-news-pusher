// slide-86.js - 延伸学习路径
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 86,
  title: '延伸学习路径'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("延伸学习路径", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three columns
  const sections = [
    {
      title: "进阶方向",
      items: ["经济思想史专著", "各学派的原典阅读", "经济学方法论文献"],
      color: theme.primary
    },
    {
      title: "相关领域",
      items: ["政治哲学：自由主义传统", "社会学：制度理论", "心理学：行为科学"],
      color: theme.accent
    },
    {
      title: "持续关注",
      items: ["当代经济学前沿", "中国经济学界讨论", "国际学术交流"],
      color: theme.light
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.5;
  const gapX = 0.25;

  sections.forEach((section, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card background
    slide.addShape("rect", {
      x: x, y: 1.15, w: cardWidth, h: 3.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
    });

    // Top accent bar
    slide.addShape("rect", {
      x: x, y: 1.15, w: cardWidth, h: 0.08,
      fill: { color: section.color }
    });

    // Title
    slide.addText(section.title, {
      x: x + 0.2, y: 1.4, w: 2.5, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: section.color, bold: true,
      align: "left", valign: "middle"
    });

    // Items
    section.items.forEach((item, i) => {
      const y = 2.0 + i * 0.6;

      // Bullet circle
      slide.addShape("ellipse", {
        x: x + 0.25, y: y + 0.12, w: 0.18, h: 0.18,
        fill: { color: section.color }
      });

      // Item text
      slide.addText(item, {
        x: x + 0.55, y: y, w: 2.2, h: 0.5,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("86", {
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
  pres.writeFile({ fileName: "slide-86-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
