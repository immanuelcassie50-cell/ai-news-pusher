// slide-27.js - China rise: dual strategic pursuit (中国崛起：双重战略追求)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 27,
  title: '中国崛起：双重战略追求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("中国崛起：双重战略追求", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Central thesis
  slide.addShape("rect", {
    x: 2.5, y: 1.15, w: 5.0, h: 0.55,
    fill: { color: theme.accent }
  });
  slide.addText("陆海兼备型大国：前所未有的战略类型", {
    x: 2.5, y: 1.15, w: 5.0, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Two main cards - Land and Sea
  // Left - Land power heritage
  slide.addShape("rect", {
    x: 0.5, y: 1.9, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.9, w: 0.08, h: 2.8,
    fill: { color: theme.primary }
  });

  slide.addText("陆权传统", {
    x: 0.75, y: 2.0, w: 4.0, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const landPoints = [
    "960万平方公里陆地国土",
    "14个陆上邻国（世界最多）",
    "深厚的农耕文明积累",
    "洲际弹道导弹威慑力"
  ];

  landPoints.forEach((point, idx) => {
    const y = 2.55 + idx * 0.5;

    slide.addShape("rect", {
      x: 0.75, y: y + 0.1, w: 0.12, h: 0.12,
      fill: { color: theme.primary }
    });

    slide.addText(point, {
      x: 1.0, y: y, w: 3.7, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right - Sea power aspiration
  slide.addShape("rect", {
    x: 5.1, y: 1.9, w: 4.4, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.9, w: 0.08, h: 2.8,
    fill: { color: theme.accent }
  });

  slide.addText("海权追求", {
    x: 5.35, y: 2.0, w: 4.0, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const seaPoints = [
    "1.8万公里海岸线",
    "全球最大贸易国（货物贸易）",
    "海军现代化加速推进",
    "海上通道安全依赖"
  ];

  seaPoints.forEach((point, idx) => {
    const y = 2.55 + idx * 0.5;

    slide.addShape("ellipse", {
      x: 5.35, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });

    slide.addText(point, {
      x: 5.6, y: y, w: 3.7, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom - Strategic implications
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9.0, h: 0.55,
    fill: { color: theme.secondary, transparency: 90 },
    line: { color: theme.secondary, width: 1 }
  });

  slide.addText("战略含义：", {
    x: 0.7, y: 4.85, w: 1.2, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("两面受敌：同时面临陆海两个方向的战略压力与机遇", {
    x: 1.85, y: 4.85, w: 7.4, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("27", {
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
  pres.writeFile({ fileName: "slide-27-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
