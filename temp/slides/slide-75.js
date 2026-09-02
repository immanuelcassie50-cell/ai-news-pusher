// slide-75.js - Neutrality Is Not Compromise
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 75, title: '中立不是和稀泥' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("中立不是和稀泥", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 2.0, h: 0.04,
    fill: { color: theme.accent }
  });

  // Two comparison cards
  // Left card - 真正的中立
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.15, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Left card header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.15, w: 4.4, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("真正的中立", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Left card content
  slide.addText("把该说的信息、该给的判断都摆出来，只是不替任何一方拍板", {
    x: 0.7, y: 1.85, w: 4.0, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Checkmark
  slide.addShape(pres.shapes.OVAL, {
    x: 1.8, y: 2.85, w: 1.0, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("需要更多投入", {
    x: 1.8, y: 2.85, w: 1.0, h: 0.45,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Right card - 甩手掌柜
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.1, y: 1.15, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: `outer`, color: `000000`, blur: 4, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Right card header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.15, w: 4.4, h: 0.55,
    fill: { color: theme.light }
  });
  slide.addText("甩手掌柜", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Right card content
  slide.addText('"我不站队，你们自己决定"——把最难的判断工作甩回给已经僵持不下的家庭', {
    x: 5.3, y: 1.85, w: 4.0, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // X mark
  slide.addShape(pres.shapes.OVAL, {
    x: 6.4, y: 2.85, w: 1.0, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("更少投入", {
    x: 6.4, y: 2.85, w: 1.0, h: 0.45,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // VS divider
  slide.addShape(pres.shapes.OVAL, {
    x: 4.55, y: 2.15, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("VS", {
    x: 4.55, y: 2.15, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Bottom emphasis box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.0,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("真正中立需要更多投入，不是更少", {
    x: 0.7, y: 4.1, w: 8.6, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("75", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-75-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
