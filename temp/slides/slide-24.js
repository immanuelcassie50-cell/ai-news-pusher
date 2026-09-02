// slide-24.js - Case: Excel Spreadsheet Story
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '案例：十几页sheet的Excel'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("案例：十几页sheet的Excel", {
    x: 0.6, y: 0.35, w: 7, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Case card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
    rectRadius: 0.1
  });

  // Story content - left side
  const storyItems = [
    { icon: "1", text: "爸爸带着自己整理的Excel表格来找我" },
    { icon: "2", text: "密密麻麻十几个sheet：录取线、就业率、保研率、宿舍条件、食堂评分、论坛吐槽" },
    { icon: "3", text: "研究了一个多月" }
  ];

  storyItems.forEach((item, i) => {
    const y = 1.2 + i * 0.7;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.icon, {
      x: 0.7, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(item.text, {
      x: 1.25, y: y, w: 7.9, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Key moment - highlighted
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 3.4, w: 8.6, h: 0.9,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });

  slide.addText([
    { text: "我说：", options: { bold: true, color: theme.primary } },
    { text: "你比一个月前更焦虑了，而不是更清楚了", options: { color: theme.secondary } }
  ], {
    x: 0.9, y: 3.5, w: 8.2, h: 0.7,
    fontSize: 17, fontFace: "Microsoft YaHei",
    valign: "middle"
  });

  // Punch line
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.7,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("他愣住了：你怎么知道", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("24", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-24-preview.pptx" })
    .then(() => console.log("Created: slide-24-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
