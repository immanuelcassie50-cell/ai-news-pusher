// slide-47.js - 案例2：中欧班列
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 47,
  title: '案例2：中欧班列'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例2：中欧班列", {
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
  slide.addText("47", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("China-Europe Railway Express", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Arial",
    color: theme.secondary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Route visualization - horizontal timeline
  const cities = [
    { name: "重庆", sub: "团结村" },
    { name: "西安", sub: "新筑" },
    { name: "乌鲁木齐", sub: "阿拉山口" },
    { name: "阿拉木图", sub: "哈萨克斯坦" },
    { name: "莫斯科", sub: "俄罗斯" },
    { name: "华沙", sub: "波兰" },
    { name: "杜伊斯堡", sub: "德国" }
  ];

  // Route line
  slide.addShape("rect", {
    x: 0.8, y: 1.85, w: 8.4, h: 0.04,
    fill: { color: theme.accent }
  });

  cities.forEach((city, idx) => {
    const x = 0.8 + idx * 1.2;

    // Node
    slide.addShape("ellipse", {
      x: x - 0.12, y: 1.77, w: 0.24, h: 0.24,
      fill: { color: theme.primary }
    });

    // City name
    slide.addText(city.name, {
      x: x - 0.5, y: 2.05, w: 1.0, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Sub text
    slide.addText(city.sub, {
      x: x - 0.6, y: 2.35, w: 1.2, h: 0.3,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Statistics cards
  const stats = [
    { value: "13,000+", label: "年开行班列数", unit: "列/年" },
    { value: "99", label: "运行线路", unit: "条" },
    { value: "180", label: "境外到达城市", unit: "座" },
    { value: "22", label: "欧洲国家", unit: "个" }
  ];

  stats.forEach((stat, idx) => {
    const x = 0.5 + idx * 2.35;

    slide.addShape("rect", {
      x: x, y: 2.85, w: 2.15, h: 1.4,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(stat.value, {
      x: x, y: 2.95, w: 2.15, h: 0.6,
      fontSize: 26, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(stat.label, {
      x: x, y: 3.55, w: 2.15, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(stat.unit, {
      x: x, y: 3.85, w: 2.15, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Key advantage box
  slide.addShape("rect", {
    x: 0.5, y: 4.45, w: 9, h: 0.95,
    fill: { color: theme.light, transparency: 60 }
  });

  slide.addText("核心优势", {
    x: 0.7, y: 4.55, w: 1.2, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("海运时间 28-35天 → 铁路运输 12-16天，缩短近 50%；「一带一路」标志性工程，连接亚欧大陆的铁路大动脉", {
    x: 2.0, y: 4.55, w: 7.3, h: 0.75,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-47-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
