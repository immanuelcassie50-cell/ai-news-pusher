// slide-21.js - US global naval base network (美国全球海军基地网络)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 21,
  title: '美国全球海军基地网络'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("美国全球海军基地网络", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Left side - Key stats
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 3.5, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.08, h: 4.0,
    fill: { color: theme.accent }
  });

  slide.addText("核心数据", {
    x: 0.75, y: 1.35, w: 3.0, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const stats = [
    { num: "500+", label: "海外军事基地" },
    { num: "70+", label: "海军基地分布国家" },
    { num: "13", label: "航母战斗群" },
    { num: "40万+", label: "海外驻军人数" }
  ];

  stats.forEach((stat, idx) => {
    const y = 1.9 + idx * 0.75;

    slide.addText(stat.num, {
      x: 0.75, y: y, w: 1.5, h: 0.5,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(stat.label, {
      x: 2.25, y: y, w: 1.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right side - Strategic zones
  slide.addShape("rect", {
    x: 4.3, y: 1.2, w: 5.2, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("三大战略海域", {
    x: 4.5, y: 1.35, w: 4.8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const zones = [
    { name: "太平洋", desc: "横须贺、关岛、夏威夷", color: theme.primary },
    { name: "印度洋", desc: "迪戈加西亚、巴林", color: theme.accent },
    { name: "大西洋", desc: "直布罗陀、诺福克", color: theme.secondary }
  ];

  zones.forEach((zone, idx) => {
    const y = 1.95 + idx * 0.9;

    slide.addShape("rect", {
      x: 4.5, y: y, w: 4.8, h: 0.7,
      fill: { color: zone.color, transparency: 90 }
    });

    slide.addShape("rect", {
      x: 4.5, y: y, w: 0.06, h: 0.7,
      fill: { color: zone.color }
    });

    slide.addText(zone.name, {
      x: 4.7, y: y + 0.05, w: 1.2, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: zone.color, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(zone.desc, {
      x: 4.7, y: y + 0.35, w: 4.4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Key insight box
  slide.addShape("rect", {
    x: 4.5, y: 4.65, w: 4.8, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("「控制咽喉要道，掌控全球贸易命脉」", {
    x: 4.5, y: 4.65, w: 4.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("21", {
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
  pres.writeFile({ fileName: "slide-21-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
