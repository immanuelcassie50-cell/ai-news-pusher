// slide-61.js - Content: Case - First Time Deciding
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 61, title: '案例：第一次自己决定' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("案例：第一次自己决定", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Subtitle
  slide.addText("第八章：志愿表的真正意义", {
    x: 0.5, y: 0.9, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Case story - quote card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.35, w: 9, h: 1.1,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("“", {
    x: 0.7, y: 1.35, w: 0.5, h: 0.6,
    fontSize: 48, fontFace: "Georgia",
    color: theme.accent, bold: true
  });
  slide.addText("这是我第一次自己决定一件这么大的事", {
    x: 1.1, y: 1.55, w: 7.8, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });
  slide.addText("— 女生填完志愿表，走的时候回头说", {
    x: 1.1, y: 2.15, w: 7.8, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Story details
  const storyPoints = [
    "以前上什么补习班、报什么兴趣班，都是我妈决定的",
    "后来考上自己选的方向 — 不是最热门也不是分数用得最满的",
    "每次遇到难的课程想放弃时，会想起自己是怎么选的这个专业",
    '"这是我自己的选择"让她比同学多一点点撑下去的理由'
  ];

  storyPoints.forEach((point, idx) => {
    const y = 2.6 + idx * 0.55;

    // Bullet
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.12, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });

    slide.addText(point, {
      x: 1.0, y: y, w: 8.4, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.accent }
  });
  slide.addText("61", {
    x: 0.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
