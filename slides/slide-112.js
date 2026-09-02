// slide-112.js - Action Planning Template
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 112,
  title: '行动规划模板'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("行动规划模板", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Intro
  slide.addText("个人行动计划的三个步骤", {
    x: 0.5, y: 1.05, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Three steps
  const steps = [
    {
      num: "Step 1",
      title: "识别你参与的博弈",
      desc: "列出你目前参与的\n三个关键博弈关系\n（工作、家庭、商业等）",
      color: theme.primary
    },
    {
      num: "Step 2",
      title: "分析成本与收益",
      desc: "每个博弈中：\n背叛的成本 vs 合作的价值\n是多少？",
      color: theme.accent
    },
    {
      num: "Step 3",
      title: "设计合作机制",
      desc: "你能设计什么机制\n让合作更有吸引力\n让背叛代价更高？",
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.0;
  const startX = 0.5;
  const gap = 0.35;

  steps.forEach((s, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("roundRect", {
      x: x, y: 1.55, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.08
    });

    // Top section
    slide.addShape("rect", {
      x: x, y: 1.55, w: cardWidth, h: 0.8,
      fill: { color: s.color }
    });

    // Step label
    slide.addText(s.num, {
      x: x, y: 1.6, w: cardWidth, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: s.color === theme.primary ? theme.light : "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(s.title, {
      x: x, y: 1.95, w: cardWidth, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.3, y: 2.45, w: cardWidth - 0.6, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(s.desc, {
      x: x + 0.15, y: 2.6, w: cardWidth - 0.3, h: 1.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 4.75, w: 9, h: 0.65,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });
  slide.addText("关键行动：从今天开始，用博弈论的视角重新审视你的人际关系和商业决策", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.65,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("112", {
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
  pres.writeFile({ fileName: "slide-112-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
