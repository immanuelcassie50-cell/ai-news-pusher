// slide-46.js - 各方立场与战略逻辑
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 46,
  title: '各方立场与战略逻辑'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("各方立场与战略逻辑", {
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
  slide.addText("46", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Three columns layout
  const countries = [
    {
      name: "中国",
      position: "固有权利与历史权益",
      logic: [
        "南海断续线是历史性权利",
        "岛礁建设改善民生需求",
        "维护主权与领土完整"
      ],
      color: theme.accent
    },
    {
      name: "美国",
      position: "航行自由与规则秩序",
      logic: [
        "挑战中国过度的海洋主张",
        "维护亚太联盟体系",
        "确保海上贸易通道畅通"
      ],
      color: theme.primary
    },
    {
      name: "东盟声索国",
      position: "利益平衡与多边框架",
      logic: [
        "不愿选边站队",
        "推动《南海行为准则》",
        "在中美间寻求平衡"
      ],
      color: theme.secondary
    }
  ];

  countries.forEach((country, idx) => {
    const x = 0.5 + idx * 3.1;

    // Card
    slide.addShape("rect", {
      x: x, y: 1.15, w: 2.9, h: 4.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top color bar
    slide.addShape("rect", {
      x: x, y: 1.15, w: 2.9, h: 0.6,
      fill: { color: country.color }
    });

    slide.addText(country.name, {
      x: x, y: 1.15, w: 2.9, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Position label
    slide.addText("立场", {
      x: x + 0.15, y: 1.9, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(country.position, {
      x: x + 0.15, y: 2.15, w: 2.6, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "top"
    });

    // Divider
    slide.addShape("rect", {
      x: x + 0.15, y: 2.7, w: 2.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Logic points
    slide.addText("战略逻辑", {
      x: x + 0.15, y: 2.85, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: true,
      align: "left", valign: "middle"
    });

    country.logic.forEach((point, pIdx) => {
      const py = 3.2 + pIdx * 0.6;
      slide.addShape("ellipse", {
        x: x + 0.2, y: py + 0.08, w: 0.15, h: 0.15,
        fill: { color: country.color }
      });
      slide.addText(point, {
        x: x + 0.45, y: py, w: 2.3, h: 0.55,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
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
  pres.writeFile({ fileName: "slide-46-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
