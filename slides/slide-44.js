// slide-44.js - Case 1: South China Sea dispute
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'case',
  index: 44,
  title: '案例一：南海争端'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例一：南海争端", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Case label
  slide.addShape("roundRect", {
    x: 8.3, y: 0.2, w: 1.4, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("案例分析", {
    x: 8.3, y: 0.2, w: 1.4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left: Background
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 4.4, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("争端背景", {
    x: 0.5, y: 1.1, w: 4.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const background = [
    "南海：全球30%贸易通道",
    "中国、越南、菲律宾等六国主张重叠",
    "2016年海牙仲裁庭裁决",
    "美军\"航行自由行动\""
  ];

  background.forEach((item, idx) => {
    const y = 1.7 + idx * 0.42;

    slide.addShape("ellipse", {
      x: 0.65, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });

    slide.addText(item, {
      x: 0.9, y: y, w: 3.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right: Strategic analysis
  slide.addShape("rect", {
    x: 5.1, y: 1.1, w: 4.4, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.1, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("战略分析", {
    x: 5.1, y: 1.1, w: 4.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const analysis = [
    "中国：南海岛礁建设，海权扩张",
    "美国：维护海上霸权，航行自由",
    "其他国家：声索主权，经济利益"
  ];

  analysis.forEach((item, idx) => {
    const y = 1.7 + idx * 0.55;

    slide.addShape("ellipse", {
      x: 5.25, y: y + 0.08, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });

    slide.addText(item, {
      x: 5.5, y: y, w: 3.8, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom: Framework application
  slide.addShape("rect", {
    x: 0.5, y: 3.55, w: 9, h: 1.55,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 0.5, y: 3.55, w: 9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("框架应用：四维指标分析", {
    x: 0.7, y: 3.55, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Four indicators applied
  const indicators = [
    { ind: "军费", analysis: "海军现代化加速" },
    { ind: "基建", analysis: "南海岛礁建设" },
    { ind: "外交", analysis: "反对外部干涉" },
    { ind: "部署", analysis: "南海舰队强化" }
  ];

  indicators.forEach((item, idx) => {
    const x = 0.7 + idx * 2.25;

    slide.addShape("roundRect", {
      x: x, y: 4.1, w: 2.0, h: 0.85,
      fill: { color: "FFFFFF" },
      rectRadius: 0.05
    });

    slide.addText(item.ind, {
      x: x, y: 4.15, w: 2.0, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(item.analysis, {
      x: x, y: 4.45, w: 2.0, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Conclusion
  slide.addShape("rect", {
    x: 0.5, y: 5.2, w: 9, h: 0.4,
    fill: { color: theme.accent, transparency: 88 }
  });
  slide.addText("结论：南海争端是海权与陆权范式碰撞的典型战场", {
    x: 0.7, y: 5.2, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("44", {
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
  pres.writeFile({ fileName: "slide-44-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
