// slide-40.js - Four-dimensional evaluation matrix
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 40,
  title: '四维评估矩阵'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("四维评估矩阵", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Matrix title
  slide.addShape("roundRect", {
    x: 3.5, y: 1.05, w: 3, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("海权 vs 陆权判断框架", {
    x: 3.5, y: 1.05, w: 3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Four quadrant matrix
  const matrixData = [
    { x: 0.5, y: 1.65, indicator: "指标一", title: "军费结构", sea: "海军占比>40%", land: "陆军占比>60%", color: theme.primary },
    { x: 5.1, y: 1.65, indicator: "指标二", title: "基建投向", sea: "港口:铁路>2:1", land: "港口:铁路<1:2", color: theme.secondary },
    { x: 0.5, y: 3.15, indicator: "指标三", title: "外交重心", sea: "海洋联盟+印太", land: "陆陆联盟+欧亚", color: theme.accent },
    { x: 5.1, y: 3.15, indicator: "指标四", title: "军事部署", sea: "海外:边境>3:1", land: "海外:边境<1:3", color: theme.primary }
  ];

  matrixData.forEach((cell, idx) => {
    // Cell background
    slide.addShape("rect", {
      x: cell.x, y: cell.y, w: 4.4, h: 1.3,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Indicator badge
    slide.addShape("roundRect", {
      x: cell.x + 0.15, y: cell.y + 0.1, w: 0.9, h: 0.35,
      fill: { color: cell.color },
      rectRadius: 0.05
    });
    slide.addText(cell.indicator, {
      x: cell.x + 0.15, y: cell.y + 0.1, w: 0.9, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(cell.title, {
      x: cell.x + 1.15, y: cell.y + 0.1, w: 3.0, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Sea power indicator
    slide.addShape("rect", {
      x: cell.x + 0.15, y: cell.y + 0.55, w: 1.9, h: 0.3,
      fill: { color: theme.primary }
    });
    slide.addText("海权", {
      x: cell.x + 0.15, y: cell.y + 0.55, w: 1.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(cell.sea, {
      x: cell.x + 0.15, y: cell.y + 0.9, w: 4.1, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Land power indicator
    slide.addShape("rect", {
      x: cell.x + 2.2, y: cell.y + 0.55, w: 1.9, h: 0.3,
      fill: { color: theme.secondary }
    });
    slide.addText("陆权", {
      x: cell.x + 2.2, y: cell.y + 0.55, w: 1.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(cell.land, {
      x: cell.x + 2.2, y: cell.y + 0.9, w: 2.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom: Summary
  slide.addShape("rect", {
    x: 0.5, y: 4.6, w: 9, h: 0.6,
    fill: { color: theme.accent, transparency: 88 }
  });
  slide.addText("综合四维指标打分：3:1以上 → 强海权 | 1:1 → 平衡型 | 1:3以下 → 强陆权", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("40", {
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
  pres.writeFile({ fileName: "slide-40-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
