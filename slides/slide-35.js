// slide-35.js - Indicator 2: Infrastructure investment direction
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 35,
  title: '指标二：基建投向分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("指标二：基建投向分析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Indicator label badge
  slide.addShape("roundRect", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("指标2", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main content - two columns
  // Left: Port investment (Sea power)
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 0.08, h: 2.4,
    fill: { color: theme.primary }
  });

  slide.addText("港口与海军基地建设", {
    x: 0.75, y: 1.25, w: 4.0, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("= 海权战略基础设施", {
    x: 0.75, y: 1.7, w: 4.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const portItems = [
    "深水港：保障航母舰队停靠",
    "海外军事基地：投射力量",
    "海上咽喉通道控制"
  ];

  portItems.forEach((item, idx) => {
    const y = 2.15 + idx * 0.45;

    slide.addShape("ellipse", {
      x: 0.75, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.primary }
    });

    slide.addText(item, {
      x: 1.0, y: y, w: 3.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right: Railway investment (Land power)
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 0.08, h: 2.4,
    fill: { color: theme.secondary }
  });

  slide.addText("铁路与公路网络建设", {
    x: 5.35, y: 1.25, w: 4.0, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("= 陆权战略基础设施", {
    x: 5.35, y: 1.7, w: 4.0, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const railwayItems = [
    "战略铁路：快速调兵能力",
    "边境公路：装甲部队机动",
    "内陆交通：物资补给线"
  ];

  railwayItems.forEach((item, idx) => {
    const y = 2.15 + idx * 0.45;

    slide.addShape("ellipse", {
      x: 5.35, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.secondary }
    });

    slide.addText(item, {
      x: 5.6, y: y, w: 3.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom section: Investment ratio analysis
  slide.addShape("rect", {
    x: 0.5, y: 3.75, w: 9, h: 1.45,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 0.5, y: 3.75, w: 9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("判断方法：基建投资比例", {
    x: 0.7, y: 3.75, w: 8.6, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Ratio indicators
  const ratios = [
    { ratio: "港口:铁路 > 1:2", interpretation: "陆权偏向", color: theme.secondary },
    { ratio: "港口:铁路 ≈ 1:1", interpretation: "海陆平衡", color: theme.accent },
    { ratio: "港口:铁路 > 2:1", interpretation: "海权偏向", color: theme.primary }
  ];

  ratios.forEach((r, idx) => {
    const x = 0.7 + idx * 3.0;

    slide.addShape("rect", {
      x: x, y: 4.35, w: 2.7, h: 0.35,
      fill: { color: r.color }
    });
    slide.addText(r.ratio, {
      x: x, y: 4.35, w: 2.7, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(r.interpretation, {
      x: x, y: 4.75, w: 2.7, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("35", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-35-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
