// slide-49.js - 沿线国家反应
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 49,
  title: '沿线国家反应'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("沿线国家反应", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("49", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Reaction matrix - 2x2 grid
  const reactions = [
    {
      type: "积极合作型",
      countries: ["哈萨克斯坦", "白俄罗斯", "波兰"],
      response: "基础设施投资、铁路升级、物流合作",
      sentiment: "正面",
      color: theme.primary
    },
    {
      type: "战略借力型",
      countries: ["俄罗斯", "土耳其"],
      response: "地缘政治筹码，平衡欧美关系",
      sentiment: "审慎",
      color: theme.secondary
    },
    {
      type: "疑虑担忧型",
      countries: ["部分欧盟国家"],
      response: "担忧中国影响力，要求公平竞争",
      sentiment: "复杂",
      color: theme.accent
    },
    {
      type: "观望评估型",
      countries: ["沿线其他国家"],
      response: "评估利弊，适时调整政策",
      sentiment: "中性",
      color: theme.light
    }
  ];

  reactions.forEach((r, idx) => {
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    const x = 0.5 + col * 4.65;
    const y = 1.15 + row * 2.15;

    // Card
    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.95,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Type label
    slide.addShape("rect", {
      x: x, y: y, w: 1.8, h: 0.4,
      fill: { color: r.color }
    });
    slide.addText(r.type, {
      x: x, y: y, w: 1.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Sentiment badge
    slide.addShape("roundRect", {
      x: x + 3.7, y: y + 0.08, w: 0.55, h: 0.28,
      fill: { color: r.color, transparency: 70 },
      rectRadius: 0.05
    });
    slide.addText(r.sentiment, {
      x: x + 3.7, y: y + 0.08, w: 0.55, h: 0.28,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: r.color, bold: false,
      align: "center", valign: "middle"
    });

    // Countries
    slide.addText(r.countries.join("、"), {
      x: x + 0.15, y: y + 0.55, w: 4.1, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Response
    slide.addText(r.response, {
      x: x + 0.15, y: y + 1.0, w: 4.1, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
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
  pres.writeFile({ fileName: "slide-49-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
