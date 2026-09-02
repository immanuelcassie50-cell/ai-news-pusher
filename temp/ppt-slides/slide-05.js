const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

const slideConfig = {
  title: "访谈的工作原理",
  pageNumber: "05"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Large quotation mark decoration
  slide.addText('"', {
    x: 0.5, y: 0.8, w: 1.5, h: 1.5,
    fontSize: 120, fontFace: "Georgia",
    color: theme.light, bold: true
  });

  // Title
  slide.addText("访谈的工作原理", {
    x: 0.8, y: 0.5, w: 8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Core quote box
  slide.addShape(pres.ShapeType.rect, {
    x: 1.2, y: 1.8, w: 7.6, h: 2.2,
    fill: { color: theme.light },
    line: { color: theme.accent, width: 2 }
  });

  // Core quote text
  slide.addText("当被问\"然后你具体怎么做的\"、\"你当时是怎么判断的\"，脑子来不及整理和审查，说出来的是真实的处理过程", {
    x: 1.5, y: 2.0, w: 7, h: 1.8,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "middle",
    align: "center"
  });

  // Key insight section
  slide.addShape(pres.ShapeType.rect, {
    x: 1.2, y: 4.3, w: 7.6, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("关键洞察：不是把经验从记忆里\"捞出来\"，而是通过对话把它\"逼出来\"", {
    x: 1.4, y: 4.4, w: 7.2, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle",
    align: "center"
  });

  // Page number
  slide.addText("05", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "right"
  });
}

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "Custom", width: 10, height: 5.625 });
  pres.layout = "Custom";

  createSlide(pres, theme);

  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-05-preview.pptx" })
    .then(() => console.log("Created: slide-05-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };