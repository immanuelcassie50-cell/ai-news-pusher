// slide-43.js - 第五章 孩子答不出来的处理
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 43,
  title: '孩子答不出来的处理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("孩子答不出来的处理", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Key approach label
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.4,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("核心方法", {
    x: 0.5, y: 1.0, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main approach text
  slide.addText("不要逼着给出清晰答案，换成更具体、更可感知的小问题", {
    x: 2.1, y: 1.0, w: 7.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  // Three question cards
  const questions = [
    {
      q: "什么事情你做的时候会忘记看手机？",
      tip: "找到心流体验"
    },
    {
      q: "什么样的失败你能接受，什么样的完全无法接受？",
      tip: "了解风险边界"
    },
    {
      q: "更享受一个人琢磨一件事，还是跟一群人一起做成？",
      tip: "判断工作模式"
    }
  ];

  const cardW = 2.9;
  const cardH = 1.6;
  const startX = 0.5;
  const startY = 1.6;
  const gap = 0.2;

  questions.forEach((item, i) => {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.1 },
      rectRadius: 0.1
    });

    // Question number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: startY + 0.15, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x + 0.15, y: startY + 0.15, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(item.q, {
      x: x + 0.15, y: startY + 0.65, w: cardW - 0.3, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "top"
    });

    // Tip tag
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.15, y: startY + cardH - 0.45, w: 1.6, h: 0.3,
      fill: { color: theme.light },
      rectRadius: 0.08
    });
    slide.addText(item.tip, {
      x: x + 0.15, y: startY + cardH - 0.45, w: 1.6, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight box 1
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.45, w: 9, h: 0.6,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("这些问题比'十年后想过什么日子'容易得多", {
    x: 0.7, y: 3.45, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Bottom insight box 2
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.6,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("答案拼起来，能拼出模糊但真实的方向感", {
    x: 0.7, y: 4.2, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style - bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("43", {
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
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-43-preview.pptx" })
    .then(() => console.log("Preview saved: slide-43-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
