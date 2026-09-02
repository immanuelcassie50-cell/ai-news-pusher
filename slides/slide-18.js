// slide-18.js - 模块一总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 18,
  title: '模块一总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("模块一总结：海权与陆权的基础理论", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("18", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 2x2 Grid of summary cards
  const cards = [
    {
      title: "海权论（马汉）",
      points: ["海上力量决定国家命运", "控制关键海道和基地", "海军是外交武力的核心"],
      x: 0.5, y: 1.15
    },
    {
      title: "陆权论（麦金德）",
      points: ["心脏地带是战略核心", "铁路时代陆权重获优势", "欧亚大陆整合改变格局"],
      x: 5.0, y: 1.15
    },
    {
      title: "边缘地带论（斯皮克曼）",
      points: ["沿海地区才是争夺焦点", "两岸国家可制衡陆权", "美国应参与边缘联盟"],
      x: 0.5, y: 3.15
    },
    {
      title: "历史验证",
      points: ["英德海军竞赛：海权胜", "二战封锁：盟军海权关键", "印证海权论的核心观点"],
      x: 5.0, y: 3.15
    }
  ];

  cards.forEach((card) => {
    // Card background
    slide.addShape("rect", {
      x: card.x, y: card.y, w: 4.5, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Card accent bar
    slide.addShape("rect", {
      x: card.x, y: card.y, w: 0.08, h: 1.8,
      fill: { color: theme.accent }
    });

    // Card title
    slide.addText(card.title, {
      x: card.x + 0.2, y: card.y + 0.1, w: 4.1, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Card points
    slide.addText(
      card.points.map((p, i) => ({
        text: "• " + p,
        options: { breakLine: i < card.points.length - 1 }
      })),
      {
        x: card.x + 0.2, y: card.y + 0.55, w: 4.1, h: 1.15,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary,
        align: "left", valign: "top"
      }
    );
  });

  // Key takeaway
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("核心启示：理解两大地缘范式的博弈，是分析现代国际战略的基础", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-18-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
