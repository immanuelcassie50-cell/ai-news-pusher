// slide-102.js - Organizational Incentives
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 102,
  title: '组织内的合作激励'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("组织内的合作激励", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three organizational incentive mechanisms
  const mechanisms = [
    {
      title: "团队奖金",
      subtitle: "vs 个人奖金",
      desc: "个人奖金 → 部门竞争\n团队奖金 → 内部合作\n共同目标 → 利益一致",
      color: theme.primary
    },
    {
      title: "共享指标",
      subtitle: "跨部门指标",
      desc: "使用共同KPI\n收入、成本、利润\n责任共担、成果共享",
      color: theme.accent
    },
    {
      title: "内部客户",
      subtitle: "服务意识",
      desc: "把其他部门当客户\n提升服务质量\n减少内部摩擦",
      color: theme.secondary
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 3.2;
  const startX = 0.5;
  const gap = 0.35;

  mechanisms.forEach((m, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card
    slide.addShape("roundRect", {
      x: x, y: 1.2, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 },
      rectRadius: 0.08
    });

    // Top colored section
    slide.addShape("rect", {
      x: x, y: 1.2, w: cardWidth, h: 0.9,
      fill: { color: m.color }
    });

    // Title
    slide.addText(m.title, {
      x: x, y: 1.25, w: cardWidth, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Subtitle
    slide.addText(m.subtitle, {
      x: x, y: 1.7, w: cardWidth, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: m.color === theme.primary ? theme.light : "FFFFFF", bold: false,
      align: "center", valign: "middle"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.3, y: 2.2, w: cardWidth - 0.6, h: 0.015,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(m.desc, {
      x: x + 0.15, y: 2.35, w: cardWidth - 0.3, h: 1.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 4.6, w: 9, h: 0.85,
    fill: { color: theme.primary, transparency: 92 },
    rectRadius: 0.08
  });
  slide.addText("核心设计原则", {
    x: 0.7, y: 4.65, w: 2.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("让组织成员的合作收益大于背叛收益，是机制设计的核心", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("102", {
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
  pres.writeFile({ fileName: "slide-102-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
