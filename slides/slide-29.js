// slide-29.js - From "near-sea defense" to "blue-water navy" (从近海防御到蓝水海军)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 29,
  title: '从近海防御到蓝水海军'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("从近海防御到蓝水海军", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Transformation arrow diagram
  // Left box - Near sea defense
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 3.5, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 3.5, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("近海防御 (Coastal)", {
    x: 0.5, y: 1.2, w: 3.5, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const coastalFeatures = [
    "作战半径：300海里以内",
    "主要对手：台海、东海方向",
    "核心任务：领土主权防卫"
  ];

  coastalFeatures.forEach((feat, idx) => {
    slide.addText("•  " + feat, {
      x: 0.65, y: 1.9 + idx * 0.4, w: 3.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Arrow
  slide.addShape("rect", {
    x: 4.2, y: 2.05, w: 1.6, h: 0.08,
    fill: { color: theme.accent }
  });
  slide.addText("战略转型", {
    x: 4.2, y: 1.7, w: 1.6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Right box - Blue water
  slide.addShape("rect", {
    x: 6.0, y: 1.2, w: 3.5, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 6.0, y: 1.2, w: 3.5, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("蓝水海军 (Blue-water)", {
    x: 6.0, y: 1.2, w: 3.5, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const blueWaterFeatures = [
    "作战半径：全球投射",
    "核心利益：海上通道安全",
    "战略目标：维护海外利益"
  ];

  blueWaterFeatures.forEach((feat, idx) => {
    slide.addText("•  " + feat, {
      x: 6.15, y: 1.9 + idx * 0.4, w: 3.2, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Key drivers section
  slide.addShape("rect", {
    x: 0.5, y: 3.4, w: 9.0, h: 1.55,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("转型的核心驱动力", {
    x: 0.7, y: 3.5, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const drivers = [
    { title: "经济利益", desc: "一带一路海外资产保护" },
    { title: "能源安全", desc: "石油进口80%依赖海运" },
    { title: "贸易通道", desc: "马六甲海峡、苏伊士运河依赖" },
    { title: "大国地位", desc: "蓝水能力是强国标配" }
  ];

  const driverWidth = 2.1;
  const driverStartX = 0.65;

  drivers.forEach((driver, idx) => {
    const x = driverStartX + idx * (driverWidth + 0.15);
    const y = 3.95;

    slide.addShape("rect", {
      x: x, y: y, w: driverWidth, h: 0.85,
      fill: { color: theme.primary, transparency: 94 }
    });

    slide.addText(driver.title, {
      x: x, y: y + 0.05, w: driverWidth, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(driver.desc, {
      x: x, y: y + 0.4, w: driverWidth, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("29", {
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
  pres.writeFile({ fileName: "slide-29-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
