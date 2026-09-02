const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 69,
  title: '本章小结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title section with left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.5, w: 0.08, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText("本章小结", {
    x: 0.7, y: 0.5, w: 8, h: 0.6,
    fontSize: 32,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    valign: "middle"
  });

  // Subtitle line
  slide.addText("Chapter 9 Summary", {
    x: 0.7, y: 1.1, w: 4, h: 0.35,
    fontSize: 14,
    fontFace: "Arial",
    color: theme.light,
    italic: true
  });

  // Horizontal divider
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.55, w: 9, h: 0.015,
    fill: { color: theme.light, transparency: 50 }
  });

  // Key takeaways
  const takeaways = [
    { num: "01", text: "说服是拉锯，摆信息差是让对方自己得出结论" },
    { num: "02", text: "家长强硬背后是焦虑和信息不足" },
    { num: "03", text: "摆信息必须真实完整，不能只挑对自己有利的" },
    { num: "04", text: "因人而异调整语言方式" }
  ];

  const startY = 1.85;
  const itemHeight = 0.85;
  const cardRadius = 0.1;

  takeaways.forEach((item, index) => {
    const y = startY + index * itemHeight;

    // Card background with soft rounded corners
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9, h: 0.72,
      fill: { color: "FFFFFF" },
      rectRadius: cardRadius,
      shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, color: '000000', opacity: 0.08 }
    });

    // Number badge (circle)
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.16, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });

    slide.addText(item.num, {
      x: 0.7, y: y + 0.16, w: 0.4, h: 0.4,
      fontSize: 12,
      fontFace: "Arial",
      color: "FFFFFF",
      bold: true,
      align: "center",
      valign: "middle"
    });

    // Takeaway text
    slide.addText(item.text, {
      x: 1.3, y: y, w: 7.8, h: 0.72,
      fontSize: 18,
      fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });

    // Checkmark indicator on right
    slide.addShape(pres.ShapeType.ellipse, {
      x: 8.9, y: y + 0.21, w: 0.3, h: 0.3,
      fill: { color: theme.primary, transparency: 85 }
    });

    slide.addText("✓", {
      x: 8.9, y: y + 0.18, w: 0.3, h: 0.3,
      fontSize: 12,
      fontFace: "Arial",
      color: theme.primary,
      align: "center",
      valign: "middle"
    });
  });

  // Bottom decorative element
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.4, w: 10, h: 0.225,
    fill: { color: theme.primary, transparency: 90 }
  });

  // Page number badge (circle style at x: 0.3, y: 5.1)
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("69", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12,
    fontFace: "Arial",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
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
  pres.writeFile({ fileName: "slide-69-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
