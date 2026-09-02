// slide-72.js - Long-term Contracts (长期合同的设计)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 72,
  title: '长期合同的设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("长期合同的设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Key elements
  const elements = [
    { title: "多年期限", desc: "3-5年或更长的合同周期" },
    { title: "续约选项", desc: "双方优先续约权" },
    { title: "价格调整机制", desc: "随市场变化的弹性定价" },
    { title: "年度回顾条款", desc: "定期评估合作效果" }
  ];

  const cardWidth = 4.4;
  const cardHeight = 0.9;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.4;
  const gapY = 0.2;

  elements.forEach((el, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText((idx + 1).toString(), {
      x: x + 0.25, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title and desc
    slide.addText(el.title, {
      x: x + 0.9, y: y + 0.15, w: 3.3, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(el.desc, {
      x: x + 0.9, y: y + 0.48, w: 3.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Benefits section
  slide.addText("长期合同的价值", {
    x: 0.5, y: 3.4, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const benefits = [
    "稳定预期，减少短期机会主义诱惑",
    "双方愿意进行关系专用性投资",
    "降低频繁谈判的交易成本",
    "形成\"沉没成本效应\"，增强合作承诺"
  ];

  benefits.forEach((b, idx) => {
    const y = 3.9 + idx * 0.4;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });

    slide.addText(b, {
      x: 1.0, y: y, w: 8.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("72", {
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
  pres.writeFile({ fileName: "slide-72-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
