// slide-91.js - Common Mistakes (机制设计中的常见错误)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 91,
  title: '机制设计中的常见错误'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("机制设计中的常见错误", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Mistakes
  const mistakes = [
    {
      title: "惩罚过轻",
      desc: "背叛收益大于惩罚成本，无法形成威慑",
      example: "违约金远低于违约收益"
    },
    {
      title: "检测缺失",
      desc: "无法识别背叛行为，机制形同虚设",
      example: "缺乏信息透明度"
    },
    {
      title: "激励错位",
      desc: "个人目标与集体目标不一致",
      example: "只看短期业绩忽视长期合作"
    },
    {
      title: "未来价值不足",
      desc: "重复互动不够频繁，背叛成本低",
      example: "一次性交易"
    }
  ];

  const cardWidth = 4.4;
  const cardHeight = 1.35;
  const startX = 0.5;
  const startY = 1.15;
  const gapX = 0.4;
  const gapY = 0.2;

  mistakes.forEach((mistake, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Red accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.06, h: cardHeight,
      fill: { color: "c53030" }
    });

    // Title
    slide.addText(mistake.title, {
      x: x + 0.2, y: y + 0.1, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "c53030", bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(mistake.desc, {
      x: x + 0.2, y: y + 0.45, w: 4.0, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Example
    slide.addText("例如：" + mistake.example, {
      x: x + 0.2, y: y + 0.85, w: 4.0, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 0.7,
    fill: { color: "c53030" }
  });
  slide.addText("避免错误的关键：让背叛成本 > 背叛收益", {
    x: 0.5, y: 4.1, w: 9, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("91", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-91-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
