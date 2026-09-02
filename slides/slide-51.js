// slide-51.js - 中巴经济走廊战略意义
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 51,
  title: '中巴经济走廊战略意义'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("中巴经济走廊战略意义", {
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
  slide.addText("51", {
    x: 9.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // CPEC subtitle
  slide.addText("China-Pakistan Economic Corridor (CPEC)", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Arial",
    color: theme.secondary, bold: false, italic: true,
    align: "left", valign: "middle"
  });

  // Route visualization
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.08,
    fill: { color: theme.accent }
  });

  const routePoints = [
    { name: "喀什", x: 0.8 },
    { name: "红旗拉甫", x: 2.5 },
    { name: "伊斯兰堡", x: 4.2 },
    { name: "瓜达尔港", x: 8.5 }
  ];

  routePoints.forEach((p, idx) => {
    slide.addShape("ellipse", {
      x: p.x - 0.15, y: 1.42, w: 0.24, h: 0.24,
      fill: { color: idx === 3 ? theme.accent : theme.primary }
    });
    slide.addText(p.name, {
      x: p.x - 0.5, y: 1.7, w: 1.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: idx === 3,
      align: "center", valign: "middle"
    });
  });

  // Investment scale
  slide.addShape("rect", {
    x: 0.5, y: 2.15, w: 9, h: 1.0,
    fill: { color: theme.primary }
  });

  const investments = [
    { value: "$62B+", label: "总投资规模" },
    { value: "15+", label: "大型项目数" },
    { value: "3000km", label: "走廊总长度" }
  ];

  investments.forEach((inv, idx) => {
    const x = 0.5 + idx * 3;
    slide.addText(inv.value, {
      x: x, y: 2.25, w: 3, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(inv.label, {
      x: x, y: 2.75, w: 3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Four pillars
  slide.addText("四大合作领域", {
    x: 0.5, y: 3.35, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const pillars = [
    { title: "能源合作", desc: "电站建设缓解巴能源危机", icon: "⚡" },
    { title: "交通基础设施", desc: "公路、铁路、港口升级", icon: "🚂" },
    { title: "产业园区", desc: "瓜达尔自由区招商引资", icon: "🏭" },
    { title: "瓜达尔港", desc: "物流与贸易枢纽", icon: "⚓" }
  ];

  pillars.forEach((p, idx) => {
    const x = 0.5 + idx * 2.35;

    slide.addShape("rect", {
      x: x, y: 3.85, w: 2.15, h: 1.55,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(p.title, {
      x: x, y: 3.95, w: 2.15, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(p.desc, {
      x: x + 0.1, y: 4.4, w: 1.95, h: 0.9,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
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
  pres.writeFile({ fileName: "slide-51-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
