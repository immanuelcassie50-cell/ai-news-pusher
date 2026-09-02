// slide-48.js - 中欧班列：陆权逆袭
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 48,
  title: '中欧班列：陆权逆袭'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("中欧班列：陆权逆袭", {
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
  slide.addText("48", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left - comparison table
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.3, h: 4.15,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addText("运输方式对比", {
    x: 0.7, y: 1.3, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Table header
  slide.addShape("rect", {
    x: 0.7, y: 1.8, w: 3.9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText([
    { text: "指标", options: { bold: true } }
  ], {
    x: 0.7, y: 1.8, w: 1.3, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });
  slide.addText("海运", {
    x: 2.0, y: 1.8, w: 1.1, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("铁路", {
    x: 3.1, y: 1.8, w: 1.5, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const comparisons = [
    { item: "运输时间", sea: "28-35天", rail: "12-16天" },
    { item: "运输成本", sea: "基准", rail: "2-3倍" },
    { item: "适合货物", sea: "大宗低值", rail: "高附加值" },
    { item: "气候影响", sea: "台风季延误", rail: "全年稳定" },
    { item: "地缘风险", sea: "马六甲依赖", rail: "多国协商" }
  ];

  comparisons.forEach((row, idx) => {
    const y = 2.3 + idx * 0.55;
    const bgColor = idx % 2 === 0 ? theme.light : "FFFFFF";

    slide.addShape("rect", {
      x: 0.7, y: y, w: 3.9, h: 0.5,
      fill: { color: bgColor, transparency: idx % 2 === 0 ? 50 : 0 }
    });

    slide.addText(row.item, {
      x: 0.7, y: y, w: 1.3, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
    slide.addText(row.sea, {
      x: 2.0, y: y, w: 1.1, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
    slide.addText(row.rail, {
      x: 3.1, y: y, w: 1.5, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });
  });

  // Right - strategic significance
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 4.15,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 0.08, h: 4.15,
    fill: { color: theme.accent }
  });

  slide.addText("陆权的战略意义", {
    x: 5.35, y: 1.3, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const points = [
    { title: "绕过海上封锁", desc: "减少对马六甲海峡的依赖，降低海运被封锁风险" },
    { title: "内陆国家联通", desc: "激活中亚、西亚、东欧陆路贸易通道" },
    { title: "产业转移支撑", desc: "带动中国内陆城市开放，促进中西 部产业转移" },
    { title: "标准与规则输出", desc: "以铁路为载体，输出中国技术标准和基础设施模式" }
  ];

  points.forEach((point, idx) => {
    const y = 1.85 + idx * 0.85;
    slide.addShape("ellipse", {
      x: 5.35, y: y + 0.05, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });
    slide.addText(point.title, {
      x: 5.65, y: y - 0.05, w: 3.6, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(point.desc, {
      x: 5.65, y: y + 0.3, w: 3.6, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-48-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
