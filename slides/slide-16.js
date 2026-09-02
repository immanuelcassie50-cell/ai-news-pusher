// slide-16.js - 英德大海战
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '英德大海战'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("历史验证：英德海军竞赛", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Timeline header
  slide.addText("1900-1918", {
    x: 0.5, y: 1.1, w: 2, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Timeline line
  slide.addShape("rect", {
    x: 0.5, y: 1.6, w: 9, h: 0.04,
    fill: { color: theme.secondary }
  });

  // Timeline events
  const events = [
    { year: "1900", title: "德国造舰计划", desc: "威廉二世推行\"世界政策\"，大规模扩充海军" },
    { year: "1906", title: "无畏舰下水", desc: "英国\"无畏号\"服役，海军技术代差出现" },
    { year: "1912", title: "海军协定谈判", desc: "英德谈判破裂，英德海军军备竞赛加速" },
    { year: "1914", title: "日德兰海战", desc: "1916年最大规模海战，英国以少胜多保持封锁" }
  ];

  events.forEach((e, i) => {
    const x = 0.7 + i * 2.3;

    // Circle marker
    slide.addShape("ellipse", {
      x: x + 0.7, y: 1.48, w: 0.28, h: 0.28,
      fill: { color: theme.accent }
    });

    // Year
    slide.addText(e.year, {
      x: x, y: 1.78, w: 2, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Event card
    slide.addShape("rect", {
      x: x, y: 2.15, w: 2.1, h: 1.5,
      fill: { color: theme.light }
    });

    slide.addText(e.title, {
      x: x + 0.1, y: 2.25, w: 1.9, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(e.desc, {
      x: x + 0.1, y: 2.65, w: 1.9, h: 0.9,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top"
    });
  });

  // Key outcome box
  slide.addShape("rect", {
    x: 0.5, y: 3.9, w: 9, h: 1.1,
    fill: { color: theme.primary }
  });

  slide.addText("战略结果", {
    x: 0.7, y: 4.0, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText([
    { text: "• 德国海军竞赛战略失败：资源分散，财政负担沉重", options: { breakLine: true } },
    { text: "• 英国维持海上霸权：通过工业优势和海军基地网络保持控制", options: { breakLine: true } },
    { text: "• 验证海权论：拥有制海权的一方能有效封锁敌国并保持贸易通道" }
  ], {
    x: 0.7, y: 4.35, w: 8.5, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "top"
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
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
