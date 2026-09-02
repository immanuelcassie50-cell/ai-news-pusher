// slide-04.js - Content Page: 斯密面临的时代问题
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '斯密面临的时代问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("斯密面临的时代问题", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("18世纪中叶：商业革命与启蒙运动", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Timeline layout
  const timelineY = 1.8;

  // Timeline line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: timelineY + 0.25, w: 9, h: 0.06,
    fill: { color: theme.light }
  });

  // Timeline points
  const points = [
    { year: "1723", event: "斯密出生", desc: "苏格兰格拉斯哥" },
    { year: "1751", event: "格拉斯哥大学教授", desc: "逻辑学、道德哲学" },
    { year: "1776", event: "《国富论》出版", desc: "划时代的经济学著作" },
    { year: "1790", event: "斯密去世", desc: "留下思想遗产" }
  ];

  points.forEach((pt, i) => {
    const x = 0.8 + i * 2.4;

    // Circle marker
    slide.addShape(pres.shapes.OVAL, {
      x: x, y: timelineY + 0.05, w: 0.45, h: 0.45,
      fill: { color: theme.primary }
    });

    // Year
    slide.addText(pt.year, {
      x: x - 0.2, y: timelineY + 0.55, w: 0.85, h: 0.35,
      fontSize: 14, fontFace: "Georgia",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Event
    slide.addText(pt.event, {
      x: x - 0.4, y: timelineY + 0.9, w: 1.25, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(pt.desc, {
      x: x - 0.4, y: timelineY + 1.2, w: 1.25, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Context cards - 3 columns
  const cardY = 3.6;
  const cardW = 2.9;
  const cardH = 1.7;
  const cardGap = 0.2;

  const contexts = [
    {
      title: "商业革命",
      points: ["东印度公司扩张", "大西洋贸易兴起", "重商主义盛行"]
    },
    {
      title: "启蒙运动",
      points: ["理性主义兴起", "苏格兰启蒙", "自然科学进步"]
    },
    {
      title: "时代问题",
      points: ["财富如何产生？", "市场如何运行？", "道德与利益？"]
    }
  ];

  contexts.forEach((ctx, i) => {
    const x = 0.5 + i * (cardW + cardGap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
    });

    // Card top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: 0.08,
      fill: { color: theme.accent }
    });

    // Card title
    slide.addText(ctx.title, {
      x: x + 0.15, y: cardY + 0.2, w: cardW - 0.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Card points
    const pointsText = ctx.points.map((p, idx) => ({
      text: "· " + p,
      options: { breakLine: idx < ctx.points.length - 1 }
    }));

    slide.addText(pointsText, {
      x: x + 0.15, y: cardY + 0.65, w: cardW - 0.3, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("4", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
