// slide-38.js - Alliance system vs land borders
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: '联盟体系 vs 陆陆接壤'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("联盟体系 vs 陆陆接壤", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Two column comparison
  // Left: Alliance system (Sea power)
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("海洋联盟体系", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const seaAlliance = [
    { name: "北约 (NATO)", desc: "北大西洋海上安全" },
    { name: "四方安全对话 (QUAD)", desc: "印太海上合作" },
    { name: "五眼联盟", desc: "情报共享机制" },
    { name: "AUKUS", desc: "英美澳潜艇合作" }
  ];

  seaAlliance.forEach((item, idx) => {
    const y = 1.85 + idx * 0.6;

    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.primary }
    });

    slide.addText(item.name, {
      x: 1.0, y: y, w: 2.0, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(item.desc, {
      x: 1.0, y: y + 0.3, w: 3.7, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right: Land borders (Land power)
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 3.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.55,
    fill: { color: theme.secondary }
  });
  slide.addText("陆权联盟与合作", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const landAlliance = [
    { name: "集安组织 (CSTO)", desc: "俄白哈吉塔安全" },
    { name: "上合组织 (SCO)", desc: "中俄主导欧亚合作" },
    { name: "欧亚经济联盟", desc: "俄哈白吉亚经济" },
    { name: "中亚区域合作", desc: "内陆国家协调" }
  ];

  landAlliance.forEach((item, idx) => {
    const y = 1.85 + idx * 0.6;

    slide.addShape("ellipse", {
      x: 5.3, y: y + 0.08, w: 0.18, h: 0.18,
      fill: { color: theme.secondary }
    });

    slide.addText(item.name, {
      x: 5.6, y: y, w: 2.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(item.desc, {
      x: 5.6, y: y + 0.3, w: 3.7, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom comparison bar
  slide.addShape("rect", {
    x: 0.5, y: 4.55, w: 9, h: 0.7,
    fill: { color: theme.light }
  });

  slide.addText("判断标准：国家是否与海洋通道国家结盟 vs 与陆陆邻国结盟", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("38", {
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
  pres.writeFile({ fileName: "slide-38-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
