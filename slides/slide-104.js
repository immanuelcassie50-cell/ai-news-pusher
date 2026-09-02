// slide-104.js - Cross-Organizational Cooperation
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 104,
  title: '跨组织合作机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("跨组织合作机制", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Intro text
  slide.addText("如何维持跨组织边界的合作？", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three cooperation forms
  const forms = [
    {
      title: "合资企业",
      desc: "共同出资、共担风险\n共享收益、控制权分配\n长期利益绑定"
    },
    {
      title: "战略伙伴",
      desc: "优势互补、资源共享\n保持独立但协同行动\n灵活的合作深度"
    },
    {
      title: "联盟治理",
      desc: "明确的治理结构\n常态化的沟通机制\n争议解决流程"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.5;
  const startX = 0.5;
  const gap = 0.35;

  forms.forEach((f, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("roundRect", {
      x: x, y: 1.6, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.08
    });

    // Top accent
    slide.addShape("rect", {
      x: x, y: 1.6, w: cardWidth, h: 0.08,
      fill: { color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : theme.secondary }
    });

    // Title
    slide.addText(f.title, {
      x: x + 0.15, y: 1.8, w: cardWidth - 0.3, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.3, y: 2.35, w: cardWidth - 0.6, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(f.desc, {
      x: x + 0.15, y: 2.5, w: cardWidth - 0.3, h: 1.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Governance mechanism highlight
  slide.addShape("roundRect", {
    x: 0.5, y: 4.3, w: 9, h: 1.1,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });

  slide.addText("治理机制是关键", {
    x: 0.7, y: 4.4, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText([
    { text: "• 明确的合同条款界定权利义务", options: { breakLine: true } },
    { text: "• 监督机制确保承诺履行", options: { breakLine: true } },
    { text: "• 纠纷解决机制提供退出保障" }
  ], {
    x: 0.7, y: 4.8, w: 8.6, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("104", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-104-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
