const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 58,
  title: '竞品信息采集七大来源'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("竞品信息采集七大来源", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const sources = [
    "公开年报与媒体报道",
    "官网与社交媒体",
    "行业报告与研究机构",
    "客户反馈与调研",
    "展会与线下活动",
    "第三方数据平台",
    "内部销售团队"
  ];

  // 7 cards in a grid layout (4 top, 3 bottom centered)
  const cardW = 2.1;
  const cardH = 1.3;
  const startX = 0.5;
  const gap = 0.2;

  // Row 1: 4 cards
  for (let i = 0; i < 4; i++) {
    const x = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.3, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.accent, width: 1 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + cardW / 2 - 0.25, y: 1.4, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(String(i + 1), {
      x: x + cardW / 2 - 0.25, y: 1.4, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Source text
    slide.addText(sources[i], {
      x: x + 0.1, y: 2.0, w: cardW - 0.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle"
    });
  }

  // Row 2: 3 cards centered
  const row2StartX = startX + (cardW + gap) * 0.5;
  for (let i = 0; i < 3; i++) {
    const x = row2StartX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 2.85, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.accent, width: 1 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + cardW / 2 - 0.25, y: 2.95, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(String(i + 5), {
      x: x + cardW / 2 - 0.25, y: 2.95, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Source text
    slide.addText(sources[i + 4], {
      x: x + 0.1, y: 3.55, w: cardW - 0.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle"
    });
  }

  // Bottom note
  slide.addText("系统化采集，构建完整竞品画像", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2B2D42",
    accent: "8D99AE",
    light: "ED233C",
    bg: "F8F9FA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-58-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
