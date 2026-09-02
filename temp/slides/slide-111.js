// slide-111.js - Q&A: Numbness Risk
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};
const slideConfig = { type: `content`, index: 111, title: `Q&A：麻木风险` };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });

  // Title
  slide.addText(`Q&A：麻木风险`, {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 24, fontFace: `Microsoft YaHei`,
    color: theme.primary, bold: true
  });

  // Q section
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 1.4,
    fill: { color: theme.light, transparency: 30 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.25, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText(`Q`, {
    x: 0.7, y: 1.25, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: `Arial`,
    color: `FFFFFF`, bold: true, align: `center`, valign: `middle`
  });

  slide.addText(`这行做久了会不会变得很麻木，见多了案例之后对每个孩子都提不起最初的耐心了？`, {
    x: 1.4, y: 1.2, w: 7.9, h: 1.2,
    fontSize: 15, fontFace: `Microsoft YaHei`,
    color: theme.secondary, valign: `middle`
  });

  // A section
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.7, w: 9, h: 2.2,
    fill: { color: `FFFFFF` },
    rectRadius: 0.1,
    shadow: { type: 'outer', blur: 6, offset: 2, angle: 45, color: '000000', opacity: 0.08 }
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.85, w: 0.5, h: 0.35,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText(`A`, {
    x: 0.7, y: 2.85, w: 0.5, h: 0.35,
    fontSize: 14, fontFace: `Arial`,
    color: `FFFFFF`, bold: true, align: `center`, valign: `middle`
  });

  slide.addText(`会有这个风险。眼前这个孩子，对他而言是人生里第一次也是唯一一次经历这件事。不管已经经手过多少个案例，对他来说这次都是唯一的一次。`, {
    x: 1.4, y: 2.9, w: 7.9, h: 1.0,
    fontSize: 14, fontFace: `Microsoft YaHei`,
    color: theme.secondary, valign: `top`
  });

  // Highlight box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.4, y: 3.95, w: 7.9, h: 0.8,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.08
  });
  slide.addText(`这句话经常在心里默念，能在快要滑向"套路化"的时候把自己拉回来一点。`, {
    x: 1.6, y: 3.95, w: 7.5, h: 0.8,
    fontSize: 13, fontFace: `Microsoft YaHei`,
    color: theme.primary, bold: true, valign: `middle`, italic: true
  });

  // Page number badge - circle style at bottom-left (x: 0.3, y: 5.1)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText(`111`, {
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
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-111-preview.pptx` }).then(() => console.log(`Created slide-111-preview.pptx`));
}
