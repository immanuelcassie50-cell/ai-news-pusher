// slide-05.js - Content: 薪酬决策链的演变
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '薪酬决策链的演变'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("薪酬决策链的演变", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line under title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Card dimensions
  const cardW = 2.85;
  const cardH = 3.6;
  const cardY = 1.15;
  const cardGap = 0.25;
  const startX = 0.5;

  // Stage data
  const stages = [
    {
      num: "01",
      title: "人工主导",
      flow: "老板 → 决定 → 员工",
      desc: "调薪多少，由老板一句话定",
      pros: "快",
      cons: "主观、不透明"
    },
    {
      num: "02",
      title: "HR流程辅助",
      flow: "老板 → HR政策 → 系统 → 员工",
      desc: "调薪要过人力资源部，要填表、要审批",
      pros: "有标准",
      cons: "员工看不到数据"
    },
    {
      num: "03",
      title: "AI系统参与",
      flow: "老板 → HR政策 → 系统(AI) → 管理者 → 员工",
      desc: "调薪由AI系统生成建议，管理者审批",
      pros: "数据驱动",
      cons: "决策黑箱化"
    }
  ];

  stages.forEach((stage, i) => {
    const cardX = startX + i * (cardW + cardGap);

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.08 }
    });

    // Stage number circle
    slide.addShape(pres.shapes.OVAL, {
      x: cardX + cardW / 2 - 0.3, y: cardY + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });

    slide.addText(stage.num, {
      x: cardX + cardW / 2 - 0.3, y: cardY + 0.2, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Stage title
    slide.addText(stage.title, {
      x: cardX + 0.15, y: cardY + 0.9, w: cardW - 0.3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX + 0.4, y: cardY + 1.35, w: cardW - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Flow diagram box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cardX + 0.15, y: cardY + 1.45, w: cardW - 0.3, h: 0.7,
      fill: { color: theme.bg },
      rectRadius: 0.05
    });

    slide.addText(stage.flow, {
      x: cardX + 0.2, y: cardY + 1.5, w: cardW - 0.4, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Description text
    slide.addText(stage.desc, {
      x: cardX + 0.15, y: cardY + 2.25, w: cardW - 0.3, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Pros/Cons section
    // Pros label
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cardX + 0.15, y: cardY + 2.85, w: 0.5, h: 0.3,
      fill: { color: theme.accent },
      rectRadius: 0.05
    });

    slide.addText("优", {
      x: cardX + 0.15, y: cardY + 2.85, w: 0.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(stage.pros, {
      x: cardX + 0.7, y: cardY + 2.85, w: cardW - 0.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    // Cons label
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cardX + 0.15, y: cardY + 3.2, w: 0.5, h: 0.3,
      fill: { color: theme.secondary },
      rectRadius: 0.05
    });

    slide.addText("缺", {
      x: cardX + 0.15, y: cardY + 3.2, w: 0.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(stage.cons, {
      x: cardX + 0.7, y: cardY + 3.2, w: cardW - 0.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Arrows between cards
  const arrowY = cardY + cardH / 2;
  for (let i = 0; i < 2; i++) {
    const arrowX = startX + (i + 1) * cardW + i * cardGap + cardGap / 2 - 0.08;

    // Arrow body
    slide.addShape(pres.shapes.RECTANGLE, {
      x: arrowX - 0.1, y: arrowY - 0.04, w: cardGap + 0.16, h: 0.08,
      fill: { color: theme.accent }
    });

    // Arrow head (triangle using right triangle)
    slide.addShape(pres.shapes.RIGHT_TRIANGLE, {
      x: arrowX + cardGap - 0.02, y: arrowY - 0.12, w: 0.2, h: 0.24,
      fill: { color: theme.accent },
      rotate: 90
    });
  }

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";

  const theme = {
    primary: "8B2635",
    secondary: "4A4A4A",
    accent: "C45C3E",
    light: "D4C5C5",
    bg: "FAF8F7"
  };

  createSlide(pres, theme);

  pres.writeFile({ fileName: "D:/CC/temp/slide-05-preview.pptx" })
    .then(() => console.log("Created: slide-05-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
