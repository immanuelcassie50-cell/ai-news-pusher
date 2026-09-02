// slide-82.js - 关键人物地图
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 82,
  title: '关键人物地图'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("关键人物地图", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // People grid (2x3)
  const people = [
    { name: "斯密", years: "1723-1790", title: "现代经济学之父" },
    { name: "门格尔", years: "1840-1921", title: "奥地利学派创始人" },
    { name: "哈耶克", years: "1899-1992", title: "自发秩序理论" },
    { name: "弗里德曼", years: "1912-2006", title: "货币主义" },
    { name: "科斯", years: "1910-2013", title: "产权理论" },
    { name: "布坎南", years: "1919-2013", title: "公共选择" }
  ];

  const cardWidth = 2.9;
  const cardHeight = 1.5;
  const startX = 0.5;
  const startY = 1.15;
  const gapX = 0.25;
  const gapY = 0.2;

  people.forEach((person, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card background
    slide.addShape("rect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape("rect", {
      x: x, y: y, w: 0.06, h: cardHeight,
      fill: { color: theme.accent }
    });

    // Icon circle
    slide.addShape("ellipse", {
      x: x + 0.25, y: y + 0.35, w: 0.8, h: 0.8,
      fill: { color: theme.primary, transparency: 85 }
    });
    slide.addText(person.name.charAt(0), {
      x: x + 0.25, y: y + 0.35, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Name
    slide.addText(person.name, {
      x: x + 1.15, y: y + 0.25, w: 1.6, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Years
    slide.addText(person.years, {
      x: x + 1.15, y: y + 0.65, w: 1.6, h: 0.3,
      fontSize: 11, fontFace: "Calibri",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(person.title, {
      x: x + 0.25, y: y + 1.1, w: 2.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("82", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
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
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-82-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
