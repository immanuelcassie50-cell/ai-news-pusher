// slide-14.js - 边缘地带论（斯皮克曼）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 14,
  title: '边缘地带论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("边缘地带论：斯皮克曼的修正", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left: Spykman profile
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 3.0, h: 3.9,
    fill: { color: theme.light },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("ellipse", {
    x: 1.35, y: 1.5, w: 1.3, h: 1.3,
    fill: { color: theme.secondary }
  });
  slide.addText("斯皮克曼", {
    x: 1.35, y: 2.0, w: 1.3, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("Nicholas Spykman", {
    x: 0.6, y: 2.95, w: 2.8, h: 0.35,
    fontSize: 13, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("1893-1943", {
    x: 0.6, y: 3.25, w: 2.8, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "美国地缘政治学家", options: { breakLine: true } },
    { text: "耶鲁大学教授", options: { breakLine: true } },
    { text: "《和平的地理学》1942", options: { breakLine: true } },
    { text: "师承麦金德，但提出相反观点" }
  ], {
    x: 0.6, y: 3.65, w: 2.8, h: 1.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "top"
  });

  // Right content: Rimland Theory
  slide.addText("边缘地带论核心", {
    x: 3.8, y: 1.2, w: 5.7, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape("rect", {
    x: 3.8, y: 1.7, w: 1.2, h: 0.06,
    fill: { color: theme.accent }
  });

  // Central claim box
  slide.addShape("rect", {
    x: 3.8, y: 1.95, w: 5.7, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("「谁控制了边缘地带，谁就控制了世界」", {
    x: 3.95, y: 2.0, w: 5.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("—— 斯皮克曼对麦金德的修正", {
    x: 3.95, y: 2.5, w: 5.4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Key differences
  slide.addText("与麦金德的关键分歧", {
    x: 3.8, y: 3.2, w: 5.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const diffs = [
    { mackinder: "心脏地带是霸权核心", spykman: "边缘地带才是争夺焦点" },
    { mackinder: "陆权优于海权", spykman: "两岸国家联合制衡陆权" },
    { mackinder: "德国可能主导心脏地带", spykman: "边缘地带国家是制衡关键" }
  ];

  diffs.forEach((d, i) => {
    const y = 3.65 + i * 0.55;

    // Mackinder view
    slide.addShape("rect", {
      x: 3.8, y: y, w: 2.7, h: 0.45,
      fill: { color: theme.light }
    });
    slide.addText(d.mackinder, {
      x: 3.9, y: y, w: 2.5, h: 0.45,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });

    // Arrow
    slide.addText("→", {
      x: 6.5, y: y, w: 0.4, h: 0.45,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    // Spykman view
    slide.addShape("rect", {
      x: 6.9, y: y, w: 2.6, h: 0.45,
      fill: { color: theme.secondary }
    });
    slide.addText(d.spykman, {
      x: 7.0, y: y, w: 2.4, h: 0.45,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 3.8, y: 5.15, w: 5.7, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("战略启示：美国应联合边缘地带国家，防止欧亚大陆出现主导力量", {
    x: 3.9, y: 5.15, w: 5.5, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "left", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
