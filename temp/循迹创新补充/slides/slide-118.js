// slide-118.js - 焦点小组
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 118,
  title: '焦点小组 | Focus Group'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("焦点小组", {
    x: 0.5, y: 0.4, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Focus Group", {
    x: 5.5, y: 0.5, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.secondary
  });
  slide.addText("深入了解用户想法", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // 5 content areas
  const sections = [
    {
      title: "参与人员选择",
      items: ["6-10人/组", "目标用户筛选", "多样性考量", "避免利益相关者"]
    },
    {
      title: "讨论大纲设计",
      items: ["开场暖场", "核心议题", "深度追问", "总结收尾"]
    },
    {
      title: "主持人技巧",
      items: ["中立引导", "鼓励发言", "控制偏离", "观察非语言"]
    },
    {
      title: "记录与分析",
      items: ["全程录音录像", "多人编码分析", "主题归纳", "洞察提炼"]
    },
    {
      title: "适用场景",
      items: ["概念探索阶段", "需求澄清", "态度调研", "创意评估"]
    }
  ];

  const cardW = 1.72;
  const cardH = 2.8;
  const startX = 0.5;
  const startY = 1.5;
  const gapX = 0.15;

  sections.forEach((section, i) => {
    const x = startX + i * (cardW + gapX);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Header bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: 0.5,
      fill: { color: i === 2 ? theme.accent : theme.primary }
    });

    // Title
    slide.addText(section.title, {
      x: x + 0.05, y: startY + 0.08, w: cardW - 0.1, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });

    // Items
    section.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.1, y: startY + 0.6 + j * 0.42, w: cardW - 0.2, h: 0.4,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 8.5, h: 0.5,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("优势：互动性强 | 深度挖掘 | 动态探索 | 成本适中    局限：样本有限 | 群体效应 | 主持人偏见", {
    x: 0.7, y: 4.55, w: 8, h: 0.4,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("118", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-118-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
