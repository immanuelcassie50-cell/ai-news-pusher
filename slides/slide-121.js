// slide-121.js - 讨论：选择你的策略
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 121,
  title: '讨论：选择你的策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("讨论：选择你的策略", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three scenario cards
  const scenarios = [
    {
      title: "何时用 TFT？",
      desc: "长期关系、可重复互动、对方可能原谅背叛",
      example: "与长期合作伙伴的交易"
    },
    {
      title: "何时用 grim trigger？",
      desc: "一次性博弈、无法惩罚对方、合作收益极高",
      example: "重要但不重复的商业谈判"
    },
    {
      title: "何时不值得合作？",
      desc: "对方完全没有合作意愿、一次博弈无后续",
      example: "明确的单次交易"
    }
  ];

  scenarios.forEach((s, i) => {
    const y = 1.15 + i * 1.35;

    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 1.2,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.08, h: 1.2,
      fill: { color: i === 0 ? theme.primary : i === 1 ? theme.secondary : theme.accent }
    });

    slide.addText(s.title, {
      x: 0.8, y: y + 0.1, w: 3, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(s.desc, {
      x: 0.8, y: y + 0.55, w: 5.5, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });

    slide.addText("例: " + s.example, {
      x: 6.5, y: y + 0.3, w: 2.8, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, valign: "middle", align: "right"
    });
  });

  // Bottom insight box
  slide.addShape("rect", {
    x: 0.5, y: 4.25, w: 9, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("关键洞察：策略选择取决于关系的持续性和可观察性", {
    x: 0.5, y: 4.25, w: 9, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("121", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

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
  pres.writeFile({ fileName: "slide-121-preview.pptx" });
}
