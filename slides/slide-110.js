// slide-110.js - Cooperation Mechanism Checklist
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 110,
  title: '合作维持机制清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("合作维持机制清单", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Checklist items
  const items = [
    { q: "合同条款是否完善？", sub: "权利义务清晰、违约责任明确" },
    { q: "背叛成本是否足够？", sub: "惩罚力度 > 背叛收益" },
    { q: "合作收益是否明确？", sub: "各方的收益预期一致" },
    { q: "监测机制是否有效？", sub: "及时发现背叛行为" },
    { q: "惩罚机制是否执行？", sub: "说好的惩罚必须兑现" }
  ];

  items.forEach((item, idx) => {
    const y = 1.1 + idx * 0.82;

    // Checkbox area
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.accent },
      rectRadius: 0.08
    });
    slide.addText((idx + 1).toString(), {
      x: 0.5, y: y, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(item.q, {
      x: 1.2, y: y, w: 4, h: 0.55,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Sub question
    slide.addText(item.sub, {
      x: 5.3, y: y, w: 4.2, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Divider (except last)
    if (idx < 4) {
      slide.addShape("rect", {
        x: 0.5, y: y + 0.65, w: 9, h: 0.01,
        fill: { color: theme.light }
      });
    }
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });
  slide.addText("机制设计不是一次性的，需要持续迭代和优化", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("110", {
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
  pres.writeFile({ fileName: "slide-110-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
