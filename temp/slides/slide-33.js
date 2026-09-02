// slide-33.js - 三问判断法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 33,
  title: '三问判断法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("三问判断法", {
    x: 0.6, y: 0.35, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Subtitle
  slide.addText("判断一个专业/行业是否值得选择的三个核心问题", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Three question cards
  const questions = [
    {
      num: "01",
      title: "需求真实吗",
      desc: "这个行业解决的问题是不是真实且长期存在的需求",
      detail: "不是短期政策或风口催出来的"
    },
    {
      num: "02",
      title: "壁垒高吗",
      desc: "核心壁垒是不是容易被新技术",
      detail: "尤其是AI替代"
    },
    {
      num: "03",
      title: "周期在哪",
      desc: "现在处在扩张期、成熟期、还是收缩期",
      detail: "判断入场时机"
    }
  ];

  const cardW = 2.9;
  const cardH = 2.8;
  const startX = 0.4;
  const startY = 1.4;
  const gap = 0.3;

  questions.forEach((q, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 },
      rectRadius: 0.1
    });

    // Number badge - large circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW / 2 - 0.45, y: startY + 0.25, w: 0.9, h: 0.9,
      fill: { color: theme.primary }
    });
    slide.addText(q.num, {
      x: x + cardW / 2 - 0.45, y: startY + 0.25, w: 0.9, h: 0.9,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question title
    slide.addText(q.title, {
      x: x + 0.15, y: startY + 1.3, w: cardW - 0.3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4, y: startY + 1.8, w: cardW - 0.8, h: 0.03,
      fill: { color: theme.accent }
    });

    // Description
    slide.addText(q.desc, {
      x: x + 0.15, y: startY + 1.95, w: cardW - 0.3, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });

    // Detail tag
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 2.45, w: cardW - 0.6, h: 0.25,
      fill: { color: theme.accent, transparency: 85 },
      rectRadius: 0.08
    });
    slide.addText(q.detail, {
      x: x + 0.3, y: startY + 2.45, w: cardW - 0.6, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.55, w: 9.2, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("核心：用时间差思维思考 — 今年入学 vs 四年后毕业，产业逻辑可能完全不同", {
    x: 0.6, y: 4.55, w: 8.8, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge - circle at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("33", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-33-preview.pptx" })
    .then(() => console.log("Created: slide-33-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
