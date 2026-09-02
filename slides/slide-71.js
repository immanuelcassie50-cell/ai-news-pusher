// slide-71.js - Relationship Investment (关系投资与专用资产)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 71,
  title: '关系投资与专用资产'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("关系投资与专用资产", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Concept explanation
  slide.addText("关系专用性资产 (Relationship-Specific Investment)", {
    x: 0.5, y: 1.15, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("为特定关系而投入的资产，一旦关系结束将大幅贬值", {
    x: 0.5, y: 1.55, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Types of relationship-specific assets
  const assetTypes = [
    {
      title: "物理专用性",
      examples: ["定制设备", "专用模具", "专门生产线"],
      desc: "为对方特别设计或改装的资产"
    },
    {
      title: "人力专用性",
      examples: ["专项培训", "专属技能", "深度磨合"],
      desc: "针对特定合作积累的知识和技能"
    },
    {
      title: "地点专用性",
      examples: ["靠近选址", "专属仓库", "专用物流"],
      desc: "为了合作便利而进行的地理布局"
    }
  ];

  const cardWidth = 2.9;
  const cardHeight = 2.4;
  const startX = 0.55;
  const startY = 2.1;
  const gapX = 0.25;

  assetTypes.forEach((asset, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    // Card background
    slide.addShape("rect", {
      x: x, y: startY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape("rect", {
      x: x, y: startY, w: cardWidth, h: 0.1,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(asset.title, {
      x: x + 0.15, y: startY + 0.25, w: cardWidth - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Examples
    asset.examples.forEach((ex, eIdx) => {
      slide.addShape("ellipse", {
        x: x + 0.3, y: startY + 0.8 + eIdx * 0.4, w: 0.12, h: 0.12,
        fill: { color: theme.accent }
      });
      slide.addText(ex, {
        x: x + 0.5, y: startY + 0.7 + eIdx * 0.4, w: 2.3, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });

    // Description
    slide.addText(asset.desc, {
      x: x + 0.15, y: startY + 1.95, w: cardWidth - 0.3, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.primary, width: 1 }
  });
  slide.addText("投入越多，转换成本越高，合作动机越强", {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addText("71", {
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
  pres.writeFile({ fileName: "slide-71-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
