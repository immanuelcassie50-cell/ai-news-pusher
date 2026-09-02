// slide-91.js - 案例：欧盟在领土争端中的角色
const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // EU stars decoration (top right)
  for (let i = 0; i < 5; i++) {
    slide.addShape(pres.shapes.OVAL, {
      x: 8.5 + (i % 3) * 0.4, y: 0.2 + Math.floor(i / 3) * 0.35, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });
  }

  // Title
  slide.addText("案例：欧盟在领土争端中的角色", {
    x: 0.5, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("EU Mediation Mechanisms", {
    x: 0.5, y: 0.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.light, margin: 0
  });

  // Main content - three cards
  const cards = [
    {
      title: "外交工具",
      items: ["斡旋与调解", "共同外交政策", "制裁与激励"]
    },
    {
      title: "法律机制",
      items: ["欧洲法院管辖", "条约义务约束", "人权框架审查"]
    },
    {
      title: "案例实践",
      items: ["希腊土耳其争端", "西班牙直布罗陀", "罗马尼亚摩尔多瓦"]
    }
  ];

  cards.forEach((card, i) => {
    const x = 0.4 + i * 3.15;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 3.0, h: 3.8,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 0.5 }
    });

    // Card top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: 3.0, h: 0.08,
      fill: { color: theme.accent }
    });

    // Card icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 1.15, y: 1.5, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });

    // Icon number
    slide.addText(String(i + 1), {
      x: x + 1.15, y: 1.55, w: 0.7, h: 0.6,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Card title
    slide.addText(card.title, {
      x: x + 0.15, y: 2.35, w: 2.7, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Card items
    card.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.25, y: 2.95 + j * 0.55, w: 2.5, h: 0.45,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.primary
      });
    });
  });

  // Bottom note
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.15, w: 9.2, h: 0.35,
    fill: { color: theme.secondary, transparency: 15 }
  });
  slide.addText("欧盟通过"规范性力量"影响领土争端解决，强调规则导向与多边主义", {
    x: 0.5, y: 5.18, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("91", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "c9ada7",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: './slide-91-preview.pptx' });
}

module.exports = { createSlide };
