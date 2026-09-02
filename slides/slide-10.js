// slide-10.js - Key Sea Power Element: 海军基地
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 10,
  title: '关键海权要素：海军基地'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("关键海权要素：海军基地", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Definition
  slide.addText("海军基地（Naval Base）：保障海军作战、舰船维修、物资补给的核心设施，是海权力量投送的关键支撑点。", {
    x: 0.5, y: 1.05, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Three functions - horizontal layout
  const functions = [
    { title: "作战支撑", desc: "舰艇停泊、维修\n武器弹药储存\n作战指挥中心", icon: "01" },
    { title: "后勤补给", desc: "燃料、淡水、食物\n零部件供应\n人员休整", icon: "02" },
    { title: "力量投射", desc: "前沿部署\n快速反应\n区域威慑", icon: "03" }
  ];

  const funcW = 2.9, funcH = 1.4, startX = 0.5, startY = 1.6, gapX = 0.25;

  functions.forEach((func, idx) => {
    const x = startX + idx * (funcW + gapX);

    // Function card
    slide.addShape("roundRect", {
      x: x, y: startY, w: funcW, h: funcH,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // Icon number
    slide.addShape("ellipse", {
      x: x + 0.15, y: startY + 0.15, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(func.icon, {
      x: x + 0.15, y: startY + 0.15, w: 0.6, h: 0.6,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(func.title, {
      x: x + 0.85, y: startY + 0.2, w: 1.9, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(func.desc, {
      x: x + 0.15, y: startY + 0.8, w: 2.6, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom section - Key naval bases worldwide
  slide.addText("全球关键海军基地", {
    x: 0.5, y: 3.2, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Countries and bases
  const bases = [
    { country: "美国", locations: "诺福克、横须贺、珍珠港、迪戈加西亚", flag: "US" },
    { country: "中国", locations: "三亚、青岛、上海、宁波", flag: "CN" },
    { country: "英国", locations: "朴茨茅斯、克莱德", flag: "UK" },
    { country: "印度", locations: "孟买、维沙卡帕特南、卡尔瓦尔", flag: "IN" }
  ];

  const baseStartY = 3.7;
  const baseRowH = 0.45;

  bases.forEach((base, idx) => {
    const y = baseStartY + idx * baseRowH;
    const col = idx % 2;
    const x = col === 0 ? 0.5 : 5;

    // Country label
    slide.addShape("roundRect", {
      x: x, y: y, w: 0.8, h: 0.35,
      fill: { color: theme.primary },
      rectRadius: 0.05
    });
    slide.addText(base.flag, {
      x: x, y: y, w: 0.8, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Country name
    slide.addText(base.country, {
      x: x + 0.9, y: y, w: 1, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Locations
    slide.addText(base.locations, {
      x: x + 1.9, y: y, w: 2.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom quote
  slide.addShape("roundRect", {
    x: 0.5, y: 5.1, w: 8.5, h: 0.45,
    fill: { color: theme.primary },
    rectRadius: 0.06
  });
  slide.addText("\"海外基地的分布决定了海军的全球到达能力\"", {
    x: 0.7, y: 5.15, w: 8.1, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false, italic: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
  pres.writeFile({ fileName: "D:/CC/slides/slide-10-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
