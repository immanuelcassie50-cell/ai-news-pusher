// slide-72.js - 产出质量标准
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 72,
  title: '产出质量标准'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("产出质量标准", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Quality dimensions - radar style cards
  const dimensions = [
    { name: "完整性", desc: "覆盖所有关键要素，无重大遗漏", icon: "✓" },
    { name: "清晰性", desc: "表述明确，无歧义，可直接执行", icon: "✓" },
    { name: "具体性", desc: "包含足够细节，有明确的行动项", icon: "✓" },
    { name: "可衡量", desc: "有明确的指标或判断标准", icon: "✓" },
    { name: "可行性", desc: "在现有资源条件下可以落地", icon: "✓" },
    { name: "共识度", desc: "得到大多数参与者的认可", icon: "✓" }
  ];

  dimensions.forEach((dim, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.25 + row * 1.65;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.95, h: 1.45,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(dim.icon, {
      x: x + 0.2, y: y + 0.25, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Name
    slide.addText(dim.name, {
      x: x + 0.95, y: y + 0.2, w: 1.8, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(dim.desc, {
      x: x + 0.2, y: y + 0.9, w: 2.6, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom checklist
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("质量检查：产出提交前必须通过以上6项标准的检验", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("72", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };