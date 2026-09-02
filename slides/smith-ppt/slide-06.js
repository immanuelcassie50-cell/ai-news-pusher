// slide-06.js - Content Page: 斯密思想的三个核心
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '斯密思想的三个核心'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Page title
  slide.addText("斯密思想的三个核心", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Three core concepts - horizontal layout
  const cardY = 1.3;
  const cardW = 2.9;
  const cardH = 3.8;
  const cardGap = 0.25;

  const cores = [
    {
      num: "01",
      title: "看不见的手",
      subtitle: "The Invisible Hand",
      desc: '个人追求私利，在市场这只"看不见的手"的引导下，竟能促进社会整体利益。',
      quote: "我们每天所需的食物和饮料，不是出于屠户、酿酒师或烙面包师的恩惠，而是出于他们自利的打算。"
    },
    {
      num: "02",
      title: "分工与专业化",
      subtitle: "Division of Labor",
      desc: "劳动分工是财富增长的源泉。专业化提高效率，效率创造价值。",
      quote: "劳动分工最大的好处，不在于分工本身，而在于分工带来的一系列连锁效应。"
    },
    {
      num: "03",
      title: "公正的旁观者",
      subtitle: "Impartial Spectator",
      desc: '道德判断依赖于我们内心的"公正旁观者"——一种同理心和自我审视的能力。',
      quote: "人类的同情心是道德情感的基石。"
    }
  ];

  cores.forEach((core, i) => {
    const x = 0.5 + i * (cardW + cardGap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
    });

    // Top number badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: cardY, w: cardW, h: 0.6,
      fill: { color: i === 1 ? theme.accent : theme.primary }
    });

    slide.addText(core.num, {
      x: x, y: cardY, w: cardW, h: 0.6,
      fontSize: 24, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Core title
    slide.addText(core.title, {
      x: x + 0.15, y: cardY + 0.75, w: cardW - 0.3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // English subtitle
    slide.addText(core.subtitle, {
      x: x + 0.15, y: cardY + 1.2, w: cardW - 0.3, h: 0.35,
      fontSize: 11, fontFace: "Georgia",
      color: theme.light, bold: false, italic: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4, y: cardY + 1.6, w: cardW - 0.8, h: 0.02,
      fill: { color: theme.light, transparency: 50 }
    });

    // Description
    slide.addText(core.desc, {
      x: x + 0.15, y: cardY + 1.7, w: cardW - 0.3, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });

    // Quote box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.1, y: cardY + 2.75, w: cardW - 0.2, h: 0.9,
      fill: { color: theme.bg }
    });

    slide.addText('"' + core.quote.substring(0, 40) + '..."', {
      x: x + 0.15, y: cardY + 2.8, w: cardW - 0.3, h: 0.8,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false, italic: true,
      align: "left", valign: "top"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Georgia",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
