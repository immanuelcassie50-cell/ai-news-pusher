// slide-93.js - Summary: Module 4 Key Takeaways (第四模块总结)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 93,
  title: '第四模块总结：合作维持机制设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("第四模块总结：合作维持机制设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three pillars summary
  const pillars = [
    {
      title: "提高背叛成本",
      key: "经济+法律+关系",
      icon: "1"
    },
    {
      title: "增加未来价值",
      key: "关系投资+长期合同+互惠",
      icon: "2"
    },
    {
      title: "建立识别机制",
      key: "透明度+第三方验证+声誉",
      icon: "3"
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const startY = 1.15;
  const gapX = 0.25;

  pillars.forEach((pillar, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 1.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.1,
      fill: { color: theme.accent }
    });

    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(pillar.icon, {
      x: x + cardWidth / 2 - 0.3, y: startY + 0.2, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(pillar.title, {
      x: x + 0.1, y: startY + 0.85, w: cardWidth - 0.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Key methods
    slide.addText(pillar.key, {
      x: x + 0.1, y: startY + 1.2, w: cardWidth - 0.2, h: 0.25,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Core equation
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.85, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("核心等式：合作维持 = f(背叛成本, 未来价值, 检测机制)", {
    x: 0.5, y: 2.85, w: 9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Design checklist
  slide.addText("机制设计检查清单", {
    x: 0.5, y: 3.7, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const checks = [
    "背叛成本是否足够高？",
    "未来价值是否足够大？",
    "背叛能否被识别？",
    "惩罚机制是否有效？"
  ];

  const checkStartX = 0.5;
  const checkY = 4.1;
  const checkWidth = 2.2;
  const checkGap = 0.1;

  checks.forEach((check, idx) => {
    const x = checkStartX + idx * (checkWidth + checkGap);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: checkY, w: checkWidth, h: 0.45,
      fill: { color: theme.accent, transparency: 80 },
      line: { color: theme.accent, width: 1 }
    });

    slide.addText(check, {
      x: x, y: checkY, w: checkWidth, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Final takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fill: { color: theme.accent }
  });
  slide.addText("好的机制设计让合作成为理性的选择", {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("93", {
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
  pres.writeFile({ fileName: "slide-93-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
