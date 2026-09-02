// slide-50.js - 案例3：瓜达尔港
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 50,
  title: '案例3：瓜达尔港'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例3：瓜达尔港", {
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
  slide.addText("50", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Subtitle
  slide.addText("Gwadar Port — 印度洋上的战略支点", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Arial",
    color: theme.secondary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Left - Map placeholder with key locations
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 4.5, h: 3.8,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.secondary, width: 0.5, dashType: "dash" }
  });

  // Map labels
  slide.addText("印度洋", {
    x: 1.5, y: 1.7, w: 2.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Gwadar marker
  slide.addShape("ellipse", {
    x: 1.2, y: 2.5, w: 0.3, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("瓜达尔", {
    x: 1.55, y: 2.5, w: 1.0, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Karachi marker
  slide.addShape("ellipse", {
    x: 2.8, y: 3.0, w: 0.25, h: 0.25,
    fill: { color: theme.secondary }
  });
  slide.addText("卡拉奇", {
    x: 3.1, y: 3.0, w: 1.0, h: 0.25,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Strait of Hormuz
  slide.addText("霍尔木兹海峡", {
    x: 0.8, y: 2.0, w: 1.5, h: 0.25,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Route line
  slide.addShape(pres.shapes.LINE, {
    x: 1.35, y: 2.65, w: 1.5, h: 0.4,
    line: { color: theme.accent, width: 1.5, dashType: "dash" }
  });

  // China arrow
  slide.addText("← 中国新疆", {
    x: 0.5, y: 4.8, w: 1.5, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Right - Key facts
  slide.addShape("rect", {
    x: 5.2, y: 1.5, w: 4.3, h: 1.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addText("基本情况", {
    x: 5.4, y: 1.6, w: 3.9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const facts = [
    "位于巴基斯坦俾路支省瓜达尔镇",
    "2013年中企接手运营，2016年开港",
    "距离霍尔木兹海峡约400公里",
    "规划年吞吐量4亿吨"
  ];

  facts.forEach((fact, idx) => {
    slide.addShape("ellipse", {
      x: 5.4, y: 2.05 + idx * 0.28, w: 0.1, h: 0.1,
      fill: { color: theme.accent }
    });
    slide.addText(fact, {
      x: 5.6, y: 1.95 + idx * 0.28, w: 3.7, h: 0.28,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Strategic value
  slide.addShape("rect", {
    x: 5.2, y: 3.35, w: 4.3, h: 1.95,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
  });
  slide.addShape("rect", {
    x: 5.2, y: 3.35, w: 0.08, h: 1.95,
    fill: { color: theme.accent }
  });

  slide.addText("战略价值", {
    x: 5.45, y: 3.45, w: 3.9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const values = [
    "绕过马六甲，缩短石油运输距离",
    "进入印度洋的天然门户",
    "促进中巴经济走廊整体发展",
    "监控印度海军活动"
  ];

  values.forEach((v, idx) => {
    slide.addShape("ellipse", {
      x: 5.45, y: 3.9 + idx * 0.38, w: 0.15, h: 0.15,
      fill: { color: theme.accent }
    });
    slide.addText(v, {
      x: 5.7, y: 3.82 + idx * 0.38, w: 3.6, h: 0.38,
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
  pres.writeFile({ fileName: "slide-50-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
