// slide-113.js - Core Judgment Review
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};
const slideConfig = { type: `content`, index: 113, title: `核心判断回顾` };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });

  // Title
  slide.addText(`核心判断回顾`, {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 24, fontFace: `Microsoft YaHei`,
    color: theme.primary, bold: true
  });

  // 5 key principles
  const principles = [
    { num: `1`, title: `先人后分`, desc: `方向比分数重要` },
    { num: `2`, title: `信息过滤`, desc: `判断力比数据更稀缺` },
    { num: `3`, title: `产业视角`, desc: `五年后这行还在不在` },
    { num: `4`, title: `倒推规划`, desc: `从十年后往回算` },
    { num: `5`, title: `风险偏好`, desc: `冲稳保是翻译，不是公式` }
  ];

  principles.forEach((p, i) => {
    const y = 1.05 + i * 0.85;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: `FFFFFF` },
      rectRadius: 0.1,
      shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: '000000', opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.75,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.75, y: y + 0.15, w: 0.45, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(p.num, {
      x: 0.75, y: y + 0.15, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: `Arial`,
      color: `FFFFFF`, bold: true, align: `center`, valign: `middle`
    });

    // Title
    slide.addText(p.title, {
      x: 1.4, y: y + 0.1, w: 2.5, h: 0.55,
      fontSize: 16, fontFace: `Microsoft YaHei`,
      color: theme.primary, bold: true, valign: `middle`
    });

    // Separator dot
    slide.addShape(pres.shapes.OVAL, {
      x: 3.6, y: y + 0.32, w: 0.1, h: 0.1,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(p.desc, {
      x: 3.9, y: y + 0.1, w: 5.4, h: 0.55,
      fontSize: 14, fontFace: `Microsoft YaHei`,
      color: theme.secondary, valign: `middle`
    });
  });

  // Page number badge - circle style at bottom-left (x: 0.3, y: 5.1)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText(`113`, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: `Arial`,
    color: `FFFFFF`, bold: true, align: `center`, valign: `middle`
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-113-preview.pptx` }).then(() => console.log(`Created slide-113-preview.pptx`));
}
