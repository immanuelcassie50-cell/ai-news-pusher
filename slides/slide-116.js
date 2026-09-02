// slide-116.js - Three Key Conclusions
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 116,
  title: '三条核心结论'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("三条核心结论", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three conclusions
  const conclusions = [
    {
      num: "1",
      title: "背叛是理性的，但合作是更理性的",
      desc: "在单次博弈中背叛看似最优，但重复博弈中，合作的长期回报远超背叛"
    },
    {
      num: "2",
      title: "机制设计决定合作能否持续",
      desc: "没有保障机制的合作是脆弱的，好的机制让合作成为必然选择"
    },
    {
      num: "3",
      title: "声誉是长期最重要的资产",
      desc: "声誉一旦建立，就是无法被夺走的竞争优势；声誉一旦丧失，代价极其高昂"
    }
  ];

  conclusions.forEach((c, idx) => {
    const y = 1.2 + idx * 1.35;

    // Card
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 9, h: 1.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Left colored section
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.0, h: 1.15,
      fill: { color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : theme.secondary }
    });

    // Number
    slide.addText(c.num, {
      x: 0.5, y: y, w: 1.0, h: 1.15,
      fontSize: 36, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(c.title, {
      x: 1.7, y: y + 0.15, w: 7.5, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: 1.7, y: y + 0.6, w: 7.5, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(c.desc, {
      x: 1.7, y: y + 0.7, w: 7.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom highlight
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("理解博弈论，看透人性；运用博弈论，改变局面", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("116", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
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
  pres.writeFile({ fileName: "slide-116-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
