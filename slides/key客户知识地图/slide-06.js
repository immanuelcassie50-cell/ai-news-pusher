// slide-06.js - Course Outline (课程大纲)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '课程大纲'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("课程大纲", {
    x: 0.4, y: 0.3, w: 4, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  // Outline items - 2x2 grid layout
  const outlineItems = [
    {
      part: "PART 1",
      title: "认知与方法",
      chapters: "16章",
      color: theme.primary
    },
    {
      part: "PART 2",
      title: "职业与发展",
      chapters: "6章",
      color: theme.secondary
    },
    {
      part: "特别篇",
      title: "实践应用",
      chapters: "3篇",
      color: theme.accent
    },
    {
      part: "附录",
      title: "工具模板",
      chapters: "4个",
      color: theme.light
    }
  ];

  const colWidth = 4.3;
  const rowHeight = 1.8;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.4;
  const gapY = 0.3;

  outlineItems.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (colWidth + gapX);
    const y = startY + row * (rowHeight + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: colWidth, h: rowHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Left color block
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.12, h: rowHeight,
      fill: { color: item.color }
    });

    // Part label
    slide.addText(item.part, {
      x: x + 0.3, y: y + 0.25, w: 2, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: x + 0.3, y: y + 0.7, w: 3, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Chapter count
    slide.addText(item.chapters, {
      x: x + 0.3, y: y + 1.25, w: 2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C43C3A",
    secondary: "4A4E69",
    accent: "9A8C98",
    light: "E8E8E8",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
