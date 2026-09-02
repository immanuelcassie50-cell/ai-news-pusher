// slide-25.js - Three-Filter Method: 三重过滤法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 25,
  title: '三重过滤法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("三重过滤法", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Subtitle
  slide.addText("过滤三问", {
    x: 0.4, y: 0.95, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Three filter cards
  const filters = [
    {
      num: "1",
      title: "整体 vs 具体",
      content: "是“关于专业整体的判断”还是“关于这所学校具体培养方向”"
    },
    {
      num: "2",
      title: "时间戳",
      content: "这条信息是不是还成立（两年前的热门现在可能已过剩）"
    },
    {
      num: "3",
      title: "利益相关",
      content: "是招生宣传、机构广告，还是真正的从业者经验"
    }
  ];

  filters.forEach((f, i) => {
    const y = 1.5 + i * 1.25;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(f.num, {
      x: 0.7, y: y + 0.3, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(f.title, {
      x: 1.4, y: y + 0.15, w: 7.9, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Content
    slide.addText(f.content, {
      x: 1.4, y: y + 0.55, w: 7.9, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("25", {
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-25-preview.pptx" })
    .then(() => console.log("Created: slide-25-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
