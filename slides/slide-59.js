// slide-59.js - Application in investment decisions (投资决策中的应用)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 59,
  title: '投资决策中的应用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("投资决策中的应用", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("地缘政治评估如何影响一带一路投资项目回报", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Three risk categories
  const riskCategories = [
    {
      title: "政治风险",
      color: theme.accent,
      items: [
        "政府更迭导致合同重审",
        "反华情绪影响项目运营",
        "所在国政策不确定性"
      ],
      case: "案例：缅甸密松水电站因政治反对停工"
    },
    {
      title: "地缘风险",
      color: theme.primary,
      items: [
        "大国博弈导致的制裁",
        "海上通道安全变化",
        "区域冲突影响供应链"
      ],
      case: "案例：马六甲海峡依赖带来的战略脆弱性"
    },
    {
      title: "运营风险",
      color: theme.secondary,
      items: [
        "本地化运营能力不足",
        "文化差异导致沟通成本",
        "合规要求的跨国复杂性"
      ],
      case: "案例：部分中资项目因环保标准差异受阻"
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.5;
  const gap = 0.25;

  riskCategories.forEach((cat, idx) => {
    const x = startX + idx * (cardWidth + gap);

    // Card background
    slide.addShape("rect", {
      x: x, y: 1.55, w: cardWidth, h: 3.35,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Top accent bar
    slide.addShape("rect", {
      x: x, y: 1.55, w: cardWidth, h: 0.12,
      fill: { color: cat.color }
    });

    // Title
    slide.addText(cat.title, {
      x: x + 0.15, y: 1.8, w: cardWidth - 0.3, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: cat.color, bold: true,
      align: "center", valign: "middle"
    });

    // Items
    cat.items.forEach((item, itemIdx) => {
      slide.addShape("ellipse", {
        x: x + 0.2, y: 2.45 + itemIdx * 0.55, w: 0.15, h: 0.15,
        fill: { color: cat.color }
      });
      slide.addText(item, {
        x: x + 0.45, y: 2.35 + itemIdx * 0.55, w: cardWidth - 0.6, h: 0.5,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });

    // Case box
    slide.addShape("rect", {
      x: x + 0.1, y: 4.15, w: cardWidth - 0.2, h: 0.65,
      fill: { color: theme.light, transparency: 50 }
    });
    slide.addText(cat.case, {
      x: x + 0.2, y: 4.2, w: cardWidth - 0.4, h: 0.55,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom recommendation
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText('投资建议：建立"地缘政治影响评估"流程，在项目尽调中纳入战略风险分析', {
    x: 0.7, y: 5.05, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("59", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
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
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
