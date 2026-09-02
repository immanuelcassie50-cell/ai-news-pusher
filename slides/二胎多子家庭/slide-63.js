// slide-63.js - 互动练习参考答案
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '参考答案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("参考答案", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // STEA answers
  const answers = [
    { letter: "S", title: "停止", content: "好啦好啦，两个人都先停下来，妈妈看到你们都很想玩" },
    { letter: "T", title: "同理", content: "哥哥，我知道你先拿到的，等了很久很想玩；二宝，你也觉得很委屈对不对？" },
    { letter: "E", title: "探索", content: "你们觉得怎么做才能让两个人都有机会玩？" },
    { letter: "A", title: "行动", content: "我们一起制定一个轮流规则吧，约定好后每个人都要遵守" }
  ];

  const answerWidth = 4.4;
  const answerHeight = 1.0;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.3;
  const gapY = 0.2;

  answers.forEach((answer, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (answerWidth + gapX);
    const y = startY + row * (answerHeight + gapY);

    // Answer card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: answerWidth, h: answerHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Letter badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.15, y: y + 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(answer.letter, {
      x: x + 0.15, y: y + 0.25, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(answer.title, {
      x: x + 0.75, y: y + 0.15, w: 1.2, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Content
    slide.addText(answer.content, {
      x: x + 0.15, y: y + 0.5, w: answerWidth - 0.3, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "top"
    });
  });

  // Key insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 9, h: 1.4,
    fill: { color: theme.primary, transparency: 8 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.8, w: 0.08, h: 1.4,
    fill: { color: theme.primary }
  });
  slide.addText("关键洞察", {
    x: 0.8, y: 3.95, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText([
    { text: "STEA的核心不是让孩子服从，而是", options: { breakLine: false } },
    { text: "引导他们参与解决方案", options: { bold: true, breakLine: true } },
    { text: "当孩子参与制定规则时，他们更愿意遵守", options: {} }
  ], {
    x: 0.8, y: 4.35, w: 8.5, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, align: "left", valign: "top"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
