const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("20", {
    x: 9.2, y: 0.25, w: 0.55, h: 0.35,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: "FFFFFF", align: "center", valign: "middle", margin: 0
  });

  // Title
  slide.addText("两两结构化访谈", {
    x: 0.5, y: 0.4, w: 8.5, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, bold: true,
    color: theme.primary, margin: 0
  });

  // Decorative line under title
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.05, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Requirements list
  const requirements = [
    { icon: "A", text: "找一位搭档，两人分别选了不同的场景定位表" },
    { icon: "B", text: "A访谈B，B开着录音，围绕自己的场景讲经验（20-25分钟）" },
    { icon: "C", text: "角色互换，B访谈A" },
    { icon: "D", text: "访谈者按提问清单提问" },
    { icon: "E", text: "被访谈者不要整理语言，不要说\"应该怎么做\"，说你真实怎么做的" }
  ];

  const startY = 1.4;
  const itemHeight = 0.75;

  requirements.forEach((item, index) => {
    const y = startY + index * itemHeight;

    // Icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.1, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(item.icon, {
      x: 0.6, y: y + 0.1, w: 0.45, h: 0.45,
      fontFace: "Arial", fontSize: 16, bold: true,
      color: "FFFFFF", align: "center", valign: "middle", margin: 0
    });

    // Requirement text
    slide.addText(item.text, {
      x: 1.2, y: y + 0.05, w: 8.3, h: 0.55,
      fontFace: "Microsoft YaHei", fontSize: 16,
      color: theme.secondary, valign: "middle", margin: 0
    });
  });

  // Bottom highlight box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("关键：说真实怎么做的，不要说应该怎么做", {
    x: 0.5, y: 4.85, w: 9, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
    color: theme.primary, align: "center", valign: "middle", margin: 0
  });
}

const slideConfig = {
  title: "访谈演练说明",
  file: "slide-20.js",
  page: 20
};

// Standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/ppt-slides/slide-20.pptx" })
    .then(() => console.log("Created: slide-20.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };