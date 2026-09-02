/**
 * Slide 52 - 自我关怀的三个要素
 * 3-column layout based on Kristin Neff's self-compassion theory
 */
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, 0, 0, 960, 540, {
    fill: { color: theme.bg }
  });

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, 0, 0, 960, 8, {
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("自我关怀的三个要素", {
    x: 40, y: 30, w: 880, h: 60,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left"
  });

  // Subtitle
  slide.addText("Kristin Neff 的自我关怀理论", {
    x: 40, y: 85, w: 880, h: 30,
    fontSize: 16, fontFace: "Arial",
    color: theme.accent, bold: false, italic: true, align: "left"
  });

  // 3 columns
  const colWidth = 280;
  const colHeight = 340;
  const startX = 40;
  const startY = 130;
  const gap = 30;

  const elements = [
    {
      num: "01",
      title: "善待自己",
      subtitle: "Self-Kindness",
      desc: "对自己温柔理解而非严厉批评",
      color: theme.primary
    },
    {
      num: "02",
      title: "共同人性",
      subtitle: "Common Humanity",
      desc: "痛苦是人类体验的一部分",
      color: theme.accent
    },
    {
      num: "03",
      title: "正念觉察",
      subtitle: "Mindful Awareness",
      desc: "以平衡的心态面对情绪",
      color: theme.light
    }
  ];

  elements.forEach((el, i) => {
    const x = startX + i * (colWidth + gap);
    const y = startY;

    // Column card background
    slide.addShape(pres.ShapeType.rect, x, y, colWidth, colHeight, {
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1, transparency: 85 }
    });

    // Top color strip
    slide.addShape(pres.ShapeType.rect, x, y, colWidth, 8, {
      fill: { color: el.color }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, x + colWidth/2 - 35, y + 30, 70, 70, {
      fill: { color: el.color }
    });

    slide.addText(el.num, {
      x: x + colWidth/2 - 35, y: y + 30, w: 70, h: 70,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Chinese title
    slide.addText(el.title, {
      x: x + 15, y: y + 115, w: colWidth - 30, h: 45,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // English subtitle
    slide.addText(el.subtitle, {
      x: x + 15, y: y + 155, w: colWidth - 30, h: 30,
      fontSize: 14, fontFace: "Arial",
      color: el.color, bold: false,
      align: "center", valign: "middle"
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, x + 60, y + 195, colWidth - 120, 2, {
      fill: { color: el.color, transparency: 50 }
    });

    // Description
    slide.addText(el.desc, {
      x: x + 20, y: y + 210, w: colWidth - 40, h: 110,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Page number badge at x:9.3, y:5.1
  slide.addText("52", {
    x: 893, y: 490, w: 40, h: 30,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

const slideConfig = {
  title: "自我关怀的三个要素",
  pageNumber: 52,
  layout: "3-column"
};

module.exports = { createSlide, slideConfig };
