// slide-39.js - Indicator 4: Military deployment analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: '指标四：军事部署分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("指标四：军事部署分析", {
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
  slide.addText("指标4", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Three deployment types
  const deployments = [
    {
      title: "海外基地分布",
      color: theme.primary,
      items: [
        "海权国家：全球700+海外基地",
        "主要基地：冲绳、关岛、迪戈加西亚",
        "战略目标：海上通道控制"
      ]
    },
    {
      title: "边境军事力量",
      color: theme.secondary,
      items: [
        "陆权国家：重兵部署边境地区",
        "典型：俄中边境、朝韩边境",
        "战略目标：领土防御"
      ]
    },
    {
      title: "海军舰队配置",
      color: theme.accent,
      items: [
        "航母战斗群：力量投射核心",
        "潜艇部队：海上封锁主力",
        "两栖攻击舰：力量投送"
      ]
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const gap = 0.35;

  deployments.forEach((dep, idx) => {
    const x = startX + idx * (cardWidth + gap);
    const y = 1.15;
    const cardHeight = 2.6;

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top bar
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: 0.5,
      fill: { color: dep.color }
    });

    slide.addText(dep.title, {
      x: x, y: y, w: cardWidth, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Items
    dep.items.forEach((item, iIdx) => {
      const itemY = y + 0.65 + iIdx * 0.6;

      slide.addShape("ellipse", {
        x: x + 0.15, y: itemY + 0.08, w: 0.15, h: 0.15,
        fill: { color: dep.color }
      });

      slide.addText(item, {
        x: x + 0.4, y: itemY, w: cardWidth - 0.55, h: 0.55,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  // Bottom: Deployment ratio framework
  slide.addShape("rect", {
    x: 0.5, y: 3.95, w: 9, h: 1.15,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 0.5, y: 3.95, w: 9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("判断框架：海外基地 vs 边境部署比例", {
    x: 0.7, y: 3.95, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Ratio indicators
  const ratios = [
    { ratio: "海外:边境 > 3:1", type: "强海权", color: theme.primary },
    { ratio: "海外:边境 ≈ 1:1", type: "平衡型", color: theme.accent },
    { ratio: "海外:边境 < 1:3", type: "强陆权", color: theme.secondary }
  ];

  ratios.forEach((r, idx) => {
    const x = 0.7 + idx * 3.0;

    slide.addShape("rect", {
      x: x, y: 4.5, w: 2.7, h: 0.3,
      fill: { color: r.color }
    });
    slide.addText(r.ratio, {
      x: x, y: 4.5, w: 2.7, h: 0.3,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(r.type, {
      x: x, y: 4.85, w: 2.7, h: 0.25,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("39", {
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
  pres.writeFile({ fileName: "slide-39-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
