const pptxgen = require("pptxgenjs");

const theme = {
  primary: "C62828",
  secondary: "424242",
  accent: "E53935",
  light: "FFCDD2",
  bg: "FFFFFF"
};

// Slide dimensions (16:9)
const SLIDE_W = 10;
const SLIDE_H = 5.625;
const rectRadius = 0.1;

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // --- Decorative shapes ---

  // Large accent block on left side (vertical bar)
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.35, h: SLIDE_H,
    fill: { color: theme.primary }
  });

  // Diagonal decorative strip (upper right corner)
  slide.addShape(pres.ShapeType.rect, {
    x: 7.5, y: -0.8, w: 4, h: 1.2,
    fill: { color: theme.light },
    rotate: -15
  });

  // Small accent square (bottom right area)
  slide.addShape(pres.ShapeType.rect, {
    x: 8.8, y: 4.5, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });

  // Another decorative element - thin horizontal line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 2.7, w: 2.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Decorative circle (subtle)
  slide.addShape(pres.ShapeType.ellipse, {
    x: 8.2, y: 1.0, w: 1.2, h: 1.2,
    fill: { color: theme.light, transparency: 60 }
  });

  // --- Text content ---

  // Section label (small text above title)
  slide.addText("SECTION", {
    x: 0.8, y: 1.6, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, bold: false,
    charSpacing: 4
  });

  // Main title
  slide.addText("信用风险", {
    x: 0.8, y: 2.0, w: 6, h: 1.2,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("违约风险", {
    x: 0.8, y: 3.2, w: 5, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Bottom decorative dots
  const dotY = 4.8;
  const dotSize = 0.12;
  const dotColors = [theme.accent, theme.primary, theme.light];
  dotColors.forEach((c, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.8 + i * 0.22, y: dotY, w: dotSize, h: dotSize,
      fill: { color: c }
    });
  });

  return slide;
}

const slideConfig = {
  type: "section-divider",
  index: 59,
  title: "信用风险"
};

// Export for use as module
module.exports = { createSlide, slideConfig };

// --- Standalone preview ---
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", w: 10, h: 5.625 });
  pres.layout = "CUSTOM";

  createSlide(pres, theme);

  pres.writeFile({ fileName: "slide-59-preview.pptx" })
    .then(() => console.log("Created: slide-59-preview.pptx"))
    .catch(err => console.error(err));
}
