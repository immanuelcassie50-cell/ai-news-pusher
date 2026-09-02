// slide-42.js - Module 3 summary
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 42,
  title: '模块三总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("模块三总结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Module label
  slide.addShape("roundRect", {
    x: 8.3, y: 0.2, w: 1.4, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("模块总结", {
    x: 8.3, y: 0.2, w: 1.4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Key points summary
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 3.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("核心要点回顾", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.55,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  const summaryPoints = [
    { num: "01", title: "四维判断指标", desc: "军费结构、基建投向、外交重心、军事部署" },
    { num: "02", title: "海权特征", desc: "海军主导、港口优先、海洋联盟、海外基地" },
    { num: "03", title: "陆权特征", desc: "陆军主导、铁路优先、陆陆联盟、边境防御" },
    { num: "04", title: "混合型国家", desc: "如中俄：既有陆权传统，又在发展海权能力" }
  ];

  summaryPoints.forEach((point, idx) => {
    const y = 1.8 + idx * 0.7;

    // Number
    slide.addShape("rect", {
      x: 0.7, y: y, w: 0.6, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(point.num, {
      x: 0.7, y: y, w: 0.6, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(point.title, {
      x: 1.45, y: y, w: 2.2, h: 0.55,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(point.desc, {
      x: 3.7, y: y, w: 5.5, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Key insight
  slide.addShape("rect", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.02,
    fill: { color: theme.light }
  });

  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fill: { color: theme.accent, transparency: 88 }
  });
  slide.addText("关键结论：国家战略取向决定其对世界秩序的看法和行为模式", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.65,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("42", {
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
  pres.writeFile({ fileName: "slide-42-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
