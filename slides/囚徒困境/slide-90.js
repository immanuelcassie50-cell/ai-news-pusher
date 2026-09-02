// slide-90.js - Implementation Checklist (机制设计检查清单)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 90,
  title: '机制设计检查清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("机制设计检查清单", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Checklist items
  const checks = [
    { item: "背叛成本足够高吗？", desc: "惩罚措施是否有足够的威慑力" },
    { item: "未来价值足够大吗？", desc: "长期合作收益是否明显高于短期背叛" },
    { item: "背叛能被识别吗？", desc: "是否有足够的透明度和监测手段" },
    { item: "惩罚机制有效吗？", desc: "惩罚是否及时、可执行、适度" },
    { item: "声誉机制起作用吗？", desc: "信息能否在相关方之间有效传递" }
  ];

  const startY = 1.15;
  const itemHeight = 0.75;
  const startX = 0.5;

  checks.forEach((check, idx) => {
    const y = startY + idx * itemHeight;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX, y: y, w: 9, h: itemHeight - 0.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Checkbox
    slide.addShape(pres.shapes.RECTANGLE, {
      x: startX + 0.2, y: y + 0.2, w: 0.35, h: 0.35,
      fill: { color: theme.bg },
      line: { color: theme.primary, width: 1 }
    });

    // Item number
    slide.addShape(pres.shapes.OVAL, {
      x: startX + 0.7, y: y + 0.15, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText((idx + 1).toString(), {
      x: startX + 0.7, y: y + 0.15, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Item text
    slide.addText(check.item, {
      x: startX + 1.25, y: y + 0.08, w: 7.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(check.desc, {
      x: startX + 1.25, y: y + 0.38, w: 7.5, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom reminder
  slide.addText("设计机制时，思考：如果对方背叛，我能做什么？", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("90", {
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
  pres.writeFile({ fileName: "slide-90-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
