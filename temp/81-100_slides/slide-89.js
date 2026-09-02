// slide-89.js - 资源推荐：在线资源
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '资源推荐：在线资源'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("资源推荐：在线资源", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Learning platforms
  const platforms = [
    {
      category: "学习平台",
      items: [
        { name: "网易云课堂", desc: "各类职业技能课程" },
        { name: "腾讯课堂", desc: "综合类课程资源" },
        { name: "得到", desc: "知识付费，思维提升" }
      ]
    },
    {
      category: "专业社区",
      items: [
        { name: "培训人社区", desc: "同业交流，经验分享" },
        { name: "HR实名圈", desc: "人力资源专业社群" },
        { name: "知乎-培训话题", desc: "专家解答，案例讨论" }
      ]
    }
  ];

  platforms.forEach((section, i) => {
    const y = 1.2 + i * 2.05;

    // Section header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(section.category, {
      x: 0.5, y: y, w: 9, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Items card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y + 0.45, w: 9, h: 1.45,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    section.items.forEach((item, j) => {
      const x = 0.7 + j * 3;

      slide.addText(item.name, {
        x: x, y: y + 0.55, w: 2.8, h: 0.4,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true, margin: 0
      });

      slide.addText(item.desc, {
        x: x, y: y + 0.95, w: 2.8, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, margin: 0
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("89", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-89-preview.pptx" });
}

module.exports = { createSlide, slideConfig };