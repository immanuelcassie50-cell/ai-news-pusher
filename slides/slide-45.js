// slide-45.js - 南海争端：地缘战略价值
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 45,
  title: '南海争端：地缘战略价值'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("南海争端：地缘战略价值", {
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
  slide.addText("45", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left section - Why South China Sea matters
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.3, h: 4.15,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 0.08, h: 4.15,
    fill: { color: theme.accent }
  });

  slide.addText("为何南海至关重要？", {
    x: 0.75, y: 1.3, w: 3.9, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const scsPoints = [
    { title: "全球贸易通道", desc: "每年约1/3全球海上贸易通过南海" },
    { title: "丰富的油气资源", desc: "据估计蕴藏约110亿桶石油" },
    { title: "重要的渔业资源", desc: "全球12%渔获量来自此区域" },
    { title: "战略军事地位", desc: "连接太平洋与印度洋的关键通道" }
  ];

  scsPoints.forEach((point, idx) => {
    const y = 1.85 + idx * 0.82;
    slide.addShape("ellipse", {
      x: 0.75, y: y + 0.08, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });
    slide.addText(point.title, {
      x: 1.05, y: y - 0.05, w: 3.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(point.desc, {
      x: 1.05, y: y + 0.3, w: 3.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Right section - claimants
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 4.15,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 0.08, h: 4.15,
    fill: { color: theme.primary }
  });

  slide.addText("六国七方争夺", {
    x: 5.35, y: 1.3, w: 4.0, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const claimants = [
    { country: "中国", claim: "U形线内岛礁及海域", color: theme.accent },
    { country: "越南", claim: "西沙、南沙部分岛礁", color: theme.secondary },
    { country: "菲律宾", claim: "仁爱礁、黄岩岛等", color: theme.secondary },
    { country: "马来西亚", claim: "南沙海域油气资源", color: theme.light },
    { country: "文莱", claim: "南沙部分海域", color: theme.light },
    { country: "台湾", claim: "太平岛等岛礁", color: theme.primary }
  ];

  claimants.forEach((c, idx) => {
    const y = 1.85 + idx * 0.55;
    slide.addShape("rect", {
      x: 5.35, y: y, w: 0.9, h: 0.4,
      fill: { color: c.color }
    });
    slide.addText(c.country, {
      x: 5.35, y: y, w: 0.9, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(c.claim, {
      x: 6.35, y: y, w: 3.0, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-45-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
